(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    108: function(e, t, n) {
      "use strict";
      var a = n(17),
        r = n(7),
        l = n(8),
        o = n(10),
        i = n(9),
        c = n(11),
        s = n(0),
        u = n.n(s),
        d = n(102),
        m = n(164),
        p = n.n(m),
        h = n(69),
        b = n.n(h),
        g = "CV of Haeseong Han",
        f = "".concat("").concat(b.a),
        v = (function(e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(c.a)(t, e),
            Object(l.a)(t, [
              {
                key: "getMetaTags",
                value: function(e, t) {
                  var n = e.title,
                    a = e.description,
                    r = e.image,
                    l = e.contentType,
                    o = e.noCrawl,
                    i = e.published,
                    c = e.updated,
                    s = e.category,
                    u = e.tags,
                    d = n ? (n + " | " + g).substring(0, 60) : g,
                    m = a
                      ? a.substring(0, 155)
                      : "CV app of Haeseong Han made in 2019",
                    p = r ? "".concat("").concat(r) : f,
                    h = [
                      { itemprop: "name", content: d },
                      { itemprop: "description", content: m },
                      { itemprop: "image", content: p },
                      { name: "description", content: m },
                      { property: "og:title", content: d },
                      { property: "og:type", content: l || "website" },
                      { property: "og:url", content: "" + t },
                      { property: "og:image", content: p },
                      { property: "og:description", content: m },
                      { property: "og:site_name", content: g }
                    ];
                  return (
                    o &&
                      h.push({ name: "robots", content: "noindex, nofollow" }),
                    i && h.push({ name: "article:published_time", content: i }),
                    c && h.push({ name: "article:modified_time", content: c }),
                    s && h.push({ name: "article:section", content: s }),
                    u && h.push({ name: "article:tag", content: u }),
                    h
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.id,
                    r = e.className,
                    l = Object(a.a)(e, ["children", "id", "className"]);
                  return u.a.createElement(
                    "div",
                    { id: n, className: r },
                    u.a.createElement(p.a, {
                      htmlAttributes: {
                        lang: "en",
                        itemscope: void 0,
                        itemtype: "http://schema.org/".concat(
                          l.schema || "WebPage"
                        )
                      },
                      title: l.title ? l.title + " | " + g : g,
                      link: [
                        {
                          rel: "canonical",
                          href: "" + this.props.location.pathname
                        }
                      ],
                      meta: this.getMetaTags(l, this.props.location.pathname)
                    }),
                    t
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      t.a = Object(d.a)(v);
    },
    117: function(e, t) {
      e.exports = {};
    },
    118: function(e, t) {
      e.exports = { app: { baseURL: "https://han-cv-2019.herokuapp.com" } };
    },
    119: function(e, t) {
      e.exports = {};
    },
    16: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var a = function() {
        return null;
      };
    },
    168: function(e, t, n) {
      "use strict";
      n(45), n(43);
      var a = n(12),
        r = (n(41), n(157)),
        l = n.n(r),
        o = n(65),
        i = n(16),
        c = l.a.create(o.myconfig.app);
      c.interceptors.request.use(
        function(e) {
          return Object(i.a)("axios request log: ", e), e;
        },
        function(e) {
          return Object(i.a)("axios request log error: ", e), Promise.reject(e);
        }
      ),
        c.interceptors.response.use(
          function(e) {
            return Object(i.a)("axios response log: ", e), e;
          },
          function(e) {
            return (
              Object(i.a)("axios response log error: ", e),
              e.response &&
                (Object(i.a)("error.response.data: ", e.response.data),
                Object(i.a)("error.response.status: ", e.response.status),
                Object(i.a)("error.response.headers: ", e.response.headers)),
              Promise.reject(e)
            );
          }
        );
      var s = c,
        u = n(35),
        d = n(44),
        m = function() {
          return (
            Object(i.a)("cvsStart"),
            function(e) {
              e({ type: d.b });
            }
          );
        },
        p = function() {
          return function(e) {
            return new Promise(function(t, n) {
              Object(i.a)("cvsSuccess"), e({ type: d.c }), t();
            });
          };
        },
        h = function() {
          return (
            Object(i.a)("getCvList"),
            function(e) {
              return new Promise(function(t, n) {
                e(m());
                s.get("bapi/api/cv/list").then(function(n) {
                  Object(i.a)("GET CV LIST", n.data.Cause);
                  var r = Object(a.d)(n.data.Cause);
                  e(p()), e({ type: u.e, data: r }), t(r);
                });
              });
            }
          );
        },
        b = function(e) {
          return (
            Object(i.a)("getCvOne"),
            function(t) {
              return new Promise(function(n, r) {
                t(m());
                var l = {
                  endpoint: "cv",
                  url: "bapi/api/cv/".concat(e),
                  method: "get"
                };
                s.get(l.url).then(function(e) {
                  Object(i.a)(e), Object(i.a)("GET CV ONE", e.data.Cv);
                  var r = Object(a.d)(e.data.Cv);
                  t(p()), t({ type: u.f, data: r }), n(r);
                });
              });
            }
          );
        },
        g = function() {
          return (
            Object(i.a)("getCvLatest"),
            function(e, t) {
              return new Promise(function(n, r) {
                var l = t()
                  .cvs.get("cvList")
                  .filter(function(e) {
                    return !0 === e.getIn(["cvMeta", "latest"]);
                  })
                  .getIn([0, "_id"]);
                Object(i.a)("latestId: ", l), e(m());
                var o = {
                  endpoint: "cv",
                  url: "bapi/api/cv/".concat(l),
                  method: "get"
                };
                s.get(o.url).then(function(t) {
                  Object(i.a)(t), Object(i.a)("GET CV LATEST", t.data.Cv);
                  var r = Object(a.d)(t.data.Cv);
                  e(p()), e({ type: u.d, data: r }), n(r);
                });
              });
            }
          );
        },
        f = n(68),
        v = n(69),
        O = n.n(v),
        j = function(e) {
          return function(t) {
            return new Promise(function(n) {
              setTimeout(function() {
                var a;
                (a =
                  1 === e
                    ? { id: e, name: "Pekka Rinne", image: O.a }
                    : { id: e, name: "Viktor Arvidsson", image: O.a }),
                  t({ type: f.a, profile: a }),
                  n(a);
              }, 3e3);
            });
          };
        },
        E = function() {
          return function(e) {
            return new Promise(function(t) {
              e({ type: f.a, profile: {} }), t({});
            });
          };
        };
      n(55);
      n.d(t, "c", function() {
        return h;
      }),
        n.d(t, "b", function() {
          return g;
        }),
        n.d(t, "d", function() {
          return b;
        }),
        n.d(t, "a", function() {
          return j;
        }),
        n.d(t, "e", function() {
          return E;
        });
    },
    177: function(e, t, n) {
      e.exports = n(360);
    },
    186: function(e, t) {},
    214: function(e, t, n) {
      var a = {
        "./": 65,
        "./default": 81,
        "./default.js": 81,
        "./development": 117,
        "./development.js": 117,
        "./index": 65,
        "./index.js": 65,
        "./production": 118,
        "./production.js": 118,
        "./staging": 119,
        "./staging.js": 119
      };
      function r(e) {
        var t = l(e);
        return n(t);
      }
      function l(e) {
        var t = a[e];
        if (!(t + 1)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return t;
      }
      (r.keys = function() {
        return Object.keys(a);
      }),
        (r.resolve = l),
        (e.exports = r),
        (r.id = 214);
    },
    35: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return r;
        }),
        n.d(t, "c", function() {
          return l;
        }),
        n.d(t, "e", function() {
          return o;
        }),
        n.d(t, "d", function() {
          return i;
        }),
        n.d(t, "f", function() {
          return c;
        });
      var a = "CVS_START",
        r = "CVS_FAIL",
        l = "CVS_SUCCESS",
        o = "GET_CV_LIST",
        i = "GET_CV_LATEST",
        c = "GET_CV_ONE";
    },
    359: function(e, t, n) {},
    360: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = {};
      n.r(a),
        n.d(a, "default", function() {
          return A;
        });
      var r = n(0),
        l = n.n(r),
        o = n(33),
        i = n(29),
        c = n(67),
        s = n.n(c),
        u = n(106),
        d = n(41),
        m = n(42),
        p = n(155),
        h = n(28),
        b = n(12),
        g = Object(b.d)({ isAuthenticated: !1, token: !1, currentUser: {} }),
        f = n(43),
        v = n(156),
        O = function(e, t) {
          return Object(v.a)({}, e, t);
        },
        j = Object(b.d)({ error: null, loading: !1 }),
        E = n(44),
        y = Object(b.d)({ currentProfile: {} }),
        k = n(68),
        C = n(34),
        w = Object(b.d)({ themeNumber: 1, paperBorder: !0 }),
        N = n(55),
        S = Object(b.d)({
          error: null,
          loading: !1,
          cvList: [
            {
              _id: null,
              cvMeta: {
                owner: null,
                latest: null,
                version: null,
                description: null
              }
            }
          ],
          cvLatest: {
            _id: null,
            cvMeta: {
              owner: null,
              latest: null,
              version: null,
              description: null
            },
            headerData: {
              meta: null,
              name: { text: null, linkUrl: null },
              email: null,
              phone: null,
              links: [{ name: null, text: null, linkUrl: null }]
            },
            footerData: {
              meta: null,
              copyRight: { text: null, linkUrl: null },
              iconLinks: [{ iconName: null, tooltip: null, linkUrl: null }]
            },
            bodyData: {
              bodymeta: null,
              sectionDatas: [
                {
                  sectionTitle: {
                    text: null,
                    linkUrl: null,
                    sub: { text: null, linkUrl: null }
                  },
                  sectionDetails: [
                    {
                      mainTitle: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      subTitle: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      period: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      location: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      catalog: [
                        {
                          title: {
                            text: null,
                            linkUrl: null,
                            sub: { text: null, linkUrl: null }
                          },
                          list: [
                            {
                              callback: null,
                              iconName: null,
                              primary: { text: null, linkUrl: null },
                              name: null,
                              sub: null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          cvSelected: {
            _id: null,
            cvMeta: {
              owner: null,
              latest: null,
              version: null,
              description: null
            },
            headerData: {
              meta: null,
              name: { text: null, linkUrl: null },
              email: null,
              phone: null,
              links: [{ name: null, text: null, linkUrl: null }]
            },
            footerData: {
              meta: null,
              copyRight: { text: null, linkUrl: null },
              iconLinks: [{ iconName: null, tooltip: null, linkUrl: null }]
            },
            bodyData: {
              bodymeta: null,
              sectionDatas: [
                {
                  sectionTitle: {
                    text: null,
                    linkUrl: null,
                    sub: { text: null, linkUrl: null }
                  },
                  sectionDetails: [
                    {
                      mainTitle: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      subTitle: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      period: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      location: {
                        text: null,
                        linkUrl: null,
                        sub: { text: null, linkUrl: null }
                      },
                      catalog: [
                        {
                          title: {
                            text: null,
                            linkUrl: null,
                            sub: { text: null, linkUrl: null }
                          },
                          list: [
                            {
                              callback: null,
                              iconName: null,
                              primary: { text: null, linkUrl: null },
                              name: null,
                              sub: null
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }),
        T = n(35),
        x = Object(m.c)({
          auth: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : g,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case f.a:
                return (function(e, t) {
                  return O(e, { isAuthenticated: t.authenticated });
                })(e, t);
              case f.b:
                return (function(e, t) {
                  return O(e, { currentUser: t.user });
                })(e, t);
              default:
                return e;
            }
          },
          common: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : j,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case E.b:
                return (function(e, t) {
                  return O(e, { error: null, loading: !0 });
                })(e);
              case E.c:
                return (function(e, t) {
                  return O(e, { error: null, loading: !1 });
                })(e);
              case E.a:
                return (function(e, t) {
                  return O(e, { error: t.error, loading: !1 });
                })(e, t);
              default:
                return e;
            }
          },
          cvs: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : S,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case T.b:
                return (function(e, t) {
                  return e.set("error", null).set("loading", !0);
                })(e);
              case T.a:
                return (function(e, t) {
                  return e.set("error", t.error).set("loading", !1);
                })(e, t);
              case T.c:
                return (function(e, t) {
                  return e.set("error", null).set("loading", !1);
                })(e);
              case T.e:
                return (function(e, t) {
                  return e.set("cvList", t.data);
                })(e, t);
              case T.d:
                return (function(e, t) {
                  return e.set("cvLatest", t.data);
                })(e, t);
              case T.f:
                return (function(e, t) {
                  return e.set("cvSelected", t.data);
                })(e, t);
              default:
                return e;
            }
          },
          profile: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : y,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case k.a:
                return (function(e, t) {
                  return O(e, { currentProfile: t.profile });
                })(e, t);
              default:
                return e;
            }
          },
          style: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : w,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case N.b:
                return (function(e, t) {
                  return O(e, { themeNumber: t.themeNumber });
                })(e, t);
              case N.a:
                return (function(e, t) {
                  return O(e, Object(C.a)({}, t.propertyName, t.value));
                })(e, t);
              default:
                return e;
            }
          }
        }),
        U = Object(b.d)({ isAuthenticated: !1, currentUser: {} }),
        A = Object(b.d)({
          admin: U,
          auth: g,
          common: j,
          cvs: S,
          profile: y,
          style: w
        }),
        P = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        _ = n(7),
        M = n(8),
        L = n(10),
        R = n(9),
        D = n(11),
        I = n(102),
        V = (n(168), n(4)),
        G = n(158),
        H = n.n(G),
        F = n(159),
        B = n.n(F),
        q = n(46),
        z = n.n(q),
        J = n(82),
        W = n.n(J),
        Y = n(160),
        K = n.n(Y),
        Q = Object(V.withStyles)(
          function(e) {
            return {
              root: {},
              navIconHide: Object(C.a)({}, e.breakpoints.up("md"), {
                display: "none"
              }),
              toolbar: e.mixins.toolbar,
              title: { flex: 1 },
              rightButtons: {}
            };
          },
          { withTheme: !0 }
        )(function(e) {
          var t = e.classes,
            n = e.handleDrawerToggle;
          e.token;
          return l.a.createElement(
            H.a,
            { className: t.root },
            l.a.createElement(
              B.a,
              null,
              l.a.createElement(
                W.a,
                {
                  color: "inherit",
                  "aria-label": "open drawer",
                  onClick: n,
                  className: t.navIconHide
                },
                l.a.createElement(K.a, null)
              ),
              l.a.createElement(
                z.a,
                {
                  variant: "h6",
                  color: "inherit",
                  noWrap: !0,
                  className: t.title,
                  style: { textAlign: "right" }
                },
                "Haeseong Han's CV"
              )
            )
          );
        }),
        X = n(105),
        Z = n.n(X),
        $ = n(104),
        ee = n.n($),
        te = n(161),
        ne = n.n(te),
        ae = n(70),
        re = n(362),
        le = n(47),
        oe = n.n(le),
        ie = n(39),
        ce = n.n(ie),
        se = n(40),
        ue = n.n(se),
        de = function(e) {
          return l.a.createElement(re.a, Object.assign({ to: "/" }, e));
        },
        me = function(e) {
          return l.a.createElement(re.a, Object.assign({ to: "/logout" }, e));
        },
        pe = function(e) {
          return l.a.createElement(re.a, Object.assign({ to: "/oauth" }, e));
        },
        he = Object(V.withStyles)(function(e) {
          return { root: {}, toolbar: e.mixins.toolbar };
        })(function(e) {
          var t = e.classes,
            n = e.token;
          return l.a.createElement(
            oe.a,
            { component: "nav" },
            l.a.createElement("div", { className: t.toolbar }),
            l.a.createElement(
              ce.a,
              { button: !0, component: de },
              l.a.createElement(ue.a, { primary: "Home" })
            ),
            n
              ? l.a.createElement(
                  ae.a,
                  null,
                  l.a.createElement(
                    ce.a,
                    { button: !0, component: me },
                    l.a.createElement(ue.a, { primary: "Logout" })
                  )
                )
              : l.a.createElement(
                  ae.a,
                  null,
                  l.a.createElement(
                    ce.a,
                    { button: !0, component: pe },
                    l.a.createElement(ue.a, { primary: "Login" })
                  )
                )
          );
        }),
        be = Object(V.withStyles)(
          function(e) {
            return {
              toolbar: e.mixins.toolbar,
              drawerPaper: Object(C.a)({ width: 200 }, e.breakpoints.up("md"), {
                position: "fixed"
              })
            };
          },
          { withTheme: !0 }
        )(function(e) {
          var t = e.classes,
            n = e.handleDrawerToggle,
            a = e.token,
            r = e.mobileOpen;
          return l.a.createElement(
            "div",
            { onClick: n },
            l.a.createElement("div", { className: t.toolbar }),
            l.a.createElement(ne.a, null),
            l.a.createElement(
              ee.a,
              { mdUp: !0 },
              l.a.createElement(
                Z.a,
                {
                  variant: "temporary",
                  open: r,
                  classes: { paper: t.drawerPaper },
                  ModalProps: { keepMounted: !0 }
                },
                l.a.createElement(he, { token: a })
              )
            ),
            l.a.createElement(
              ee.a,
              { smDown: !0, implementation: "css" },
              l.a.createElement(
                Z.a,
                {
                  variant: "permanent",
                  open: !0,
                  classes: { paper: t.drawerPaper }
                },
                l.a.createElement(he, { token: a })
              )
            )
          );
        }),
        ge = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).state = { mobileOpen: !1 }),
              (n.handleDrawerToggle = function() {
                var e = !n.state.mobileOpen;
                n.setState({ mobileOpen: e });
              }),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.classes;
                  return l.a.createElement(
                    "div",
                    { className: e.root },
                    l.a.createElement(Q, {
                      className: e.MyAppbar,
                      handleDrawerToggle: this.handleDrawerToggle,
                      token: this.props.token
                    }),
                    l.a.createElement(be, {
                      mobileOpen: this.state.mobileOpen,
                      handleDrawerToggle: this.handleDrawerToggle,
                      token: this.props.token
                    }),
                    l.a.createElement(
                      "main",
                      { className: e.content },
                      l.a.createElement("div", { className: e.toolbar }),
                      this.props.children
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        fe = (Object(V.withStyles)(
          function(e) {
            return {
              root: {
                flexGrow: 1,
                height: "100%",
                zIndex: 1,
                overflow: "hidden",
                position: "relative",
                display: "flex",
                width: "100%"
              },
              MyAppbar: Object(C.a)(
                { position: "absolute" },
                e.breakpoints.up("md"),
                { marginLeft: 200, width: "calc(100% - ".concat(200, "px)") }
              ),
              MyDrawer: {},
              toolbar: e.mixins.toolbar,
              content: Object(C.a)(
                {
                  flexGrow: 1,
                  backgroundColor: e.palette.background.default,
                  padding: 3 * e.spacing.unit
                },
                e.breakpoints.up("md"),
                { marginLeft: 200, width: "calc(100% - ".concat(200, "px)") }
              )
            };
          },
          { withTheme: !0 }
        )(ge),
        n(17)),
        ve = n(25),
        Oe = n.n(ve),
        je = n(50),
        Ee = n.n(je),
        ye = n(86),
        ke = n.n(ye),
        Ce = n(85),
        we = n.n(Ce),
        Ne = n(49),
        Se = n.n(Ne),
        Te = {},
        xe = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).handleClose = function() {
                n.props.onClose(n.props.selectedValue);
              }),
              (n.handleListItemClick = function(e) {
                n.props.onClose(e);
              }),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = (t.classes, t.onClose, t.selectedValue, t.title),
                    a = t.datas,
                    r = Object(fe.a)(t, [
                      "classes",
                      "onClose",
                      "selectedValue",
                      "title",
                      "datas"
                    ]);
                  return l.a.createElement(
                    Se.a,
                    Object.assign(
                      {
                        onClose: this.handleClose,
                        "aria-labelledby": "simple-dialog-title"
                      },
                      r
                    ),
                    l.a.createElement(Ee.a, { id: "simple-dialog-title" }, n),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        oe.a,
                        null,
                        a.map(function(t) {
                          return l.a.createElement(
                            ce.a,
                            {
                              button: !0,
                              onClick: function() {
                                return e.handleListItemClick(t);
                              },
                              key: t.id
                            },
                            l.a.createElement(ue.a, { primary: t.contents })
                          );
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component),
        Ue = Object(V.withStyles)(Te)(xe),
        Ae = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).handleClose = function() {
                n.props.onClose();
              }),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = (t.classes, t.onClose, t.title),
                    a = t.datas,
                    r = Object(fe.a)(t, [
                      "classes",
                      "onClose",
                      "title",
                      "datas"
                    ]);
                  return l.a.createElement(
                    Se.a,
                    Object.assign(
                      {
                        onClose: this.handleClose,
                        "aria-labelledby": "simple-dialog-title"
                      },
                      r
                    ),
                    l.a.createElement(
                      Ee.a,
                      { onClick: this.handleClose, id: "simple-dialog-title" },
                      n
                    ),
                    l.a.createElement(
                      "div",
                      null,
                      a
                        ? l.a.createElement(
                            oe.a,
                            null,
                            a.map(function(t) {
                              return l.a.createElement(
                                ce.a,
                                {
                                  button: !0,
                                  onClick: e.handleClose,
                                  key: t.id
                                },
                                l.a.createElement(ue.a, {
                                  primary: t.primary,
                                  secondary: t.secondary
                                })
                              );
                            })
                          )
                        : null
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component),
        Pe = Object(V.withStyles)(Te)(Ae),
        _e = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).handleCloseNegative = function() {
                n.props.onCloseNegative();
              }),
              (n.handleClosePositive = function() {
                n.props.onClosePositive();
              }),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = (e.classes, e.labelNegative),
                    n = e.labelPositive,
                    a = (e.onCloseNegative, e.onClosePositive, e.title),
                    r = e.datas,
                    o = Object(fe.a)(e, [
                      "classes",
                      "labelNegative",
                      "labelPositive",
                      "onCloseNegative",
                      "onClosePositive",
                      "title",
                      "datas"
                    ]);
                  return l.a.createElement(
                    Se.a,
                    Object.assign({ onClose: this.handleCloseNegative }, o, {
                      "aria-labelledby": "alert-dialog-title",
                      "aria-describedby": "alert-dialog-description"
                    }),
                    l.a.createElement(Ee.a, { id: "alert-dialog-title" }, a),
                    l.a.createElement(
                      we.a,
                      null,
                      l.a.createElement(
                        "div",
                        null,
                        r
                          ? l.a.createElement(
                              oe.a,
                              null,
                              r.map(function(e) {
                                return l.a.createElement(
                                  ce.a,
                                  { button: !0, key: e.id },
                                  l.a.createElement(ue.a, {
                                    primary: e.primary,
                                    secondary: e.secondary
                                  })
                                );
                              })
                            )
                          : null
                      )
                    ),
                    l.a.createElement(
                      ke.a,
                      null,
                      l.a.createElement(
                        Oe.a,
                        { onClick: this.handleClosePositive, color: "primary" },
                        n
                      ),
                      l.a.createElement(
                        Oe.a,
                        {
                          onClick: this.handleCloseNegative,
                          color: "primary",
                          autoFocus: !0
                        },
                        t
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component),
        Me = (Object(V.withStyles)(Te)(_e),
        (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).handleCloseNegative = function() {
                n.props.onCloseNegative();
              }),
              (n.handleClosePositive = function() {
                n.props.onClosePositive();
              }),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = (e.classes, e.labelNegative),
                    n = e.labelPositive,
                    a = (e.onCloseNegative, e.onClosePositive, e.title),
                    r = e.children,
                    o = Object(fe.a)(e, [
                      "classes",
                      "labelNegative",
                      "labelPositive",
                      "onCloseNegative",
                      "onClosePositive",
                      "title",
                      "children"
                    ]);
                  return l.a.createElement(
                    Se.a,
                    Object.assign({ onClose: this.handleCloseNegative }, o, {
                      "aria-labelledby": "alert-dialog-title",
                      "aria-describedby": "alert-dialog-description"
                    }),
                    l.a.createElement(Ee.a, { id: "alert-dialog-title" }, a),
                    l.a.createElement(
                      we.a,
                      null,
                      l.a.createElement("div", null, r)
                    ),
                    l.a.createElement(
                      ke.a,
                      null,
                      l.a.createElement(
                        Oe.a,
                        { onClick: this.handleClosePositive, color: "primary" },
                        n
                      ),
                      l.a.createElement(
                        Oe.a,
                        {
                          onClick: this.handleCloseNegative,
                          color: "primary",
                          autoFocus: !0
                        },
                        t
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component)),
        Le = (Object(V.withStyles)(Te)(Me),
        l.a.Component,
        {
          auth: {
            register: {
              post: {
                500: {
                  bApi: "",
                  client: {
                    en:
                      "Server Error 500, please send email to haeseong.han@gmail.com",
                    kor:
                      "\uc11c\ubc84 \uc5d0\ub7ec 500, haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                }
              },
              get: {},
              delete: {},
              patch: {}
            },
            validate: {
              post: {
                403: {
                  bApi: "",
                  client: {
                    en: "Oopes! You are not registered as a administrator.",
                    kor: "\uad00\ub9ac\uc790\uac00 \uc544\ub2d9\ub2c8\ub2e4."
                  }
                },
                404: {
                  bApi: "",
                  dashboard: {
                    en: "Oopes! Please Sign up first",
                    kor: "\uac00\uc785\ubd80\ud130 \ud574\uc8fc\uc138\uc694."
                  }
                },
                500: {
                  bApi: "",
                  client: {
                    en:
                      "Server Error 500, please send email to haeseong.han@gmail.com",
                    kor:
                      "\uc11c\ubc84 \uc5d0\ub7ec 500, haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                }
              },
              get: {},
              delete: {},
              patch: {}
            },
            login: {
              post: {
                500: {
                  bApi: "",
                  client: {
                    en:
                      "Server Error 500, please send email to haeseong.han@gmail.com",
                    kor:
                      "\uc11c\ubc84 \uc5d0\ub7ec 500, haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                }
              },
              get: {},
              delete: {},
              patch: {}
            },
            logout: { post: {}, get: {}, delete: {}, patch: {} }
          },
          users: {
            users: {
              post: {},
              get: {
                401: {
                  bApi: "",
                  dashboard: {
                    en:
                      "Failed to get Users. Please contact our support team at haeseong.han@gmail.com",
                    kor:
                      "\uc720\uc800 \ubaa9\ub85d\uc744 \ubc1b\uc544\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                },
                403: {
                  bApi: "",
                  dashboard: {
                    en:
                      "Failed to get Users. Please contact our support team at haeseong.han@gmail.com",
                    kor:
                      "\uc720\uc800 \ubaa9\ub85d\uc744 \ubc1b\uc544\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                },
                404: {
                  bApi: "",
                  dashboard: {
                    en:
                      "Failed to get Users. Please contact our support team at haeseong.han@gmail.com",
                    kor:
                      "\uc720\uc800 \ubaa9\ub85d\uc744 \ubc1b\uc544\uc624\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                },
                500: {
                  bApi: "",
                  client: {
                    en:
                      "Server Error 500, please send email to haeseong.han@gmail.com",
                    kor:
                      "\uc11c\ubc84 \uc5d0\ub7ec 500, haeseong.han@gmail.com\ub85c \uc5f0\ub77d\ud574\uc8fc\uc138\uc694."
                  }
                }
              },
              delete: {},
              patch: {}
            }
          }
        }),
        Re = n(16),
        De = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !0 }),
              (n.handleClose = function(e) {
                n.setState({ open: !1 }, function() {});
              }),
              (n.title = "Error"),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = null;
                  return (
                    this.props.error &&
                      (e = [this.props.error].map(function(e) {
                        var t = e.section,
                          n = e.endpoint,
                          a = e.method,
                          r = e.status,
                          l = e.body;
                        return {
                          id: r,
                          primary: t + " " + a + " " + r,
                          secondary: Le[t][n][a][r]
                            ? Le[t][n][a][r].client.en
                            : l
                              ? JSON.stringify(l)
                              : "Undefined error, please contact haeseong.han@gmail.com"
                        };
                      })),
                    Object(Re.a)("error:", e),
                    l.a.createElement(Pe, {
                      onClose: this.handleClose,
                      open: this.state.open,
                      datas: e,
                      title: this.title
                    })
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        Ie = Object(i.connect)(function(e) {
          return { error: e.common.error };
        })(De),
        Ve = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).handleClose = function() {
                n.props.onClose();
              }),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = (e.classes, e.onClose, e.title),
                    n = e.children,
                    a = Object(fe.a)(e, [
                      "classes",
                      "onClose",
                      "title",
                      "children"
                    ]);
                  return l.a.createElement(
                    Se.a,
                    Object.assign(
                      {
                        onClose: this.handleClose,
                        "aria-labelledby": "simple-dialog-title"
                      },
                      a
                    ),
                    l.a.createElement(
                      Ee.a,
                      { onClick: this.handleClose, id: "simple-dialog-title" },
                      t
                    ),
                    l.a.createElement("div", null, n)
                  );
                }
              }
            ]),
            t
          );
        })(l.a.Component),
        Ge = Object(V.withStyles)({})(Ve),
        He = n(162),
        Fe = n.n(He);
      var Be = Object(V.withStyles)(function(e) {
          return { progress: { margin: 2 * e.spacing.unit } };
        })(function(e) {
          var t = e.classes;
          return l.a.createElement(
            "div",
            null,
            l.a.createElement(Fe.a, { className: t.progress, size: 100 })
          );
        }),
        qe = (function(e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
              r[l] = arguments[l];
            return (
              ((n = Object(L.a)(
                this,
                (e = Object(R.a)(t)).call.apply(e, [this].concat(r))
              )).state = { open: !0 }),
              (n.handleClose = function(e) {
                n.setState({ open: !1 }, function() {});
              }),
              (n.title = "Loading..."),
              n
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "render",
                value: function() {
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      Ge,
                      {
                        onClose: this.handleClose,
                        open: this.state.open,
                        title: this.title
                      },
                      l.a.createElement(Be, null)
                    )
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        ze = n(365),
        Je = n(364),
        We = n(363),
        Ye = (function(e) {
          function t() {
            return (
              Object(_.a)(this, t),
              Object(L.a)(this, Object(R.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.location !== e.location && window.scrollTo(0, 0);
                }
              },
              {
                key: "render",
                value: function() {
                  return this.props.children;
                }
              }
            ]),
            t
          );
        })(r.Component),
        Ke = Object(I.a)(Ye),
        Qe = (Object(i.connect)(function(e) {
          return { isAuthenticated: e.auth.isAuthenticated };
        }, null)(function(e) {
          var t = e.component,
            n = Object(fe.a)(e, ["component"]);
          return l.a.createElement(
            Je.a,
            Object.assign({}, n, {
              render: function(e) {
                return n.isAuthenticated
                  ? l.a.createElement(t, e)
                  : l.a.createElement(We.a, {
                      to: "/login?redirect=".concat(e.location.pathname)
                    });
              }
            })
          );
        }),
        n(163)),
        Xe = n.n(Qe),
        Ze = (Object(i.connect)(function(e) {
          return { isAuthenticated: e.auth.isAuthenticated };
        }, null)(function(e) {
          var t = e.component,
            n = Object(fe.a)(e, ["component"]),
            a = Xe.a.parse(n.location.search);
          return l.a.createElement(
            Je.a,
            Object.assign({}, n, {
              render: function(e) {
                return n.isAuthenticated
                  ? l.a.createElement(We.a, { to: a.redirect || "/dashboard" })
                  : l.a.createElement(t, e);
              }
            })
          );
        }),
        n(108),
        n(165)),
        $e = n.n(Ze),
        et = n(48),
        tt = n.n(et),
        nt = n(166),
        at = n.n(nt),
        rt = function(e) {
          return {
            button: { margin: e.spacing.unit, "text-decoration": "none" },
            iconButton: {},
            leftIcon: { marginRight: e.spacing.unit },
            rightIcon: { marginLeft: e.spacing.unit },
            iconSmall: { fontSize: 20 },
            label: {},
            google: {
              margin: e.spacing.unit,
              background: "white",
              color: "black"
            },
            ms: { margin: e.spacing.unit, background: "#e73f24" },
            slack: {
              margin: e.spacing.unit,
              background: "white",
              color: "black"
            },
            GoogleMSText: {
              marginLeft: e.spacing.unit,
              width: 25 * e.spacing.unit
            },
            slackMSText: { marginLeft: e.spacing.unit }
          };
        },
        lt = (Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.children,
            a = Object(fe.a)(e, ["classes", "children"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: t.button,
              variant: "raised",
              color: "secondary"
            }),
            l.a.createElement("span", { className: t.label }, n),
            l.a.createElement($e.a, { className: t.rightIcon })
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.children,
            a = Object(fe.a)(e, ["classes", "children"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: t.button,
              variant: "raised",
              color: "primary"
            }),
            l.a.createElement("span", { className: t.label }, n),
            l.a.createElement(tt.a, { className: t.rightIcon }, "send")
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.children,
            a = Object(fe.a)(e, ["classes", "children"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: t.button,
              variant: "raised",
              color: "primary"
            }),
            l.a.createElement("span", { className: t.label }, n),
            l.a.createElement(
              tt.a,
              { className: t.rightIcon },
              "arrow_drop_down"
            )
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.children,
            a = Object(fe.a)(e, ["classes", "children"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: t.button,
              variant: "raised",
              color: "secondary"
            }),
            l.a.createElement("span", { className: t.label }, n),
            l.a.createElement(tt.a, { className: t.rightIcon }, "close")
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.children,
            a = Object(fe.a)(e, ["classes", "children"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: t.button,
              variant: "raised",
              color: "primary"
            }),
            n
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.variant,
            a = e.color,
            r = e.rightIcon,
            o = e.iconName,
            i = e.children,
            c = Object(fe.a)(e, [
              "classes",
              "variant",
              "color",
              "rightIcon",
              "iconName",
              "children"
            ]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, c, { className: t.button, variant: n, color: a }),
            r ? null : l.a.createElement(tt.a, { className: t.leftIcon }, o),
            l.a.createElement("span", { className: t.label }, i),
            r ? l.a.createElement(tt.a, { className: t.rightIcon }, o) : null
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.iconName,
            a = (e.children, e.title),
            r = (e.callback,
            Object(fe.a)(e, [
              "classes",
              "iconName",
              "children",
              "title",
              "callback"
            ]));
          return l.a.createElement(
            at.a,
            { title: a },
            l.a.createElement(
              W.a,
              Object.assign({}, r, {
                "aria-label": a,
                className: t.iconButton
              }),
              n ? l.a.createElement(tt.a, null, n) : null
            )
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = (e.children, e.ms),
            a = Object(fe.a)(e, ["classes", "children", "ms"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: n ? t.ms : t.google,
              variant: "raised",
              color: "primary"
            }),
            l.a.createElement("img", {
              src: "",
              width: "24",
              height: "24",
              alt: "google sign in button"
            }),
            l.a.createElement(
              "span",
              { className: t.GoogleMSText },
              "Sign in with ",
              n ? "Office 365" : "Google"
            )
          );
        }),
        Object(V.withStyles)(rt)(function(e) {
          var t = e.classes,
            n = e.children,
            a = Object(fe.a)(e, ["classes", "children"]);
          return l.a.createElement(
            Oe.a,
            Object.assign({}, a, {
              className: t.slack,
              variant: "raised",
              color: "primary",
              href: "/api/auth/slack"
            }),
            l.a.createElement("img", {
              src: "",
              width: "24",
              height: "24",
              alt: "Slack button"
            }),
            l.a.createElement(
              "span",
              { className: t.slackMSText },
              "Sign in with Slack"
            ),
            n
          );
        }),
        s()({
          loader: function() {
            return n.e(2).then(n.bind(null, 397));
          },
          loading: function() {
            return null;
          },
          modules: ["profile"]
        })),
        ot = s()({
          loader: function() {
            return Promise.all([n.e(5), n.e(0)]).then(n.bind(null, 398));
          },
          loading: function() {
            return "loading...";
          },
          modules: ["cv"]
        }),
        it = function() {
          return l.a.createElement(
            Ke,
            { className: "Routes" },
            l.a.createElement(
              ze.a,
              null,
              l.a.createElement(Je.a, { exact: !0, path: "/", component: ot }),
              l.a.createElement(Je.a, {
                exact: !0,
                path: "/profile/:id",
                component: lt
              }),
              l.a.createElement(We.a, { to: "/" })
            )
          );
        },
        ct = (function(e) {
          function t() {
            return (
              Object(_.a)(this, t),
              Object(L.a)(this, Object(R.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              { key: "componentWillMount", value: function() {} },
              {
                key: "render",
                value: function() {
                  var e = this.props.token ? e : null;
                  return l.a.createElement(
                    "div",
                    { id: "app" },
                    l.a.createElement(it, null),
                    this.props.error ? l.a.createElement(Ie, null) : null,
                    this.props.loading ? l.a.createElement(qe, null) : null
                  );
                }
              }
            ]),
            t
          );
        })(r.Component),
        st = Object(I.a)(
          Object(i.connect)(function(e) {
            var t = e.auth,
              n = t.isAuthenticated,
              a = t.token,
              r = e.common;
            return {
              isAuthenticated: n,
              token: a,
              error: r.error,
              loading: r.loading
            };
          })(ct)
        ),
        ut = n(38),
        dt = n(56),
        mt = n.n(dt),
        pt = n(57),
        ht = n.n(pt),
        bt = n(37),
        gt = n.n(bt),
        ft = n(103),
        vt = n.n(ft),
        Ot = n(167),
        jt = n.n(Ot),
        Et = {
          palette: { primary: vt.a, secondary: jt.a },
          typography: { useNextVariants: !0 },
          shadows: Array(25).fill("none")
        },
        yt = {
          1: Object.assign({}, gt()(Et, {})),
          2: Object.assign({}, gt()(Et, {}))
        },
        kt = function(e) {
          return yt[e];
        },
        Ct = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        wt = new ut.SheetsRegistry(),
        Nt = new Map(),
        St = Object(V.createMuiTheme)(kt(1)),
        Tt = Object(ut.create)(Object(V.jssPreset)()),
        xt = Object(V.createGenerateClassName)();
      var Ut,
        At = !(
          "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
        ),
        Pt = new ut.SheetsRegistry(),
        _t = new Map(),
        Mt = Object(V.createMuiTheme)(kt(1)),
        Lt = Object(ut.create)(Object(V.jssPreset)()),
        Rt = Object(V.createGenerateClassName)(),
        Dt = (function(e) {
          function t() {
            return (
              Object(_.a)(this, t),
              Object(L.a)(this, Object(R.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              { key: "componentDidMount", value: function() {} },
              {
                key: "render",
                value: function() {
                  var e = this.props.children;
                  return At
                    ? l.a.createElement(
                        mt.a,
                        { jss: Lt, registry: Pt, generateClassName: Rt },
                        l.a.createElement(
                          V.MuiThemeProvider,
                          { theme: Mt, sheetsManager: _t },
                          l.a.createElement(ht.a, null),
                          e
                        )
                      )
                    : l.a.createElement(
                        mt.a,
                        { jss: Lt, generateClassName: Rt },
                        l.a.createElement(
                          V.MuiThemeProvider,
                          { theme: Mt },
                          l.a.createElement(ht.a, null),
                          e
                        )
                      );
                }
              }
            ]),
            t
          );
        })(l.a.Component),
        It = (Object(i.connect)(function(e) {
          var t = e.style.themeNumber,
            n = e.common;
          return { themeNumber: t, error: n.error, loading: n.loading };
        })(Dt),
        (function(e) {
          function t() {
            return (
              Object(_.a)(this, t),
              Object(L.a)(this, Object(R.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(D.a)(t, e),
            Object(M.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = document.getElementById("jss-server-side");
                  e && e.parentNode && e.parentNode.removeChild(e);
                }
              },
              {
                key: "render",
                value: function() {
                  return l.a.createElement(st, null);
                }
              }
            ]),
            t
          );
        })(l.a.Component)),
        Vt = ((Ut = It),
        function(e) {
          return Ct
            ? l.a.createElement(
                mt.a,
                { jss: Tt, registry: wt, generateClassName: xt },
                l.a.createElement(
                  V.MuiThemeProvider,
                  { theme: St, sheetsManager: Nt },
                  l.a.createElement(ht.a, null),
                  l.a.createElement(Ut, e)
                )
              )
            : l.a.createElement(
                mt.a,
                { jss: Tt, generateClassName: xt },
                l.a.createElement(
                  V.MuiThemeProvider,
                  { theme: St },
                  l.a.createElement(ht.a, null),
                  l.a.createElement(Ut, e)
                )
              );
        }),
        Gt = (n(359),
        (function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "/",
            t = P ? Object(h.c)({ initialEntries: [e] }) : Object(h.a)(),
            n = m.d,
            a = [p.a, Object(d.routerMiddleware)(t)],
            r = n.apply(void 0, [m.a.apply(void 0, a)].concat([])),
            l = P ? {} : Object(b.d)(window.__PRELOADED_STATE__);
          P || delete window.__PRELOADED_STATE__;
          return {
            store: Object(m.e)(Object(d.connectRouter)(t)(x), l, r),
            history: t
          };
        })()),
        Ht = Gt.store,
        Ft = Gt.history,
        Bt = l.a.createElement(
          i.Provider,
          { store: Ht },
          l.a.createElement(
            d.ConnectedRouter,
            { history: Ft },
            l.a.createElement(
              u.Frontload,
              { noServerRender: !0 },
              l.a.createElement(Vt, null)
            )
          )
        ),
        qt = document.querySelector("#root");
      !0 === qt.hasChildNodes()
        ? s.a.preloadReady().then(function() {
            Object(o.hydrate)(Bt, qt);
          })
        : Object(o.render)(Bt, qt);
    },
    43: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      }),
        n.d(t, "b", function() {
          return r;
        });
      var a = "AUTHENTICATE",
        r = "SET_CURRENT_USER";
    },
    44: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "c", function() {
          return r;
        }),
        n.d(t, "a", function() {
          return l;
        });
      var a = "COMMON_START",
        r = "COMMON_SUCCESS",
        l = "COMMON_FAIL";
    },
    55: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return a;
      }),
        n.d(t, "a", function() {
          return r;
        });
      var a = "SET_THEME",
        r = "SET_PROPERTY";
    },
    65: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "myconfig", function() {
          return c;
        });
      var a = n(37),
        r = n.n(a),
        l = n(81);
      console.log("process.env.REACT_APP_CUSTOM_ENV: ", "production");
      var o = "production",
        i = n(214)("./".concat(o));
      console.log(o);
      var c = Object.assign({}, r()(l.defaultConfig, i), { env: o });
    },
    68: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var a = "SET_CURRENT_PROFILE";
    },
    69: function(e, t, n) {
      e.exports = n.p + "static/media/logo.5d5d9eef.svg";
    },
    70: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return a;
      });
      var a = function(e) {
        return e.children;
      };
    },
    81: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "defaultConfig", function() {
          return a;
        });
      var a = {
        app: { baseURL: "http://localhost:3000/" },
        api: { apiURL: "https://cv-2019-api.herokuapp.com" },
        oauth: {
          google: {
            clientId: "",
            scope:
              "profile email https://www.googleapis.com/auth/admin.directory.user.readonly https://www.googleapis.com/auth/admin.directory.orgunit.readonly https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
            state: "stateThisisfromgoogleOAuth"
          },
          ms: {
            requestEndPoint:
              "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
            tokenChangeEndPoint:
              "https://login.microsoftonline.com/common/oauth2/v2.0/token",
            clientId: "",
            scope:
              "profile, openid, user.read, User.ReadBasic.All, User.Read.All, Directory.Read.All, Group.Read.All",
            state: "stateThisisfromMSOAuth"
          },
          msal: {}
        }
      };
    }
  },
  [[177, 3, 4]]
]);
//# sourceMappingURL=main.d7890253.chunk.js.map
