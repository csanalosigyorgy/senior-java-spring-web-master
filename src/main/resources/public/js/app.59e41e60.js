(function (t) {
    function e(e) {
        for (var n, a, u = e[0], s = e[1], c = e[2], l = 0, f = []; l < u.length; l++) a = u[l], Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]), o[a] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        p && p(e);
        while (f.length) f.shift()();
        return i.push.apply(i, c || []), r()
    }

    function r() {
        for (var t, e = 0; e < i.length; e++) {
            for (var r = i[e], n = !0, a = 1; a < r.length; a++) {
                var s = r[a];
                0 !== o[s] && (n = !1)
            }
            n && (i.splice(e--, 1), t = u(u.s = r[0]))
        }
        return t
    }

    var n = {}, o = {app: 0}, i = [];

    function a(t) {
        return u.p + "js/" + ({about: "about"}[t] || t) + "." + {about: "2476e70a"}[t] + ".js"
    }

    function u(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(r.exports, r, r.exports, u), r.l = !0, r.exports
    }

    u.e = function (t) {
        var e = [], r = o[t];
        if (0 !== r) if (r) e.push(r[2]); else {
            var n = new Promise((function (e, n) {
                r = o[t] = [e, n]
            }));
            e.push(r[2] = n);
            var i, s = document.createElement("script");
            s.charset = "utf-8", s.timeout = 120, u.nc && s.setAttribute("nonce", u.nc), s.src = a(t);
            var c = new Error;
            i = function (e) {
                s.onerror = s.onload = null, clearTimeout(l);
                var r = o[t];
                if (0 !== r) {
                    if (r) {
                        var n = e && ("load" === e.type ? "missing" : e.type), i = e && e.target && e.target.src;
                        c.message = "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")", c.name = "ChunkLoadError", c.type = n, c.request = i, r[1](c)
                    }
                    o[t] = void 0
                }
            };
            var l = setTimeout((function () {
                i({type: "timeout", target: s})
            }), 12e4);
            s.onerror = s.onload = i, document.head.appendChild(s)
        }
        return Promise.all(e)
    }, u.m = t, u.c = n, u.d = function (t, e, r) {
        u.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, u.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, u.t = function (t, e) {
        if (1 & e && (t = u(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (u.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) u.d(r, n, function (e) {
            return t[e]
        }.bind(null, n));
        return r
    }, u.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return u.d(e, "a", e), e
    }, u.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, u.p = "/", u.oe = function (t) {
        throw console.error(t), t
    };
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [], c = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var l = 0; l < s.length; l++) e(s[l]);
    var p = c;
    i.push([0, "chunk-vendors"]), r()
})({
    0: function (t, e, r) {
        t.exports = r("cd49")
    }, "0e2a": function (t, e, r) {
        "use strict";
        var n = r("9040"), o = r.n(n);
        o.a
    }, "21bb": function (t, e, r) {
        "use strict";
        var n = r("7a98"), o = r.n(n);
        o.a
    }, "5c0b": function (t, e, r) {
        "use strict";
        var n = r("e332"), o = r.n(n);
        o.a
    }, "5cc2": function (t, e, r) {
        "use strict";
        var n = r("d7b1"), o = r.n(n);
        o.a
    }, "7a98": function (t, e, r) {
    }, 9040: function (t, e, r) {
    }, cd49: function (t, e, r) {
        "use strict";
        r.r(e);
        var n = r("2b0e"), o = function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return r("div", {attrs: {id: "app"}}, [r("div", {attrs: {id: "nav"}}, [r("router-link", {attrs: {to: "/"}}, [t._v("Home")]), t._v("\n        |\n        "), r("router-link", {attrs: {to: "/about"}}, [t._v("About")])], 1), r("router-view")], 1)
                }, i = [], a = r("9ab4"), u = (r("66c4"), r("60a3")), s = function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }

                    return Object(a["c"])(e, t), e = Object(a["b"])([u["a"]], e), e
                }(u["c"]), c = s, l = c, p = (r("5c0b"), r("2877")), f = Object(p["a"])(l, o, i, !1, null, null, null),
                d = f.exports, h = r("8c4f"), b = function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return r("div", {staticClass: "home"}, [r("vue-single-upload", {
                        ref: "singleUpload",
                        staticClass: "file-upload",
                        on: {
                            finished: function (e) {
                                return t.onUploadFinished()
                            }
                        }
                    }), r("image-list", {ref: "imagelist", staticClass: "mt-5"})], 1)
                }, m = [], v = function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return r("form", {ref: "dz", staticClass: "dropzone"}, [t._m(0)])
                }, y = [function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return r("div", {staticClass: "fallback"}, [r("input", {
                        attrs: {
                            name: "file",
                            type: "file",
                            multiple: ""
                        }
                    })])
                }], g = r("79e3"), O = r.n(g), j = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.myDropzone = null, e
                    }

                    return Object(a["c"])(e, t), e.prototype.mounted = function () {
                        var t = this;
                        this.myDropzone = new O.a(this.$refs.dz, {
                            uploadMultiple: !1,
                            clickable: !0,
                            addRemoveLinks: !0,
                            url: "/api/file/post"
                        }), this.myDropzone.on("success", (function (e, r) {
                            t.$emit("finished", e)
                        }))
                    }, e.prototype.destroyed = function () {
                        this.myDropzone && (this.myDropzone.destroy(), this.myDropzone = null)
                    }, e = Object(a["b"])([u["a"]], e), e
                }(u["c"]), w = j, _ = w, E = (r("0e2a"), Object(p["a"])(_, v, y, !1, null, null, null)), P = E.exports,
                S = function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return r("div", [r("table", {staticClass: "table"}, [t._m(0), r("tbody", t._l(t.images, (function (e) {
                        return r("tr", [r("th", {attrs: {scope: "row"}}, [r("img", {
                            attrs: {
                                src: "/api/images/preview/" + e.id,
                                alt: e.name,
                                height: "50px"
                            }
                        })]), r("td", [t._v(t._s(e.id))]), r("td", [t._v(t._s(e.name))]), r("td", [t._v(t._s(e.mimeType))]), r("td", [r("textarea", {
                            attrs: {
                                cols: "50",
                                rows: "7",
                                readonly: ""
                            }
                        }, [t._v(t._s(e.digitalSign))])])])
                    })), 0)])])
                }, k = [function () {
                    var t = this, e = t.$createElement, r = t._self._c || e;
                    return r("thead", [r("tr", [r("th", {attrs: {scope: "col"}}), r("th", {attrs: {scope: "col"}}, [t._v("Id")]), r("th", {attrs: {scope: "col"}}, [t._v("Name")]), r("th", {attrs: {scope: "col"}}, [t._v("Mime type")]), r("th", {attrs: {scope: "col"}}, [t._v("Sign")])])])
                }];

        function D(t) {
            var e = new Error(t);
            return e.name = this.constructor.name, Object.setPrototypeOf(e, Object.getPrototypeOf(this)), e
        }

        D.prototype = Object.create(Error.prototype, {
            constructor: {
                value: Error,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Object.setPrototypeOf ? Object.setPrototypeOf(D, Error) : D.__proto__ = Error;
        var x = D, T = function (t) {
                    function e() {
                        return t.call(this, "Unknown Error") || this
                    }

                    return Object(a["c"])(e, t), e
                }(x), C = function (t) {
                    function e() {
                        return t.call(this, "Network Error") || this
                    }

                    return Object(a["c"])(e, t), e
                }(x), R = function (t) {
                    function e() {
                        return t.call(this, "Not Found") || this
                    }

                    return Object(a["c"])(e, t), e
                }(x), U = function (t) {
                    function e() {
                        return t.call(this, "Internal Server Error") || this
                    }

                    return Object(a["c"])(e, t), e
                }(x), q = function (t) {
                    function e(e, r) {
                        var n = t.call(this, e.statusText) || this;
                        return n.type = r.type, n.key = r.key, n.params = r.params, n.data = r.data, n
                    }

                    return Object(a["c"])(e, t), e
                }(x), z = function () {
                    function t() {
                    }

                    return t.prototype.get = function (t) {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (e) {
                                return [2, this.doRequest("GET", t, null)]
                            }))
                        }))
                    }, t.prototype.post = function (t, e) {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (r) {
                                return [2, this.doRequest("POST", t, e)]
                            }))
                        }))
                    }, t.prototype.put = function (t, e) {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (r) {
                                return [2, this.doRequest("PUT", t, e)]
                            }))
                        }))
                    }, t.prototype.delete = function (t, e) {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (r) {
                                return [2, this.doRequest("DELETE", t, e)]
                            }))
                        }))
                    }, t.prototype.head = function (t) {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (e) {
                                return [2, this.doRequest("HEAD", t, null)]
                            }))
                        }))
                    }, t.prototype.doRequest = function (t, e, r) {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            var n;
                            return Object(a["d"])(this, (function (o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, fetch(e, this.getRequestInitData(t, r))];
                                    case 1:
                                        return n = o.sent(), [3, 3];
                                    case 2:
                                        throw o.sent(), new C;
                                    case 3:
                                        return [2, this.handleResponse(n)]
                                }
                            }))
                        }))
                    }, t.prototype.getRequestInitData = function (t, e) {
                        var r = {method: t}, n = new Headers;
                        return n.set("X-Requested-With", "IqApp"), e && (r.body = JSON.stringify(e), n.set("Content-Type", "application/json")), r.headers = n, r.credentials = "same-origin", r
                    }, t.prototype.handleResponse = function (t) {
                        return Object(a["a"])(this, void 0, Promise, (function () {
                            var e;
                            return Object(a["d"])(this, (function (r) {
                                switch (r.label) {
                                    case 0:
                                        if (!(t.status < 200 || t.status >= 400)) return [3, 5];
                                        if (404 === t.status) throw new R;
                                        e = void 0, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, t.json()];
                                    case 2:
                                        return e = r.sent(), [3, 4];
                                    case 3:
                                        throw r.sent(), new T;
                                    case 4:
                                        throw e && e.type ? "internal_server_error" === e.type ? new U : new q(t, e) : new T;
                                    case 5:
                                        return [2, t.json()]
                                }
                            }))
                        }))
                    }, t
                }(), M = function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.images = [], e.httpService = new z, e
                    }

                    return Object(a["c"])(e, t), e.prototype.refresh = function () {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            var t;
                            return Object(a["d"])(this, (function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.loadData()];
                                    case 1:
                                        return t = e.sent(), t.sort((function (t, e) {
                                            return t.id.localeCompare(e.id)
                                        })), this.images = t, [2]
                                }
                            }))
                        }))
                    }, e.prototype.beforeDestroy = function () {
                        this.images = []
                    }, e.prototype.mounted = function () {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (t) {
                                return this.refresh(), [2]
                            }))
                        }))
                    }, e.prototype.loadData = function () {
                        return Object(a["a"])(this, void 0, Promise, (function () {
                            return Object(a["d"])(this, (function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.httpService.get("/api/images/meta")];
                                    case 1:
                                        return [2, t.sent()]
                                }
                            }))
                        }))
                    }, e = Object(a["b"])([u["a"]], e), e
                }(u["c"]), N = M, $ = N, F = (r("5cc2"), Object(p["a"])($, S, k, !1, null, null, null)), I = F.exports,
                L = function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.fileName = null, e.thumbnailUrl = null, e
                    }

                    return Object(a["c"])(e, t), e.prototype.onUploadFinished = function () {
                        return Object(a["a"])(this, void 0, void 0, (function () {
                            return Object(a["d"])(this, (function (t) {
                                return console.log("UploadFinished"), this.$refs.imagelist.refresh(), [2]
                            }))
                        }))
                    }, Object(a["b"])([Object(u["b"])()], e.prototype, "msg", void 0), Object(a["b"])([Object(u["b"])()], e.prototype, "showDetails", void 0), e = Object(a["b"])([Object(u["a"])({
                        components: {
                            VueSingleUpload: P,
                            ImageList: I
                        }
                    })], e), e
                }(u["c"]), A = L, B = A, H = (r("21bb"), Object(p["a"])(B, b, m, !1, null, null, null)), J = H.exports;
        n["default"].use(h["a"]);
        var G = new h["a"]({
            mode: "history",
            base: "/",
            routes: [{path: "/", name: "home", component: J}, {
                path: "/about", name: "about", component: function () {
                    return r.e("about").then(r.bind(null, "f820"))
                }
            }]
        }), W = r("2f62");
        n["default"].use(W["a"]);
        var K = new W["a"].Store({state: {}, mutations: {}, actions: {}}), V = r("a925"), X = function (t, e) {
            if (void 0 === e && (e = 1), !t) return "";
            var r = parseFloat(t);
            if (isNaN(r)) return "";
            if (0 === r) return "0";
            var n = "B";
            r > 1024 && (r /= 1024, n = "KB"), r > 1024 && (r /= 1024, n = "MB"), r > 1024 && (r /= 1024, n = "GB");
            var o = Math.pow(10, e);
            return Math.round(r * o) / o + " " + n
        }, Q = function (t) {
            var e = parseFloat(t);
            return Math.round(1e4 * e) / 100 + "%"
        }, Y = {
            plugin: {
                uploader: {
                    button: {
                        ackerror: "Try again",
                        cancel: "Cancel",
                        cancelUpload: "Cancel upload",
                        delete: "New upload"
                    },
                    error: {
                        abortedByUser: "Aborted by user",
                        communicationError: "Communication error",
                        internalError: "Internal error",
                        serverError: "Server error"
                    },
                    label: {
                        downloadLink: "Download",
                        error: "Error",
                        fileName: "Name",
                        fileSize: "Size",
                        mimeType: "Mime type",
                        progress: "Progress",
                        state: "State"
                    },
                    result: {
                        abortedByUser: "Aborted by user",
                        communicationError: "Communication error",
                        internalError: "Internal error",
                        serverError: "Server error",
                        success: "Success"
                    },
                    selectfile: {
                        modern: {
                            directory: "Drag a directory here, or click this box to select one",
                            simple: "Drag a file here, or click this box to select one"
                        }
                    },
                    state: {
                        finished: "Finished",
                        preparing: "Preparing",
                        processing: "Processing",
                        uploading: "Uploading",
                        waiting: "Waiting"
                    }
                }
            }
        }, Z = g;
        Z.autoDiscover = !1, n["default"].config.productionTip = !1, n["default"].use(V["a"]);
        var tt = new V["a"]({
            locale: "en",
            fallbackLocale: "en",
            messages: {en: Y},
            dateTimeFormats: {
                en: {
                    "date-time": {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                },
                hu: {
                    "date-time": {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                }
            }
        });
        n["default"].filter("byte", X), n["default"].filter("percent", Q), new n["default"]({
            router: G,
            store: K,
            i18n: tt,
            render: function (t) {
                return t(d)
            }
        }).$mount("#app")
    }, d7b1: function (t, e, r) {
    }, e332: function (t, e, r) {
    }
});
//# sourceMappingURL=app.59e41e60.js.map
