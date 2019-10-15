import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { MatSelectChange } from '@angular/material/select';
import { timeout } from 'q';
@Component({
  selector: 'app-greg-card',
  templateUrl: './greg-card.component.html',
  styleUrls: ['./greg-card.component.css']
})
export class GregCardComponent implements OnInit {

  constructor() { }

  funcs = [
    {
      name: 'cool wave',
      fnSurface: (x: number, y: number, t: number): number => {
        let dist = Math.pow((x * x + y * y), .5);
        return dist * Math.sin(dist / 2 + 3 * t) * Math.cos(x / 2 + 3 * t) * Math.sin(y / 2);
      },
      fnViewer: (t: number): number[] => ([
        20 * Math.cos(2 * t),
        20 * Math.sin(2 * t),
        30 * Math.sin(t)
      ]),
      fnTarget: (t: number): number[] => ([
        0,
        0,
        0
      ])
    },

    {
      name: 'basic',
      fnSurface: (x: number, y: number, t: number): number => {
        return x + y;
      },
      fnViewer: (t: number): number[] => ([
        5,
        5,
        5
      ]),
      fnTarget: (t: number): number[] => ([
        0,
        0,
        0
      ])
    },

    {
      name: 'black hole',
      fnSurface: (x: number, y: number, t: number): number => {
        return -200 / (1 + Math.sqrt((x * x + y * y) * 15));
      },
      fnViewer: (t: number): number[] => ([
        -10 + 3 * t,
        -20 + 4 * t,
        -3 + t
      ]),
      fnTarget: (t: number): number[] => ([
        0,
        0,
        -10
      ])
    }

  ];


  selFunc = this.funcs[0];   // init/default


  // background grayscale color
  slideBKGLum = 30;
  slideBKGColor = 'hsl(0, 0%, ' + this.slideBKGLum + '%)';

  onBKGColorChange(event: MatSliderChange) {

    // this should not be necessary - because slideBKGLum is already
    // bound to the slider - but without this, the bkg color
    // only updates after slider mouseup.  This line allows us
    // to instantaneously/continuously update the bkg color
    // as the slider is moved.  
    this.slideBKGLum = event.value;

    // this, I have to do - because we need to recalc the actual
    // hsl color (which is a composed string) from the numeric
    // "L" value which the slider is giving us.
    this.slideBKGColor = 'hsl(0, 0%, ' + this.slideBKGLum + '%)';
  }


  onFunctionChange(event: MatSelectChange) {
    this.render();
  }

  // background color slider
  slideHSLHue = 209;
  drawColor = 'hsl(' + this.slideHSLHue + ', 100%, 50%)';
  onHSLColorChange(event: MatSliderChange) {
    // we'll need +1 - see expl above
    this.slideHSLHue = event.value;
    this.drawColor = 'hsl(' + this.slideHSLHue + ', 100%, 50%)';
    this.render();
  }

  // slider - time value (0 to 2*pi)
  slideTime = 4.95;
  onTimeChange(event: MatSliderChange) {
    // we'll need +1 - see expl above
    this.slideTime = event.value;
    this.render();
  }

  // slider - zoom factor
  slideZoom = 26;
  // map 0-100 zoom slider scale --> 10E-01 to 10E+02
  zoomValue = (10 ** (this.slideZoom / 33 - 1));
  onZoomChange(event: MatSliderChange) {
    // we'll need +1 - see expl above
    this.slideZoom = event.value;
    this.zoomValue = (10 ** (this.slideZoom / 33 - 1));
    this.render();
  }


  ngOnInit() {
    this.render();  // do an initial render
  }

  /**
   *   render the graph given the current function, color, zoom, and time values
   */
  render() {


    /**
     *    3D perspective calculator
     *    given viewer point pv[x,y,z]
     *    and   target point pt[x,y,z],
     *    calculate where a given point in space 
     *    should be rendered on the screen.
     *    hard-won formulae... vector math + algebra
     */
    let perspective = ( () => {

      var
        pv: number[] = [3, 4, 5],
        pt: number[] = [0, 0, 0],
        limTAN: number = .364,   // empirical/(bogus?)  ratio of pic plane half-width to v-t dist
        a, b, c, D, R,

        updateVars = () => {
          a = pv[0] - pt[0];   // x diff
          b = pv[1] - pt[1];   // y diff
          c = pv[2] - pt[2];   // z diff
          D = Math.sqrt(a * a + b * b);   // dist in x-y plane
          R = Math.sqrt(D * D + c * c);   // dist in 3-D space
        };

      updateVars();

      return {

        getXYPageCoords: (point: number[], zoom: number): number[] => {  // return [x,y] page coords for given point

          let i = pv[0] - point[0],
            j = pv[1] - point[1],
            k = pv[2] - point[2],
            fctr = R / D / (a * i + b * j + c * k),

            // xpg = fctr * R * (i*b - j*a);
            // divide actual xpg by xpg(max) = .364*R - so we return a relative value
            // ranging from -1 to +1 (and anything outside of that should not be plotted)
            xpg = zoom * fctr * (i * b - j * a) / limTAN,

            // ypg = fctr * (c*a*i + c*b*j - k*D*D);
            // .8 is fudge.  means canvas height is 80% of width.
            ypg = zoom * .8 * fctr * (c * a * i + c * b * j - k * D * D) / R / limTAN;

          return [xpg, ypg];
        },

        setViewer: (point: number[]) => {
          pv = point;
          updateVars();
        },

        setTarget: (point: number[]) => {
          pt = point;
          updateVars();
        }
      }

    })(); // perspective


    /**
     *    canvas helper
     * 
     */
    var canvas = (() => {

      let
        canvElem: HTMLCanvasElement = document.querySelector('canvas'),
        ctx = canvElem.getContext('2d'),
        width = canvElem.width,
        height = canvElem.height,
        begLine = false,
        canvx = 0,
        canvy = 0;

        ctx.lineWidth = 0.3;  // empirical

      return {

        init: (color: string) => {
          ctx.clearRect(0, 0, width, height);  // clear the previous drawing
          ctx.strokeStyle = color;
        },

        startLine: () => {
          begLine = true;
        },

        endLine: () => {
          ctx.stroke();
        },

        addPoint: (pgCoords: number[]) => {

          canvx = Math.floor(width * (pgCoords[0] + 1) / 2);
          canvy = Math.floor(height * (1 - pgCoords[1]) / 2);

          if (canvx < 0 || canvx > width || canvy < 0 || canvy > height) {
            return;   // bail - off screen.
          }

          if (begLine) {
            ctx.beginPath();
            ctx.moveTo(canvx, canvy);
            begLine = false;
          } else {
            ctx.lineTo(canvx, canvy);
          }

        }
      }

    })();  // canvas


    let
      time = this.slideTime,
      color = this.drawColor,
      surface = this.selFunc.fnSurface,
      POVfunc = this.selFunc.fnViewer,
      TGTfunc = this.selFunc.fnTarget,
      zoom = this.zoomValue,

      render = {  
        xmin: -15, xmax: 15,
        ymin: -15, ymax: 15,
        majStep: .4, minStep: .08
      };

    // viewer and target locations can be parametric in (t) - evaluate 
    // their locations and stuff into the perspective engine
    perspective.setViewer(POVfunc(time));
    perspective.setTarget(TGTfunc(time));

    // clear canvas and set pen color
    canvas.init(color);

    var addPoint = function (point: number[]) {
      let pageXY: number[] = perspective.getXYPageCoords(point, zoom);
      canvas.addPoint(pageXY);
    }

    for (let x: number = render.xmin; x <= render.xmax; x += render.majStep) {
      canvas.startLine();
      for (let y = render.ymin; y <= render.ymax; y += render.minStep) {
        addPoint([x, y, surface(x, y, time)]);
      }
      canvas.endLine();
    }

    for (let y: number = render.ymin; y <= render.ymax; y += render.majStep) {
      canvas.startLine();
      for (let x: number = render.xmin; x <= render.xmax; x += render.minStep) {
        addPoint([x, y, surface(x, y, time)]);
      }
      canvas.endLine();
    }

  } // render

} // end GregCardComponent
