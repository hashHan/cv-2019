(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    368: function(t, e, r) {
      t.exports = r(369);
    },
    369: function(t, e, r) {
      var n =
          (function() {
            return this || ("object" === typeof self && self);
          })() || Function("return this")(),
        o =
          n.regeneratorRuntime &&
          Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
        i = o && n.regeneratorRuntime;
      if (((n.regeneratorRuntime = void 0), (t.exports = r(370)), o))
        n.regeneratorRuntime = i;
      else
        try {
          delete n.regeneratorRuntime;
        } catch (a) {
          n.regeneratorRuntime = void 0;
        }
    },
    370: function(t, e) {
      !(function(e) {
        "use strict";
        var r,
          n = Object.prototype,
          o = n.hasOwnProperty,
          i = "function" === typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag",
          s = "object" === typeof t,
          f = e.regeneratorRuntime;
        if (f) s && (t.exports = f);
        else {
          (f = e.regeneratorRuntime = s ? t.exports : {}).wrap = b;
          var h = "suspendedStart",
            l = "suspendedYield",
            p = "executing",
            y = "completed",
            d = {},
            m = {};
          m[a] = function() {
            return this;
          };
          var v = Object.getPrototypeOf,
            g = v && v(v(G([])));
          g && g !== n && o.call(g, a) && (m = g);
          var w = (j.prototype = E.prototype = Object.create(m));
          (L.prototype = w.constructor = j),
            (j.constructor = L),
            (j[u] = L.displayName = "GeneratorFunction"),
            (f.isGeneratorFunction = function(t) {
              var e = "function" === typeof t && t.constructor;
              return (
                !!e &&
                (e === L || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (f.mark = function(t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, j)
                  : ((t.__proto__ = j), u in t || (t[u] = "GeneratorFunction")),
                (t.prototype = Object.create(w)),
                t
              );
            }),
            (f.awrap = function(t) {
              return { __await: t };
            }),
            O(_.prototype),
            (_.prototype[c] = function() {
              return this;
            }),
            (f.AsyncIterator = _),
            (f.async = function(t, e, r, n) {
              var o = new _(b(t, e, r, n));
              return f.isGeneratorFunction(e)
                ? o
                : o.next().then(function(t) {
                    return t.done ? t.value : o.next();
                  });
            }),
            O(w),
            (w[u] = "Generator"),
            (w[a] = function() {
              return this;
            }),
            (w.toString = function() {
              return "[object Generator]";
            }),
            (f.keys = function(t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (f.values = G),
            (R.prototype = {
              constructor: R,
              reset: function(t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = r),
                  this.tryEntries.forEach(N),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      o.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = r);
              },
              stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;
                function n(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (e.next = n),
                    o && ((e.method = "next"), (e.arg = r)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return n("end");
                  if (a.tryLoc <= this.prev) {
                    var u = o.call(a, "catchLoc"),
                      s = o.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), d)
                    : this.complete(a)
                );
              },
              complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), N(r), d;
                }
              },
              catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      N(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function(t, e, n) {
                return (
                  (this.delegate = {
                    iterator: G(t),
                    resultName: e,
                    nextLoc: n
                  }),
                  "next" === this.method && (this.arg = r),
                  d
                );
              }
            });
        }
        function b(t, e, r, n) {
          var o = e && e.prototype instanceof E ? e : E,
            i = Object.create(o.prototype),
            a = new R(n || []);
          return (
            (i._invoke = (function(t, e, r) {
              var n = h;
              return function(o, i) {
                if (n === p) throw new Error("Generator is already running");
                if (n === y) {
                  if ("throw" === o) throw i;
                  return F();
                }
                for (r.method = o, r.arg = i; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var c = k(a, r);
                    if (c) {
                      if (c === d) continue;
                      return c;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (n === h) throw ((n = y), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = p;
                  var u = x(t, e, r);
                  if ("normal" === u.type) {
                    if (((n = r.done ? y : l), u.arg === d)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type &&
                    ((n = y), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, a)),
            i
          );
        }
        function x(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (n) {
            return { type: "throw", arg: n };
          }
        }
        function E() {}
        function L() {}
        function j() {}
        function O(t) {
          ["next", "throw", "return"].forEach(function(e) {
            t[e] = function(t) {
              return this._invoke(e, t);
            };
          });
        }
        function _(t) {
          var e;
          this._invoke = function(r, n) {
            function i() {
              return new Promise(function(e, i) {
                !(function e(r, n, i, a) {
                  var c = x(t[r], t, n);
                  if ("throw" !== c.type) {
                    var u = c.arg,
                      s = u.value;
                    return s && "object" === typeof s && o.call(s, "__await")
                      ? Promise.resolve(s.__await).then(
                          function(t) {
                            e("next", t, i, a);
                          },
                          function(t) {
                            e("throw", t, i, a);
                          }
                        )
                      : Promise.resolve(s).then(
                          function(t) {
                            (u.value = t), i(u);
                          },
                          function(t) {
                            return e("throw", t, i, a);
                          }
                        );
                  }
                  a(c.arg);
                })(r, n, e, i);
              });
            }
            return (e = e ? e.then(i, i) : i());
          };
        }
        function k(t, e) {
          var n = t.iterator[e.method];
          if (n === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = "return"),
                (e.arg = r),
                k(t, e),
                "throw" === e.method)
              )
                return d;
              (e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var o = x(n, t.iterator, e.arg);
          if ("throw" === o.type)
            return (
              (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), d
            );
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                (e.delegate = null),
                d)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              d);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function N(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function R(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function G(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var n = -1,
                i = function e() {
                  for (; ++n < t.length; )
                    if (o.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                  return (e.value = r), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: F };
        }
        function F() {
          return { value: r, done: !0 };
        }
      })(
        (function() {
          return this || ("object" === typeof self && self);
        })() || Function("return this")()
      );
    },
    371: function(t, e, r) {
      "use strict";
      function n(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function o(t) {
        return function() {
          var e = this,
            r = arguments;
          return new Promise(function(o, i) {
            var a = t.apply(e, r);
            function c(t) {
              n(a, o, i, c, u, "next", t);
            }
            function u(t) {
              n(a, o, i, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
      r.d(e, "a", function() {
        return o;
      });
    },
    397: function(t, e, r) {
      "use strict";
      r.r(e);
      var n = r(7),
        o = r(8),
        i = r(10),
        a = r(9),
        c = r(11),
        u = r(368),
        s = r.n(u),
        f = r(371),
        h = r(0),
        l = r.n(h),
        p = r(29),
        y = r(106),
        d = r(108),
        m = r(168),
        v = (function() {
          var t = Object(f.a)(
            s.a.mark(function t(e) {
              return s.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        e.dispatch(Object(m.a)(+e.match.params.id))
                      );
                    case 2:
                      return t.abrupt("return", t.sent);
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function(e) {
            return t.apply(this, arguments);
          };
        })(),
        g = (function(t) {
          function e() {
            return (
              Object(n.a)(this, e),
              Object(i.a)(this, Object(a.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(c.a)(e, t),
            Object(o.a)(e, [
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.dispatch(Object(m.e)());
                }
              },
              {
                key: "shouldComponentUpdate",
                value: function(t) {
                  return (
                    t.match.params.id !== this.props.match.params.id &&
                      this.props.dispatch(Object(m.a)(+t.match.params.id)),
                    !0
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var t = this.props.currentProfile,
                    e = t.name,
                    r = t.id,
                    n = t.image;
                  return l.a.createElement(
                    d.a,
                    {
                      id: "profile",
                      title: e,
                      description: "This is user profile number ".concat(r),
                      image: n
                    },
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("b", null, "Name:"),
                      " ",
                      e
                    ),
                    l.a.createElement(
                      "p",
                      null,
                      l.a.createElement("b", null, "ID:"),
                      " ",
                      r
                    ),
                    l.a.createElement("img", {
                      src: n,
                      alt: e,
                      style: { width: "400px" }
                    })
                  );
                }
              }
            ]),
            e
          );
        })(h.Component);
      e.default = Object(p.connect)(function(t) {
        return { currentProfile: t.profile.get("currentProfile") };
      })(Object(y.frontloadConnect)(v, { onMount: !0, onUpdate: !1 })(g));
    }
  }
]);
//# sourceMappingURL=profile.8bb8440f.chunk.js.map
