(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    106: function (t, e, n) {
      "use strict";
      n(57), n(56), n(41), n(11), n(67), n(59), n(58);
      var r = n(0);
      function o(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return c(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return c(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          f = !0,
          l = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (f = t.done), t;
          },
          e: function (t) {
            (l = !0), (o = t);
          },
          f: function () {
            try {
              f || null == n.return || n.return();
            } finally {
              if (l) throw o;
            }
          }
        };
      }
      function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      var f =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                }
              });
            }, 1);
          },
        l =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          },
        h =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var e = t.intersectionRatio,
                link = t.target;
              e <= 0 || !link.__prefetch || link.__prefetch();
            });
          });
      e.a = {
        name: "NuxtLink",
        extends: r.a.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 }
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = f(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          l(this.handleId),
            this.__observed &&
              (h.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            h &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              h.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var t = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (t && ((t.effectiveType || "").includes("2g") || t.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (t) {
                return t.components.default;
              })
              .filter(function (t) {
                return "function" == typeof t && !t.options && !t.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              h.unobserve(this.$el);
              var t,
                e = o(this.getPrefetchComponents());
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var n = t.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            }
          }
        }
      };
    },
    141: function (t, e, n) {
      "use strict";
      n.r(e);
      n(264);
      var r = n(40),
        o = n(46),
        c = n.n(o),
        f = n(140),
        l = n(108),
        h = n(320),
        d = n(321),
        component = Object(r.a)(
          {},
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "v-row",
              [
                n(
                  "v-col",
                  [
                    n(
                      "v-card",
                      { staticClass: "mx-auto", attrs: { color: "primary" } },
                      [
                        n("v-card-text", { staticClass: "py-1" }, [
                          n(
                            "p",
                            { staticClass: "display-1 text-white text-center" },
                            [
                              t._v(
                                "\n     JUMPERSBOW DATA RECORDING AND ANALYSIS SYSTEM\n    "
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      c()(component, { VCard: f.a, VCardText: l.a, VCol: h.a, VRow: d.a });
    },
    142: function (t, e, n) {
      "use strict";
      e.a = {};
    },
    145: function (t, e, n) {
      n(11), n(61);
      var r = n(298);
      function o() {
        return (o = r(
          regeneratorRuntime.mark(function t() {
            var e, r, o;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!(!1 in navigator)) {
                      t.next = 2;
                      break;
                    }
                    throw new Error(
                      "serviceWorker is not supported in current browser!"
                    );
                  case 2:
                    return (t.next = 4), n.e(14).then(n.bind(null, 316));
                  case 4:
                    return (
                      (e = t.sent),
                      (r = e.Workbox),
                      (o = new r("/sw.js", { scope: "/" })),
                      (t.next = 9),
                      o.register()
                    );
                  case 9:
                    return t.abrupt("return", o);
                  case 10:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      window.$workbox = (function () {
        return o.apply(this, arguments);
      })().catch(function (t) {});
    },
    199: function (t, e, n) {
      var content = n(259);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)("7388ab72", content, !0, { sourceMap: !1 });
    },
    200: function (t, e, n) {
      var content = n(263);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)("7e56e4e3", content, !0, { sourceMap: !1 });
    },
    201: function (t, e, n) {
      var content = n(265);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, n(30).default)("cdf2c480", content, !0, { sourceMap: !1 });
    },
    221: function (t) {
      t.exports = JSON.parse(
        '{"title":"sensors","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"sensors"},{"hid":"description","name":"description","content":"```bash\\r # install dependencies\\r $ npm install"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"sensors"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"sensors"},{"hid":"og:description","name":"og:description","property":"og:description","content":"```bash\\r # install dependencies\\r $ npm install"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/_nuxt/icons/icon_64x64.5f6a36.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"/_nuxt/icons/icon_512x512.5f6a36.png","sizes":"512x512"},{"rel":"manifest","href":"/_nuxt/manifest.ff0e3045.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}'
      );
    },
    223: function (t, e, n) {
      "use strict";
      n(11), n(58), n(61);
      var r = n(13),
        o = n(0),
        c = n(3),
        f = window.__NUXT__;
      function l() {
        if (!this._hydrated) return this.$fetch();
      }
      function h() {
        if (
          (t = this).$vnode &&
          t.$vnode.elm &&
          t.$vnode.elm.dataset &&
          t.$vnode.elm.dataset.fetchKey
        ) {
          var t;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var data = f.fetch[this._fetchKey];
          if (data && data._error) this.$fetchState.error = data._error;
          else for (var e in data) o.a.set(this.$data, e, data[e]);
        }
      }
      function d() {
        var t = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = m.call(this).then(function () {
              delete t._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function m() {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(r.a)(
          regeneratorRuntime.mark(function t() {
            var e,
              n,
              r,
              o = this;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (e = null),
                        (n = Date.now()),
                        (t.prev = 6),
                        (t.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      t.next = 15;
                      break;
                    case 11:
                      (t.prev = 11),
                        (t.t0 = t.catch(6)),
                        (e = Object(c.p)(t.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 19),
                        new Promise(function (t) {
                          return setTimeout(t, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = e),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return o.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      e.a = {
        beforeCreate: function () {
          Object(c.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            o.a.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now()
            }),
            (this.$fetch = d.bind(this)),
            Object(c.a)(this, "created", h),
            Object(c.a)(this, "beforeMount", l));
        }
      };
    },
    232: function (t, e, n) {
      n(233), (t.exports = n(234));
    },
    234: function (t, e, n) {
      "use strict";
      n.r(e),
        function (t) {
          n(17),
            n(57),
            n(56),
            n(41),
            n(35),
            n(36),
            n(11),
            n(16),
            n(67),
            n(51),
            n(89),
            n(59),
            n(63),
            n(58);
          var e = n(22),
            r = (n(61), n(13)),
            o = (n(129), n(241), n(246), n(247), n(0)),
            c = n(217),
            f = n(142),
            l = n(3),
            h = n(48),
            d = n(223),
            m = n(106);
          function v(t, e) {
            var n;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (!t) return;
                  if ("string" == typeof t) return y(t, e);
                  var n = Object.prototype.toString.call(t).slice(8, -1);
                  "Object" === n && t.constructor && (n = t.constructor.name);
                  if ("Map" === n || "Set" === n) return Array.from(t);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return y(t, e);
                })(t)) ||
                (e && t && "number" == typeof t.length)
              ) {
                n && (t = n);
                var i = 0,
                  r = function () {};
                return {
                  s: r,
                  n: function () {
                    return i >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[i++] };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: r
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              c = !0,
              f = !1;
            return {
              s: function () {
                n = t[Symbol.iterator]();
              },
              n: function () {
                var t = n.next();
                return (c = t.done), t;
              },
              e: function (t) {
                (f = !0), (o = t);
              },
              f: function () {
                try {
                  c || null == n.return || n.return();
                } finally {
                  if (f) throw o;
                }
              }
            };
          }
          function y(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
          }
          o.a.__nuxt__fetch__mixin__ ||
            (o.a.mixin(d.a), (o.a.__nuxt__fetch__mixin__ = !0)),
            o.a.component(m.a.name, m.a),
            o.a.component("NLink", m.a),
            t.fetch || (t.fetch = c.a);
          var x,
            w,
            _ = [],
            O = window.__NUXT__ || {},
            $ = O.config || {};
          $.app && (n.p = Object(l.v)($.app.cdnURL, $.app.assetsPath)),
            Object.assign(o.a.config, { silent: !0, performance: !1 });
          var j = o.a.config.errorHandler || console.error;
          function C(t, e, n) {
            for (
              var r = function (component) {
                  var t =
                    (function (component, t) {
                      if (
                        !component ||
                        !component.options ||
                        !component.options[t]
                      )
                        return {};
                      var option = component.options[t];
                      if ("function" == typeof option) {
                        for (
                          var e = arguments.length,
                            n = new Array(e > 2 ? e - 2 : 0),
                            r = 2;
                          r < e;
                          r++
                        )
                          n[r - 2] = arguments[r];
                        return option.apply(void 0, n);
                      }
                      return option;
                    })(component, "transition", e, n) || {};
                  return "string" == typeof t ? { name: t } : t;
                },
                o = n ? Object(l.g)(n) : [],
                c = Math.max(t.length, o.length),
                f = [],
                h = function (i) {
                  var e = Object.assign({}, r(t[i])),
                    n = Object.assign({}, r(o[i]));
                  Object.keys(e)
                    .filter(function (t) {
                      return (
                        void 0 !== e[t] && !t.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (t) {
                      n[t] = e[t];
                    }),
                    f.push(n);
                },
                i = 0;
              i < c;
              i++
            )
              h(i);
            return f;
          }
          function k(t, e, n) {
            return E.apply(this, arguments);
          }
          function E() {
            return (E = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, r) {
                var o,
                  c,
                  f,
                  h,
                  d = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(x.nuxt.err) || n.name !== e.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== e.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(l.i)(e.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (t.prev = 5),
                            !this._queryChanged)
                          ) {
                            t.next = 12;
                            break;
                          }
                          return (
                            (t.next = 9),
                            Object(l.r)(e, function (t, e) {
                              return { Component: t, instance: e };
                            })
                          );
                        case 9:
                          (o = t.sent),
                            o.some(function (t) {
                              var r = t.Component,
                                o = t.instance,
                                c = r.options.watchQuery;
                              return (
                                !0 === c ||
                                (Array.isArray(c)
                                  ? c.some(function (t) {
                                      return d._diffQuery[t];
                                    })
                                  : "function" == typeof c &&
                                    c.apply(o, [e.query, n.query]))
                              );
                            }) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start();
                        case 12:
                          r(), (t.next = 26);
                          break;
                        case 15:
                          if (
                            ((t.prev = 15),
                            (t.t0 = t.catch(5)),
                            (c = t.t0 || {}),
                            (f =
                              c.statusCode ||
                              c.status ||
                              (c.response && c.response.status) ||
                              500),
                            (h = c.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(h))
                          ) {
                            t.next = 23;
                            break;
                          }
                          return window.location.reload(!0), t.abrupt("return");
                        case 23:
                          this.error({ statusCode: f, message: h }),
                            this.$nuxt.$emit("routeChanged", e, n, c),
                            r();
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function S(t, e) {
            return O.serverRendered && e && Object(l.b)(t, e), (t._Ctor = t), t;
          }
          function R(t) {
            var path = Object(l.f)(t.options.base, t.options.mode);
            return Object(l.d)(
              t.match(path),
              (function () {
                var t = Object(r.a)(
                  regeneratorRuntime.mark(function t(e, n, r, o, c) {
                    var f;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("function" != typeof e || e.options) {
                              t.next = 4;
                              break;
                            }
                            return (t.next = 3), e();
                          case 3:
                            e = t.sent;
                          case 4:
                            return (
                              (f = S(
                                Object(l.s)(e),
                                O.data ? O.data[c] : null
                              )),
                              (r.components[o] = f),
                              t.abrupt("return", f)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e, n, r, o, c) {
                  return t.apply(this, arguments);
                };
              })()
            );
          }
          function P(t, e, n) {
            var r = this,
              o = [],
              c = !1;
            if (
              (void 0 !== n &&
                ((o = []),
                (n = Object(l.s)(n)).options.middleware &&
                  (o = o.concat(n.options.middleware)),
                t.forEach(function (t) {
                  t.options.middleware && (o = o.concat(t.options.middleware));
                })),
              (o = o.map(function (t) {
                return "function" == typeof t
                  ? t
                  : ("function" != typeof f.a[t] &&
                      ((c = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                      })),
                    f.a[t]);
              })),
              !c)
            )
              return Object(l.o)(o, e);
          }
          function A(t, e, n) {
            return T.apply(this, arguments);
          }
          function T() {
            return (T = Object(r.a)(
              regeneratorRuntime.mark(function t(e, n, o) {
                var c,
                  f,
                  d,
                  m,
                  y,
                  w,
                  O,
                  $,
                  j,
                  k,
                  E,
                  S,
                  R,
                  A,
                  T,
                  D = this;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            t.next = 2;
                            break;
                          }
                          return t.abrupt("return", o());
                        case 2:
                          return (
                            !1,
                            e === n
                              ? ((_ = []), !0)
                              : ((c = []),
                                (_ = Object(l.g)(n, c).map(function (t, i) {
                                  return Object(l.c)(n.matched[c[i]].path)(
                                    n.params
                                  );
                                }))),
                            (f = !1),
                            (d = function (path) {
                              n.path === path.path &&
                                D.$loading.finish &&
                                D.$loading.finish(),
                                n.path !== path.path &&
                                  D.$loading.pause &&
                                  D.$loading.pause(),
                                f || ((f = !0), o(path));
                            }),
                            (t.next = 8),
                            Object(l.t)(x, {
                              route: e,
                              from: n,
                              next: d.bind(this)
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = x.nuxt.dateErr),
                            (this._hadError = Boolean(x.nuxt.err)),
                            (m = []),
                            (y = Object(l.g)(e, m)).length)
                          ) {
                            t.next = 27;
                            break;
                          }
                          return (t.next = 15), P.call(this, y, x.context);
                        case 15:
                          if (!f) {
                            t.next = 17;
                            break;
                          }
                          return t.abrupt("return");
                        case 17:
                          return (
                            (w = (h.a.options || h.a).layout),
                            (t.next = 20),
                            this.loadLayout(
                              "function" == typeof w
                                ? w.call(h.a, x.context)
                                : w
                            )
                          );
                        case 20:
                          return (
                            (O = t.sent),
                            (t.next = 23),
                            P.call(this, y, x.context, O)
                          );
                        case 23:
                          if (!f) {
                            t.next = 25;
                            break;
                          }
                          return t.abrupt("return");
                        case 25:
                          return (
                            x.context.error({
                              statusCode: 404,
                              message: "This page could not be found"
                            }),
                            t.abrupt("return", o())
                          );
                        case 27:
                          return (
                            y.forEach(function (t) {
                              t._Ctor &&
                                t._Ctor.options &&
                                ((t.options.asyncData =
                                  t._Ctor.options.asyncData),
                                (t.options.fetch = t._Ctor.options.fetch));
                            }),
                            this.setTransitions(C(y, e, n)),
                            (t.prev = 29),
                            (t.next = 32),
                            P.call(this, y, x.context)
                          );
                        case 32:
                          if (!f) {
                            t.next = 34;
                            break;
                          }
                          return t.abrupt("return");
                        case 34:
                          if (!x.context._errored) {
                            t.next = 36;
                            break;
                          }
                          return t.abrupt("return", o());
                        case 36:
                          return (
                            "function" == typeof ($ = y[0].options.layout) &&
                              ($ = $(x.context)),
                            (t.next = 40),
                            this.loadLayout($)
                          );
                        case 40:
                          return (
                            ($ = t.sent),
                            (t.next = 43),
                            P.call(this, y, x.context, $)
                          );
                        case 43:
                          if (!f) {
                            t.next = 45;
                            break;
                          }
                          return t.abrupt("return");
                        case 45:
                          if (!x.context._errored) {
                            t.next = 47;
                            break;
                          }
                          return t.abrupt("return", o());
                        case 47:
                          (j = !0),
                            (t.prev = 48),
                            (k = v(y)),
                            (t.prev = 50),
                            k.s();
                        case 52:
                          if ((E = k.n()).done) {
                            t.next = 63;
                            break;
                          }
                          if (
                            "function" == typeof (S = E.value).options.validate
                          ) {
                            t.next = 56;
                            break;
                          }
                          return t.abrupt("continue", 61);
                        case 56:
                          return (t.next = 58), S.options.validate(x.context);
                        case 58:
                          if ((j = t.sent)) {
                            t.next = 61;
                            break;
                          }
                          return t.abrupt("break", 63);
                        case 61:
                          t.next = 52;
                          break;
                        case 63:
                          t.next = 68;
                          break;
                        case 65:
                          (t.prev = 65), (t.t0 = t.catch(50)), k.e(t.t0);
                        case 68:
                          return (t.prev = 68), k.f(), t.finish(68);
                        case 71:
                          t.next = 77;
                          break;
                        case 73:
                          return (
                            (t.prev = 73),
                            (t.t1 = t.catch(48)),
                            this.error({
                              statusCode: t.t1.statusCode || "500",
                              message: t.t1.message
                            }),
                            t.abrupt("return", o())
                          );
                        case 77:
                          if (j) {
                            t.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found"
                            }),
                            t.abrupt("return", o())
                          );
                        case 80:
                          return (
                            (t.next = 82),
                            Promise.all(
                              y.map(
                                (function () {
                                  var t = Object(r.a)(
                                    regeneratorRuntime.mark(function t(r, i) {
                                      var o, c, f, h, d, v, y, w, p;
                                      return regeneratorRuntime.wrap(function (
                                        t
                                      ) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(l.c)(
                                                  e.matched[m[i]].path
                                                )(e.params)),
                                                (r._dataRefresh = !1),
                                                (o = r._path !== _[i]),
                                                D._routeChanged && o
                                                  ? (r._dataRefresh = !0)
                                                  : D._paramChanged && o
                                                  ? ((c = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== c))
                                                  : D._queryChanged &&
                                                    (!0 ===
                                                    (f = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(f)
                                                      ? (r._dataRefresh = f.some(
                                                          function (t) {
                                                            return D._diffQuery[
                                                              t
                                                            ];
                                                          }
                                                        ))
                                                      : "function" ==
                                                          typeof f &&
                                                        (R ||
                                                          (R = Object(l.h)(e)),
                                                        (r._dataRefresh = f.apply(
                                                          R[i],
                                                          [e.query, n.query]
                                                        )))),
                                                D._hadError ||
                                                  !D._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                t.next = 6;
                                                break;
                                              }
                                              return t.abrupt("return");
                                            case 6:
                                              return (
                                                (h = []),
                                                (d =
                                                  r.options.asyncData &&
                                                  "function" ==
                                                    typeof r.options.asyncData),
                                                (v =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (y = d && v ? 30 : 45),
                                                d &&
                                                  ((w = Object(l.q)(
                                                    r.options.asyncData,
                                                    x.context
                                                  )).then(function (t) {
                                                    Object(l.b)(r, t),
                                                      D.$loading.increase &&
                                                        D.$loading.increase(y);
                                                  }),
                                                  h.push(w)),
                                                (D.$loading.manual =
                                                  !1 === r.options.loading),
                                                v &&
                                                  (((p = r.options.fetch(
                                                    x.context
                                                  )) &&
                                                    (p instanceof Promise ||
                                                      "function" ==
                                                        typeof p.then)) ||
                                                    (p = Promise.resolve(p)),
                                                  p.then(function (t) {
                                                    D.$loading.increase &&
                                                      D.$loading.increase(y);
                                                  }),
                                                  h.push(p)),
                                                t.abrupt(
                                                  "return",
                                                  Promise.all(h)
                                                )
                                              );
                                            case 14:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t);
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 82:
                          f ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            o()),
                            (t.next = 99);
                          break;
                        case 85:
                          if (
                            ((t.prev = 85),
                            (t.t2 = t.catch(29)),
                            "ERR_REDIRECT" !== (A = t.t2 || {}).message)
                          ) {
                            t.next = 90;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", e, n, A)
                          );
                        case 90:
                          return (
                            (_ = []),
                            Object(l.k)(A),
                            "function" ==
                              typeof (T = (h.a.options || h.a).layout) &&
                              (T = T(x.context)),
                            (t.next = 96),
                            this.loadLayout(T)
                          );
                        case 96:
                          this.error(A),
                            this.$nuxt.$emit("routeChanged", e, n, A),
                            o();
                        case 99:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71]
                  ]
                );
              })
            )).apply(this, arguments);
          }
          function D(t, n) {
            Object(l.d)(t, function (t, n, r, c) {
              return (
                "object" !== Object(e.a)(t) ||
                  t.options ||
                  (((t = o.a.extend(t))._Ctor = t), (r.components[c] = t)),
                t
              );
            });
          }
          function N(t) {
            var e = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (e = !1);
            var n = e
              ? (h.a.options || h.a).layout
              : t.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(x.context)), this.setLayout(n);
          }
          function L(t) {
            t._hadError &&
              t._dateLastError === t.$options.nuxt.dateErr &&
              t.error();
          }
          function I(t, e) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(l.h)(t),
                c = Object(l.g)(t),
                f = !1;
              o.a.nextTick(function () {
                r.forEach(function (t, i) {
                  if (
                    t &&
                    !t._isDestroyed &&
                    t.constructor._dataRefresh &&
                    c[i] === t.constructor &&
                    !0 !== t.$vnode.data.keepAlive &&
                    "function" == typeof t.constructor.options.data
                  ) {
                    var e = t.constructor.options.data.call(t);
                    for (var n in e) o.a.set(t.$data, n, e[n]);
                    f = !0;
                  }
                }),
                  f &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  L(n);
              });
            }
          }
          function M(t) {
            window.onNuxtReadyCbs.forEach(function (e) {
              "function" == typeof e && e(t);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(t),
              w.afterEach(function (e, n) {
                o.a.nextTick(function () {
                  return t.$nuxt.$emit("routeChanged", e, n);
                });
              });
          }
          function U() {
            return (U = Object(r.a)(
              regeneratorRuntime.mark(function t(e) {
                var n, r, c, f;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (x = e.app),
                          (w = e.router),
                          (n = new o.a(x)),
                          (r = function () {
                            n.$mount("#__nuxt"),
                              w.afterEach(D),
                              w.afterEach(N.bind(n)),
                              w.afterEach(I.bind(n)),
                              o.a.nextTick(function () {
                                M(n);
                              });
                          }),
                          (t.next = 6),
                          Promise.all(R(w))
                        );
                      case 6:
                        if (
                          ((c = t.sent),
                          (n.setTransitions = n.$options.nuxt.setTransitions.bind(
                            n
                          )),
                          c.length &&
                            (n.setTransitions(C(c, w.currentRoute)),
                            (_ = w.currentRoute.matched.map(function (t) {
                              return Object(l.c)(t.path)(w.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          O.error && n.error(O.error),
                          w.beforeEach(k.bind(n)),
                          w.beforeEach(A.bind(n)),
                          !O.serverRendered ||
                            !Object(l.n)(O.routePath, n.context.route.path))
                        ) {
                          t.next = 15;
                          break;
                        }
                        return t.abrupt("return", r());
                      case 15:
                        return (
                          (f = function () {
                            D(w.currentRoute, w.currentRoute),
                              N.call(n, w.currentRoute),
                              L(n),
                              r();
                          }),
                          (t.next = 18),
                          new Promise(function (t) {
                            return setTimeout(t, 0);
                          })
                        );
                      case 18:
                        A.call(
                          n,
                          w.currentRoute,
                          w.currentRoute,
                          function (path) {
                            if (path) {
                              var t = w.afterEach(function (e, n) {
                                t(), f();
                              });
                              w.push(path, void 0, function (t) {
                                t && j(t);
                              });
                            } else f();
                          }
                        );
                      case 19:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
          }
          Object(h.b)(null, O.config)
            .then(function (t) {
              return U.apply(this, arguments);
            })
            .catch(j);
        }.call(this, n(60));
    },
    258: function (t, e, n) {
      "use strict";
      n(199);
    },
    259: function (t, e, n) {
      var r = n(29)(!1);
      r.push([t.i, "h1[data-v-bfedb7fe]{font-size:20px}", ""]), (t.exports = r);
    },
    262: function (t, e, n) {
      "use strict";
      n(200);
    },
    263: function (t, e, n) {
      var r = n(29)(!1);
      r.push([
        t.i,
        ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",
        ""
      ]),
        (t.exports = r);
    },
    264: function (t, e, n) {
      "use strict";
      n(201);
    },
    265: function (t, e, n) {
      var r = n(29)(!1);
      r.push([t.i, ".text-white{color:#fff}", ""]), (t.exports = r);
    },
    3: function (t, e, n) {
      "use strict";
      n.d(e, "k", function () {
        return x;
      }),
        n.d(e, "m", function () {
          return w;
        }),
        n.d(e, "l", function () {
          return _;
        }),
        n.d(e, "e", function () {
          return O;
        }),
        n.d(e, "b", function () {
          return $;
        }),
        n.d(e, "s", function () {
          return j;
        }),
        n.d(e, "g", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return k;
        }),
        n.d(e, "d", function () {
          return E;
        }),
        n.d(e, "r", function () {
          return S;
        }),
        n.d(e, "j", function () {
          return R;
        }),
        n.d(e, "t", function () {
          return A;
        }),
        n.d(e, "o", function () {
          return D;
        }),
        n.d(e, "q", function () {
          return N;
        }),
        n.d(e, "f", function () {
          return L;
        }),
        n.d(e, "c", function () {
          return I;
        }),
        n.d(e, "i", function () {
          return M;
        }),
        n.d(e, "p", function () {
          return U;
        }),
        n.d(e, "a", function () {
          return z;
        }),
        n.d(e, "v", function () {
          return Q;
        }),
        n.d(e, "n", function () {
          return W;
        }),
        n.d(e, "u", function () {
          return X;
        });
      n(17),
        n(57),
        n(56),
        n(69),
        n(41),
        n(88),
        n(35),
        n(248),
        n(36),
        n(11),
        n(249),
        n(16),
        n(62),
        n(67),
        n(51),
        n(104),
        n(38),
        n(152),
        n(42),
        n(63);
      var r = n(22),
        o = (n(61), n(13)),
        c = n(1),
        f = n(9),
        l = n(0),
        h = n(47);
      function d(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? d(Object(source), !0).forEach(function (e) {
                Object(c.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : d(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function v(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return y(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return y(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          }
        };
      }
      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function x(t) {
        l.a.config.errorHandler && l.a.config.errorHandler(t);
      }
      function w(t) {
        return t.then(function (t) {
          return t.default || t;
        });
      }
      function _(t) {
        return (
          t.$options &&
          "function" == typeof t.$options.fetch &&
          !t.$options.fetch.length
        );
      }
      function O(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = t.$children || [],
          o = v(r);
        try {
          for (o.s(); !(e = o.n()).done; ) {
            var c = e.value;
            c.$fetch ? n.push(c) : c.$children && O(c, n);
          }
        } catch (t) {
          o.e(t);
        } finally {
          o.f();
        }
        return n;
      }
      function $(t, e) {
        if (e || !t.options.__hasNuxtData) {
          var n =
            t.options._originDataFn ||
            t.options.data ||
            function () {
              return {};
            };
          (t.options._originDataFn = n),
            (t.options.data = function () {
              var data = n.call(this, this);
              return (
                this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                m(m({}, data), e)
              );
            }),
            (t.options.__hasNuxtData = !0),
            t._Ctor &&
              t._Ctor.options &&
              (t._Ctor.options.data = t.options.data);
        }
      }
      function j(t) {
        return (
          (t.options && t._Ctor === t) ||
            (t.options
              ? ((t._Ctor = t), (t.extendOptions = t.options))
              : ((t = l.a.extend(t))._Ctor = t),
            !t.options.name &&
              t.options.__file &&
              (t.options.name = t.options.__file)),
          t
        );
      }
      function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, r) {
            return Object.keys(t[n]).map(function (o) {
              return e && e.push(r), t[n][o];
            });
          })
        );
      }
      function k(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return C(t, e, "instances");
      }
      function E(t, e) {
        return Array.prototype.concat.apply(
          [],
          t.matched.map(function (t, n) {
            return Object.keys(t.components).reduce(function (r, o) {
              return (
                t.components[o]
                  ? r.push(e(t.components[o], t.instances[o], t, o, n))
                  : delete t.components[o],
                r
              );
            }, []);
          })
        );
      }
      function S(t, e) {
        return Promise.all(
          E(
            t,
            (function () {
              var t = Object(o.a)(
                regeneratorRuntime.mark(function t(n, r, o, c) {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if ("function" != typeof n || n.options) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), n();
                        case 3:
                          n = t.sent;
                        case 4:
                          return (
                            (o.components[c] = n = j(n)),
                            t.abrupt(
                              "return",
                              "function" == typeof e ? e(n, r, o, c) : n
                            )
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n, r, o) {
                return t.apply(this, arguments);
              };
            })()
          )
        );
      }
      function R(t) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(o.a)(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (t.next = 4), S(e);
                  case 4:
                    return t.abrupt(
                      "return",
                      m(
                        m({}, e),
                        {},
                        {
                          meta: C(e).map(function (t, n) {
                            return m(
                              m({}, t.options.meta),
                              (e.matched[n] || {}).meta
                            );
                          })
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function A(t, e) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = Object(o.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var o, c, l, d;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      e.context ||
                        ((e.context = {
                          isStatic: !0,
                          isDev: !1,
                          isHMR: !1,
                          app: e,
                          payload: n.payload,
                          error: n.error,
                          base: e.router.options.base,
                          env: { SOCKET_URL: "http://localhost:8000" }
                        }),
                        n.req && (e.context.req = n.req),
                        n.res && (e.context.res = n.res),
                        n.ssrContext && (e.context.ssrContext = n.ssrContext),
                        (e.context.redirect = function (t, path, n) {
                          if (t) {
                            e.context._redirected = !0;
                            var o = Object(r.a)(path);
                            if (
                              ("number" == typeof t ||
                                ("undefined" !== o && "object" !== o) ||
                                ((n = path || {}),
                                (path = t),
                                (o = Object(r.a)(path)),
                                (t = 302)),
                              "object" === o &&
                                (path = e.router.resolve(path).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                            )
                              throw (
                                ((path = Object(h.d)(path, n)),
                                window.location.replace(path),
                                new Error("ERR_REDIRECT"))
                              );
                            e.context.next({ path: path, query: n, status: t });
                          }
                        }),
                        (e.context.nuxtState = window.__NUXT__)),
                      (t.next = 3),
                      Promise.all([R(n.route), R(n.from)])
                    );
                  case 3:
                    (o = t.sent),
                      (c = Object(f.a)(o, 2)),
                      (l = c[0]),
                      (d = c[1]),
                      n.route && (e.context.route = l),
                      n.from && (e.context.from = d),
                      (e.context.next = n.next),
                      (e.context._redirected = !1),
                      (e.context._errored = !1),
                      (e.context.isHMR = !1),
                      (e.context.params = e.context.route.params || {}),
                      (e.context.query = e.context.route.query || {});
                  case 15:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function D(t, e) {
        return !t.length || e._redirected || e._errored
          ? Promise.resolve()
          : N(t[0], e).then(function () {
              return D(t.slice(1), e);
            });
      }
      function N(t, e) {
        var n;
        return (n =
          2 === t.length
            ? new Promise(function (n) {
                t(e, function (t, data) {
                  t && e.error(t), n((data = data || {}));
                });
              })
            : t(e)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function L(base, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        base = decodeURI(base).slice(0, -1);
        var path = decodeURI(window.location.pathname);
        base && path.startsWith(base) && (path = path.slice(base.length));
        var e = (path || "/") + window.location.search + window.location.hash;
        return Object(h.c)(e);
      }
      function I(t, e) {
        return (function (t, e) {
          for (var n = new Array(t.length), i = 0; i < t.length; i++)
            "object" === Object(r.a)(t[i]) &&
              (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", J(e)));
          return function (e, r) {
            for (
              var path = "",
                data = e || {},
                o = (r || {}).pretty ? F : encodeURIComponent,
                c = 0;
              c < t.length;
              c++
            ) {
              var f = t[c];
              if ("string" != typeof f) {
                var l = data[f.name || "pathMatch"],
                  h = void 0;
                if (null == l) {
                  if (f.optional) {
                    f.partial && (path += f.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + f.name + '" to be defined'
                  );
                }
                if (Array.isArray(l)) {
                  if (!f.repeat)
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(l) +
                        "`"
                    );
                  if (0 === l.length) {
                    if (f.optional) continue;
                    throw new TypeError(
                      'Expected "' + f.name + '" to not be empty'
                    );
                  }
                  for (var d = 0; d < l.length; d++) {
                    if (((h = o(l[d])), !n[c].test(h)))
                      throw new TypeError(
                        'Expected all "' +
                          f.name +
                          '" to match "' +
                          f.pattern +
                          '", but received `' +
                          JSON.stringify(h) +
                          "`"
                      );
                    path += (0 === d ? f.prefix : f.delimiter) + h;
                  }
                } else {
                  if (((h = f.asterisk ? V(l) : o(l)), !n[c].test(h)))
                    throw new TypeError(
                      'Expected "' +
                        f.name +
                        '" to match "' +
                        f.pattern +
                        '", but received "' +
                        h +
                        '"'
                    );
                  path += f.prefix + h;
                }
              } else path += f;
            }
            return path;
          };
        })(
          (function (t, e) {
            var n,
              r = [],
              o = 0,
              c = 0,
              path = "",
              f = (e && e.delimiter) || "/";
            for (; null != (n = B.exec(t)); ) {
              var l = n[0],
                h = n[1],
                d = n.index;
              if (((path += t.slice(c, d)), (c = d + l.length), h))
                path += h[1];
              else {
                var m = t[c],
                  v = n[2],
                  y = n[3],
                  x = n[4],
                  w = n[5],
                  _ = n[6],
                  O = n[7];
                path && (r.push(path), (path = ""));
                var $ = null != v && null != m && m !== v,
                  j = "+" === _ || "*" === _,
                  C = "?" === _ || "*" === _,
                  k = n[2] || f,
                  pattern = x || w;
                r.push({
                  name: y || o++,
                  prefix: v || "",
                  delimiter: k,
                  optional: C,
                  repeat: j,
                  partial: $,
                  asterisk: Boolean(O),
                  pattern: pattern ? H(pattern) : O ? ".*" : "[^" + K(k) + "]+?"
                });
              }
            }
            c < t.length && (path += t.substr(c));
            path && r.push(path);
            return r;
          })(t, e),
          e
        );
      }
      function M(t, e) {
        var n = {},
          r = m(m({}, t), e);
        for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
        return n;
      }
      function U(t) {
        var e;
        if (t.message || "string" == typeof t) e = t.message || t;
        else
          try {
            e = JSON.stringify(t, null, 2);
          } catch (n) {
            e = "[".concat(t.constructor.name, "]");
          }
        return m(
          m({}, t),
          {},
          {
            message: e,
            statusCode:
              t.statusCode ||
              t.status ||
              (t.response && t.response.status) ||
              500
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (t) {
          window.onNuxtReadyCbs.push(t);
        });
      var B = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
        ].join("|"),
        "g"
      );
      function F(t, e) {
        var n = e ? /[?#]/g : /[/?#]/g;
        return encodeURI(t).replace(n, function (t) {
          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function V(t) {
        return F(t, !0);
      }
      function K(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function H(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function J(t) {
        return t && t.sensitive ? "" : "i";
      }
      function z(t, e, n) {
        t.$options[e] || (t.$options[e] = []),
          t.$options[e].includes(n) || t.$options[e].push(n);
      }
      var Q = h.b,
        W = (h.e, h.a);
      function X(t) {
        try {
          window.history.scrollRestoration = t;
        } catch (t) {}
      }
    },
    48: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return Tt;
      }),
        n.d(e, "a", function () {
          return N;
        });
      n(41), n(35), n(11), n(61);
      var r = n(13),
        o = n(1),
        c = n(0),
        f = n(218),
        l = n(143),
        h = n.n(l),
        d = n(73),
        m = n.n(d),
        v = n(144),
        y = n(47),
        x = n(3);
      "scrollRestoration" in window.history &&
        (Object(x.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(x.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(x.u)("manual");
        }));
      function w(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function _(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? w(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : w(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var O = function () {};
      c.a.use(v.a);
      var $ = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (t, e, n) {
          var r = !1,
            o = t !== e;
          n
            ? (r = n)
            : o &&
              (function (t) {
                var e = Object(x.g)(t);
                if (1 === e.length) {
                  var n = e[0].options;
                  return !1 !== (void 0 === n ? {} : n).scrollToTop;
                }
                return e.some(function (t) {
                  var e = t.options;
                  return e && e.scrollToTop;
                });
              })(t) &&
              (r = { x: 0, y: 0 });
          var c = window.$nuxt;
          return (
            (!o || (t.path === e.path && t.hash !== e.hash)) &&
              c.$nextTick(function () {
                return c.$emit("triggerScroll");
              }),
            new Promise(function (e) {
              c.$once("triggerScroll", function () {
                if (t.hash) {
                  var n = t.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (t) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                e(r);
              });
            })
          );
        },
        routes: [
          {
            path: "/patient-id",
            component: function () {
              return Object(x.m)(
                Promise.all([n.e(9), n.e(4)]).then(n.bind(null, 835))
              );
            },
            name: "patient-id"
          },
          {
            path: "/reports",
            component: function () {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(10), n.e(5)]).then(n.bind(null, 836))
              );
            },
            name: "reports"
          },
          {
            path: "/signin",
            component: function () {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 837))
              );
            },
            name: "signin"
          },
          {
            path: "/",
            component: function () {
              return Object(x.m)(
                Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 838))
              );
            },
            name: "index"
          }
        ],
        fallback: !1
      };
      function j(t, e) {
        var base = (e.app && e.app.basePath) || $.base,
          n = new v.a(_(_({}, $), {}, { base: base })),
          r = n.push;
        n.push = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : O,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return r.call(this, t, e, n);
        };
        var o = n.resolve.bind(n);
        return (
          (n.resolve = function (t, e, n) {
            return "string" == typeof t && (t = Object(y.c)(t)), o(t, e, n);
          }),
          n
        );
      }
      n(59);
      var C = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 }
          },
          render: function (t, e) {
            var n = e.parent,
              data = e.data,
              r = e.props,
              o = n.$createElement;
            data.nuxtChild = !0;
            for (
              var c = n,
                f = n.$nuxt.nuxt.transitions,
                l = n.$nuxt.nuxt.defaultTransition,
                h = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && h++, (n = n.$parent);
            data.nuxtChildDepth = h;
            var d = f[h] || l,
              m = {};
            k.forEach(function (t) {
              void 0 !== d[t] && (m[t] = d[t]);
            });
            var v = {};
            E.forEach(function (t) {
              "function" == typeof d[t] && (v[t] = d[t].bind(c));
            });
            var y = v.beforeEnter;
            if (
              ((v.beforeEnter = function (t) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  y)
                )
                  return y.call(c, t);
              }),
              !1 === d.css)
            ) {
              var x = v.leave;
              (!x || x.length < 2) &&
                (v.leave = function (t, e) {
                  x && x.call(c, t), c.$nextTick(e);
                });
            }
            var w = o("routerView", data);
            return (
              r.keepAlive &&
                (w = o("keep-alive", { props: r.keepAliveProps }, [w])),
              o("transition", { props: m, on: v }, [w])
            );
          }
        },
        k = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass"
        ],
        E = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled"
        ],
        S = {
          layout: "empty",
          props: { error: { type: Object, default: null } },
          data: function () {
            return {
              pageNotFound: "404 Not Found",
              otherError: "An error occurred"
            };
          },
          head: function () {
            return {
              title:
                404 === this.error.statusCode
                  ? this.pageNotFound
                  : this.otherError
            };
          }
        },
        R = (n(258), n(40)),
        P = n(46),
        A = n.n(P),
        T = n(319),
        D = Object(R.a)(
          S,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "v-app",
              { attrs: { dark: "" } },
              [
                404 === t.error.statusCode
                  ? n("h1", [t._v("\n    " + t._s(t.pageNotFound) + "\n  ")])
                  : n("h1", [t._v("\n    " + t._s(t.otherError) + "\n  ")]),
                t._v(" "),
                n("NuxtLink", { attrs: { to: "/" } }, [
                  t._v("\n    Home page\n  ")
                ])
              ],
              1
            );
          },
          [],
          !1,
          null,
          "bfedb7fe",
          null
        ),
        N = D.exports;
      A()(D, { VApp: T.a });
      n(16), n(62), n(38);
      var L = n(9),
        I = {
          name: "Nuxt",
          components: { NuxtChild: C, NuxtError: N },
          props: {
            nuxtChildKey: { type: String, default: void 0 },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
            name: { type: String, default: "default" }
          },
          errorCaptured: function (t) {
            this.displayingNuxtError &&
              ((this.errorFromNuxtError = t), this.$forceUpdate());
          },
          computed: {
            routerViewKey: function () {
              if (
                void 0 !== this.nuxtChildKey ||
                this.$route.matched.length > 1
              )
                return (
                  this.nuxtChildKey ||
                  Object(x.c)(this.$route.matched[0].path)(this.$route.params)
                );
              var t = Object(L.a)(this.$route.matched, 1)[0];
              if (!t) return this.$route.path;
              var e = t.components.default;
              if (e && e.options) {
                var n = e.options;
                if (n.key)
                  return "function" == typeof n.key
                    ? n.key(this.$route)
                    : n.key;
              }
              return /\/$/.test(t.path)
                ? this.$route.path
                : this.$route.path.replace(/\/$/, "");
            }
          },
          beforeCreate: function () {
            c.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
          },
          render: function (t) {
            var e = this;
            return this.nuxt.err
              ? this.errorFromNuxtError
                ? (this.$nextTick(function () {
                    return (e.errorFromNuxtError = !1);
                  }),
                  t("div", {}, [
                    t("h2", "An error occurred while showing the error page"),
                    t(
                      "p",
                      "Unfortunately an error occurred and while showing the error page another error occurred"
                    ),
                    t(
                      "p",
                      "Error details: ".concat(
                        this.errorFromNuxtError.toString()
                      )
                    ),
                    t("nuxt-link", { props: { to: "/" } }, "Go back to home")
                  ]))
                : ((this.displayingNuxtError = !0),
                  this.$nextTick(function () {
                    return (e.displayingNuxtError = !1);
                  }),
                  t(N, { props: { error: this.nuxt.err } }))
              : t("NuxtChild", { key: this.routerViewKey, props: this.$props });
          }
        },
        M =
          (n(51),
          n(63),
          n(58),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              }
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var t = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return t.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (t) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(t)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (t) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + t))),
                  this
                );
              },
              decrease: function (t) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - t))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var t = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (t.show = !1),
                      t.$nextTick(function () {
                        (t.percent = 0), (t.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (t) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var t = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    t.skipTimerCount > 0
                      ? t.skipTimerCount--
                      : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous &&
                          (t.percent >= 100 || t.percent <= 0) &&
                          ((t.skipTimerCount = 1), (t.reversed = !t.reversed)));
                  }, 100));
              }
            },
            render: function (t) {
              var e = t(!1);
              return (
                this.show &&
                  (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed
                    },
                    style: { width: this.percent + "%", left: this.left }
                  })),
                e
              );
            }
          }),
        U =
          (n(262),
          Object(R.a)(M, undefined, undefined, !1, null, null, null).exports),
        B = {
          components: { Banner: n(141).default },
          data: function () {
            return { fixed: !1, title: "Sensors" };
          }
        },
        F = n(322),
        V = n(323),
        K = Object(R.a)(
          B,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "v-app",
              { attrs: { light: "" } },
              [
                n(
                  "v-main",
                  [n("Banner"), t._v(" "), n("v-container", [n("nuxt")], 1)],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ),
        H = K.exports;
      A()(K, { Banner: n(141).default }),
        A()(K, { VApp: T.a, VContainer: F.a, VMain: V.a });
      var J = {
          data: function () {
            return {};
          }
        },
        z = Object(R.a)(
          J,
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e(
              "v-app",
              { attrs: { light: "" } },
              [
                e(
                  "v-main",
                  { staticClass: "d-flex justify-center align-center" },
                  [e("v-container", [e("nuxt")], 1)],
                  1
                )
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ),
        Q = z.exports;
      function W(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return X(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return X(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          }
        };
      }
      function X(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      A()(z, { VApp: T.a, VContainer: F.a, VMain: V.a });
      var Y = { _default: Object(x.s)(H), _signin: Object(x.s)(Q) },
        G = {
          render: function (t, e) {
            var n = t("NuxtLoading", { ref: "loading" }),
              r = t(this.layout || "nuxt"),
              o = t(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              c = t(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (t) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    }
                  }
                },
                [o]
              );
            return t("div", { domProps: { id: "__nuxt" } }, [n, c]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0
            };
          },
          beforeCreate: function () {
            c.a.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.$loading = t.$refs.loading;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
            isPreview: function () {
              return Boolean(this.$options.previewData);
            }
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var t = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function e() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((n = Object(x.h)(t.$route)).length) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              t.$loading.start(),
                              (r = n.map(function (e) {
                                var p = [];
                                if (
                                  (e.$options.fetch &&
                                    e.$options.fetch.length &&
                                    p.push(
                                      Object(x.q)(e.$options.fetch, t.context)
                                    ),
                                  e.$fetch)
                                )
                                  p.push(e.$fetch());
                                else {
                                  var n,
                                    r = W(
                                      Object(x.e)(e.$vnode.componentInstance)
                                    );
                                  try {
                                    for (r.s(); !(n = r.n()).done; ) {
                                      var component = n.value;
                                      p.push(component.$fetch());
                                    }
                                  } catch (t) {
                                    r.e(t);
                                  } finally {
                                    r.f();
                                  }
                                }
                                return (
                                  e.$options.asyncData &&
                                    p.push(
                                      Object(x.q)(
                                        e.$options.asyncData,
                                        t.context
                                      ).then(function (t) {
                                        for (var n in t)
                                          c.a.set(e.$data, n, t[n]);
                                      })
                                    ),
                                  Promise.all(p)
                                );
                              })),
                              (e.prev = 5),
                              (e.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            e.next = 15;
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(5)),
                              t.$loading.fail(e.t0),
                              Object(x.k)(e.t0),
                              t.error(e.t0);
                          case 15:
                            t.$loading.finish();
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var t = (N.options || N).layout;
                "function" == typeof t && (t = t(this.context)),
                  this.setLayout(t);
              }
            },
            setLayout: function (t) {
              return (
                (t && Y["_" + t]) || (t = "default"),
                (this.layoutName = t),
                (this.layout = Y["_" + t]),
                this.layout
              );
            },
            loadLayout: function (t) {
              return (
                (t && Y["_" + t]) || (t = "default"),
                Promise.resolve(Y["_" + t])
              );
            }
          },
          components: { NuxtLoading: U }
        },
        Z = {
          Banner: function () {
            return Promise.resolve()
              .then(n.bind(null, 141))
              .then(function (t) {
                return t.default || t;
              });
          }
        };
      for (var tt in Z)
        c.a.component(tt, Z[tt]), c.a.component("Lazy" + tt, Z[tt]);
      var et = n(85),
        nt = {
          theme: {
            dark: !1,
            themes: {
              dark: {
                primary: "#1976d2",
                accent: "#424242",
                secondary: "#ff8f00",
                info: "#26a69a",
                warning: "#ffc107",
                error: "#dd2c00",
                success: "#00e676"
              }
            }
          }
        };
      c.a.use(et.a, {});
      var ot = function (t) {
          var e = "function" == typeof nt ? nt(t) : nt;
          (e.icons = e.icons || {}), (e.icons.iconfont = "mdi");
          var n = new et.a(e);
          (t.app.vuetify = n), (t.$vuetify = n.framework);
        },
        it = n(145),
        at = n.n(it),
        st = (n(146), n(22));
      function ct(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return ut(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return ut(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          }
        };
      }
      function ut(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      function ft(t, e, n) {
        return t.find(function (t) {
          return n ? t[e] === n : t[e];
        });
      }
      var meta = n(221),
        pt = function (t) {
          !(function (t, e) {
            if ("function" != typeof t)
              for (var n in e) {
                var r = e[n];
                if (Array.isArray(r)) {
                  t[n] = t[n] || [];
                  var o,
                    c = ct(r);
                  try {
                    for (c.s(); !(o = c.n()).done; ) {
                      var f = o.value;
                      (f.hid && ft(t[n], "hid", f.hid)) ||
                        (f.name && ft(t[n], "name", f.name)) ||
                        t[n].push(f);
                    }
                  } catch (t) {
                    c.e(t);
                  } finally {
                    c.f();
                  }
                } else if ("object" === Object(st.a)(r))
                  for (var l in ((t[n] = t[n] || {}), r)) t[n][l] = r[l];
                else void 0 === t[n] && (t[n] = r);
              }
            else
              console.warn(
                "Cannot merge meta. Avoid using head as a function!"
              );
          })(t.app.head, meta);
        },
        lt = function (t, e) {
          return ht.apply(this, arguments);
        };
      function ht() {
        return (ht = Object(r.a)(
          regeneratorRuntime.mark(function t(e, n) {
            var r;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (r = {
                      "64x64": "/_nuxt/icons/icon_64x64.5f6a36.png",
                      "120x120": "/_nuxt/icons/icon_120x120.5f6a36.png",
                      "144x144": "/_nuxt/icons/icon_144x144.5f6a36.png",
                      "152x152": "/_nuxt/icons/icon_152x152.5f6a36.png",
                      "192x192": "/_nuxt/icons/icon_192x192.5f6a36.png",
                      "384x384": "/_nuxt/icons/icon_384x384.5f6a36.png",
                      "512x512": "/_nuxt/icons/icon_512x512.5f6a36.png",
                      ipad_1536x2048:
                        "/_nuxt/icons/splash_ipad_1536x2048.5f6a36.png",
                      ipadpro9_1536x2048:
                        "/_nuxt/icons/splash_ipadpro9_1536x2048.5f6a36.png",
                      ipadpro10_1668x2224:
                        "/_nuxt/icons/splash_ipadpro10_1668x2224.5f6a36.png",
                      ipadpro12_2048x2732:
                        "/_nuxt/icons/splash_ipadpro12_2048x2732.5f6a36.png",
                      iphonese_640x1136:
                        "/_nuxt/icons/splash_iphonese_640x1136.5f6a36.png",
                      iphone6_50x1334:
                        "/_nuxt/icons/splash_iphone6_50x1334.5f6a36.png",
                      iphoneplus_1080x1920:
                        "/_nuxt/icons/splash_iphoneplus_1080x1920.5f6a36.png",
                      iphonex_1125x2436:
                        "/_nuxt/icons/splash_iphonex_1125x2436.5f6a36.png",
                      iphonexr_828x1792:
                        "/_nuxt/icons/splash_iphonexr_828x1792.5f6a36.png",
                      iphonexsmax_1242x2688:
                        "/_nuxt/icons/splash_iphonexsmax_1242x2688.5f6a36.png"
                    }),
                      n("icon", function (t) {
                        return r[t + "x" + t] || "";
                      });
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var mt = n(86),
        vt = n.n(mt),
        bt = n(222),
        yt = n.n(bt);
      function xt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function gt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? xt(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : xt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      function wt(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return _t(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _t(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[i++] };
              },
              e: function (t) {
                throw t;
              },
              f: r
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          c = !0,
          f = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (f = !0), (o = t);
          },
          f: function () {
            try {
              c || null == n.return || n.return();
            } finally {
              if (f) throw o;
            }
          }
        };
      }
      function _t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n;
      }
      for (
        var Ot = {
            setBaseURL: function (t) {
              this.defaults.baseURL = t;
            },
            setHeader: function (t, e) {
              var n,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                o = wt(Array.isArray(r) ? r : [r]);
              try {
                for (o.s(); !(n = o.n()).done; ) {
                  var c = n.value;
                  if (!e) return void delete this.defaults.headers[c][t];
                  this.defaults.headers[c][t] = e;
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
            },
            setToken: function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = t ? (e ? e + " " : "") + t : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest: function (t) {
              this.interceptors.request.use(function (e) {
                return t(e) || e;
              });
            },
            onResponse: function (t) {
              this.interceptors.response.use(function (e) {
                return t(e) || e;
              });
            },
            onRequestError: function (t) {
              this.interceptors.request.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onResponseError: function (t) {
              this.interceptors.response.use(void 0, function (e) {
                return t(e) || Promise.reject(e);
              });
            },
            onError: function (t) {
              this.onRequestError(t), this.onResponseError(t);
            },
            create: function (t) {
              return kt(yt()(t, this.defaults));
            }
          },
          $t = function () {
            var t = Ct[jt];
            Ot["$" + t] = function () {
              return this[t].apply(this, arguments).then(function (t) {
                return t && t.data;
              });
            };
          },
          jt = 0,
          Ct = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch"
          ];
        jt < Ct.length;
        jt++
      )
        $t();
      var kt = function (t) {
          var e = vt.a.create(t);
          return (
            (e.CancelToken = vt.a.CancelToken),
            (e.isCancel = vt.a.isCancel),
            (function (t) {
              for (var e in Ot) t[e] = Ot[e].bind(t);
            })(e),
            e.onRequest(function (t) {
              t.headers = gt(gt({}, e.defaults.headers.common), t.headers);
            }),
            Et(e),
            e
          );
        },
        Et = function (t) {
          var e = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {}
            },
            n = function () {
              var t = "undefined" != typeof window && window.$nuxt;
              return t && t.$loading && t.$loading.set ? t.$loading : e;
            },
            r = 0;
          t.onRequest(function (t) {
            (t && !1 === t.progress) || r++;
          }),
            t.onResponse(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (--r <= 0 && ((r = 0), n().finish()));
            }),
            t.onError(function (t) {
              (t && t.config && !1 === t.config.progress) ||
                (r--,
                vt.a.isCancel(t)
                  ? r <= 0 && ((r = 0), n().finish())
                  : (n().fail(), n().finish()));
            });
          var o = function (t) {
            if (r && t.total) {
              var progress = (100 * t.loaded) / (t.total * r);
              n().set(Math.min(100, progress));
            }
          };
          (t.defaults.onUploadProgress = o),
            (t.defaults.onDownloadProgress = o);
        },
        St = function (t, e) {
          var n = (t.$config && t.$config.axios) || {},
            r =
              n.browserBaseURL ||
              n.browserBaseUrl ||
              n.baseURL ||
              n.baseUrl ||
              "http://localhost:8000/v1";
          var o = kt({
            baseURL: r,
            headers: {
              common: { Accept: "application/json, text/plain, */*" },
              delete: {},
              get: {},
              head: {},
              post: {},
              put: {},
              patch: {}
            }
          });
          (t.$axios = o), e("axios", o);
        };
      function Rt(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, n);
        }
        return e;
      }
      function Pt(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? Rt(Object(source), !0).forEach(function (e) {
                Object(o.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : Rt(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      c.a.component(h.a.name, h.a),
        c.a.component(
          m.a.name,
          Pt(
            Pt({}, m.a),
            {},
            {
              render: function (t, e) {
                return (
                  m.a._warned ||
                    ((m.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  m.a.render(t, e)
                );
              }
            }
          )
        ),
        c.a.component(C.name, C),
        c.a.component("NChild", C),
        c.a.component(I.name, I),
        Object.defineProperty(c.a.prototype, "$nuxt", {
          get: function () {
            return this.$root.$options.$nuxt;
          },
          configurable: !0
        }),
        c.a.use(f.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid"
        });
      var At = {
        name: "page",
        mode: "out-in",
        appear: !0,
        appearClass: "appear",
        appearActiveClass: "appear-active",
        appearToClass: "appear-to"
      };
      function Tt(t) {
        return Dt.apply(this, arguments);
      }
      function Dt() {
        return (Dt = Object(r.a)(
          regeneratorRuntime.mark(function t(e) {
            var n,
              r,
              o,
              f,
              l,
              path,
              h,
              d = arguments;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (h = function (t, e) {
                        if (!t)
                          throw new Error(
                            "inject(key, value) has no key provided"
                          );
                        if (void 0 === e)
                          throw new Error(
                            "inject('".concat(
                              t,
                              "', value) has no value provided"
                            )
                          );
                        (o[(t = "$" + t)] = e),
                          o.context[t] || (o.context[t] = e);
                        var n = "__nuxt_" + t + "_installed__";
                        c.a[n] ||
                          ((c.a[n] = !0),
                          c.a.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              c.a.prototype,
                              t
                            ) ||
                              Object.defineProperty(c.a.prototype, t, {
                                get: function () {
                                  return this.$root.$options[t];
                                }
                              });
                          }));
                      }),
                      (n = d.length > 1 && void 0 !== d[1] ? d[1] : {}),
                      (t.next = 4),
                      j(0, n)
                    );
                  case 4:
                    return (
                      (r = t.sent),
                      (o = Pt(
                        {
                          head: {
                            titleTemplate: "%s - jumpersbow Home",
                            title: "home",
                            meta: [
                              { charset: "utf-8" },
                              {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1"
                              },
                              {
                                hid: "description",
                                name: "description",
                                content: ""
                              },
                              { hid: "charset", charset: "utf-8" },
                              {
                                hid: "mobile-web-app-capable",
                                name: "mobile-web-app-capable",
                                content: "yes"
                              },
                              {
                                hid: "apple-mobile-web-app-title",
                                name: "apple-mobile-web-app-title",
                                content: "sensors"
                              },
                              {
                                hid: "og:type",
                                name: "og:type",
                                property: "og:type",
                                content: "website"
                              },
                              {
                                hid: "og:title",
                                name: "og:title",
                                property: "og:title",
                                content: "sensors"
                              },
                              {
                                hid: "og:site_name",
                                name: "og:site_name",
                                property: "og:site_name",
                                content: "sensors"
                              },
                              {
                                hid: "og:description",
                                name: "og:description",
                                property: "og:description",
                                content:
                                  "```bash\r # install dependencies\r $ npm install"
                              }
                            ],
                            link: [
                              {
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.ico"
                              },
                              {
                                hid: "shortcut-icon",
                                rel: "shortcut icon",
                                href: "/_nuxt/icons/icon_64x64.5f6a36.png"
                              },
                              {
                                hid: "apple-touch-icon",
                                rel: "apple-touch-icon",
                                href: "/_nuxt/icons/icon_512x512.5f6a36.png",
                                sizes: "512x512"
                              },
                              {
                                rel: "manifest",
                                href: "/_nuxt/manifest.ff0e3045.json",
                                hid: "manifest"
                              },
                              {
                                rel: "stylesheet",
                                type: "text/css",
                                href:
                                  "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"
                              },
                              {
                                rel: "stylesheet",
                                type: "text/css",
                                href:
                                  "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
                              }
                            ],
                            style: [],
                            script: [],
                            htmlAttrs: { lang: "en" }
                          },
                          router: r,
                          nuxt: {
                            defaultTransition: At,
                            transitions: [At],
                            setTransitions: function (t) {
                              return (
                                Array.isArray(t) || (t = [t]),
                                (t = t.map(function (t) {
                                  return (t = t
                                    ? "string" == typeof t
                                      ? Object.assign({}, At, { name: t })
                                      : Object.assign({}, At, t)
                                    : At);
                                })),
                                (this.$options.nuxt.transitions = t),
                                t
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function (t) {
                              (t = t || null),
                                (o.context._errored = Boolean(t)),
                                (t = t ? Object(x.p)(t) : null);
                              var n = o.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = t),
                                e && (e.nuxt.error = t),
                                t
                              );
                            }
                          }
                        },
                        G
                      )),
                      (f = e
                        ? e.next
                        : function (t) {
                            return o.router.push(t);
                          }),
                      e
                        ? (l = r.resolve(e.url).route)
                        : ((path = Object(x.f)(r.options.base, r.options.mode)),
                          (l = r.resolve(path).route)),
                      (t.next = 10),
                      Object(x.t)(o, {
                        route: l,
                        next: f,
                        error: o.nuxt.error.bind(o),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e
                      })
                    );
                  case 10:
                    h("config", n),
                      (o.context.enablePreview = function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        (o.previewData = Object.assign({}, t)), h("preview", t);
                      }),
                      (t.next = 15);
                    break;
                  case 15:
                    return (t.next = 18), ot(o.context);
                  case 18:
                    if ("function" != typeof at.a) {
                      t.next = 21;
                      break;
                    }
                    return (t.next = 21), at()(o.context, h);
                  case 21:
                    return (t.next = 24), pt(o.context);
                  case 24:
                    return (t.next = 27), lt(o.context, h);
                  case 27:
                    return (t.next = 30), St(o.context, h);
                  case 30:
                    (o.context.enablePreview = function () {
                      console.warn(
                        "You cannot call enablePreview() outside a plugin."
                      );
                    }),
                      (t.next = 34);
                    break;
                  case 34:
                    return t.abrupt("return", { app: o, router: r });
                  case 35:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    }
  },
  [[232, 7, 2, 8]]
]);
