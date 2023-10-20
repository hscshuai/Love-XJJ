<template>
  <div class="hello">
    <div class="db" id="flow-heart" @click="clearHeart()"></div>
  </div>
</template>

<script>
import lettuce from "@/../public/lib/heart/lettuce"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    var L = new lettuce.lettuce();

    function showLove() {
      var c = document.getElementsByTagName('canvas')[0];
      var a = c.getContext('2d'),
      e = [],
      h = [],
      O = c.width = window.innerWidth,
      Q = c.height = window.innerHeight,
      v = 32,
      M = Math,
      R = M.random,
      C = M.cos,
      Y = 6.3;
      for (let i = 0; i < Y; i += 0.2){
        h.push([
          O / 2 + 180 * M.pow(M.sin(i), 3), 
          Q / 2 + 10 * -(15 * C(i) - 5 * C(2 * i) - 2 * C(3 * i) - C(4 * i))
        ])
      };
      for (let i = 0; i < v;) {
        let x = R() * O; 
        let y = R() * Q;
        let H = 80 * (i / v) + 280; 
        let S = 40 * R() + 60;
        let B = 60 * R() + 20; 
        let f = [];
        for (let k = 0; k < v;) {
          f[k++] = {
            x: x,
            y: y,
            X: 0,
            Y: 0,
            R: 1 - k / v + 1,
            S: R() + 1,
            q: ~~(R() * v),
            D: 2 * (i % 2) - 1,
            F: 0.2 * R() + 0.7,
            f: "hsla(" + ~~H + "," + ~~S + "%," + ~~B + "%,.1)"
          };
        }
        e[i++] = f
      }
      function _(d) {
        a.fillStyle = d.f;
        a.beginPath();
        a.arc(d.x, d.y, d.R, 0, Y, 1);
        a.closePath();
        a.fill()
      }
      setInterval(function () {
        a.fillStyle = "rgba(0,0,0,.2)"; a.fillRect(0, 0, O, Q);
        for (let i = v; i--;) {
          let f = e[i]; 
          let u = f[0]; 
          let q = h[u.q];
          let D = u.x - q[0];
          let E = u.y - q[1];
          let G = M.sqrt(D * D + E * E);
          10 > G && (0.95 < R() ? u.q = ~~(R() * v) : (0.99 < R() && (u.D *= -1), u.q += u.D, u.q %= v, 0 > u.q && (u.q += v)));
          u.X += -D / G * u.S; 
          u.Y += -E / G * u.S;
          u.x += u.X;
          u.y += u.Y;
          _(u); u.X *= u.F;
          u.Y *= u.F;
          for (let k = 0; k < v - 1;){
            let T = f[k];
            let N = f[++k];
            N.x -= 0.7 * (N.x - T.x), 
            N.y -= 0.7 * (N.y - T.y), 
            _(N)
          }
        }
      }, 25);
    }

    function final() {
      document.getElementById("flow-heart").innerHTML = '<canvas style="display: block;" width="0" height="0"></canvas>';
      // lettuce.post("/serial", irRemote);
      L.Event.trigger("showLove")
    }

    L.Event.on("showLove", showLove);

    L.Router.add(/#/, final).load();
    show(final, 1)
    
    function show(func, n) {
      var p = new L.Promise();
      var code = function () {
        if (func !== undefined) {
          func();
          L.FX.fadeIn(document.getElementById('flow-heart'), {
            duration: 3000, complete: function () {
            }
          });
        }
        p.done(null, n);
      };
      setTimeout(code, n);
      return p;
    }
  },
  methods:{
    clearHeart(){
      document.getElementById('flow-heart').style.opacity = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
