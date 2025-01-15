(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        // GLOBAL SCOPE
        // MODULE SCOPE
        // FUNCTION SCOPE
        // BLOCK SCOPE LET AND CONST

        // IIFE
        var fightModule = (function () {
          var harry = "potter";
          var ogre = "petter";

          function fight(char1, char2) {
            var attack1 = Math.floor(Math.random() * char1.length);
            var attack2 = Math.floor(Math.random() * char2.length);
            return attack1 > attack2 ? `${char1} wins ` : `${char2} wins`;
          }
          return {
            fight: fight,
          };
        })();

        console.log(fightModule.fight("ali", "abid"));
      },
      {},
    ],
  },
  {},
  [1]
);
