(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    398: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(7),
        r = a(8),
        c = a(10),
        i = a(9),
        o = a(11),
        l = a(34),
        s = a(368),
        m = a.n(s),
        p = a(371),
        u = a(0),
        d = a.n(u),
        h = a(29),
        b = a(106),
        g = a(108),
        E = a(168),
        f = a(4),
        y = a(393),
        v = a.n(y),
        k = a(395),
        O = a.n(k),
        j = a(87),
        x = a.n(j),
        w = a(70),
        N = a(82),
        C = a.n(N),
        L = a(373),
        S = a.n(L),
        B = a(379),
        T = a.n(B),
        I = a(372),
        D = a.n(I),
        P = (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).state = { anchorEl: null, selected: null }),
              (a.handleClick = function(e, t) {
                a.props.receivedCallback(e),
                  a.setState({ selected: t }),
                  a.handleClose();
              }),
              (a.handleOpen = function(e) {
                a.setState({ anchorEl: e.currentTarget });
              }),
              (a.handleClose = function() {
                a.setState({ anchorEl: null });
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.anchorEl,
                    a = this.props.datas,
                    n = Boolean(t);
                  return d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      C.a,
                      {
                        "aria-label": "More",
                        "aria-owns": n ? "long-menu" : void 0,
                        "aria-haspopup": "true",
                        onClick: this.handleOpen
                      },
                      d.a.createElement(D.a, null)
                    ),
                    d.a.createElement(
                      S.a,
                      {
                        id: "long-menu",
                        anchorEl: t,
                        open: n,
                        onClose: this.handleClose,
                        PaperProps: { style: { maxHeight: 216 } }
                      },
                      a.map(function(t) {
                        return d.a.createElement(
                          T.a,
                          {
                            key: t.customKey,
                            selected: t.customKey === e.state.selected,
                            onClick: function() {
                              return e.handleClick(
                                t.callbackParam,
                                t.customKey
                              );
                            }
                          },
                          t.text
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(d.a.Component),
        U = a(46),
        W = a.n(U),
        A = a(366),
        M = a.n(A),
        R = Object(f.withStyles)(function(e) {
          return {
            link: { margin: 0 },
            subLink: { fontStyle: "oblique" },
            mainLink: { fontWeight: "bolder" },
            typography: {
              display: "inline-block",
              margin: 0,
              padding: "0 16px",
              lineHeight: 1.2
            },
            sub: { fontStyle: "oblique" },
            main: { fontWeight: "bolder" }
          };
        })(function(e) {
          var t = e.classes,
            a = e.variant,
            n = e.gutterBottom,
            r = e.sub,
            c = e.main;
          return d.a.createElement(
            W.a,
            { variant: a, gutterBottom: n, className: t.typography },
            e.data.linkUrl
              ? d.a.createElement(
                  M.a,
                  {
                    target: "_blank",
                    href: e.data.linkUrl,
                    className: r ? t.subLink : c ? t.mainLink : t.link
                  },
                  e.data.text
                )
              : d.a.createElement(
                  "span",
                  { className: r ? t.sub : c ? t.main : t.link },
                  e.data.text
                )
          );
        }),
        _ = a(19),
        G = (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).getCvOneCallback = function(e) {
                return a.props.cvListCallback(e);
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = (t.classes,
                    t.cvListData.map(function(e) {
                      return {
                        customKey: e._id,
                        selected: e.cvMeta.latest,
                        callbackParam: e._id,
                        text: "version "
                          .concat(e.cvMeta.version, ", ")
                          .concat(e.cvMeta.description)
                      };
                    }));
                  return (
                    console.log("cvlist datas: ", a),
                    d.a.createElement(P, {
                      datas: a,
                      receivedCallback: function(t) {
                        return e.getCvOneCallback(t);
                      }
                    })
                  );
                }
              }
            ]),
            t
          );
        })(u.Component),
        H = Object(f.withStyles)(function(e) {
          return {};
        })(G),
        J = a(367),
        K = a.n(J),
        z = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.headerData,
                    n = e.metaData;
                  return d.a.createElement(
                    x.a,
                    { className: t.paperBottomLine },
                    d.a.createElement(
                      K.a,
                      {
                        item: !0,
                        xs: 12,
                        container: !0,
                        className: t.header,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      d.a.createElement(
                        K.a,
                        { className: t.leftColumn, item: !0, xs: 12, sm: 2 },
                        d.a.createElement(x.a, { className: t.paper })
                      ),
                      d.a.createElement(
                        K.a,
                        { item: !0, xs: 12, md: 8, container: !0 },
                        d.a.createElement(
                          K.a,
                          { item: !0, xs: 12 },
                          d.a.createElement(
                            x.a,
                            { className: t.paper },
                            d.a.createElement(
                              W.a,
                              {
                                style: { color: "red" },
                                variant: "caption",
                                gutterBottom: !0
                              },
                              n.latest
                                ? ""
                                : "CAUTION: This is not latest version. Choose another version on the menu right top corner"
                            ),
                            d.a.createElement(R, {
                              variant: "h2",
                              gutterBottom: !0,
                              data: a.name,
                              main: "true"
                            })
                          )
                        ),
                        d.a.createElement(
                          K.a,
                          { item: !0, xs: 12 },
                          d.a.createElement(
                            x.a,
                            { className: t.paper },
                            d.a.createElement(
                              W.a,
                              { variant: "subtitle1", gutterBottom: !0 },
                              "E-MAIL: ",
                              a.email
                            )
                          )
                        ),
                        a.phone
                          ? d.a.createElement(
                              K.a,
                              { item: !0, xs: 12 },
                              d.a.createElement(
                                x.a,
                                { className: t.paper },
                                d.a.createElement(
                                  W.a,
                                  { variant: "subtitle1", gutterBottom: !0 },
                                  "PHONE: ",
                                  a.phone
                                )
                              )
                            )
                          : null,
                        a.links && a.links[0] && a.links[0].linkUrl
                          ? a.links.map(function(e) {
                              return d.a.createElement(
                                K.a,
                                { key: e.name, item: !0, xs: 12 },
                                d.a.createElement(
                                  x.a,
                                  { className: t.paper },
                                  d.a.createElement(
                                    W.a,
                                    { variant: "subtitle1", gutterBottom: !0 },
                                    e.name,
                                    ":",
                                    " ",
                                    d.a.createElement(
                                      M.a,
                                      {
                                        target: "_blank",
                                        href: e.linkUrl,
                                        className: t.link
                                      },
                                      e.text
                                    )
                                  )
                                )
                              );
                            })
                          : null
                      ),
                      d.a.createElement(
                        K.a,
                        { className: t.rightColumn, item: !0, xs: 12, sm: 2 },
                        d.a.createElement(x.a, { className: t.paper })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.Component),
        q = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            header: {},
            paper: {
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              textAlign: "center"
            },
            paperBottomLine: {
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              borderBottomStyle: "solid"
            },
            link: { margin: e.spacing.unit },
            leftColumn: Object(l.a)({}, e.breakpoints.down("sm"), {
              display: "none"
            }),
            rightColumn: Object(l.a)({}, e.breakpoints.down("sm"), {
              display: "none"
            })
          };
        })(z),
        V = a(12),
        F = a(16),
        Y = a(385),
        Q = a.n(Y),
        X = a(47),
        Z = a.n(X),
        $ = a(39),
        ee = a.n($),
        te = a(387),
        ae = a.n(te),
        ne = a(40),
        re = a.n(ne),
        ce = a(391),
        ie = a.n(ce),
        oe = a(48),
        le = a.n(oe),
        se = a(389),
        me = a.n(se),
        pe = a(390),
        ue = a.n(pe),
        de = (a(384),
        (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).state = { open: {} }),
              (a.handleClick = function(e) {
                console.log("name: ", e),
                  console.log("this.state.open[name]", a.state.open[e]),
                  console.log("!this.state.open[name]", !a.state.open[e]);
                var t = Object(V.d)(a.state.open)
                  .update(e, !1, function(e) {
                    return (
                      console.log("boolval: ", e),
                      console.log("!boolval: ", !e),
                      !e
                    );
                  })
                  .toJS();
                a.setState({ open: t }, function() {
                  console.log("this.state.open after setState: ", a.state.open);
                });
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props,
                    a = t.classes,
                    n = t.title,
                    r = t.data;
                  return d.a.createElement(
                    Z.a,
                    {
                      component: "nav",
                      subheader: d.a.createElement(
                        Q.a,
                        { component: "div", className: a.listSubHeader },
                        d.a.createElement(R, {
                          variant: "body2",
                          gutterBottom: !0,
                          data: n,
                          main: r.length ? "true" : null
                        }),
                        d.a.createElement(R, {
                          variant: "caption",
                          gutterBottom: !0,
                          data: n.sub,
                          sub: "true"
                        })
                      ),
                      className: a.list
                    },
                    r.map(function(t) {
                      var n = t.callback,
                        r = t.iconName,
                        c = t.primary,
                        i = t.sub,
                        o = t.name,
                        l = Object(F.a)(t, [
                          "callback",
                          "iconName",
                          "primary",
                          "sub",
                          "name"
                        ]);
                      return i
                        ? d.a.createElement(
                            w.a,
                            { key: o },
                            d.a.createElement(
                              ee.a,
                              {
                                button: !0,
                                onClick: function() {
                                  return e.handleClick(o);
                                },
                                className: a.dynamicListItem
                              },
                              d.a.createElement(
                                ae.a,
                                null,
                                d.a.createElement(
                                  le.a,
                                  { className: a.rightIcon },
                                  r
                                )
                              ),
                              d.a.createElement(re.a, {
                                inset: !0,
                                primary: d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: c
                                })
                              }),
                              e.state.open[o]
                                ? d.a.createElement(me.a, null)
                                : d.a.createElement(ue.a, null)
                            ),
                            d.a.createElement(
                              ie.a,
                              {
                                in: e.state.open[o],
                                timeout: "auto",
                                unmountOnExit: !0
                              },
                              d.a.createElement(
                                Z.a,
                                { component: "div", disablePadding: !0 },
                                i.map(function(e) {
                                  var t = e.name,
                                    n = e.callback,
                                    r = e.iconName,
                                    c = e.primary,
                                    i = Object(F.a)(e, [
                                      "name",
                                      "callback",
                                      "iconName",
                                      "primary"
                                    ]);
                                  return d.a.createElement(
                                    ee.a,
                                    Object.assign(
                                      {
                                        key: t,
                                        button: !0,
                                        className: a.nestedList,
                                        onClick: n
                                      },
                                      i
                                    ),
                                    r
                                      ? d.a.createElement(
                                          ae.a,
                                          null,
                                          d.a.createElement(
                                            le.a,
                                            { className: a.rightIcon },
                                            r
                                          )
                                        )
                                      : null,
                                    d.a.createElement(re.a, {
                                      inset: !0,
                                      primary: d.a.createElement(R, {
                                        variant: "caption",
                                        gutterBottom: !0,
                                        data: c
                                      })
                                    })
                                  );
                                })
                              )
                            )
                          )
                        : d.a.createElement(
                            ee.a,
                            Object.assign(
                              { key: o, button: !0, onClick: n },
                              l,
                              { className: a.naiveListItem }
                            ),
                            d.a.createElement(
                              ae.a,
                              null,
                              d.a.createElement(
                                le.a,
                                { className: a.rightIcon },
                                r
                              )
                            ),
                            d.a.createElement(re.a, {
                              inset: !0,
                              primary: d.a.createElement(R, {
                                variant: "caption",
                                gutterBottom: !0,
                                data: c
                              })
                            })
                          );
                    })
                  );
                }
              }
            ]),
            t
          );
        })(u.Component)),
        he = Object(f.withStyles)(function(e) {
          return {
            list: {
              width: "100%",
              backgroundColor: e.palette.background.paper,
              paddingTop: 0.3 * e.spacing.unit,
              paddingBottom: 0.3 * e.spacing.unit
            },
            nestedList: {
              paddingLeft: 4 * e.spacing.unit,
              pointerEvents: "none",
              fontStyle: "normal",
              paddingTop: 0.2 * e.spacing.unit,
              paddingBottom: 0.2 * e.spacing.unit
            },
            naiveListItem: {
              pointerEvents: "none",
              fontStyle: "normal",
              paddingTop: 0.2 * e.spacing.unit,
              paddingBottom: 0.2 * e.spacing.unit
            },
            dynamicListItem: {
              paddingTop: 0.5 * e.spacing.unit,
              paddingBottom: 0.5 * e.spacing.unit
            },
            listSubHeader: {
              paddingTop: 0.3 * e.spacing.unit,
              paddingBottom: 0.3 * e.spacing.unit,
              lineHeight: "20px"
            }
          };
        })(de),
        be = (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).state = {}),
              (a.customcallback = function() {
                console.log("Hi callback");
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.details;
                  return d.a.createElement(
                    x.a,
                    { className: t.paper },
                    d.a.createElement(
                      K.a,
                      {
                        item: !0,
                        xs: 12,
                        container: !0,
                        className: t.description,
                        direction: "row",
                        justify: "center",
                        alignItems: "stretch"
                      },
                      a.map(function(e) {
                        return d.a.createElement(
                          K.a,
                          { key: e.title.text, item: !0, xs: 12 },
                          d.a.createElement(he, {
                            title: e.title,
                            data: e.list
                          })
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.Component),
        ge = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            description: {},
            paper: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary
            },
            paperTopLine: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              borderTopStyle: "dotted"
            },
            list: {
              width: "100%",
              maxWidth: 360,
              backgroundColor: e.palette.background.paper
            },
            nestedList: { paddingLeft: 4 * e.spacing.unit }
          };
        })(be),
        Ee = (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).state = {}),
              (a.customcallback = function() {
                console.log("Hi callback");
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.details,
                    n = a.length;
                  console.log("details columnNumbers :", n);
                  var r = parseInt(12 / n);
                  return (
                    console.log("details gridNumber :", r),
                    d.a.createElement(
                      x.a,
                      { className: t.paper },
                      d.a.createElement(
                        K.a,
                        {
                          item: !0,
                          xs: 12,
                          container: !0,
                          className: t.description,
                          direction: "row",
                          justify: "space-between",
                          alignItems: "stretch"
                        },
                        a.map(function(e) {
                          return d.a.createElement(
                            K.a,
                            {
                              key: e.title.text,
                              item: !0,
                              xs: 12,
                              sm: 6,
                              lg: r
                            },
                            d.a.createElement(he, {
                              title: e.title,
                              data: e.list
                            })
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
        })(u.Component),
        fe = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            description: { width: "100%" },
            paper: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary
            },
            paperTopLine: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              borderTopStyle: "solid"
            },
            list: {
              width: "100%",
              maxWidth: 360,
              backgroundColor: e.palette.background.paper
            },
            nestedList: { paddingLeft: 4 * e.spacing.unit }
          };
        })(Ee),
        ye = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.eachitem;
                  return d.a.createElement(
                    x.a,
                    { className: t.paper },
                    d.a.createElement(
                      K.a,
                      {
                        item: !0,
                        xs: 12,
                        container: !0,
                        className: t.header,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      d.a.createElement(
                        K.a,
                        { item: !0, xs: 12, container: !0 },
                        d.a.createElement(
                          K.a,
                          { item: !0, xs: 9, md: 9, container: !0 },
                          d.a.createElement(
                            x.a,
                            { className: t.paper },
                            d.a.createElement(
                              K.a,
                              { item: !0, xs: 12 },
                              d.a.createElement(
                                x.a,
                                { className: t.paperWithSub },
                                d.a.createElement(R, {
                                  variant: "subtitle1",
                                  gutterBottom: !0,
                                  data: a.mainTitle,
                                  main: "true"
                                }),
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.mainTitle.sub,
                                  sub: "true"
                                })
                              )
                            ),
                            d.a.createElement(
                              K.a,
                              { item: !0, xs: 12 },
                              d.a.createElement(
                                x.a,
                                { className: t.paperWithSub },
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.subTitle
                                }),
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.subTitle.sub,
                                  sub: "true"
                                })
                              )
                            )
                          )
                        ),
                        d.a.createElement(
                          K.a,
                          { item: !0, xs: 3, md: 3, container: !0 },
                          d.a.createElement(
                            x.a,
                            { className: t.paper },
                            d.a.createElement(
                              K.a,
                              { item: !0, xs: 12 },
                              d.a.createElement(
                                x.a,
                                { className: t.paperWithSub },
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.period
                                }),
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.period.sub,
                                  sub: "true"
                                })
                              )
                            ),
                            d.a.createElement(
                              K.a,
                              { item: !0, xs: 12 },
                              d.a.createElement(
                                x.a,
                                { className: t.paperWithSub },
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.location
                                }),
                                d.a.createElement(R, {
                                  variant: "caption",
                                  gutterBottom: !0,
                                  data: a.location.sub,
                                  sub: "true"
                                })
                              )
                            )
                          )
                        )
                      ),
                      d.a.createElement(
                        K.a,
                        { item: !0, xs: 12 },
                        d.a.createElement(ge, { details: a.description }),
                        d.a.createElement(fe, { details: a.catalog })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.Component),
        ve = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            header: {},
            paper: {
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary
            },
            paperWithSub: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              display: "inline-block"
            },
            paperWithUnderLine: { borderBottomStyle: "solid" },
            typography: { display: "inline-block" }
          };
        })(ye),
        ke = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.sectionData;
                  return d.a.createElement(
                    x.a,
                    { className: t.paper },
                    d.a.createElement(
                      K.a,
                      {
                        item: !0,
                        xs: 12,
                        container: !0,
                        className: t.header,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      d.a.createElement(
                        K.a,
                        { item: !0, xs: 12 },
                        d.a.createElement(
                          x.a,
                          { className: t.sectionTitle },
                          d.a.createElement(R, {
                            data: a.sectionTitle,
                            main: "true",
                            variant: "h6"
                          }),
                          d.a.createElement(R, {
                            data: a.sectionTitle.sub,
                            sub: "true"
                          })
                        )
                      ),
                      d.a.createElement(
                        K.a,
                        { item: !0, xs: 12, container: !0 },
                        a.sectionDetails.map(function(e) {
                          return d.a.createElement(
                            w.a,
                            { key: e.mainTitle.text },
                            d.a.createElement(ve, {
                              key: e.mainTitle.text,
                              eachitem: e
                            }),
                            d.a.createElement(x.a, { className: t.strikePaper })
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
        })(u.Component),
        Oe = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            header: {},
            paper: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary
            },
            sectionTitle: {
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              borderBottomStyle: "solid"
            },
            strikePaper: {
              height: "1px",
              width: "100%",
              color: e.palette.text.secondary,
              borderBottomStyle: "solid"
            }
          };
        })(ke),
        je = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.bodyData;
                  return d.a.createElement(
                    x.a,
                    { className: t.paper },
                    d.a.createElement(
                      K.a,
                      {
                        item: !0,
                        xs: 12,
                        container: !0,
                        className: t.header,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      a.sectionDatas.map(function(e) {
                        return d.a.createElement(
                          w.a,
                          { key: e.sectionTitle.text },
                          d.a.createElement(x.a, { className: t.strikePaper }),
                          d.a.createElement(Oe, {
                            key: e.sectionTitle.text,
                            sectionData: e
                          })
                        );
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.Component),
        xe = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            header: {},
            paper: {
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary
            },
            strikePaper: {
              height: "1px",
              width: "100%",
              color: e.palette.text.secondary,
              borderBottomStyle: "solid"
            }
          };
        })(je),
        we = (function(e) {
          function t() {
            return (
              Object(n.a)(this, t),
              Object(c.a)(this, Object(i.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.footerData,
                    n = e.metaData,
                    r = 12;
                  return (
                    a.iconLinks &&
                      ((r = parseInt(12 / a.iconLinks.length)),
                      console.log("details gridNumber :", r)),
                    d.a.createElement(
                      x.a,
                      { className: t.paperTopLine },
                      d.a.createElement(
                        K.a,
                        {
                          item: !0,
                          xs: 12,
                          container: !0,
                          className: t.header,
                          direction: "row",
                          justify: "center",
                          alignItems: "center"
                        },
                        d.a.createElement(
                          K.a,
                          { className: t.leftColumn, item: !0, xs: 12, md: 2 },
                          d.a.createElement(x.a, { className: t.paper })
                        ),
                        d.a.createElement(
                          K.a,
                          { item: !0, xs: 12, md: 8, container: !0 },
                          a.iconLinks &&
                          a.iconLinks[0] &&
                          a.iconLinks[0].linkUrl
                            ? a.iconLinks.map(function(e) {
                                return d.a.createElement(
                                  K.a,
                                  { key: e.linkUrl, item: !0, xs: r },
                                  d.a.createElement(
                                    x.a,
                                    { className: t.centeredPaper },
                                    d.a.createElement(
                                      W.a,
                                      {
                                        variant: "subtitle1",
                                        gutterBottom: !0
                                      },
                                      d.a.createElement(
                                        M.a,
                                        {
                                          target: "_blank",
                                          href: e.linkUrl,
                                          className: t.link
                                        },
                                        e.name
                                      )
                                    )
                                  )
                                );
                              })
                            : null,
                          d.a.createElement(
                            K.a,
                            { item: !0, xs: 12 },
                            d.a.createElement(
                              x.a,
                              { className: t.centeredPaper },
                              d.a.createElement(
                                W.a,
                                { variant: "caption", gutterBottom: !0 },
                                "URL of this page: TO DO - get from config"
                              )
                            )
                          ),
                          d.a.createElement(
                            K.a,
                            { item: !0, xs: 12 },
                            d.a.createElement(
                              x.a,
                              { className: t.centeredPaper },
                              d.a.createElement(
                                W.a,
                                { variant: "caption", gutterBottom: !0 },
                                "CV Onwer: ",
                                n.owner,
                                " ",
                                d.a.createElement("br", null),
                                "Version: ",
                                n.timestamp,
                                " ",
                                d.a.createElement("br", null)
                              ),
                              d.a.createElement(
                                W.a,
                                {
                                  style: { color: "red" },
                                  variant: "caption",
                                  gutterBottom: !0
                                },
                                "Latest:",
                                " ",
                                n.latest
                                  ? "YES"
                                  : "No, Choose other version on menu"
                              )
                            )
                          ),
                          a.copyRight && a.copyRight.linkUrl
                            ? d.a.createElement(
                                K.a,
                                { item: !0, xs: 12 },
                                d.a.createElement(
                                  x.a,
                                  { className: t.centeredPaper },
                                  d.a.createElement(
                                    W.a,
                                    { variant: "caption", gutterBottom: !0 },
                                    "Copyright \xa9",
                                    " ",
                                    a.copyRight
                                      ? d.a.createElement(
                                          M.a,
                                          {
                                            target: "_blank",
                                            href: a.copyRight.linkUrl,
                                            className: t.link
                                          },
                                          a.copyRight.text
                                        )
                                      : a.copyRight.text
                                  )
                                )
                              )
                            : null
                        ),
                        d.a.createElement(
                          K.a,
                          { className: t.rightColumn, item: !0, xs: 12, md: 2 },
                          d.a.createElement(x.a, { className: t.paper })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.Component),
        Ne = Object(f.withStyles)(function(e) {
          return {
            root: { flexGrow: 1 },
            header: {},
            paper: {
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary
            },
            paperTopLine: {
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              borderTopStyle: "solid"
            },
            centeredPaper: {
              textAlign: "center",
              padding: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              margin: "auto"
            },
            leftColumn: Object(l.a)({}, e.breakpoints.down("sm"), {
              display: "none"
            }),
            rightColumn: Object(l.a)({}, e.breakpoints.down("sm"), {
              display: "none"
            })
          };
        })(we),
        Ce = (function() {
          var e = Object(p.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.dispatch(Object(E.c)()).then(function() {
                          return t.dispatch(Object(E.b)());
                        })
                      );
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function(t) {
            return e.apply(this, arguments);
          };
        })(),
        Le = (function(e) {
          function t() {
            var e, a;
            Object(n.a)(this, t);
            for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
              o[s] = arguments[s];
            return (
              ((a = Object(c.a)(
                this,
                (e = Object(i.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                direction: "row",
                justify: "center",
                alignItems: "center",
                renderFlag: !1
              }),
              (a.handleChange = function(e) {
                return function(t, n) {
                  a.setState(Object(l.a)({}, e, n));
                };
              }),
              (a.cvListCallback = function(e) {
                return a.props.dispatch(Object(E.d)(e));
              }),
              (a.scrollToTop = function() {
                return window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }),
              a
            );
          }
          return (
            Object(o.a)(t, e),
            Object(r.a)(t, [
              { key: "componentDidMount", value: function() {} },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.classes,
                    a = this.props.cvLatest.get("_id")
                      ? this.props.cvLatest.toJS()
                      : null,
                    n = this.props.cvSelected.get("_id")
                      ? this.props.cvSelected.toJS()
                      : a,
                    r = this.props.cvList.getIn([0, "_id"])
                      ? this.props.cvList.toJS()
                      : null;
                  return (
                    Object(_.a)("cvToRender: ", n),
                    Object(_.a)("cvListToRender: ", r),
                    d.a.createElement(
                      g.a,
                      {
                        style: { maxWidth: "1400px" },
                        id: "cv",
                        title: "cv",
                        description: "cv page of haeseong han"
                      },
                      d.a.createElement(
                        x.a,
                        { className: t.paper },
                        d.a.createElement(
                          x.a,
                          { className: t.cvList },
                          r
                            ? d.a.createElement(H, {
                                cvListData: r,
                                cvListCallback: function(t) {
                                  return e.cvListCallback(t);
                                }
                              })
                            : null
                        ),
                        n
                          ? d.a.createElement(
                              w.a,
                              null,
                              d.a.createElement(q, {
                                headerData: n.headerData,
                                metaData: n.cvMeta
                              }),
                              d.a.createElement(xe, { bodyData: n.bodyData }),
                              d.a.createElement(Ne, {
                                footerData: n.footerData,
                                metaData: n.cvMeta
                              })
                            )
                          : null,
                        d.a.createElement(
                          v.a,
                          {
                            color: "default",
                            size: "small",
                            className: t.fab,
                            onClick: this.scrollToTop
                          },
                          d.a.createElement(O.a, null)
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(u.Component);
      t.default = Object(f.withStyles)(function(e) {
        return {
          root: { flexGrow: 1 },
          header: {},
          paper: Object(l.a)(
            {
              padding: 1 * e.spacing.unit,
              margin: 1 * e.spacing.unit,
              height: "100%",
              width: "100%",
              color: e.palette.text.secondary,
              maxWidth: "1300px"
            },
            "margin",
            "auto"
          ),
          cvList: {
            margin: 0,
            bottom: "auto",
            right: "auto",
            position: "fixed",
            top: 2 * e.spacing.unit,
            left: 2 * e.spacing.unit,
            zIndex: 100,
            opacity: 0.5,
            "&:hover": { opacity: 1 }
          },
          fab: {
            margin: 0,
            top: "auto",
            left: "auto",
            position: "fixed",
            bottom: 2 * e.spacing.unit,
            right: 2 * e.spacing.unit,
            zIndex: 100,
            opacity: 0.2,
            "&:hover": { opacity: 1 }
          }
        };
      })(
        Object(h.connect)(function(e) {
          var t = e.cvs;
          return {
            cvList: t.get("cvList"),
            cvSelected: t.get("cvSelected"),
            cvLatest: t.get("cvLatest")
          };
        })(Object(b.frontloadConnect)(Ce, { onMount: !0, onUpdate: !1 })(Le))
      );
    }
  }
]);
//# sourceMappingURL=cv.90af9141.chunk.js.map
