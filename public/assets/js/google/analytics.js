// Copyright 2012 Google Inc. All rights reserved.
(function () {
    var data = {
        resource: {
            version: "1",

            macros: [{ function: "__e" }, { function: "__cid" }],
            tags: [
                {
                    function: "__rep",
                    once_per_event: true,
                    vtp_containerId: ["macro", 1],
                    tag_id: 1,
                },
            ],
            predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
            rules: [
                [
                    ["if", 0],
                    ["add", 0],
                ],
            ],
        },
        runtime: [],
    };

    /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa,
        ba = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
            };
        },
        ea = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : { next: ba(a) };
        },
        fa =
            "function" == typeof Object.create
                ? Object.create
                : function (a) {
                      var b = function () {};
                      b.prototype = a;
                      return new b();
                  },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = { a: !0 },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a;
            } catch (a) {}
            ia = !1;
        }
        ha = ia
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                  return a;
              }
            : null;
    }
    var ma = ha,
        na = function (a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (ma) ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d);
                        } else a[c] = b[c];
            a.tj = b.prototype;
        },
        oa = this || self,
        qa = function (a) {
            return a;
        };
    var ra = function () {},
        sa = function (a) {
            return "function" == typeof a;
        },
        h = function (a) {
            return "string" == typeof a;
        },
        ta = function (a) {
            return "number" == typeof a && !isNaN(a);
        },
        ua = Array.isArray,
        va = function (a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1;
            }
            for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
            return -1;
        },
        wa = function (a, b) {
            if (a && ua(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
        },
        xa = function (a, b) {
            if (!ta(a) || !ta(b) || a > b) (a = 0), (b = 2147483647);
            return Math.floor(Math.random() * (b - a + 1) + a);
        },
        za = function (a, b) {
            for (var c = new ya(), d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
            return !1;
        },
        Ca = function (a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
        },
        Ea = function (a) {
            return (
                !!a &&
                ("[object Arguments]" == Object.prototype.toString.call(a) ||
                    Object.prototype.hasOwnProperty.call(a, "callee"))
            );
        },
        Ha = function (a) {
            return Math.round(Number(a)) || 0;
        },
        Ja = function (a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a;
        },
        Ma = function (a) {
            var b = [];
            if (ua(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b;
        },
        Na = function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : "";
        },
        Oa = function () {
            return new Date(Date.now());
        },
        Pa = function () {
            return Oa().getTime();
        },
        ya = function () {
            this.prefix = "gtm.";
            this.values = {};
        };
    ya.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b;
    };
    ya.prototype.get = function (a) {
        return this.values[this.prefix + a];
    };
    var Qa = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c;
        },
        Ra = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c();
                    } catch (d) {}
                }
            };
        },
        Sa = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        },
        Ta = function (a) {
            for (var b in a) if (a.hasOwnProperty(b)) return !0;
            return !1;
        },
        Ua = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c;
        },
        Va = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
                d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c;
        },
        Wa = /^\w{1,9}$/,
        Xa = function (a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            Ca(a, function (d, e) {
                Wa.test(d) && e && c.push(d);
            });
            return c.join(b);
        };
    var Ya,
        Za = function () {
            if (void 0 === Ya) {
                var a = null,
                    b = oa.trustedTypes;
                if (b && b.createPolicy) {
                    try {
                        a = b.createPolicy("goog#html", {
                            createHTML: qa,
                            createScript: qa,
                            createScriptURL: qa,
                        });
                    } catch (c) {
                        oa.console && oa.console.error(c.message);
                    }
                    Ya = a;
                } else Ya = a;
            }
            return Ya;
        };
    var ab = function (a, b) {
        this.m = b === $a ? a : "";
    };
    ab.prototype.toString = function () {
        return this.m + "";
    };
    var $a = {},
        eb = function (a) {
            var b = Za(),
                c = b ? b.createScriptURL(a) : a;
            return new ab(c, $a);
        };
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var gb;
    a: {
        var hb = oa.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                gb = ib;
                break a;
            }
        }
        gb = "";
    }
    function kb(a) {
        return -1 != gb.indexOf(a);
    }
    var lb = {},
        mb = function (a, b, c) {
            this.m = c === lb ? a : "";
        };
    mb.prototype.toString = function () {
        return this.m.toString();
    };
    var nb = function (a) {
            return a instanceof mb && a.constructor === mb ? a.m : "type_error:SafeHtml";
        },
        ob = function (a) {
            var b = Za(),
                c = b ? b.createHTML(a) : a;
            return new mb(c, null, lb);
        },
        pb = new mb((oa.trustedTypes && oa.trustedTypes.emptyHTML) || "", 0, lb); /*
    
     SPDX-License-Identifier: Apache-2.0
    */
    function qb(a, b) {
        a.src = b instanceof ab && b.constructor === ab ? b.m : "type_error:TrustedResourceUrl";
        var c,
            d,
            e = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document,
            f =
                null === (d = e.querySelector) || void 0 === d
                    ? void 0
                    : d.call(e, "script[nonce]");
        (c = f ? f.nonce || f.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c);
    }
    var rb = function (a, b) {
            var c = function () {};
            c.prototype = a.prototype;
            var d = new c();
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d;
        },
        sb = function (a) {
            var b = a;
            return function () {
                if (b) {
                    var c = b;
                    b = null;
                    c();
                }
            };
        };
    var tb = (function (a) {
        var b = !1,
            c;
        return function () {
            b || ((c = a()), (b = !0));
            return c;
        };
    })(function () {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        var c = a.firstChild.firstChild;
        a.innerHTML = nb(pb);
        return !c.parentElement;
    });
    var l = window,
        B = document,
        ub = navigator,
        vb = B.currentScript && B.currentScript.src,
        wb = function (a, b) {
            var c = l[a];
            l[a] = void 0 === c ? b : c;
            return l[a];
        },
        xb = function (a) {
            var b = B.getElementsByTagName("script")[0] || B.body || B.head;
            b.parentNode.insertBefore(a, b);
        },
        yb = function (a, b) {
            b &&
                (a.addEventListener
                    ? (a.onload = b)
                    : (a.onreadystatechange = function () {
                          a.readyState in { loaded: 1, complete: 1 } &&
                              ((a.onreadystatechange = null), b());
                      }));
        },
        zb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
        Ab = function (a, b, c, d) {
            var e = B.createElement("script");
            d &&
                Ca(d, function (f, g) {
                    f = f.toLowerCase();
                    zb.hasOwnProperty(f) || e.setAttribute(f, g);
                });
            e.type = "text/javascript";
            e.async = !0;
            qb(e, eb(a));
            yb(e, b);
            c && (e.onerror = c);
            xb(e);
            return e;
        },
        Bb = function () {
            if (vb) {
                var a = vb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3;
            }
            return 1;
        },
        Cb = function (a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = (B.body && B.body.lastChild) || B.body || B.head;
            d.parentNode.insertBefore(c, d);
            yb(c, b);
            void 0 !== a && (c.src = a);
            return c;
        },
        Eb = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b();
            };
            d.onerror = function () {
                d.onerror = null;
                c && c();
            };
            d.src = a;
            return d;
        },
        Fb = function (a, b, c, d) {
            a.addEventListener
                ? a.addEventListener(b, c, !!d)
                : a.attachEvent && a.attachEvent("on" + b, c);
        },
        Gb = function (a, b, c) {
            a.removeEventListener
                ? a.removeEventListener(b, c, !1)
                : a.detachEvent && a.detachEvent("on" + b, c);
        },
        G = function (a) {
            l.setTimeout(a, 0);
        },
        Hb = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
        },
        Ib = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b;
        },
        Jb = function (a) {
            var b = B.createElement("div"),
                c = ob("A<div>" + a + "</div>"),
                d = b;
            if (tb()) for (; d.lastChild; ) d.removeChild(d.lastChild);
            d.innerHTML = nb(c);
            b = b.lastChild;
            for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
            return e;
        },
        Kb = function (a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement;
            }
            return null;
        },
        Lb = function (a) {
            var b;
            try {
                b = ub.sendBeacon && ub.sendBeacon(a);
            } catch (c) {}
            b || Eb(a);
        },
        Mb = function (a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c;
        },
        Nb = function (a) {
            var b = B.featurePolicy;
            return b && sa(b.features) ? -1 !== b.features().indexOf(a) : !1;
        }; /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ob = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Pb = function (a) {
            if (null == a) return String(a);
            var b = Ob.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object";
        },
        Qb = function (a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b);
        },
        Rb = function (a) {
            if (!a || "object" != Pb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (
                    a.constructor &&
                    !Qb(a, "constructor") &&
                    !Qb(a.constructor.prototype, "isPrototypeOf")
                )
                    return !1;
            } catch (c) {
                return !1;
            }
            for (var b in a);
            return void 0 === b || Qb(a, b);
        },
        H = function (a, b) {
            var c = b || ("array" == Pb(a) ? [] : {}),
                d;
            for (d in a)
                if (Qb(a, d)) {
                    var e = a[d];
                    "array" == Pb(e)
                        ? ("array" != Pb(c[d]) && (c[d] = []), (c[d] = H(e, c[d])))
                        : Rb(e)
                        ? (Rb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
                        : (c[d] = e);
                }
            return c;
        };
    var Yb = function (a) {
        if (void 0 === a || ua(a) || Rb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0;
        }
        return !1;
    };
    var Zb = (function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b;
                },
            };
        };
        return {
            Mg: a("consent"),
            Ng: a("consent_always_fire"),
            Oe: a("convert_case_to"),
            Pe: a("convert_false_to"),
            Qe: a("convert_null_to"),
            Re: a("convert_true_to"),
            Se: a("convert_undefined_to"),
            dj: a("debug_mode_metadata"),
            fj: a("event_data_overrides"),
            jb: a("function"),
            Bh: a("instance_name"),
            Dh: a("live_only"),
            Eh: a("malware_disabled"),
            Fh: a("metadata"),
            gj: a("original_activity_id"),
            ij: a("original_vendor_template_id"),
            Hh: a("once_per_event"),
            Af: a("once_per_load"),
            kj: a("priority_override"),
            lj: a("respected_consent_types"),
            Ef: a("setup_tags"),
            Gf: a("tag_id"),
            Hf: a("teardown_tags"),
        };
    })();
    var zc;
    var Ac = [],
        Bc = [],
        Cc = [],
        Dc = [],
        Ec = [],
        Fc = {},
        Jc,
        Kc,
        Lc,
        Mc = function (a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = Fc[c],
                e = {},
                f;
            for (f in a)
                if (a.hasOwnProperty(f))
                    if (0 === f.indexOf("vtp_"))
                        d && b && b.Sf && b.Sf(a[f]), (e[void 0 !== d ? f : f.substr(4)] = a[f]);
                    else if (f === Zb.Ng.toString() && a[f]) {
                    }
            d && b && b.Rf && (e.vtp_gtmCachedValues = b.Rf);
            return void 0 !== d ? d(e) : zc(c, e, b);
        },
        Oc = function (a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Nc(a[e], b, c));
            return d;
        },
        Nc = function (a, b, c) {
            if (ua(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Nc(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = Ac[f];
                        if (!g || b.ye(g)) return;
                        c[f] = !0;
                        try {
                            var k = Oc(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = Mc(k, b);
                            Lc && (d = Lc.Vh(d, k));
                        } catch (y) {
                            b.ig && b.ig(y, Number(f)), (d = !1);
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var m = 1; m < a.length; m += 2)
                            d[Nc(a[m], b, c)] = Nc(a[m + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var n = !1, p = 1; p < a.length; p++) {
                            var q = Nc(a[p], b, c);
                            Kc && (n = n || q === Kc.Xc);
                            d.push(q);
                        }
                        return Kc && n ? Kc.Zh(d) : d.join("");
                    case "escape":
                        d = Nc(a[1], b, c);
                        if (Kc && ua(a[1]) && "macro" === a[1][0] && Kc.vi(a)) return Kc.Ki(d);
                        d = String(d);
                        for (var u = 2; u < a.length; u++) $b[a[u]] && (d = $b[a[u]](d));
                        return d;
                    case "tag":
                        var t = a[1];
                        if (!Dc[t]) throw Error("Unable to resolve tag reference " + t + ".");
                        return (d = { Zf: a[2], index: t });
                    case "zb":
                        var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                        r["function"] = a[1];
                        var v = Pc(r, b, c),
                            x = !!a[4];
                        return x || 2 !== v ? x !== (1 === v) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a;
        },
        Pc = function (a, b, c) {
            try {
                return Jc(Oc(a, b, c));
            } catch (d) {
                JSON.stringify(a);
            }
            return 2;
        };
    var Sc = function (a) {
            function b(u) {
                for (var t = 0; t < u.length; t++) d[u[t]] = !0;
            }
            for (var c = [], d = [], e = Qc(a), f = 0; f < Bc.length; f++) {
                var g = Bc[f],
                    k = Rc(g, e);
                if (k) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || []);
                } else null === k && b(g.block || []);
            }
            for (var p = [], q = 0; q < Dc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p;
        },
        Rc = function (a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null;
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var k = b(f[g]);
                if (2 === k) return null;
                if (1 === k) return !1;
            }
            return !0;
        },
        Qc = function (a) {
            var b = [];
            return function (c) {
                void 0 === b[c] && (b[c] = Pc(Cc[c], a));
                return b[c];
            };
        };
    var Tc = {
        Vh: function (a, b) {
            b[Zb.Oe] &&
                "string" === typeof a &&
                (a = 1 == b[Zb.Oe] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Zb.Qe) && null === a && (a = b[Zb.Qe]);
            b.hasOwnProperty(Zb.Se) && void 0 === a && (a = b[Zb.Se]);
            b.hasOwnProperty(Zb.Re) && !0 === a && (a = b[Zb.Re]);
            b.hasOwnProperty(Zb.Pe) && !1 === a && (a = b[Zb.Pe]);
            return a;
        },
    };
    var M = {
        cc: "_ee",
        bd: "_syn_or_mod",
        mj: "_uei",
        Vd: "_eu",
        jj: "_pci",
        Bb: "event_callback",
        Nc: "event_timeout",
        xa: "gtag.config",
        Ha: "gtag.get",
        ra: "purchase",
        zb: "refund",
        cb: "begin_checkout",
        wb: "add_to_cart",
        xb: "remove_from_cart",
        Wg: "view_cart",
        Ue: "add_to_wishlist",
        Ga: "view_item",
        Rb: "view_promotion",
        Ic: "select_promotion",
        yd: "select_item",
        yb: "view_item_list",
        Te: "add_payment_info",
        Vg: "add_shipping_info",
        Ja: "value_key",
        Sa: "value_callback",
        ya: "allow_ad_personalization_signals",
        Yb: "restricted_data_processing",
        Tb: "allow_google_signals",
        Ba: "cookie_expires",
        Vb: "cookie_update",
        $b: "session_duration",
        Rc: "session_engaged_time",
        Ka: "user_properties",
        na: "transport_url",
        R: "ads_data_redaction",
        sa: "user_data",
        Wb: "first_party_collection",
        C: "ad_storage",
        H: "analytics_storage",
        Me: "region",
        Ne: "wait_for_update",
        Aa: "conversion_linker",
        za: "conversion_cookie_prefix",
        ca: "value",
        ba: "currency",
        uf: "trip_type",
        V: "items",
        lf: "passengers",
        Bd: "allow_custom_scripts",
        ac: "session_id",
        sf: "quantity",
        Va: "transaction_id",
        hb: "language",
        Lc: "country",
        Jc: "allow_enhanced_conversions",
        Gd: "aw_merchant_id",
        Ed: "aw_feed_country",
        Fd: "aw_feed_language",
        Dd: "discount",
        aa: "developer_id",
        Sc: "delivery_postal_code",
        Md: "estimated_delivery_date",
        Kd: "shipping",
        Rd: "new_customer",
        Hd: "customer_lifetime_value",
        Ld: "enhanced_conversions",
        Sb: "page_view",
        ma: "linker",
        M: "domains",
        Eb: "decorate_forms",
        hf: "enhanced_conversions_automatic_settings",
        fh: "auto_detection_enabled",
        jf: "ga_temp_client_id",
    };
    (M.zd = "user_engagement"),
        (M.Qg = "app_remove"),
        (M.Rg = "app_store_refund"),
        (M.Sg = "app_store_subscription_cancel"),
        (M.Tg = "app_store_subscription_convert"),
        (M.Ug = "app_store_subscription_renew"),
        (M.Xg = "first_open"),
        (M.Yg = "first_visit"),
        (M.Zg = "in_app_purchase"),
        (M.$g = "session_start"),
        (M.ah = "user_data_login"),
        (M.bh = "user_data_logout"),
        (M.dh = "allow_display_features"),
        (M.Ub = "campaign"),
        (M.We = "campaign_content"),
        (M.Xe = "campaign_id"),
        (M.Ye = "campaign_medium"),
        (M.Ze = "campaign_name"),
        (M.$e = "campaign_source"),
        (M.af = "campaign_term"),
        (M.Ab = "client_id"),
        (M.ka = "cookie_domain"),
        (M.Kc = "cookie_name"),
        (M.eb = "cookie_path"),
        (M.Ia = "cookie_flags"),
        (M.bf = "custom_map"),
        (M.Od = "groups"),
        (M.ej = "non_interaction"),
        (M.Fb = "page_location"),
        (M.kf = "page_path"),
        (M.Ua = "page_referrer"),
        (M.Sd = "page_title"),
        (M.Zb = "send_page_view"),
        (M.ib = "send_to"),
        (M.Td = "session_engaged"),
        (M.Pc = "_logged_in_state"),
        (M.Ud = "session_number"),
        (M.xh = "tracking_id"),
        (M.Wa = "url_passthrough"),
        (M.Db = "accept_incoming"),
        (M.Xb = "url_position"),
        (M.qf = "phone_conversion_number"),
        (M.nf = "phone_conversion_callback"),
        (M.pf = "phone_conversion_css_class"),
        (M.rf = "phone_conversion_options"),
        (M.th = "phone_conversion_ids"),
        (M.sh = "phone_conversion_country_code"),
        (M.Ve = "aw_remarketing"),
        (M.Cd = "aw_remarketing_only"),
        (M.Ad = "gclid"),
        (M.eh = "auid"),
        (M.kh = "affiliation"),
        (M.ff = "tax"),
        (M.Jd = "list_name"),
        (M.ef = "checkout_step"),
        (M.df = "checkout_option"),
        (M.lh = "coupon"),
        (M.mh = "promotions"),
        (M.Gb = "user_id"),
        (M.uh = "retoken"),
        (M.la = "cookie_prefix"),
        (M.cf = "disable_merchant_reported_purchases"),
        (M.jh = "dc_natural_search"),
        (M.ih = "dc_custom_params"),
        (M.qh = "method"),
        (M.wh = "search_term"),
        (M.hh = "content_type"),
        (M.rh = "optimize_id"),
        (M.nh = "experiments"),
        (M.Ta = "google_signals"),
        (M.Oc = "google_tld"),
        (M.Tc = "update"),
        (M.Nd = "firebase_id"),
        (M.Cb = "ga_restrict_domain"),
        (M.Mc = "event_settings"),
        (M.Id = "dynamic_event_settings"),
        (M.bc = "user_data_settings"),
        (M.vh = "screen_name"),
        (M.ph = "_x_19"),
        (M.fb = "_ecid"),
        (M.oh = "_x_20"),
        (M.Qd = "internal_traffic_results"),
        (M.tf = "traffic_type"),
        (M.Qc = "referral_exclusion_definition"),
        (M.Pd = "ignore_referrer"),
        (M.gh = "content_group");
    M.xf = [M.ra, M.zb, M.cb, M.wb, M.xb, M.Wg, M.Ue, M.Ga, M.Rb, M.Ic, M.yb, M.yd, M.Te, M.Vg];
    M.wf = [M.ya, M.Tb, M.Vb];
    M.yf = [M.Ba, M.Nc, M.$b, M.Rc];
    var xd = {},
        yd = function (a, b) {
            xd[a] = xd[a] || [];
            xd[a][b] = !0;
        },
        zd = function (a) {
            for (var b = [], c = xd[a] || [], d = 0; d < c.length; d++)
                c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++)
                b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
                    b[e] || 0
                );
            return b.join("");
        };
    var Ad = function (a) {
        yd("GTM", a);
    };
    var Bd = function (a) {
        this.m = a;
        this.defaultValue = !1;
    };
    var Cd = new Bd(1933),
        Dd = new Bd(1956);
    var Fd = function () {
        var a = Ed,
            b = "we";
        if (a.we && a.hasOwnProperty(b)) return a.we;
        var c = new a();
        a.we = c;
        a.hasOwnProperty(b);
        return c;
    };
    var Ed = function () {
            var a = {};
            this.m = function (b, c) {
                return null != a[b] ? a[b] : c;
            };
            this.o = function () {
                a[Cd.m] = !0;
            };
        },
        Gd = function (a) {
            return Fd().m(a.m, a.defaultValue);
        };
    var Hd = [];
    function Md() {
        var a = wb("google_tag_data", {});
        a.ics ||
            (a.ics = {
                entries: {},
                set: Nd,
                update: Od,
                addListener: Pd,
                notifyListeners: Qd,
                active: !1,
                usedDefault: !1,
            });
        return a.ics;
    }
    function Nd(a, b, c, d, e, f) {
        var g = Md();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var k = g.entries,
                m = k[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    u = { region: p, initial: "granted" === b, update: m.update, quiet: q };
                if ("" !== d || !1 !== m.initial) k[a] = u;
                q &&
                    l.setTimeout(function () {
                        k[a] === u && u.quiet && ((u.quiet = !1), Rd(a), Qd(), yd("TAGGING", 2));
                    }, f);
            }
        }
    }
    function Od(a, b) {
        var c = Md();
        c.active = !0;
        if (void 0 != b) {
            var d = Sd(a),
                e = c.entries,
                f = (e[a] = e[a] || {});
            f.update = "granted" === b;
            var g = Sd(a);
            f.quiet ? ((f.quiet = !1), Rd(a)) : g !== d && Rd(a);
        }
    }
    function Pd(a, b) {
        Hd.push({ me: a, hi: b });
    }
    function Rd(a) {
        for (var b = 0; b < Hd.length; ++b) {
            var c = Hd[b];
            ua(c.me) && -1 !== c.me.indexOf(a) && (c.ng = !0);
        }
    }
    function Qd(a) {
        for (var b = 0; b < Hd.length; ++b) {
            var c = Hd[b];
            if (c.ng) {
                c.ng = !1;
                try {
                    c.hi({ consentEventId: a });
                } catch (d) {}
            }
        }
    }
    var Sd = function (a) {
            var b = Md().entries[a] || {};
            return void 0 !== b.update ? b.update : b.initial;
        },
        Td = function (a) {
            return (Md().entries[a] || {}).initial;
        },
        Ud = function (a) {
            return !(Md().entries[a] || {}).quiet;
        },
        Vd = function () {
            return Gd(Cd) ? Md().active : !1;
        },
        Wd = function () {
            return Md().usedDefault;
        },
        Xd = function (a, b) {
            Md().addListener(a, b);
        },
        Yd = function (a) {
            Md().notifyListeners(a);
        },
        Zd = function (a, b) {
            function c() {
                for (var e = 0; e < b.length; e++) if (!Ud(b[e])) return !0;
                return !1;
            }
            if (c()) {
                var d = !1;
                Xd(b, function (e) {
                    d || c() || ((d = !0), a(e));
                });
            } else a({});
        },
        $d = function (a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var k = d[g];
                    !1 === Sd(k) || e[k] || (f.push(k), (e[k] = !0));
                }
                return f;
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length &&
                Xd(d, function (f) {
                    var g = c();
                    0 < g.length && ((f.me = g), a(f));
                });
        };
    function ae(a) {
        for (var b = [], c = 0; c < be.length; c++) {
            var d = a(be[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
        }
        return b.join("");
    }
    var be = [M.C, M.H],
        ce = function (a) {
            var b = a[M.Me];
            b && Ad(40);
            var c = a[M.Ne];
            c && Ad(41);
            for (var d = ua(b) ? b : [b], e = { Nb: 0 }; e.Nb < d.length; e = { Nb: e.Nb }, ++e.Nb)
                Ca(
                    a,
                    (function (f) {
                        return function (g, k) {
                            if (g !== M.Me && g !== M.Ne) {
                                var m = d[f.Nb];
                                Md().set(g, k, m, "TR", "TR-34", c);
                            }
                        };
                    })(e)
                );
        },
        de = 0,
        ee = function (a, b) {
            Ca(a, function (e, f) {
                Md().update(e, f);
            });
            Yd(b);
            var c = Pa(),
                d = c - de;
            de && 0 <= d && 1e3 > d && Ad(66);
            de = c;
        },
        fe = function (a) {
            var b = Sd(a);
            return void 0 != b ? b : !0;
        },
        ge = function () {
            return "G1" + ae(Sd);
        },
        he = function () {
            return "G1" + ae(Td);
        },
        ie = function (a, b) {
            $d(a, b);
        },
        je = function (a, b) {
            Zd(a, b);
        };
    var le = function (a) {
            return ke ? B.querySelectorAll(a) : null;
        },
        me = function (a, b) {
            if (!ke) return null;
            if (Element.prototype.closest)
                try {
                    return a.closest(b);
                } catch (e) {
                    return null;
                }
            var c =
                    Element.prototype.matches ||
                    Element.prototype.webkitMatchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector,
                d = a;
            if (!B.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d;
                } catch (e) {
                    break;
                }
                d = d.parentElement || d.parentNode;
            } while (null !== d && 1 === d.nodeType);
            return null;
        },
        ne = !1;
    if (B.querySelectorAll)
        try {
            var oe = B.querySelectorAll(":root");
            oe && 1 == oe.length && oe[0] == B.documentElement && (ne = !0);
        } catch (a) {}
    var ke = ne;
    var pe = function (a) {
            return void 0 === a || null === a ? "" : h(a) ? Na(String(a)) : "e0";
        },
        re = function (a) {
            return a.replace(qe, "");
        },
        te = function (a) {
            return se(a.replace(/\s/g, ""));
        },
        se = function (a) {
            return Na(a.replace(ue, "").toLowerCase());
        },
        we = function (a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return ve.test(a) ? a : "e0";
        },
        ye = function (a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (xe.test(c)) return c;
            }
            return "e0";
        },
        Be = function (a, b) {
            window.Promise || b([]);
            Promise.all(
                a.map(function (c) {
                    return c.value && -1 !== ze.indexOf(c.name)
                        ? Ae(c.value).then(function (d) {
                              c.value = d;
                          })
                        : Promise.resolve();
                })
            )
                .then(function () {
                    b(a);
                })
                .catch(function () {
                    b([]);
                });
        },
        Ae = function (a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (l.crypto && l.crypto.subtle)
                try {
                    var b = Ce(a);
                    return l.crypto.subtle
                        .digest("SHA-256", b)
                        .then(function (c) {
                            var d = Array.from(new Uint8Array(c))
                                .map(function (e) {
                                    return String.fromCharCode(e);
                                })
                                .join("");
                            return l
                                .btoa(d)
                                .replace(/\+/g, "-")
                                .replace(/\//g, "_")
                                .replace(/=+$/, "");
                        })
                        .catch(function () {
                            return "e2";
                        });
                } catch (c) {
                    return Promise.resolve("e2");
                }
            else return Promise.resolve("e1");
        },
        Ce = function (a) {
            var b;
            if (l.TextEncoder) b = new l.TextEncoder("utf-8").encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e
                        ? c.push(e)
                        : 2048 > e
                        ? c.push(192 | (e >> 6), 128 | (e & 63))
                        : 55296 > e || 57344 <= e
                        ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
                        : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
                          c.push(
                              240 | (e >> 18),
                              128 | ((e >> 12) & 63),
                              128 | ((e >> 6) & 63),
                              128 | (e & 63)
                          ));
                }
                b = new Uint8Array(c);
            }
            return b;
        },
        ue = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        xe = /^\S+@\S+\.\S+$/,
        ve = /^\+\d{11,15}$/,
        qe = /[.~]/g,
        De = {},
        Ee =
            ((De.email = "em"),
            (De.phone_number = "pn"),
            (De.first_name = "fn"),
            (De.last_name = "ln"),
            (De.street = "sa"),
            (De.city = "ct"),
            (De.region = "rg"),
            (De.country = "co"),
            (De.postal_code = "pc"),
            (De.error_code = "ec"),
            De),
        Fe = function (a, b) {
            function c(n, p, q) {
                var u = n[p];
                ua(u) || (u = [u]);
                for (var t = 0; t < u.length; ++t) {
                    var r = pe(u[t]);
                    "" !== r && f.push({ name: p, value: q(r), index: void 0 });
                }
            }
            function d(n, p, q, u) {
                var t = pe(n[p]);
                "" !== t && f.push({ name: p, value: q(t), index: u });
            }
            function e(n) {
                return function (p) {
                    Ad(64);
                    return n(p);
                };
            }
            var f = [];
            if ("https:" === l.location.protocol) {
                c(a, "email", ye);
                c(a, "phone_number", we);
                c(a, "first_name", e(te));
                c(a, "last_name", e(te));
                var g = a.home_address || {};
                c(g, "street", e(se));
                c(g, "city", e(se));
                c(g, "postal_code", e(re));
                c(g, "region", e(se));
                c(g, "country", e(re));
                var k = a.address || {};
                ua(k) || (k = [k]);
                for (var m = 0; m < k.length; m++)
                    d(k[m], "first_name", te, m),
                        d(k[m], "last_name", te, m),
                        d(k[m], "street", se, m),
                        d(k[m], "city", se, m),
                        d(k[m], "postal_code", re, m),
                        d(k[m], "region", se, m),
                        d(k[m], "country", re, m);
                Be(f, b);
            } else f.push({ name: "error_code", value: "e3", index: void 0 }), b(f);
        },
        Ge = function (a, b) {
            Fe(a, function (c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        k = c[f].value,
                        m = c[f].index,
                        n = Ee[g];
                    n &&
                        k &&
                        (-1 === ze.indexOf(g) ||
                            /^e\d+$/.test(k) ||
                            /^[0-9A-Za-z_-]{43}$/.test(k)) &&
                        (void 0 !== m && (n += m), d.push(n + "." + k), e++);
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e);
            });
        },
        Oe = function (a) {
            if (l.Promise)
                try {
                    return new Promise(function (b) {
                        Ge(a, function (c, d) {
                            b({ wc: c, qj: d });
                        });
                    });
                } catch (b) {}
        },
        ze = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var Pe = function () {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function () {};
            this.onFailure = function () {};
            this.setContainerTypeLoaded = function () {};
            this.getContainerTypeLoaded = function () {};
            this.eventId = void 0;
            this.isGtmEvent = !1;
        },
        Qe = function (a) {
            var b = new Pe();
            b.eventModel = a;
            return b;
        },
        Re = function (a, b) {
            a.targetConfig = b;
            return a;
        },
        Se = function (a, b) {
            a.containerConfig = b;
            return a;
        },
        Te = function (a, b) {
            a.globalConfig = b;
            return a;
        },
        Ue = function (a, b) {
            a.remoteConfig = b;
            return a;
        },
        Ve = function (a, b) {
            a.onSuccess = b;
            return a;
        },
        We = function (a, b) {
            a.setContainerTypeLoaded = b;
            return a;
        },
        Xe = function (a, b) {
            a.getContainerTypeLoaded = b;
            return a;
        },
        Ye = function (a, b) {
            a.onFailure = b;
            return a;
        };
    Pe.prototype.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
    };
    var Ze = function (a) {
            function b(d) {
                for (var e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
            }
            var c = {};
            b(a.eventModel);
            b(a.targetConfig);
            b(a.containerConfig);
            b(a.globalConfig);
            return Object.keys(c);
        },
        $e = function (a, b, c) {
            function d(g) {
                Rb(g) &&
                    Ca(g, function (k, m) {
                        f = !0;
                        e[k] = m;
                    });
            }
            var e = {},
                f = !1;
            (c && 1 !== c) ||
                (d(a.remoteConfig[b]),
                d(a.globalConfig[b]),
                d(a.containerConfig[b]),
                d(a.targetConfig[b]));
            (c && 2 !== c) || d(a.eventModel[b]);
            return f ? e : void 0;
        },
        af = function (a) {
            var b = [M.Ub, M.We, M.Xe, M.Ye, M.Ze, M.$e, M.af],
                c = {},
                d = !1,
                e = function (f) {
                    for (var g = 0; g < b.length; g++)
                        void 0 !== f[b[g]] && ((c[b[g]] = f[b[g]]), (d = !0));
                    return d;
                };
            if (e(a.eventModel) || e(a.targetConfig) || e(a.containerConfig) || e(a.globalConfig))
                return c;
            e(a.remoteConfig);
            return c;
        };
    var bf = {},
        P = null,
        cf = Math.random();
    bf.I = "UA-134698799-2";
    bf.ad = "ab0";
    bf.Pg = "ChAI8IeaiwYQg4XzmYew2fRxEicAuHiHqO/P49I/3npbniPVkR6L5R58M3LNZhXGy4aKsodXqgY0v00aApaM";
    var df = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
        },
        ef = { __paused: !0, __tg: !0 },
        ff;
    for (ff in df) df.hasOwnProperty(ff) && (ef[ff] = !0);
    var gf = "www.googletagmanager.com/gtm.js";
    gf = "www.googletagmanager.com/gtag/js";
    var hf = gf,
        jf = Ja(""),
        kf = null,
        lf = null,
        mf = "https://www.googletagmanager.com/a?id=" + bf.I + "&cv=1",
        nf = {},
        of = {},
        pf = function () {
            var a = P.sequence || 1;
            P.sequence = a + 1;
            return a;
        };
    bf.Og = "";
    var qf = "";
    bf.Ib = qf;
    var rf = {},
        sf = new ya(),
        tf = {},
        uf = {},
        xf = {
            name: "dataLayer",
            set: function (a, b) {
                H(Va(a, b), tf);
                vf();
            },
            get: function (a) {
                return wf(a, 2);
            },
            reset: function () {
                sf = new ya();
                tf = {};
                vf();
            },
        },
        wf = function (a, b) {
            return 2 != b ? sf.get(a) : yf(a);
        },
        yf = function (a) {
            var b,
                c = a.split(".");
            b = b || [];
            for (var d = tf, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== va(b, d)) return;
            }
            return d;
        },
        zf = function (a, b) {
            uf.hasOwnProperty(a) || (sf.set(a, b), H(Va(a, b), tf), vf());
        },
        vf = function (a) {
            Ca(uf, function (b, c) {
                sf.set(b, c);
                H(Va(b, void 0), tf);
                H(Va(b, c), tf);
                a && delete uf[b];
            });
        },
        Bf = function (a, b, c) {
            rf[a] = rf[a] || {};
            rf[a][b] = Af(b, c);
        },
        Af = function (a, b) {
            var c,
                d = 1 !== (void 0 === b ? 2 : b) ? yf(a) : sf.get(a);
            "array" === Pb(d) || "object" === Pb(d) ? (c = H(d)) : (c = d);
            return c;
        },
        Cf = function (a, b) {
            if (rf[a]) return rf[a][b];
        },
        Df = function (a, b) {
            rf[a] && delete rf[a][b];
        };
    var Ef,
        Ff = !1,
        Gf = function (a) {
            if (!Ff) {
                Ff = !0;
                Ef = Ef || {};
            }
            return Ef[a];
        };
    var Hf = function (a) {
        if (B.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !l.getComputedStyle) return !0;
        var c = l.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var k = g.indexOf("opacity(");
                0 <= k &&
                    ((g = g.substring(k + 8, g.indexOf(")", k))),
                    "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                    (f = Math.min(g, f)));
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = l.getComputedStyle(d, null));
        }
        return !1;
    };
    var Qf = /:[0-9]+$/,
        Rf = function (a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
                }
            }
        },
        Uf = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = Sf(a.protocol) || Sf(l.location.protocol);
            "port" === b
                ? (a.port = String(
                      Number(a.hostname ? a.port : l.location.port) ||
                          ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
                  ))
                : "host" === b &&
                  (a.hostname = (a.hostname || l.location.hostname).replace(Qf, "").toLowerCase());
            return Tf(a, b, c, d, e);
        },
        Tf = function (a, b, c, d, e) {
            var f,
                g = Sf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = Vf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(Qf, "").toLowerCase();
                    if (c) {
                        var k = /^www\d*\./.exec(f);
                        k && k[0] && (f = f.substr(k[0].length));
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" == g ? 80 : "https" == g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || yd("TAGGING", 1);
                    f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= va(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = Rf(f, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href;
            }
            return f;
        },
        Sf = function (a) {
            return a ? a.replace(":", "").toLowerCase() : "";
        },
        Vf = function (a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c);
            }
            return b;
        },
        Wf = function (a) {
            var b = B.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || yd("TAGGING", 1), (c = "/" + c));
            var d = b.hostname.replace(Qf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port,
            };
        },
        Xf = function (a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0";
            }
            function c(n) {
                return n
                    .split("&")
                    .map(b)
                    .filter(function (p) {
                        return void 0 != p;
                    })
                    .join("&");
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = Wf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                k = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === k[0] && (k = k.substring(1));
            g = c(g);
            k = c(k);
            "" !== g && (g = "?" + g);
            "" !== k && (k = "#" + k);
            var m = "" + f + g + k;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m;
        };
    var Yf = {},
        Zf = !0,
        $f = !1;
    Yf.Kg = "true";
    var ag = function (a) {
            if ("false" === Yf.Kg || !Zf) return !1;
            if ($f) return !0;
            var b = Gf("AW-" + a);
            return !!b && !!b.preAutoPii;
        },
        bg = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        cg = new RegExp(/@(gmail|googlemail)\./i),
        dg = new RegExp(/support|noreply/i),
        eg = "SCRIPT STYLE IMG SVG PATH BR".split(" "),
        fg = ["BR"],
        gg = {};
    function hg(a) {
        var b;
        if (a === B.body) b = "body";
        else {
            var c;
            if (a.id) c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a;
                                }
                            e = -1;
                        } else e = 1;
                    }
                    d = hg(a.parentElement) + ">:nth-child(" + e + ")";
                } else d = "";
                c = d;
            }
            b = c;
        }
        return b;
    }
    function ig(a, b) {
        if (1 >= a.length) return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c;
    }
    function jg(a) {
        if (0 == a.length) return null;
        var b;
        b = ig(a, function (c) {
            return !dg.test(c.Pa);
        });
        b = ig(b, function (c) {
            return "INPUT" === c.element.tagName.toUpperCase();
        });
        b = ig(b, function (c) {
            return !Hf(c.element);
        });
        return b[0];
    }
    var kg = function (a) {
            a = a || { ue: !0, ve: !0 };
            a.Za = a.Za || { email: !0, phone: !0, Pf: !0 };
            var b,
                c = a,
                d = !!c.ue + "." + !!c.ve;
            c && c.kd && c.kd.length && (d += "." + c.kd.join("."));
            c && c.Za && (d += "." + c.Za.email + "." + c.Za.phone + "." + c.Za.Pf);
            b = d;
            var e = gg[b];
            if (e && 200 > Pa() - e.timestamp) return e.result;
            var f;
            var g = [],
                k = B.body;
            if (k) {
                for (var m = k.querySelectorAll("*"), n = 0; n < m.length && 1e4 > n; n++) {
                    var p = m[n];
                    if (
                        !(0 <= eg.indexOf(p.tagName.toUpperCase())) &&
                        p.children instanceof HTMLCollection
                    ) {
                        for (var q = !1, u = 0; u < p.childElementCount && 1e4 > u; u++)
                            if (!(0 <= fg.indexOf(p.children[u].tagName.toUpperCase()))) {
                                q = !0;
                                break;
                            }
                        q || g.push(p);
                    }
                }
                f = { elements: g, status: 1e4 < m.length ? "2" : "1" };
            } else f = { elements: g, status: "4" };
            var t = f,
                r = t.status,
                v;
            if (a.Za && a.Za.email) {
                for (var x = t.elements, y = [], w = 0; w < x.length; w++) {
                    var z = x[w],
                        A = z.textContent;
                    "INPUT" === z.tagName.toUpperCase() && z.value && (A = z.value);
                    if (A) {
                        var C = A.match(bg);
                        if (C) {
                            var F = C[0],
                                E;
                            if (l.location) {
                                var D = Tf(l.location, "host", !0);
                                E = 0 <= F.toLowerCase().indexOf(D);
                            } else E = !1;
                            E || y.push({ element: z, Pa: F });
                        }
                    }
                }
                var O;
                var K = a && a.kd;
                if (K && 0 !== K.length) {
                    for (var L = [], N = 0; N < y.length; N++) {
                        for (var J = !0, I = 0; I < K.length; I++) {
                            var V = K[I];
                            if (V && me(y[N].element, V)) {
                                J = !1;
                                break;
                            }
                        }
                        J && L.push(y[N]);
                    }
                    O = L;
                } else O = y;
                v = jg(O);
                10 < y.length && (r = "3");
            }
            var T = [];
            if (v) {
                var X = v.element,
                    S = { Pa: v.Pa, tagName: X.tagName, type: 1 };
                a.ue && (S.querySelector = hg(X));
                a.ve && (S.isVisible = !Hf(X));
                T.push(S);
            }
            var W = { elements: T, status: r };
            gg[b] = { timestamp: Pa(), result: W };
            return W;
        },
        lg = function (a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Pa.length + ":" + cg.test(a.Pa);
        };
    var mg = function (a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), k = 0; k < g.length; k++) {
                        var m = g[k].trim();
                        if (m) {
                            if (0 === m.indexOf("dataLayer.")) f = wf(m.substring(10));
                            else {
                                var n = m.split(".");
                                f = l[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]];
                            }
                            if (void 0 !== f) break;
                        }
                    }
                } else if ("css_selector" === d && ke) {
                    var q = le(e);
                    q && 0 < q.length && (f = Ib(q[0]) || Na(q[0].value));
                }
                f && (a[b] = f);
            }
        },
        ng = function (a) {
            if (a) {
                var b = {};
                mg(b, "email", a.email);
                mg(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    mg(e, "first_name", c[d].first_name);
                    mg(e, "last_name", c[d].last_name);
                    mg(e, "street", c[d].street);
                    mg(e, "city", c[d].city);
                    mg(e, "region", c[d].region);
                    mg(e, "country", c[d].country);
                    mg(e, "postal_code", c[d].postal_code);
                    b.address.push(e);
                }
                return b;
            }
        },
        og = function (a) {
            if (a)
                switch (a.mode) {
                    case "selectors":
                        return ng(a.selectors);
                    case "auto_detect":
                        var b;
                        var c = a.auto_detect;
                        if (c) {
                            var d = kg({
                                    ue: !1,
                                    ve: !1,
                                    kd: c.exclude_element_selectors,
                                    Za: { email: !!c.email, phone: !!c.phone, Pf: !!c.address },
                                }).elements,
                                e = {};
                            if (0 < d.length)
                                for (var f = 0; f < d.length; f++) {
                                    var g = d[f];
                                    if (1 === g.type) {
                                        e.email = g.Pa;
                                        break;
                                    }
                                }
                            b = e;
                        } else b = void 0;
                        return b;
                }
        },
        pg = function (a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : l.enhanced_conversion_data;
                case "automatic":
                    return ng(a[M.hf]);
            }
        };
    var qg = {},
        rg = function (a, b) {
            if (l._gtmexpgrp && l._gtmexpgrp.hasOwnProperty(a)) return l._gtmexpgrp[a];
            void 0 === qg[a] && (qg[a] = Math.floor(Math.random() * b));
            return qg[a];
        };
    var sg = function (a) {
        var b = 1,
            c,
            d,
            e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--)
                (e = a.charCodeAt(d)),
                    (b = ((b << 6) & 268435455) + e + (e << 14)),
                    (c = b & 266338304),
                    (b = 0 != c ? b ^ (c >> 21) : b);
        return b;
    };
    function tg(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var m = g
                    .slice(1)
                    .join("=")
                    .replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m);
            }
        }
        return d;
    }
    function ug(a) {
        return "null" !== a.origin;
    }
    var Cg = function (a, b, c, d) {
            return Ag(d) ? tg(a, String(b || Bg()), c) : [];
        },
        Fg = function (a, b, c, d, e) {
            if (Ag(e)) {
                var f = Dg(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Eg(
                        f,
                        function (g) {
                            return g.hd;
                        },
                        b
                    );
                    if (1 === f.length) return f[0].id;
                    f = Eg(
                        f,
                        function (g) {
                            return g.xc;
                        },
                        c
                    );
                    return f[0] ? f[0].id : void 0;
                }
            }
        };
    function Gg(a, b, c, d) {
        var e = Bg(),
            f = window;
        ug(f) && (f.document.cookie = a);
        var g = Bg();
        return e != g || (void 0 != c && 0 <= Cg(b, g, !1, d).indexOf(c));
    }
    var Kg = function (a, b, c) {
            function d(t, r, v) {
                if (null == v) return delete g[r], t;
                g[r] = v;
                return t + "; " + r + "=" + v;
            }
            function e(t, r) {
                if (null == r) return delete g[r], t;
                g[r] = !0;
                return t + "; " + r;
            }
            if (!Ag(c.Ea)) return 2;
            var f;
            void 0 == b
                ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
                : (c.encode && (b = encodeURIComponent(b)), (b = Hg(b)), (f = a + "=" + b));
            var g = {};
            f = d(f, "path", c.path);
            var k;
            c.expires instanceof Date
                ? (k = c.expires.toUTCString())
                : null != c.expires && (k = "" + c.expires);
            f = d(f, "expires", k);
            f = d(f, "max-age", c.pj);
            f = d(f, "samesite", c.rj);
            c.sj && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Ig(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        u = d(f, "domain", q);
                    u = e(u, c.flags);
                    if (!Jg(q, c.path) && Gg(u, a, b, c.Ea)) return 0;
                }
                return 1;
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Jg(m, c.path) ? 1 : Gg(f, a, b, c.Ea) ? 0 : 1;
        },
        Lg = function (a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Kg(a, b, c);
        };
    function Eg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var k = a[g],
                m = b(k);
            m === c
                ? d.push(k)
                : void 0 === f || m < f
                ? ((e = [k]), (f = m))
                : m === f && e.push(k);
        }
        return 0 < d.length ? d : e;
    }
    function Dg(a, b, c) {
        for (var d = [], e = Cg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                k = g.shift();
            if (!b || -1 !== b.indexOf(k)) {
                var m = g.shift();
                m &&
                    ((m = m.split("-")),
                    d.push({ id: g.join("."), hd: 1 * m[0] || 1, xc: 1 * m[1] || 1 }));
            }
        }
        return d;
    }
    var Hg = function (a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a;
        },
        Mg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Ng = /(^|\.)doubleclick\.net$/i,
        Jg = function (a, b) {
            return Ng.test(window.document.location.hostname) || ("/" === b && Mg.test(a));
        },
        Bg = function () {
            return ug(window) ? window.document.cookie : "";
        },
        Ig = function () {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"];
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Ng.test(e) || Mg.test(e) || a.push("none");
            return a;
        },
        Ag = function (a) {
            if (!Gd(Cd) || !a || !Vd()) return !0;
            if (!Ud(a)) return !1;
            var b = Sd(a);
            return null == b ? !0 : !!b;
        };
    var Og = function (a) {
            var b = Math.round(2147483647 * Math.random()),
                c = b;
            a && (c = b ^ (sg(a) & 2147483647));
            return [c, Math.round(Pa() / 1e3)].join(".");
        },
        Rg = function (a, b, c, d, e) {
            var f = Pg(b);
            return Fg(a, f, Qg(c), d, e);
        },
        Sg = function (a, b, c, d) {
            var e = "" + Pg(c),
                f = Qg(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".");
        },
        Pg = function (a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length;
        },
        Qg = function (a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1;
        };
    function Tg(a, b, c) {
        var d,
            e = Number(null != a.$a ? a.$a : void 0);
        0 !== e && (d = new Date((b || Pa()) + 1e3 * (e || 7776e3)));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
    }
    var Ug = ["1"],
        Vg = {},
        Yg = function (a, b) {
            b = void 0 === b ? !0 : b;
            var c = Wg(a.prefix);
            if (!Vg[c] && !Xg(c, a.path, a.domain) && b) {
                var d = Wg(a.prefix),
                    e = Og(),
                    f = Sg(e, "1", a.domain, a.path),
                    g = Tg(a);
                g.Ea = "ad_storage";
                if (0 === Lg(d, f, g)) {
                    var k = wb("google_tag_data", {});
                    k._gcl_au ? yd("GTM", 57) : (k._gcl_au = e);
                }
                Xg(c, a.path, a.domain);
            }
        };
    function Xg(a, b, c) {
        var d = Rg(a, b, c, Ug, "ad_storage");
        d && (Vg[a] = d);
        return d;
    }
    function Wg(a) {
        return (a || "_gcl") + "_au";
    }
    var Zg = function (a) {
        for (
            var b = [],
                c = B.cookie.split(";"),
                d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),
                e = 0;
            e < c.length;
            e++
        ) {
            var f = c[e].match(d);
            f && b.push({ Je: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
        }
        b.sort(function (g, k) {
            return k.timestamp - g.timestamp;
        });
        return b;
    };
    function $g(a, b) {
        var c = Zg(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
                d[c[e].Je] || (d[c[e].Je] = []);
                var g = { version: f[0], timestamp: 1e3 * Number(f[1]), oa: f[2] };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Je].push(g);
            }
        }
        return d;
    }
    function ah() {
        for (var a = bh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }
    function ch() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var bh, dh;
    function eh(a) {
        function b(m) {
            for (; d < a.length; ) {
                var n = a.charAt(d++),
                    p = dh[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m;
        }
        bh = bh || ch();
        dh = dh || ah();
        for (var c = "", d = 0; ; ) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode((e << 2) | (f >> 4));
            64 != g &&
                ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
                64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)));
        }
    }
    var fh;
    var jh = function () {
            var a = gh,
                b = hh,
                c = ih(),
                d = function (g) {
                    a(g.target || g.srcElement || {});
                },
                e = function (g) {
                    b(g.target || g.srcElement || {});
                };
            if (!c.init) {
                Fb(B, "mousedown", d);
                Fb(B, "keyup", d);
                Fb(B, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                    b(this);
                    f.call(this);
                };
                c.init = !0;
            }
        },
        kh = function (a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e,
            };
            ih().decorators.push(f);
        },
        lh = function (a, b, c) {
            for (var d = ih().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f],
                    k;
                if ((k = !c || g.forms))
                    a: {
                        var m = g.domains,
                            n = a,
                            p = !!g.sameHost;
                        if (m && (p || n !== B.location.hostname))
                            for (var q = 0; q < m.length; q++)
                                if (m[q] instanceof RegExp) {
                                    if (m[q].test(n)) {
                                        k = !0;
                                        break a;
                                    }
                                } else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
                                    k = !0;
                                    break a;
                                }
                        k = !1;
                    }
                if (k) {
                    var u = g.placement;
                    void 0 == u && (u = g.fragment ? 2 : 1);
                    u === b && Sa(e, g.callback());
                }
            }
            return e;
        },
        ih = function () {
            var a = wb("google_tag_data", {}),
                b = a.gl;
            (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
            return b;
        };
    var mh = /(.*?)\*(.*?)\*(.*)/,
        nh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        oh = /^(?:www\.|m\.|amp\.)+/,
        ph = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function qh(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    var sh = function (a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g,
                        k = String(d);
                    bh = bh || ch();
                    dh = dh || ah();
                    for (var m = [], n = 0; n < k.length; n += 3) {
                        var p = n + 1 < k.length,
                            q = n + 2 < k.length,
                            u = k.charCodeAt(n),
                            t = p ? k.charCodeAt(n + 1) : 0,
                            r = q ? k.charCodeAt(n + 2) : 0,
                            v = u >> 2,
                            x = ((u & 3) << 4) | (t >> 4),
                            y = ((t & 15) << 2) | (r >> 6),
                            w = r & 63;
                        q || ((w = 64), p || (y = 64));
                        m.push(bh[v], bh[x], bh[y], bh[w]);
                    }
                    g = m.join("");
                    f.call(e, g);
                }
            }
        var z = b.join("*");
        return ["1", rh(z), z].join("*");
    };
    function rh(a, b) {
        var c = [
                window.navigator.userAgent,
                new Date().getTimezoneOffset(),
                window.navigator.userLanguage || window.navigator.language,
                Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
                a,
            ].join("*"),
            d;
        if (!(d = fh)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
                e[f] = g;
            }
            d = e;
        }
        fh = d;
        for (var m = 4294967295, n = 0; n < c.length; n++)
            m = (m >>> 8) ^ fh[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36);
    }
    function th() {
        return function (a) {
            var b = Wf(l.location.href),
                c = b.search.replace("?", ""),
                d = Rf(c, "_gl", !0) || "";
            a.query = uh(d) || {};
            var e = Uf(b, "fragment").match(qh("_gl"));
            a.fragment = uh((e && e[3]) || "") || {};
        };
    }
    var vh = function (a) {
            var b = th(),
                c = ih();
            c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
            var d = {},
                e = c.data;
            e && (Sa(d, e.query), a && Sa(d, e.fragment));
            return d;
        },
        uh = function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var f = mh.exec(d);
                            if (f) {
                                c = f;
                                break a;
                            }
                            d = decodeURIComponent(d);
                        }
                        c = void 0;
                    }
                    var g = c;
                    if (g && "1" === g[1]) {
                        var k = g[3],
                            m;
                        a: {
                            for (var n = g[2], p = 0; p < b; ++p)
                                if (n === rh(k, p)) {
                                    m = !0;
                                    break a;
                                }
                            m = !1;
                        }
                        if (m) {
                            for (var q = {}, u = k ? k.split("*") : [], t = 0; t < u.length; t += 2)
                                q[u[t]] = eh(u[t + 1]);
                            return q;
                        }
                    }
                }
            } catch (r) {}
        };
    function wh(a, b, c, d) {
        function e(p) {
            var q = p,
                u = qh(a).exec(q),
                t = q;
            if (u) {
                var r = u[2],
                    v = u[4];
                t = u[1];
                v && (t = t + r + v);
            }
            p = t;
            var x = p.charAt(p.length - 1);
            p && "&" !== x && (p += "&");
            return p + n;
        }
        d = void 0 === d ? !1 : d;
        var f = ph.exec(c);
        if (!f) return "";
        var g = f[1],
            k = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? (m = "#" + e(m.substring(1))) : (k = "?" + e(k.substring(1)));
        return "" + g + k + m;
    }
    function xh(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = lh(b, 1, c),
            e = lh(b, 2, c),
            f = lh(b, 3, c);
        if (Ta(d)) {
            var g = sh(d);
            c ? yh("_gl", g, a) : zh("_gl", g, a, !1);
        }
        if (!c && Ta(e)) {
            var k = sh(e);
            zh("_gl", k, a, !0);
        }
        for (var m in f)
            if (f.hasOwnProperty(m))
                a: {
                    var n = m,
                        p = f[m],
                        q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            zh(n, p, q, void 0);
                            break a;
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            yh(n, p, q);
                            break a;
                        }
                    }
                    "string" == typeof q && wh(n, p, q, void 0);
                }
    }
    function zh(a, b, c, d) {
        if (c.href) {
            var e = wh(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e);
        }
    }
    function yh(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break;
                    }
                }
                if (!f) {
                    var m = B.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m);
                }
            } else if ("post" === d) {
                var n = wh(a, b, c.action);
                fb.test(n) && (c.action = n);
            }
        }
    }
    function gh(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                ("http:" !== f && "https:" !== f) || xh(e, e.hostname);
            }
        } catch (g) {}
    }
    function hh(a) {
        try {
            if (a.action) {
                var b = Uf(Wf(a.action), "host");
                xh(a, b);
            }
        } catch (c) {}
    }
    var Ah = function (a, b, c, d) {
            jh();
            kh(a, b, "fragment" === c ? 2 : 1, !!d, !1);
        },
        Bh = function (a, b) {
            jh();
            kh(a, [Tf(l.location, "host", !0)], b, !0, !0);
        },
        Ch = function () {
            var a = B.location.hostname,
                b = nh.exec(B.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g);
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-");
            }
            var k = a.replace(oh, ""),
                m = e.replace(oh, ""),
                n;
            if (!(n = k === m)) {
                var p = "." + m;
                n = k.substring(k.length - p.length, k.length) === p;
            }
            return n;
        },
        Dh = function (a, b) {
            return !1 === a ? !1 : a || b || Ch();
        };
    var Eh = {};
    var Fh = /^\w+$/,
        Gh = /^[\w-]+$/,
        Hh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" },
        Ih = function () {
            if (!Gd(Cd) || !Vd()) return !0;
            var a = Sd("ad_storage");
            return null == a ? !0 : !!a;
        },
        Jh = function (a, b) {
            Ud("ad_storage")
                ? Ih()
                    ? a()
                    : $d(a, "ad_storage")
                : b
                ? yd("TAGGING", 3)
                : Zd(
                      function () {
                          Jh(a, !0);
                      },
                      ["ad_storage"]
                  );
        },
        Lh = function (a) {
            return Kh(a).map(function (b) {
                return b.oa;
            });
        },
        Kh = function (a) {
            var b = [];
            if (!ug(l) || !B.cookie) return b;
            var c = Cg(a, B.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = { Ec: d.Ec }, e++) {
                var f = Mh(c[e]);
                if (null != f) {
                    var g = f,
                        k = g.version;
                    d.Ec = g.oa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = wa(
                            b,
                            (function (q) {
                                return function (u) {
                                    return u.oa === q.Ec;
                                };
                            })(d)
                        );
                    p
                        ? ((p.timestamp = Math.max(p.timestamp, m)),
                          (p.labels = Nh(p.labels, n || [])))
                        : b.push({ version: k, oa: d.Ec, timestamp: m, labels: n });
                }
            }
            b.sort(function (q, u) {
                return u.timestamp - q.timestamp;
            });
            return Oh(b);
        };
    function Nh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d;
    }
    function Ph(a) {
        return a && "string" == typeof a && a.match(Fh) ? a : "_gcl";
    }
    var Rh = function () {
            var a = Wf(l.location.href),
                b = Uf(a, "query", !1, void 0, "gclid"),
                c = Uf(a, "query", !1, void 0, "gclsrc"),
                d = Uf(a, "query", !1, void 0, "wbraid"),
                e = Uf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || Rf(f, "gclid", void 0);
                c = c || Rf(f, "gclsrc", void 0);
                d = d || Rf(f, "wbraid", void 0);
            }
            return Qh(b, c, e, d);
        },
        Qh = function (a, b, c, d) {
            var e = {},
                f = function (g, k) {
                    e[k] || (e[k] = []);
                    e[k].push(g);
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Gh.test(d) && ((e.gbraid = d), f(d, "gb"));
            if (void 0 !== a && a.match(Gh))
                switch (b) {
                    case void 0:
                        f(a, "aw");
                        break;
                    case "aw.ds":
                        f(a, "aw");
                        f(a, "dc");
                        break;
                    case "ds":
                        f(a, "dc");
                        break;
                    case "3p.ds":
                        f(a, "dc");
                        break;
                    case "gf":
                        f(a, "gf");
                        break;
                    case "ha":
                        f(a, "ha");
                }
            c && f(c, "dc");
            return e;
        },
        Th = function (a) {
            var b = Rh();
            Jh(function () {
                Sh(b, !1, a);
            });
        };
    function Sh(a, b, c, d, e) {
        function f(x, y) {
            var w = Uh(x, g);
            w && (Lg(w, y, k), (m = !0));
        }
        c = c || {};
        e = e || [];
        var g = Ph(c.prefix);
        d = d || Pa();
        var k = Tg(c, d, !0);
        k.Ea = "ad_storage";
        var m = !1,
            n = Math.round(d / 1e3),
            p = function (x) {
                var y = ["GCL", n, x];
                0 < e.length && y.push(e.join("."));
                return y.join(".");
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (
            (void 0 == Eh.enable_gbraid_cookie_write ? 0 : Eh.enable_gbraid_cookie_write) &&
            !m &&
            a.gb
        ) {
            var q = a.gb[0],
                u = Uh("gb", g),
                t = !1;
            if (!b)
                for (var r = Kh(u), v = 0; v < r.length; v++)
                    r[v].oa === q && r[v].labels && 0 < r[v].labels.length && (t = !0);
            t || f("gb", p(q));
        }
    }
    var Wh = function (a, b) {
            var c = vh(!0);
            Jh(function () {
                for (var d = Ph(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Hh[f]) {
                        var g = Uh(f, d),
                            k = c[g];
                        if (k) {
                            var m = Math.min(Vh(k), Pa()),
                                n;
                            b: {
                                var p = m;
                                if (ug(l))
                                    for (
                                        var q = Cg(g, B.cookie, void 0, "ad_storage"), u = 0;
                                        u < q.length;
                                        ++u
                                    )
                                        if (Vh(q[u]) > p) {
                                            n = !0;
                                            break b;
                                        }
                                n = !1;
                            }
                            if (!n) {
                                var t = Tg(b, m, !0);
                                t.Ea = "ad_storage";
                                Lg(g, k, t);
                            }
                        }
                    }
                }
                Sh(Qh(c.gclid, c.gclsrc), !1, b);
            });
        },
        Uh = function (a, b) {
            var c = Hh[a];
            if (void 0 !== c) return b + c;
        },
        Vh = function (a) {
            return 0 !== Xh(a.split(".")).length ? 1e3 * (Number(a.split(".")[1]) || 0) : 0;
        };
    function Mh(a) {
        var b = Xh(a.split("."));
        return 0 === b.length
            ? null
            : { version: b[0], oa: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
    }
    function Xh(a) {
        return 3 > a.length ||
            ("GCL" !== a[0] && "1" !== a[0]) ||
            !/^\d+$/.test(a[1]) ||
            !Gh.test(a[2])
            ? []
            : a;
    }
    var Yh = function (a, b, c, d, e) {
            if (ua(b) && ug(l)) {
                var f = Ph(e),
                    g = function () {
                        for (var k = {}, m = 0; m < a.length; ++m) {
                            var n = Uh(a[m], f);
                            if (n) {
                                var p = Cg(n, B.cookie, void 0, "ad_storage");
                                p.length && (k[n] = p.sort()[p.length - 1]);
                            }
                        }
                        return k;
                    };
                Jh(function () {
                    Ah(g, b, c, d);
                });
            }
        },
        Oh = function (a) {
            return a.filter(function (b) {
                return Gh.test(b.oa);
            });
        },
        Zh = function (a, b) {
            if (ug(l)) {
                for (var c = Ph(b.prefix), d = {}, e = 0; e < a.length; e++)
                    Hh[a[e]] && (d[a[e]] = Hh[a[e]]);
                Jh(function () {
                    Ca(d, function (f, g) {
                        var k = Cg(c + g, B.cookie, void 0, "ad_storage");
                        k.sort(function (t, r) {
                            return Vh(r) - Vh(t);
                        });
                        if (k.length) {
                            var m = k[0],
                                n = Vh(m),
                                p = 0 !== Xh(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                u;
                            u = 0 !== Xh(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [u];
                            Sh(q, !0, b, n, p);
                        }
                    });
                });
            }
        };
    function $h(a, b) {
        for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1;
    }
    var ai = function (a) {
        function b(e, f, g) {
            g && (e[f] = g);
        }
        if (Vd()) {
            var c = Rh();
            if ($h(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Bh(function () {
                    return d;
                }, 3);
                Bh(function () {
                    var e = {};
                    return (e._up = "1"), e;
                }, 1);
            }
        }
    };
    function bi(a, b) {
        var c = Ph(b),
            d = Uh(a, c);
        if (!d) return 0;
        for (var e = Kh(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f;
    }
    function ci(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b;
    }
    function oi(a) {
        var b = (ub && ub.userAgent) || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
        }
        return e.length >= d.length;
    }
    var wi = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        xi = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: [
                "customScripts",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            customScripts: [
                "html",
                "customPixels",
                "nonGooglePixels",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"],
        },
        yi = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: [
                "customPixels",
                "customScripts",
                "html",
                "nonGoogleScripts",
                "nonGoogleIframes",
            ],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
        },
        zi =
            "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
                " "
            );
    var Ai = function () {
            var a = !1;
            a = !0;
            return a;
        },
        Ci = function (a) {
            var b = wf("gtm.allowlist") || wf("gtm.whitelist");
            b && Ad(9);
            Ai() && (b = "google gtagfl lcl zone oid op".split(" "));
            var c = b && Ua(Ma(b), xi),
                d = wf("gtm.blocklist") || wf("gtm.blacklist");
            d || ((d = wf("tagTypeBlacklist")) && Ad(3));
            d ? Ad(8) : (d = []);
            Bi() &&
                ((d = Ma(d)), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= va(Ma(d), "google") && Ad(2);
            var e = d && Ua(Ma(d), yi),
                f = {};
            return function (g) {
                var k = g && g[Zb.jb];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== f[k]) return f[k];
                var m = of[k] || [],
                    n = a(k, m);
                if (b) {
                    var p;
                    if ((p = n))
                        a: {
                            if (0 > va(c, k))
                                if (m && 0 < m.length)
                                    for (var q = 0; q < m.length; q++) {
                                        if (0 > va(c, m[q])) {
                                            Ad(11);
                                            p = !1;
                                            break a;
                                        }
                                    }
                                else {
                                    p = !1;
                                    break a;
                                }
                            p = !0;
                        }
                    n = p;
                }
                var u = !1;
                if (d) {
                    var t = 0 <= va(e, k);
                    if (t) u = t;
                    else {
                        var r = za(e, m || []);
                        r && Ad(10);
                        u = r;
                    }
                }
                var v = !n || u;
                v ||
                    !(0 <= va(m, "sandboxedScripts")) ||
                    (c && -1 !== va(c, "sandboxedScripts")) ||
                    (v = za(e, zi));
                return (f[k] = v);
            };
        },
        Bi = function () {
            return wi.test(l.location && l.location.hostname);
        };
    var Di = !1,
        Ei = 0,
        Fi = [];
    function Gi(a) {
        if (!Di) {
            var b = B.createEventObject,
                c = "complete" == B.readyState,
                d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || (!b && d)) {
                Di = !0;
                for (var e = 0; e < Fi.length; e++) G(Fi[e]);
            }
            Fi.push = function () {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0;
            };
        }
    }
    function Hi() {
        if (!Di && 140 > Ei) {
            Ei++;
            try {
                B.documentElement.doScroll("left"), Gi();
            } catch (a) {
                l.setTimeout(Hi, 50);
            }
        }
    }
    var Ii = function (a) {
        Di ? a() : Fi.push(a);
    };
    var Ki = function (a, b) {
            this.m = !1;
            this.D = [];
            this.N = { tags: [] };
            this.Z = !1;
            this.o = this.B = 0;
            Ji(this, a, b);
        },
        Li = function (a, b, c, d) {
            if (ef.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Rb(d) && (e = H(d, e));
            e.id = c;
            e.status = "timeout";
            return a.N.tags.push(e) - 1;
        },
        Mi = function (a, b, c, d) {
            var e = a.N.tags[b];
            e && ((e.status = c), (e.executionTime = d));
        },
        Ni = function (a) {
            if (!a.m) {
                for (var b = a.D, c = 0; c < b.length; c++) b[c]();
                a.m = !0;
                a.D.length = 0;
            }
        },
        Ji = function (a, b, c) {
            sa(b) && Oi(a, b);
            c &&
                l.setTimeout(function () {
                    return Ni(a);
                }, Number(c));
        },
        Oi = function (a, b) {
            var c = Ra(function () {
                return G(function () {
                    b(bf.I, a.N);
                });
            });
            a.m ? c() : a.D.push(c);
        },
        Pi = function (a) {
            a.B++;
            return Ra(function () {
                a.o++;
                a.Z && a.o >= a.B && Ni(a);
            });
        };
    var Qi = function () {
            function a(d) {
                return !ta(d) || 0 > d ? 0 : d;
            }
            if (!P._li && l.performance && l.performance.timing) {
                var b = l.performance.timing.navigationStart,
                    c = ta(xf.get("gtm.start")) ? xf.get("gtm.start") : 0;
                P._li = { cst: a(c - b), cbt: a(lf - b) };
            }
        },
        Ri = function (a) {
            l.performance && l.performance.mark(bf.I + "_" + a + "_start");
        },
        Si = function (a) {
            if (l.performance) {
                var b = bf.I + "_" + a + "_start",
                    c = bf.I + "_" + a + "_duration";
                l.performance.measure(c, b);
                var d = l.performance.getEntriesByName(c)[0];
                l.performance.clearMarks(b);
                l.performance.clearMeasures(c);
                var e = P._p || {};
                void 0 === e[a] && ((e[a] = d.duration), (P._p = e));
                return d.duration;
            }
        },
        Ti = function () {
            if (l.performance && l.performance.now) {
                var a = P._p || {};
                a.PAGEVIEW = l.performance.now();
                P._p = a;
            }
        };
    var Ui = {},
        Vi = function () {
            return l.GoogleAnalyticsObject && l[l.GoogleAnalyticsObject];
        },
        Wi = !1;
    var Xi = function (a) {
            l.GoogleAnalyticsObject || (l.GoogleAnalyticsObject = a || "ga");
            var b = l.GoogleAnalyticsObject;
            if (l[b]) l.hasOwnProperty(b) || Ad(12);
            else {
                var c = function () {
                    c.q = c.q || [];
                    c.q.push(arguments);
                };
                c.l = Number(Oa());
                l[b] = c;
            }
            Qi();
            return l[b];
        },
        Yi = function (a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = Vi();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d);
        },
        Zi = function (a) {
            if (!Vd()) return;
            var b = Vi();
            b(a + "require", "linker");
            b(a + "linker:passthrough", !0);
        };
    function $i() {
        return l.GoogleAnalyticsObject || "ga";
    }
    var aj = function (a) {},
        bj = function (a, b) {
            return function () {
                var c = Vi(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function (f) {
                        var g = f.get("hitPayload"),
                            k = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m &&
                            (f.set(
                                "hitPayload",
                                g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                                !0
                            ),
                            f.set("hitCallback", void 0, !0));
                        e(f);
                        m &&
                            (f.set("hitPayload", g, !0),
                            f.set("hitCallback", k, !0),
                            f.set("_x_19", void 0, !0),
                            e(f));
                    });
                }
            };
        };
    var ij = function (a) {},
        mj = function (a) {},
        nj = function () {
            return (
                "&tc=" +
                Dc.filter(function (a) {
                    return a;
                }).length
            );
        },
        qj = function () {
            2022 <= oj().length && pj();
        },
        rj = function (a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*";
        },
        tj = function () {
            sj || (sj = l.setTimeout(pj, 500));
        },
        pj = function () {
            sj && (l.clearTimeout(sj), (sj = void 0));
            void 0 === uj ||
                (vj[uj] && !wj && !xj) ||
                (yj[uj] || zj.wi() || 0 >= Aj--
                    ? (Ad(1), (yj[uj] = !0))
                    : (zj.Ri(), Eb(oj(!0)), (vj[uj] = !0), (Bj = Cj = Dj = xj = wj = "")));
        },
        oj = function (a) {
            var b = uj;
            if (void 0 === b) return "";
            var c = zd("GTM"),
                d = zd("TAGGING");
            return [
                Ej,
                vj[b] ? "" : "&es=1",
                Fj[b],
                ij(b),
                c ? "&u=" + c : "",
                d ? "&ut=" + d : "",
                nj(),
                wj,
                xj,
                Dj,
                Cj,
                mj(a),
                Bj,
                "&z=0",
            ].join("");
        },
        Hj = function () {
            Ej = Gj();
        },
        Gj = function () {
            return [mf, "&v=3&t=t", "&pid=" + xa(), "&rv=" + bf.ad].join("");
        },
        lj = ["L", "S", "Y"],
        hj = ["S", "E"],
        Ij = { sampleRate: "0.005000", Hg: "", Gg: Number("5") },
        Jj =
            0 <= B.location.search.indexOf("?gtm_latency=") ||
            0 <= B.location.search.indexOf("&gtm_latency="),
        Kj;
    if (!(Kj = Jj)) {
        var Lj = Math.random(),
            Mj = Ij.sampleRate;
        Kj = Lj < Mj;
    }
    var Nj = Kj,
        Oj = { label: bf.I + " Container", children: [{ label: "Initialization", children: [] }] },
        Ej = Gj(),
        vj = {},
        wj = "",
        xj = "",
        Bj = "",
        Cj = "",
        kj = {},
        jj = !1,
        gj = {},
        Pj = {},
        Dj = "",
        uj = void 0,
        Fj = {},
        yj = {},
        sj = void 0,
        Qj = 5;
    0 < Ij.Gg && (Qj = Ij.Gg);
    var zj = (function (a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                wi: function () {
                    return c < a ? !1 : Pa() - d[c % a] < b;
                },
                Ri: function () {
                    var f = c++ % a;
                    d[f] = Pa();
                },
            };
        })(Qj, 1e3),
        Aj = 1e3,
        Sj = function (a, b) {
            if (Nj && !yj[a] && uj !== a) {
                pj();
                uj = a;
                Bj = wj = "";
                Fj[a] = "&e=" + rj(b) + "&eid=" + a;
                tj();
            }
        },
        Tj = function (a, b, c, d) {
            if (Nj && b) {
                var e,
                    f = String(b[Zb.jb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!yj[a]) {
                    a !== uj && (pj(), (uj = a));
                    wj = wj ? wj + "." + g : "&tr=" + g;
                    var k = b["function"];
                    if (!k) throw Error("Error: No function name given for function call.");
                    var m = (Fc[k] ? "1" : "2") + e;
                    Bj = Bj ? Bj + "." + m : "&ti=" + m;
                    tj();
                    qj();
                }
            }
        };
    var ak = function (a, b, c) {
            if (Nj && !yj[a]) {
                a !== uj && (pj(), (uj = a));
                var d = c + b;
                xj = xj ? xj + "." + d : "&epr=" + d;
                tj();
                qj();
            }
        },
        bk = function (a, b, c) {};
    var ck = {
            active: !0,
            isAllowed: function () {
                return !0;
            },
        },
        dk = function (a) {
            var b = P.zones;
            return b ? b.checkState(bf.I, a) : ck;
        },
        ek = function (a) {
            var b = P.zones;
            !b && a && (b = P.zones = a());
            return b;
        };
    function fk() {}
    function gk() {}
    function hk(a, b, c, d) {
        var e = Dc[a],
            f = ik(a, b, c, d);
        if (!f) return null;
        var g = Nc(e[Zb.Ef], c, []);
        if (g && g.length) {
            var k = g[0];
            f = hk(
                k.index,
                { onSuccess: f, onFailure: 1 === k.Zf ? b.terminate : f, terminate: b.terminate },
                c,
                d
            );
        }
        return f;
    }
    function ik(a, b, c, d) {
        function e() {
            if (f[Zb.Eh]) k();
            else {
                var x = Oc(f, c, []);
                var y = x[Zb.Mg];
                if (null != y)
                    for (var w = 0; w < y.length; w++)
                        if (!fe(y[w])) {
                            k();
                            return;
                        }
                var z = Li(c.kb, String(f[Zb.jb]), Number(f[Zb.Gf]), x[Zb.Fh]),
                    A = !1;
                x.vtp_gtmOnSuccess = function () {
                    if (!A) {
                        A = !0;
                        var E = Pa() - F;
                        Tj(c.id, Dc[a], "5", E);
                        Mi(c.kb, z, "success", E);
                        g();
                    }
                };
                x.vtp_gtmOnFailure = function () {
                    if (!A) {
                        A = !0;
                        var E = Pa() - F;
                        Tj(c.id, Dc[a], "6", E);
                        Mi(c.kb, z, "failure", E);
                        k();
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                Tj(c.id, f, "1");
                var C = function () {
                    var E = Pa() - F;
                    Tj(c.id, f, "7", E);
                    Mi(c.kb, z, "exception", E);
                    A || ((A = !0), k());
                };
                var F = Pa();
                try {
                    Mc(x, c);
                } catch (E) {
                    C(E);
                }
            }
        }
        var f = Dc[a],
            g = b.onSuccess,
            k = b.onFailure,
            m = b.terminate;
        if (c.ye(f)) return null;
        var n = Nc(f[Zb.Hf], c, []);
        if (n && n.length) {
            var p = n[0],
                q = hk(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
            if (!q) return null;
            g = q;
            k = 2 === p.Zf ? m : q;
        }
        if (f[Zb.Af] || f[Zb.Hh]) {
            var u = f[Zb.Af] ? Ec : c.Zi,
                t = g,
                r = k;
            if (!u[a]) {
                e = Ra(e);
                var v = jk(a, u, e);
                g = v.onSuccess;
                k = v.onFailure;
            }
            return function () {
                u[a](t, r);
            };
        }
        return e;
    }
    function jk(a, b, c) {
        var d = [],
            e = [];
        b[a] = kk(d, e, c);
        return {
            onSuccess: function () {
                b[a] = lk;
                for (var f = 0; f < d.length; f++) d[f]();
            },
            onFailure: function () {
                b[a] = mk;
                for (var f = 0; f < e.length; f++) e[f]();
            },
        };
    }
    function kk(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }
    function lk(a) {
        a();
    }
    function mk(a, b) {
        b();
    }
    var pk = function (a, b) {
        for (var c = [], d = 0; d < Dc.length; d++)
            if (a[d]) {
                var e = Dc[d];
                var f = Pi(b.kb);
                try {
                    var g = hk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        var k = c,
                            m = k.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Fc[p];
                        m.call(k, { zg: n, og: q ? q.priorityOverride || 0 : 0, execute: g });
                    } else nk(d, b), f();
                } catch (r) {
                    f();
                }
            }
        var u = b.kb;
        u.Z = !0;
        u.o >= u.B && Ni(u);
        c.sort(ok);
        for (var t = 0; t < c.length; t++) c[t].execute();
        return 0 < c.length;
    };
    function ok(a, b) {
        var c,
            d = b.og,
            e = a.og;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.zg,
                k = b.zg;
            f = g > k ? 1 : g < k ? -1 : 0;
        }
        return f;
    }
    function nk(a, b) {
        if (!Nj) return;
        var c = function (d) {
            var e = b.ye(Dc[d]) ? "3" : "4",
                f = Nc(Dc[d][Zb.Ef], b, []);
            f && f.length && c(f[0].index);
            Tj(b.id, Dc[d], e);
            var g = Nc(Dc[d][Zb.Hf], b, []);
            g && g.length && c(g[0].index);
        };
        c(a);
    }
    var qk = !1,
        wk = function (a) {
            var b = Pa(),
                c = a["gtm.uniqueEventId"],
                d = a.event;
            if ("gtm.js" === d) {
                if (qk) return !1;
                qk = !0;
            }
            var g = dk(c),
                k = !1;
            if (!g.active) {
                if ("gtm.js" !== d) return !1;
                k = !0;
                g = dk(Number.MAX_SAFE_INTEGER);
            }
            Sj(c, d);
            var m = a.eventCallback,
                n = a.eventTimeout,
                p = m;
            var q = {
                id: c,
                name: d,
                ye: Ci(g.isAllowed),
                Zi: [],
                ig: function () {
                    Ad(6);
                },
                Sf: rk(c),
                kb: new Ki(p, n),
            };
            q.Rf = sk();
            tk(c, q.kb);
            var u = Sc(q);
            k && (u = uk(u));
            var t = pk(u, q);
            ("gtm.js" !== d && "gtm.sync" !== d) || aj(bf.I);
            return vk(u, t);
        };
    function rk(a) {
        return function (b) {
            Nj && (Yb(b) || bk(a, "input", b));
        };
    }
    function tk(a, b) {
        Bf(a, "event", 1);
        Bf(a, "ecommerce", 1);
        Bf(a, "gtm");
        Bf(a, "eventModel");
    }
    function sk() {
        var a = {};
        a.event = Af("event", 1);
        a.ecommerce = Af("ecommerce", 1);
        a.gtm = Af("gtm");
        a.eventModel = Af("eventModel");
        return a;
    }
    function uk(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && df[String(Dc[c][Zb.jb])] && (b[c] = !0);
        return b;
    }
    function vk(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Dc[c] && !ef[String(Dc[c][Zb.jb])]) return !0;
        return !1;
    }
    function xk(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return Wf("" + c + b).href;
        }
    }
    function yk(a, b) {
        return zk() ? xk(a, b) : void 0;
    }
    function zk() {
        var a = !1;
        return a;
    }
    var Ak = function () {
        var a = !1;
        return a;
    };
    var Bk;
    if (3 === bf.ad.length) Bk = "g";
    else {
        var Ck = "G";
        Ck = "g";
        Bk = Ck;
    }
    var Dk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Bk, OPT: "o" },
        Ek = function (a) {
            var b = bf.I.split("-"),
                c = b[0].toUpperCase(),
                d = Dk[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === bf.ad.length) {
                var g = "w";
                g = Ak() ? "s" : "o";
                f = "2" + g;
            } else f = "";
            return f + d + bf.ad + e;
        };
    function Fk(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c;
    }
    var Gk = function (a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1);
    };
    function Hk() {
        return kb("iPhone") && !kb("iPod") && !kb("iPad");
    }
    kb("Opera");
    kb("Trident") || kb("MSIE");
    kb("Edge");
    !kb("Gecko") ||
        (-1 != gb.toLowerCase().indexOf("webkit") && !kb("Edge")) ||
        kb("Trident") ||
        kb("MSIE") ||
        kb("Edge");
    -1 != gb.toLowerCase().indexOf("webkit") && !kb("Edge") && kb("Mobile");
    kb("Macintosh");
    kb("Windows");
    kb("Linux") || kb("CrOS");
    var Ik = oa.navigator || null;
    Ik && (Ik.appVersion || "").indexOf("X11");
    kb("Android");
    Hk();
    kb("iPad");
    kb("iPod");
    Hk() || kb("iPad") || kb("iPod");
    gb.toLowerCase().indexOf("kaios");
    var Jk = function (a, b) {
            for (var c = a, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames[b]);
                } catch (k) {
                    e = !1;
                }
                if (e) return c;
                var f;
                a: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break a;
                        }
                    } catch (k) {}
                    f = null;
                }
                if (!(c = f)) break;
            }
            return null;
        },
        Kk = function (a) {
            var b = B;
            b = void 0 === b ? window.document : b;
            if (!a || !b.head) return null;
            var c, d, e;
            e = void 0 === e ? document : e;
            d = "META";
            "application/xhtml+xml" === (null == e ? void 0 : e.contentType) &&
                (d = d.toLowerCase());
            c = e.createElement(d);
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a;
            return c;
        };
    var Lk = function () {};
    var Mk = function (a) {
            void 0 !== a.addtlConsent &&
                "string" !== typeof a.addtlConsent &&
                (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies &&
                "boolean" !== typeof a.gdprApplies &&
                (a.gdprApplies = void 0);
            return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
                (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
                ? 2
                : a.cmpStatus && "error" !== a.cmpStatus
                ? 0
                : 3;
        },
        Nk = function (a, b) {
            this.o = a;
            this.m = null;
            this.D = {};
            this.Z = 0;
            this.N = void 0 === b ? 500 : b;
            this.B = null;
        };
    na(Nk, Lk);
    var Pk = function (a) {
        return "function" === typeof a.o.__tcfapi || null != Ok(a);
    };
    Nk.prototype.addEventListener = function (a) {
        var b = {},
            c = sb(function () {
                return a(b);
            }),
            d = 0;
        -1 !== this.N &&
            (d = setTimeout(function () {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c();
            }, this.N));
        var e = function (f, g) {
            clearTimeout(d);
            f
                ? ((b = f),
                  (b.internalErrorState = Mk(b)),
                  (g && 0 === b.internalErrorState) ||
                      ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
                : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
            a(b);
        };
        try {
            Qk(this, "addEventListener", e);
        } catch (f) {
            (b.tcString = "tcunavailable"),
                (b.internalErrorState = 3),
                d && (clearTimeout(d), (d = 0)),
                c();
        }
    };
    Nk.prototype.removeEventListener = function (a) {
        a && a.listenerId && Qk(this, "removeEventListener", null, a.listenerId);
    };
    var Sk = function (a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a;
                    }
                }
                e = void 0;
            }
            var g = e;
            if (0 === g) return !1;
            var k = c;
            2 === c ? ((k = 0), 2 === g && (k = 1)) : 3 === c && ((k = 1), 1 === g && (k = 0));
            var m;
            if (0 === k)
                if (a.purpose && a.vendor) {
                    var n = Rk(a.vendor.consents, void 0 === d ? "755" : d);
                    m =
                        n &&
                        "1" === b &&
                        a.purposeOneTreatment &&
                        ((Gd(Dd) ? 0 : "DE" === a.publisherCC) || "CH" === a.publisherCC)
                            ? !0
                            : n && Rk(a.purpose.consents, b);
                } else m = !0;
            else
                m =
                    1 === k
                        ? a.purpose && a.vendor
                            ? Rk(a.purpose.legitimateInterests, b) &&
                              Rk(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
                            : !0
                        : !0;
            return m;
        },
        Rk = function (a, b) {
            return !(!a || !a[b]);
        },
        Qk = function (a, b, c, d) {
            c || (c = function () {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d);
            } else if (Ok(a)) {
                Tk(a);
                var f = ++a.Z;
                a.D[f] = c;
                if (a.m) {
                    var g = {};
                    a.m.postMessage(
                        ((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g),
                        "*"
                    );
                }
            } else c({}, !1);
        },
        Ok = function (a) {
            if (a.m) return a.m;
            a.m = Jk(a.o, "__tcfapiLocator");
            return a.m;
        },
        Tk = function (a) {
            a.B ||
                ((a.B = function (b) {
                    try {
                        var c;
                        c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
                            .__tcfapiReturn;
                        a.D[c.callId](c.returnValue, c.success);
                    } catch (d) {}
                }),
                Gk(a.o, a.B));
        };
    var Uk = !0;
    Uk = !1;
    var Vk = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
        Wk = Fk("", 550),
        Xk = Fk("", 500);
    function Yk() {
        var a = P.tcf || {};
        return (P.tcf = a);
    }
    var Zk = function (a, b) {
            this.B = a;
            this.m = b;
            this.o = Pa();
        },
        $k = function (a) {},
        al = function (a) {},
        gl = function () {
            var a = Yk(),
                b = new Nk(l, Uk ? 3e3 : -1),
                c = new Zk(b, a);
            if (
                (bl() ? !0 === l.gtag_enable_tcf_support : !1 !== l.gtag_enable_tcf_support) &&
                !a.active &&
                ("function" === typeof l.__tcfapi || Pk(b))
            ) {
                a.active = !0;
                a.zc = {};
                cl();
                var d = null;
                Uk
                    ? (d = l.setTimeout(function () {
                          dl(a);
                          el(a);
                          d = null;
                      }, Xk))
                    : (a.tcString = "tcunavailable");
                try {
                    b.addEventListener(function (e) {
                        d && (clearTimeout(d), (d = null));
                        if (0 !== e.internalErrorState) dl(a), el(a), $k(c);
                        else {
                            var f;
                            a.gdprApplies = e.gdprApplies;
                            if (!1 === e.gdprApplies) (f = fl()), b.removeEventListener(e);
                            else if (
                                "tcloaded" === e.eventStatus ||
                                "useractioncomplete" === e.eventStatus ||
                                "cmpuishown" === e.eventStatus
                            ) {
                                var g = {},
                                    k;
                                for (k in Vk)
                                    if (Vk.hasOwnProperty(k))
                                        if ("1" === k) {
                                            var m,
                                                n = e,
                                                p = !0;
                                            p = void 0 === p ? !1 : p;
                                            var q;
                                            var u = n;
                                            !1 === u.gdprApplies
                                                ? (q = !0)
                                                : (void 0 === u.internalErrorState &&
                                                      (u.internalErrorState = Mk(u)),
                                                  (q =
                                                      "error" === u.cmpStatus ||
                                                      0 !== u.internalErrorState ||
                                                      ("loaded" === u.cmpStatus &&
                                                          ("tcloaded" === u.eventStatus ||
                                                              "useractioncomplete" ===
                                                                  u.eventStatus))
                                                          ? !0
                                                          : !1));
                                            m = q
                                                ? !1 === n.gdprApplies ||
                                                  "tcunavailable" === n.tcString ||
                                                  (void 0 === n.gdprApplies && !p) ||
                                                  "string" !== typeof n.tcString ||
                                                  !n.tcString.length
                                                    ? !0
                                                    : Sk(n, "1", 0)
                                                : !1;
                                            g["1"] = m;
                                        } else g[k] = Sk(e, k, Vk[k]);
                                f = g;
                            }
                            f && ((a.tcString = e.tcString || "tcempty"), (a.zc = f), el(a), $k(c));
                        }
                    }),
                        al(c);
                } catch (e) {
                    d && (clearTimeout(d), (d = null)), dl(a), el(a);
                }
            }
        };
    function dl(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        Uk && (a.zc = fl());
    }
    function cl() {
        var a = {},
            b = ((a.ad_storage = "denied"), (a.wait_for_update = Wk), a);
        ce(b);
    }
    var bl = function () {
        var a = !1;
        a = !0;
        return a;
    };
    function fl() {
        var a = {},
            b;
        for (b in Vk) Vk.hasOwnProperty(b) && (a[b] = !0);
        return a;
    }
    function el(a) {
        var b = {},
            c = ((b.ad_storage = a.zc["1"] ? "granted" : "denied"), b);
        hl();
        ee(c, 0);
    }
    var il = function () {
            var a = Yk();
            if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
        },
        hl = function () {
            var a = Yk();
            return a.active ? a.tcString || "" : "";
        },
        jl = function () {
            var a = Yk();
            return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? "1" : "0") : "";
        },
        kl = function (a) {
            if (!Vk.hasOwnProperty(String(a))) return !0;
            var b = Yk();
            return b.active && b.zc ? !!b.zc[String(a)] : !0;
        };
    var sl = !1;
    var tl = function () {
            this.m = {};
        },
        ul = function (a, b, c) {
            null != c && (a.m[b] = c);
        },
        vl = function (a) {
            return Object.keys(a.m)
                .map(function (b) {
                    return encodeURIComponent(b) + "=" + encodeURIComponent(a.m[b]);
                })
                .join("&");
        },
        xl = function (a, b, c, d, e) {};
    var zl = /[A-Z]+/,
        Al = /\s/,
        Bl = function (a) {
            if (h(a)) {
                a = Na(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (zl.test(c)) {
                        var d = !1;
                        d = !0;
                        for (var e = a.substring(b + 1).split("/"), f = 0; f < e.length; f++)
                            if (!e[f] || (Al.test(e[f]) && ("AW" !== c || 1 !== f || !d))) return;
                        return { id: a, prefix: c, containerId: c + "-" + e[0], K: e };
                    }
                }
            }
        },
        Dl = function (a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Bl(a[c]);
                d && (b[d.id] = d);
            }
            Cl(b);
            var e = [];
            Ca(b, function (f, g) {
                e.push(g);
            });
            return e;
        };
    function Cl(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.containerId);
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]];
    }
    var Fl = function (a, b, c, d) {
            return (2 === El() || d || "http:" != l.location.protocol ? a : b) + c;
        },
        El = function () {
            var a = Bb(),
                b;
            if (1 === a)
                a: {
                    var c = hf;
                    c = c.toLowerCase();
                    for (
                        var d = "https://" + c,
                            e = "http://" + c,
                            f = 1,
                            g = B.getElementsByTagName("script"),
                            k = 0;
                        k < g.length && 100 > k;
                        k++
                    ) {
                        var m = g[k].src;
                        if (m) {
                            m = m.toLowerCase();
                            if (0 === m.indexOf(e)) {
                                b = 3;
                                break a;
                            }
                            1 === f && 0 === m.indexOf(d) && (f = 2);
                        }
                    }
                    b = f;
                }
            else b = a;
            return b;
        };
    var Hl = function (a, b, c) {
            if (l[a.functionName]) return b.Ce && G(b.Ce), l[a.functionName];
            var d = Gl();
            l[a.functionName] = d;
            if (a.dd) for (var e = 0; e < a.dd.length; e++) l[a.dd[e]] = l[a.dd[e]] || Gl();
            a.od && void 0 === l[a.od] && (l[a.od] = c);
            Ab(Fl("https://", "http://", a.He), b.Ce, b.Hi);
            return d;
        },
        Gl = function () {
            var a = function () {
                a.q = a.q || [];
                a.q.push(arguments);
            };
            return a;
        },
        Il = {
            functionName: "_googWcmImpl",
            od: "_googWcmAk",
            He: "www.gstatic.com/wcm/loader.js",
        },
        Jl = {
            functionName: "_gaPhoneImpl",
            od: "ga_wpid",
            He: "www.gstatic.com/gaphone/loader.js",
        },
        Kl = { Lg: "", Ih: "5" },
        Ll = {
            functionName: "_googCallTrackingImpl",
            dd: [Jl.functionName, Il.functionName],
            He: "www.gstatic.com/call-tracking/call-tracking_" + (Kl.Lg || Kl.Ih) + ".js",
        },
        Ml = {},
        Nl = function (a, b, c, d) {
            Ad(22);
            if (c) {
                d = d || {};
                var e = Hl(Il, d, a),
                    f = { ak: a, cl: b };
                void 0 === d.Na && (f.autoreplace = c);
                e(2, d.Na, f, c, 0, Oa(), d.options);
            }
        },
        Ol = function (a, b, c, d) {
            Ad(21);
            if (b && c) {
                d = d || {};
                for (
                    var e = { countryNameCode: c, destinationNumber: b, retrievalTime: Oa() },
                        f = 0;
                    f < a.length;
                    f++
                ) {
                    var g = a[f];
                    Ml[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.K.length
                            ? ((e.adData = { ak: g.K[0], cl: g.K[1] }), (Ml[g.id] = !0))
                            : g &&
                              "UA" === g.prefix &&
                              !e.gaData &&
                              ((e.gaData = { gaWpid: g.containerId }), (Ml[g.id] = !0)));
                }
                (e.gaData || e.adData) && Hl(Ll, d)(d.Na, e, d.options);
            }
        },
        Pl = function () {
            var a = !1;
            return a;
        },
        Ql = function (a, b) {
            if (a)
                if (Ak()) {
                } else {
                    if (h(a)) {
                        var c = Bl(a);
                        if (!c) return;
                        a = c;
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(M.th);
                    if (f && ua(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var k = Bl(f[g]);
                            k &&
                                (d.push(k),
                                (a.id === k.id ||
                                    (a.id === a.containerId && a.containerId === k.containerId)) &&
                                    (e = !0));
                        }
                    }
                    if (!d || e) {
                        var m = b.getWithConfig(M.qf),
                            n;
                        if (m) {
                            ua(m) ? (n = m) : (n = [m]);
                            var p = b.getWithConfig(M.nf),
                                q = b.getWithConfig(M.pf),
                                u = b.getWithConfig(M.rf),
                                t = b.getWithConfig(M.sh),
                                r = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) Ol(d, n[x], t, { Na: r, options: u });
                                    else if ("AW" === a.prefix && a.K[1])
                                        Pl()
                                            ? Ol([a], n[x], t || "US", { Na: r, options: u })
                                            : Nl(a.K[0], a.K[1], n[x], { Na: r, options: u });
                                    else if ("UA" === a.prefix)
                                        if (Pl()) Ol([a], n[x], t || "US", { Na: r });
                                        else {
                                            var y = a.containerId,
                                                w = n[x],
                                                z = { Na: r };
                                            Ad(23);
                                            if (w) {
                                                z = z || {};
                                                var A = Hl(Jl, z, y),
                                                    C = {};
                                                void 0 !== z.Na
                                                    ? (C.receiver = z.Na)
                                                    : (C.replace = w);
                                                C.ga_wpid = y;
                                                C.destination = w;
                                                A(2, Oa(), C);
                                            }
                                        }
                        }
                    }
                }
        };
    var Wm = function () {
            var a = !0;
            (kl(7) && kl(9) && kl(10)) || (a = !1);
            var b = !0;
            b = !1;
            b && !Vm() && (a = !1);
            return a;
        },
        Vm = function () {
            var a = !0;
            (kl(3) && kl(4)) || (a = !1);
            return a;
        };
    var $m = function (a, b) {
            var c = b.getWithConfig(M.Ja),
                d = b.getWithConfig(M.Sa),
                e = b.getWithConfig(c);
            if (void 0 === e) {
                var f = void 0;
                Xm.hasOwnProperty(c) ? (f = Xm[c]) : Ym.hasOwnProperty(c) && (f = Ym[c]);
                1 === f && (f = Zm(c));
                h(f)
                    ? Vi()(function () {
                          var g = Vi().getByName(a).get(f);
                          d(g);
                      })
                    : d(void 0);
            } else d(e);
        },
        an = function (a, b) {
            var c = a[M.Xb];
            Yi(b + ".", a[M.M] || "", void 0 === c ? !!a.use_anchor : "fragment" === c, !!a[M.Eb]);
        },
        en = function (a, b, c) {
            if (Vd() && (!c.isGtmEvent || !bn[a])) {
                var d = !fe(M.H),
                    e = function () {
                        var f,
                            g,
                            k = Vi(),
                            m = cn(b, "", c),
                            n,
                            p = m.fa._useUp;
                        if (c.isGtmEvent || dn(b, m.fa)) {
                            var q = !0;
                            if (c.isGtmEvent) {
                                f = "gtm" + pf();
                                g = m.fa;
                                m.gtmTrackerName && (g.name = f);
                                q = !1;
                                q = !0;
                            }
                            q &&
                                k(function () {
                                    var t = k.getByName(b);
                                    t && (n = t.get("clientId"));
                                    c.isGtmEvent || k.remove(b);
                                });
                            k("create", a, c.isGtmEvent ? g : m.fa);
                            d &&
                                fe(M.H) &&
                                ((d = !1),
                                k(function () {
                                    var t = Vi().getByName(c.isGtmEvent ? f : b);
                                    !t ||
                                        (t.get("clientId") == n && p) ||
                                        (c.isGtmEvent ? (m.mc["&gcu"] = "1") : (m.ia["&gcu"] = "1"),
                                        t.set(m.mc),
                                        c.isGtmEvent
                                            ? t.send("pageview")
                                            : t.send("pageview", m.ia));
                                }));
                            c.isGtmEvent &&
                                k(function () {
                                    k.remove(f);
                                });
                        }
                    };
                $d(e, M.H);
                $d(e, M.C);
                c.isGtmEvent && (bn[a] = !0);
            }
        },
        nn = function (a, b, c) {
            function d() {
                var O = c.getWithConfig("custom_map");
                k(function () {
                    if (!c.isGtmEvent && Rb(O)) {
                        var K = r.ia,
                            L = m().getByName(n),
                            N;
                        for (N in O)
                            if (
                                O.hasOwnProperty(N) &&
                                /^(dimension|metric)\d+$/.test(N) &&
                                void 0 != O[N]
                            ) {
                                var J = L.get(Zm(O[N]));
                                fn(K, N, J);
                            }
                    }
                });
            }
            function e() {
                if (r.displayfeatures) {
                    var O = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, { cookieName: O });
                }
            }
            var f = a,
                g = "https://www.google-analytics.com/analytics.js",
                k = c.isGtmEvent ? Xi(c.getWithConfig("gaFunctionName")) : Xi();
            if (sa(k)) {
                var m = Vi,
                    n;
                c.isGtmEvent
                    ? (n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName"))
                    : (n = "gtag_" + f.split("-").join("_"));
                var p = function (O) {
                        var K = [].slice.call(arguments, 0);
                        K[0] = n ? n + "." + K[0] : "" + K[0];
                        k.apply(window, K);
                    },
                    q = function (O) {
                        var K = function (T, X) {
                                for (var S = 0; X && S < X.length; S++) p(T, X[S]);
                            },
                            L = c.isGtmEvent,
                            N = L ? gn(r) : hn(b, c);
                        if (N) {
                            var J = {};
                            O && (J._x_19 = O);
                            p("require", "ec", "ec.js", J);
                            L && N.ne && p("set", "&cu", N.ne);
                            var I = N.action;
                            if (L || "impressions" === I)
                                if ((K("ec:addImpression", N.fg), !L)) return;
                            if ("promo_click" === I || "promo_view" === I || (L && N.yc)) {
                                var V = N.yc;
                                K("ec:addPromo", V);
                                if (V && 0 < V.length && "promo_click" === I) {
                                    L ? p("ec:setAction", I, N.Xa) : p("ec:setAction", I);
                                    return;
                                }
                                if (!L) return;
                            }
                            "promo_view" !== I &&
                                "impressions" !== I &&
                                (K("ec:addProduct", N.pb), p("ec:setAction", I, N.Xa));
                        }
                    },
                    u = function (O) {
                        if (O) {
                            var K = {};
                            if (Rb(O))
                                for (var L in jn) jn.hasOwnProperty(L) && kn(jn[L], L, O[L], K);
                            p("require", "linkid", K);
                        }
                    },
                    t = function () {
                        if (Ak()) {
                        } else {
                            var O = c.getWithConfig(M.rh);
                            O &&
                                (p("require", O, { dataLayer: "dataLayer" }),
                                p("require", "render"));
                        }
                    },
                    r = cn(n, b, c),
                    v = function (O, K, L) {
                        L && (K = "" + K);
                        r.ia[O] = K;
                    };
                !c.isGtmEvent &&
                    dn(n, r.fa) &&
                    (k(function () {
                        m() && m().remove(n);
                    }),
                    (ln[n] = !1));
                k("create", f, r.fa);
                if (r.fa._x_19 && !c.isGtmEvent) {
                    var x = yk(r.fa._x_19, "/analytics.js");
                    x && (g = x);
                }
                if (c.isGtmEvent ? r.mc._x_19 : r.fa._x_19) {
                    var y = c.isGtmEvent ? r.mc._x_20 : r.fa._x_20;
                    y && !ln[n] && ((ln[n] = !0), k(bj(n, y)));
                }
                c.isGtmEvent
                    ? r.enableRecaptcha && p("require", "recaptcha", "recaptcha.js")
                    : (d(), u(r.linkAttribution));
                var w = r[M.ma];
                w && w[M.M] && an(w, n);
                p("set", r.mc);
                c.isGtmEvent && r.enableLinkId && p("require", "linkid", "linkid.js");
                c.isGtmEvent && Vd() && en(f, n, c);
                var z = r.fa._x_19 ? r.fa._x_19 : void 0;
                if (b === M.Sb)
                    if (c.isGtmEvent) {
                        e();
                        if (r.remarketingLists) {
                            var A = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require", "adfeatures", { cookieName: A });
                        }
                        q(z);
                        p("send", "pageview");
                        r.fa._useUp && Zi(n + ".");
                    } else t(), p("send", "pageview", r.ia);
                else
                    b === M.xa
                        ? (t(),
                          Ql(f, c),
                          c.getWithConfig(M.Wa) && (ai(["aw", "dc"]), Zi(n + ".")),
                          0 != r.sendPageView && p("send", "pageview", r.ia),
                          en(f, n, c))
                        : b === M.Ha
                        ? $m(n, c)
                        : "screen_view" === b
                        ? p("send", "screenview", r.ia)
                        : "timing_complete" === b
                        ? ((r.ia.hitType = "timing"),
                          v("timingCategory", r.eventCategory, !0),
                          c.isGtmEvent
                              ? v("timingVar", r.timingVar, !0)
                              : v("timingVar", r.name, !0),
                          v("timingValue", Ha(r.value)),
                          void 0 !== r.eventLabel && v("timingLabel", r.eventLabel, !0),
                          p("send", r.ia))
                        : "exception" === b
                        ? p("send", "exception", r.ia)
                        : "optimize.callback" === b ||
                          ("" === b && c.isGtmEvent) ||
                          ("track_social" === b && c.isGtmEvent
                              ? ((r.ia.hitType = "social"),
                                v("socialNetwork", r.socialNetwork, !0),
                                v("socialAction", r.socialAction, !0),
                                v("socialTarget", r.socialTarget, !0))
                              : ((c.isGtmEvent ||
                                    0 <=
                                        va(
                                            [
                                                M.yb,
                                                "select_content",
                                                M.Ga,
                                                M.wb,
                                                M.xb,
                                                M.cb,
                                                "set_checkout_option",
                                                M.ra,
                                                M.zb,
                                                M.Rb,
                                                "checkout_progress",
                                            ],
                                            b
                                        )) &&
                                    q(z),
                                c.isGtmEvent && e(),
                                (r.ia.hitType = "event"),
                                v("eventCategory", r.eventCategory, !0),
                                v("eventAction", r.eventAction || b, !0),
                                void 0 !== r.eventLabel && v("eventLabel", r.eventLabel, !0),
                                void 0 !== r.value && v("eventValue", Ha(r.value))),
                          p("send", r.ia));
                var C = !1;
                var F = mn;
                C && (F = c.getContainerTypeLoaded("UA"));
                if (!F && !c.isGtmEvent) {
                    mn = !0;
                    C && c.setContainerTypeLoaded("UA", !0);
                    Qi();
                    var E = function () {
                            C && c.setContainerTypeLoaded("UA", !1);
                            c.onFailure();
                        },
                        D = function () {
                            m().loaded || E();
                        };
                    Ak() ? G(D) : Ab(g, D, E);
                }
            } else G(c.onFailure);
        },
        on = function (a, b, c, d) {
            je(
                function () {
                    nn(a, b, d);
                },
                [M.H, M.C]
            );
        },
        qn = function (a, b) {
            function c(f) {
                function g(p, q) {
                    for (var u = 0; u < q.length; u++) {
                        var t = q[u];
                        if (f[t]) {
                            m[p] = f[t];
                            break;
                        }
                    }
                }
                function k() {
                    if (f.category) m.category = f.category;
                    else {
                        for (var p = "", q = 0; q < pn.length; q++)
                            void 0 !== f[pn[q]] && (p && (p += "/"), (p += f[pn[q]]));
                        p && (m.category = p);
                    }
                }
                var m = H(f),
                    n = !1;
                if (n || b)
                    g("id", ["id", "item_id", "promotion_id"]),
                        g("name", ["name", "item_name", "promotion_name"]),
                        g("brand", ["brand", "item_brand"]),
                        g("variant", ["variant", "item_variant"]),
                        g("list", ["list_name", "item_list_name"]),
                        g("position", ["list_position", "creative_slot", "index"]),
                        k();
                g("listPosition", ["list_position"]);
                g("creative", ["creative_name"]);
                g("list", ["list_name"]);
                g("position", ["list_position", "creative_slot"]);
                return m;
            }
            b = void 0 === b ? !1 : b;
            for (var d = [], e = 0; a && e < a.length; e++) a[e] && Rb(a[e]) && d.push(c(a[e]));
            return d.length ? d : void 0;
        },
        rn = function (a) {
            return fe(a);
        },
        sn = !1;
    var tn = !1;
    var mn,
        ln = {},
        bn = {},
        Xm = {
            client_id: 1,
            client_storage: "storage",
            cookie_name: 1,
            cookie_domain: 1,
            cookie_expires: 1,
            cookie_path: 1,
            cookie_update: 1,
            cookie_flags: 1,
            sample_rate: 1,
            site_speed_sample_rate: 1,
            use_amp_client_id: 1,
            store_gac: 1,
            conversion_linker: "storeGac",
        },
        un = {
            name: !0,
            clientId: !0,
            sampleRate: !0,
            siteSpeedSampleRate: !0,
            alwaysSendReferrer: !0,
            allowAnchor: !0,
            allowLinker: !0,
            cookieName: !0,
            cookieDomain: !0,
            cookieExpires: !0,
            cookiePath: !0,
            cookieUpdate: !0,
            cookieFlags: !0,
            legacyCookieDomain: !0,
            legacyHistoryImport: !0,
            storage: !0,
            useAmpClientId: !0,
            storeGac: !0,
            _cd2l: !0,
            _useUp: !0,
            _cs: !0,
        },
        vn = { anonymize_ip: 1 },
        Ym = {
            app_id: 1,
            app_installer_id: 1,
            app_name: 1,
            app_version: 1,
            campaign: {
                name: "campaignName",
                source: "campaignSource",
                medium: "campaignMedium",
                term: "campaignKeyword",
                content: "campaignContent",
                id: "campaignId",
            },
            currency: "currencyCode",
            description: "exDescription",
            fatal: "exFatal",
            language: 1,
            non_interaction: 1,
            page_hostname: "hostname",
            page_referrer: "referrer",
            page_path: "page",
            page_location: "location",
            page_title: "title",
            screen_name: 1,
            transport_type: "transport",
            user_id: 1,
        },
        wn = {
            content_id: 1,
            event_category: 1,
            event_action: 1,
            event_label: 1,
            link_attribution: 1,
            linker: 1,
            method: 1,
            name: 1,
            send_page_view: 1,
            value: 1,
        },
        xn = {
            eventCategory: !0,
            eventAction: !0,
            eventLabel: !0,
            timingVar: !0,
            value: !0,
            socialNetwork: !0,
            socialAction: !0,
            socialTarget: !0,
            gaFunctionName: !0,
            displayfeatures: !0,
            remarketingLists: !0,
            enableLinkId: !0,
            enableRecaptcha: !0,
            linker: !0,
            gtmEcommerceData: !0,
            gtmTrackerName: !0,
        },
        pn = [
            "item_category",
            "item_category2",
            "item_category3",
            "item_category4",
            "item_category5",
        ],
        jn = { cookie_name: 1, cookie_expires: "duration", levels: 1 },
        yn = {
            anonymize_ip: 1,
            fatal: 1,
            non_interaction: 1,
            use_amp_client_id: 1,
            send_page_view: 1,
            store_gac: 1,
            conversion_linker: 1,
        },
        kn = function (a, b, c, d) {
            if (void 0 !== c)
                if ((yn[b] && (c = Ja(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a))
                    d[Zm(b)] = c;
                else if (h(a)) d[a] = c;
                else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
        },
        Zm = function (a) {
            return a && h(a)
                ? a.replace(/(_[a-z])/g, function (b) {
                      return b[1].toUpperCase();
                  })
                : a;
        },
        zn = function (a) {
            var b = "general";
            0 <=
            va(
                [
                    M.Te,
                    M.wb,
                    M.Ue,
                    M.cb,
                    "checkout_progress",
                    M.ra,
                    M.zb,
                    M.xb,
                    "set_checkout_option",
                ],
                a
            )
                ? (b = "ecommerce")
                : 0 <=
                  va(
                      "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
                          " "
                      ),
                      a
                  )
                ? (b = "engagement")
                : "exception" === a && (b = "error");
            return b;
        },
        fn = function (a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c);
        },
        An = function (a) {
            if (ua(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f));
                    }
                }
                return 0 < b.length ? b.join("!") : void 0;
            }
        },
        cn = function (a, b, c) {
            function d(L, N) {
                void 0 !== N && (k[L] = N);
            }
            var e = function (L) {
                    return c.getWithConfig(L);
                },
                f = {},
                g = {},
                k = {},
                m = {},
                n = An(e(M.nh));
            !c.isGtmEvent && n && fn(g, "exp", n);
            k["&gtm"] = Ek(!0);
            Vd() && (m._cs = rn);
            var p = e("custom_map");
            if (!c.isGtmEvent && Rb(p))
                for (var q in p)
                    if (
                        p.hasOwnProperty(q) &&
                        /^(dimension|metric)\d+$/.test(q) &&
                        void 0 != p[q]
                    ) {
                        var u = e(String(p[q]));
                        void 0 !== u && fn(g, q, u);
                    }
            for (var t = Ze(c), r = 0; r < t.length; ++r) {
                var v = t[r];
                if (c.isGtmEvent) {
                    var x = e(v);
                    xn.hasOwnProperty(v)
                        ? (f[v] = x)
                        : un.hasOwnProperty(v)
                        ? (m[v] = x)
                        : "currencyCode" != v && (k[v] = x);
                } else {
                    var y = void 0;
                    y = v !== M.aa ? e(v) : $e(c, v);
                    if (wn.hasOwnProperty(v)) kn(wn[v], v, y, f);
                    else if (vn.hasOwnProperty(v)) kn(vn[v], v, y, k);
                    else if (Ym.hasOwnProperty(v)) kn(Ym[v], v, y, g);
                    else if (Xm.hasOwnProperty(v)) kn(Xm[v], v, y, m);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) kn(1, v, y, g);
                    else if (v === M.aa) {
                        if (!sn) {
                            var w = Xa(y);
                            w && (g["&did"] = w);
                        }
                        if (tn) {
                            var z = Xa($e(c, v, 1), ".");
                            z && (g["&gdid"] = z);
                            var A = Xa($e(c, v, 2), ".");
                            A && (g["&edid"] = A);
                        }
                    } else v === M.la && 0 > va(t, M.Kc) && (m.cookieName = y + "_ga");
                }
            }
            (!1 !== e(M.dh) && !1 !== e(M.Tb) && Wm()) || (k.allowAdFeatures = !1);
            if (!1 === e(M.ya) || !Vm()) {
                var C = c.isGtmEvent ? "allowAdPersonalizationSignals" : "allowAdFeatures";
                C = "allowAdPersonalizationSignals";
                k[C] = !1;
            }
            !c.isGtmEvent && e(M.Wa) && (m._useUp = !0);
            if (c.isGtmEvent) {
                m.name = m.name || f.gtmTrackerName;
                var F = k.hitCallback;
                k.hitCallback = function () {
                    sa(F) && F();
                    c.onSuccess();
                };
            } else {
                fn(m, "cookieDomain", "auto");
                fn(k, "forceSSL", !0);
                fn(f, "eventCategory", zn(b));
                0 <=
                    va(
                        ["view_item", "view_item_list", "view_promotion", "view_search_results"],
                        b
                    ) && fn(g, "nonInteraction", !0);
                "login" === b || "sign_up" === b || "share" === b
                    ? fn(f, "eventLabel", e(M.qh))
                    : "search" === b || "view_search_results" === b
                    ? fn(f, "eventLabel", e(M.wh))
                    : "select_content" === b && fn(f, "eventLabel", e(M.hh));
                var E = f[M.ma] || {},
                    D = E[M.Db];
                D || (0 != D && E[M.M])
                    ? (m.allowLinker = !0)
                    : !1 === D && fn(m, "useAmpClientId", !1);
                g.hitCallback = c.onSuccess;
                m.name = a;
            }
            Vd() &&
                ((k["&gcs"] = ge()),
                fe(M.H) || (m.storage = "none"),
                fe(M.C) || ((k.allowAdFeatures = !1), (m.storeGac = !1)));
            var O = e(M.na) || e(M.ph),
                K = e(M.oh);
            if (O) {
                c.isGtmEvent || (m._x_19 = O);
                m._cd2l = !0;
            }
            K && !c.isGtmEvent && (m._x_20 = K);
            f.ia = g;
            f.mc = k;
            f.fa = m;
            return f;
        },
        gn = function (a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.ne = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.fg = "impressions" === b.translateIfKeyEquals ? qn(d, !0) : d;
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.yc = "promoView" === b.translateIfKeyEquals ? qn(e, !0) : e;
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.yc = "promoClick" === b.translateIfKeyEquals ? qn(f, !0) : f;
                c.Xa = b.promoClick.actionField;
                return c;
            }
            for (var g in b)
                if (
                    b.hasOwnProperty(g) &&
                    "translateIfKeyEquals" !== g &&
                    "impressions" !== g &&
                    "promoView" !== g &&
                    "promoClick" !== g &&
                    "currencyCode" !== g
                ) {
                    c.action = g;
                    var k = b[g].products;
                    c.pb = "products" === b.translateIfKeyEquals ? qn(k, !0) : k;
                    c.Xa = b[g].actionField;
                    break;
                }
            return Object.keys(c).length ? c : null;
        },
        hn = function (a, b) {
            function c(t) {
                return {
                    id: d(M.Va),
                    affiliation: d(M.kh),
                    revenue: d(M.ca),
                    tax: d(M.ff),
                    shipping: d(M.Kd),
                    coupon: d(M.lh),
                    list: d(M.Jd) || t,
                };
            }
            for (
                var d = function (t) {
                        return b.getWithConfig(t);
                    },
                    e = d(M.V),
                    f,
                    g = 0;
                e && g < e.length && !(f = e[g][M.Jd]);
                g++
            );
            var k = d("custom_map");
            if (Rb(k))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in k)
                        k.hasOwnProperty(p) &&
                            /^(dimension|metric)\d+$/.test(p) &&
                            void 0 != k[p] &&
                            fn(n, p, n[k[p]]);
                }
            var q = null,
                u = d(M.mh);
            a === M.ra || a === M.zb
                ? (q = { action: a, Xa: c(), pb: qn(e) })
                : a === M.wb
                ? (q = { action: "add", pb: qn(e) })
                : a === M.xb
                ? (q = { action: "remove", pb: qn(e) })
                : a === M.Ga
                ? (q = { action: "detail", Xa: c(f), pb: qn(e) })
                : a === M.yb
                ? (q = { action: "impressions", fg: qn(e) })
                : "view_promotion" === a
                ? (q = { action: "promo_view", yc: qn(u) })
                : "select_content" === a && u && 0 < u.length
                ? (q = { action: "promo_click", yc: qn(u) })
                : "select_content" === a
                ? (q = { action: "click", Xa: { list: d(M.Jd) || f }, pb: qn(e) })
                : a === M.cb || "checkout_progress" === a
                ? (q = {
                      action: "checkout",
                      pb: qn(e),
                      Xa: { step: a === M.cb ? 1 : d(M.ef), option: d(M.df) },
                  })
                : "set_checkout_option" === a &&
                  (q = { action: "checkout_option", Xa: { step: d(M.ef), option: d(M.df) } });
            q && (q.ne = d(M.ba));
            return q;
        },
        Bn = {},
        dn = function (a, b) {
            var c = Bn[a];
            Bn[a] = H(b);
            if (!c) return !1;
            for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1;
        };
    var Cn = !1;
    Cn = !0;
    var Dn = !1;
    Dn = !0;
    function En() {
        var a = P;
        return (a.gcq = a.gcq || new Fn());
    }
    var Gn = function (a, b, c) {
            En().register(a, b, c);
        },
        Hn = function (a, b, c, d) {
            En().push("event", [b, a], c, d);
        },
        In = function (a, b) {
            En().push("config", [a], b);
        },
        Jn = function (a, b, c, d) {
            En().push("get", [a, b], c, d);
        },
        Kn = {},
        Ln = function () {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.B = null;
            this.m = !1;
        },
        Mn = function (a, b, c, d, e) {
            this.type = a;
            this.B = b;
            this.P = c || "";
            this.m = d;
            this.o = e;
        },
        Fn = function () {
            this.o = {};
            this.B = {};
            this.m = [];
            this.D = { AW: !1, UA: !1 };
            this.enableDeferrableCommandAfterConfig = Cn;
        },
        Nn = function (a, b) {
            var c = Bl(b);
            return (a.o[c.containerId] = a.o[c.containerId] || new Ln());
        },
        On = function (a, b, c) {
            if (b) {
                var d = Bl(b);
                if (d && 1 === Nn(a, b).status) {
                    Nn(a, b).status = 2;
                    var e = {};
                    Nj &&
                        (e.timeoutId = l.setTimeout(function () {
                            Ad(38);
                            tj();
                        }, 3e3));
                    a.push("require", [e], d.containerId);
                    Kn[d.containerId] = Pa();
                    if (Ak()) {
                    } else {
                        var g =
                            "/gtag/js?id=" +
                            encodeURIComponent(d.containerId) +
                            "&l=dataLayer&cx=c";
                        bf.Ib &&
                            "SGTM_TOKEN" !== bf.Ib.replaceAll("@@", "") &&
                            (g += "&sign=" + bf.Ib);
                        var k =
                                ("http:" != l.location.protocol ? "https:" : "http:") +
                                ("//www.googletagmanager.com" + g),
                            m = yk(c, g) || k;
                        Ab(m);
                    }
                }
            }
        },
        Pn = function (a, b, c, d) {
            if (d.P) {
                var e = Nn(a, d.P),
                    f = e.B;
                if (f) {
                    var g = H(c),
                        k = H(e.targetConfig[d.P]),
                        m = H(e.containerConfig),
                        n = H(e.remoteConfig),
                        p = H(a.B),
                        q = wf("gtm.uniqueEventId"),
                        u = Bl(d.P).prefix,
                        t = Ra(function () {
                            var v = g[M.Bb];
                            v && G(v);
                        }),
                        r = Xe(
                            We(
                                Ye(
                                    Ve(Te(Ue(Se(Re(Qe(g), k), m), n), p), function () {
                                        ak(q, u, "2");
                                        Dn && t();
                                    }),
                                    function () {
                                        ak(q, u, "3");
                                        Dn && t();
                                    }
                                ),
                                function (v, x) {
                                    a.D[v] = x;
                                }
                            ),
                            function (v) {
                                return a.D[v];
                            }
                        );
                    try {
                        ak(q, u, "1");
                        f(d.P, b, d.B, r);
                    } catch (v) {
                        ak(q, u, "4");
                    }
                }
            }
        };
    Fn.prototype.register = function (a, b, c) {
        var d = Nn(this, a);
        if (3 !== d.status) {
            d.B = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), (d.remoteConfig = c));
            var e = Bl(a),
                f = Kn[e.containerId];
            if (void 0 !== f) {
                var g = P[e.containerId].bootstrap,
                    k = e.prefix.toUpperCase();
                P[e.containerId]._spx && (k = k.toLowerCase());
                var m = wf("gtm.uniqueEventId"),
                    n = k,
                    p = Pa() - g;
                if (Nj && !yj[m]) {
                    m !== uj && (pj(), (uj = m));
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Cj = Cj ? Cj + "," + q : "&cl=" + q;
                }
                delete Kn[e.containerId];
            }
            this.flush();
        }
    };
    Fn.prototype.push = function (a, b, c, d) {
        var e = Math.floor(Pa() / 1e3);
        On(this, c, b[0][M.na] || this.B[M.na]);
        Cn && c && Nn(this, c).m && (d = !1);
        this.m.push(new Mn(a, e, c, b, d));
        d || this.flush();
    };
    Fn.prototype.insert = function (a, b, c) {
        var d = Math.floor(Pa() / 1e3);
        0 < this.m.length
            ? this.m.splice(1, 0, new Mn(a, d, c, b, !1))
            : this.m.push(new Mn(a, d, c, b, !1));
    };
    Fn.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.m.length; ) {
            var f = this.m[0];
            if (f.o)
                Cn
                    ? !f.P || Nn(this, f.P).m
                        ? ((f.o = !1), this.m.push(f))
                        : c.push(f)
                    : ((f.o = !1), this.m.push(f)),
                    this.m.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Nn(this, f.P).status && !a) {
                            Cn && this.m.push.apply(this.m, c);
                            return;
                        }
                        Nj && l.clearTimeout(f.m[0].timeoutId);
                        break;
                    case "set":
                        Ca(f.m[0], function (u, t) {
                            H(Va(u, t), b.B);
                        });
                        break;
                    case "config":
                        e.Fa = {};
                        Ca(
                            f.m[0],
                            (function (u) {
                                return function (t, r) {
                                    H(Va(t, r), u.Fa);
                                };
                            })(e)
                        );
                        var g = !!e.Fa[M.Tc];
                        delete e.Fa[M.Tc];
                        var k = Nn(this, f.P),
                            m = Bl(f.P),
                            n = m.containerId === m.id;
                        g || (n ? (k.containerConfig = {}) : (k.targetConfig[f.P] = {}));
                        (k.m && g) || Pn(this, M.xa, e.Fa, f);
                        k.m = !0;
                        delete e.Fa[M.cc];
                        n ? H(e.Fa, k.containerConfig) : H(e.Fa, k.targetConfig[f.P]);
                        Cn && (d = !0);
                        break;
                    case "event":
                        e.Dc = {};
                        Ca(
                            f.m[0],
                            (function (u) {
                                return function (t, r) {
                                    H(Va(t, r), u.Dc);
                                };
                            })(e)
                        );
                        Pn(this, f.m[1], e.Dc, f);
                        break;
                    case "get":
                        var p = {},
                            q = ((p[M.Ja] = f.m[0]), (p[M.Sa] = f.m[1]), p);
                        Pn(this, M.Ha, q, f);
                }
                this.m.shift();
                Qn(this, f);
            }
            e = { Fa: e.Fa, Dc: e.Dc };
        }
        Cn && (this.m.push.apply(this.m, c), d && this.flush());
    };
    var Qn = function (a, b) {
        if ("require" !== b.type)
            if (b.P)
                for (var c = a.getCommandListeners(b.P)[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], k = 0; k < g.length; k++) g[k]();
                    }
    };
    Fn.prototype.getRemoteConfig = function (a) {
        return Nn(this, a).remoteConfig;
    };
    Fn.prototype.getCommandListeners = function (a) {
        return Nn(this, a).o;
    };
    var Rn = function (a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Mb(a, "className"),
                "gtm.elementId": a["for"] || Hb(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Mb(a, "target") || "",
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] =
                (a.attributes && a.attributes.formaction ? a.formAction : "") ||
                a.action ||
                Mb(a, "href") ||
                a.src ||
                a.code ||
                a.codebase ||
                "";
            return d;
        },
        Sn = function (a) {
            P.hasOwnProperty("autoEventsSettings") || (P.autoEventsSettings = {});
            var b = P.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a];
        },
        Tn = function (a, b, c) {
            Sn(a)[b] = c;
        },
        Un = function (a, b, c, d) {
            var e = Sn(a),
                f = Qa(e, b, d);
            e[b] = c(f);
        },
        Vn = function (a, b, c) {
            var d = Sn(a);
            return Qa(d, b, c);
        };
    var fo = !1,
        go = [];
    function ho() {
        if (!fo) {
            fo = !0;
            for (var a = 0; a < go.length; a++) G(go[a]);
        }
    }
    var io = function (a) {
        fo ? G(a) : go.push(a);
    };
    function jo(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c;
    }
    var ko = new ya();
    function lo(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = ko.get(e);
            f || ((f = new RegExp(b, d)), ko.set(e, f));
            return f.test(a);
        } catch (g) {
            return !1;
        }
    }
    function mo(a, b) {
        function c(g) {
            var k = Wf(g),
                m = Uf(k, "protocol"),
                n = Uf(k, "host", !0),
                p = Uf(k, "port"),
                q = Uf(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || ("http" == m && "80" == p) || ("https" == m && "443" == p))
                (m = "web"), (p = "default");
            return [m, n, p, q];
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0;
    }
    function no(a) {
        return oo(a) ? 1 : 0;
    }
    function oo(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && ua(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = H(a, {});
                H({ arg1: c[d], any_of: void 0 }, e);
                if (no(e)) return !0;
            }
            return !1;
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) {
                        var g = [
                            "matches",
                            "webkitMatchesSelector",
                            "mozMatchesSelector",
                            "msMatchesSelector",
                            "oMatchesSelector",
                        ];
                        try {
                            for (var k = 0; k < g.length; k++)
                                if (b[g[k]]) {
                                    f = b[g[k]](c);
                                    break a;
                                }
                        } catch (n) {}
                    }
                    f = !1;
                }
                return f;
            case "_ew":
                return jo(b, c);
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= va(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return lo(b, c, a.ignore_case);
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return mo(b, c);
        }
        return !1;
    }
    Object.freeze({ dl: 1, id: 1 });
    var po = {},
        qo = function (a, b) {
            b = b.toString().split(",");
            for (var c = 0; c < b.length; c++) {
                var d = po[b[c]] || [];
                po[b[c]] = d;
                0 > va(d, a) && d.push(a);
            }
        },
        ro = function (a) {
            Ca(po, function (b, c) {
                var d = va(c, a);
                0 <= d && c.splice(d, 1);
            });
        };
    var so = "HA GF G UA AW DC".split(" "),
        to = !1;
    to = !0;
    var uo = !1,
        vo = !1;
    function wo(a, b) {
        var c = { event: a };
        b &&
            ((c.eventModel = H(b)),
            b[M.Bb] && (c.eventCallback = b[M.Bb]),
            b[M.Nc] && (c.eventTimeout = b[M.Nc]));
        return c;
    }
    function xo(a) {
        a.hasOwnProperty("gtm.uniqueEventId") ||
            Object.defineProperty(a, "gtm.uniqueEventId", { value: pf() });
        return a["gtm.uniqueEventId"];
    }
    function yo() {
        if (!uo && !P.gtagRegistered) {
            uo = P.gtagRegistered = !0;
            P.addTargetToGroup = function (c) {
                qo(c, "default");
            };
        }
        return uo;
    }
    var zo = {
            config: function (a) {
                var b,
                    c = xo(a);
                if (2 > a.length || !h(a[1])) return;
                var d = {};
                if (2 < a.length) {
                    if ((void 0 != a[2] && !Rb(a[2])) || 3 < a.length) return;
                    d = a[2];
                }
                var e = Bl(a[1]);
                if (!e) return;
                ro(e.id);
                qo(e.id, d[M.Od] || "default");
                delete d[M.Od];
                vo || Ad(43);
                if (yo() && -1 !== va(so, e.prefix)) {
                    "G" === e.prefix && (d[M.cc] = !0);
                    to && delete d[M.Bb];
                    In(d, e.id);
                    return;
                }
                zf("gtag.targets." + e.id, void 0);
                zf("gtag.targets." + e.id, H(d));
                var f = {};
                f[M.ib] = e.id;
                b = wo(M.xa, f);
                b["gtm.uniqueEventId"] = c;
                return b;
            },
            consent: function (a) {
                function b() {
                    yo() && H(a[2], { subcommand: a[1] });
                }
                if (3 === a.length) {
                    Ad(39);
                    var c = pf(),
                        d = a[1];
                    "default" === d ? (b(), ce(a[2])) : "update" === d && (b(), ee(a[2], c));
                }
            },
            event: function (a) {
                var b = a[1];
                if (!(2 > a.length) && h(b)) {
                    var c;
                    if (2 < a.length) {
                        if ((!Rb(a[2]) && void 0 != a[2]) || 3 < a.length) return;
                        c = a[2];
                    }
                    var d = wo(b, c),
                        e = xo(a);
                    d["gtm.uniqueEventId"] = e;
                    var f;
                    var g = c && c[M.ib];
                    void 0 === g && ((g = wf(M.ib, 2)), void 0 === g && (g = "default"));
                    if (h(g) || ua(g)) {
                        for (
                            var k = g.toString().replace(/\s+/g, "").split(","), m = [], n = 0;
                            n < k.length;
                            n++
                        )
                            if (0 <= k[n].indexOf("-")) m.push(k[n]);
                            else {
                                var p = po[k[n]];
                                p && p.length && (m = m.concat(p));
                            }
                        f = Dl(m);
                    } else f = void 0;
                    var q = f;
                    if (!q) return;
                    for (var u = yo(), t = [], r = 0; u && r < q.length; r++) {
                        var v = q[r];
                        if (-1 !== va(so, v.prefix)) {
                            var x = H(c);
                            "G" === v.prefix && (x[M.cc] = !0);
                            to && delete x[M.Bb];
                            Hn(b, x, v.id);
                        }
                        t.push(v.id);
                    }
                    d.eventModel = d.eventModel || {};
                    0 < q.length ? (d.eventModel[M.ib] = t.join()) : delete d.eventModel[M.ib];
                    vo || Ad(43);
                    return d;
                }
            },
            get: function (a) {
                Ad(53);
                if (4 !== a.length || !h(a[1]) || !h(a[2]) || !sa(a[3])) return;
                var b = Bl(a[1]),
                    c = String(a[2]),
                    d = a[3];
                if (!b) return;
                vo || Ad(43);
                if (!yo() || -1 === va(so, b.prefix)) return;
                pf();
                var e = {};
                fk(H(((e[M.Ja] = c), (e[M.Sa] = d), e)));
                Jn(
                    c,
                    function (f) {
                        G(function () {
                            return d(f);
                        });
                    },
                    b.id
                );
            },
            js: function (a) {
                if (2 == a.length && a[1].getTime) {
                    vo = !0;
                    yo();
                    var b = {};
                    return (
                        (b.event = "gtm.js"),
                        (b["gtm.start"] = a[1].getTime()),
                        (b["gtm.uniqueEventId"] = xo(a)),
                        b
                    );
                }
            },
            policy: function () {},
            set: function (a) {
                var b;
                2 == a.length && Rb(a[1])
                    ? (b = H(a[1]))
                    : 3 == a.length &&
                      h(a[1]) &&
                      ((b = {}), Rb(a[2]) || ua(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
                if (b) {
                    if ((pf(), yo())) {
                        H(b);
                        var c = H(b);
                        En().push("set", [c]);
                    }
                    b._clear = !0;
                    return b;
                }
            },
        },
        Ao = { policy: !0 };
    var Bo = function (a, b) {
            var c = a.hide;
            if (c && void 0 !== c[b] && c.end) {
                c[b] = !1;
                var d = !0,
                    e;
                for (e in c)
                    if (c.hasOwnProperty(e) && !0 === c[e]) {
                        d = !1;
                        break;
                    }
                d && (c.end(), (c.end = null));
            }
        },
        Do = function (a) {
            var b = Co(),
                c = b && b.hide;
            c && c.end && (c[a] = !0);
        };
    var Uo = function (a) {
        if (To(a)) return a;
        this.m = a;
    };
    Uo.prototype.mi = function () {
        return this.m;
    };
    var To = function (a) {
        return !a || "object" !== Pb(a) || Rb(a) ? !1 : "getUntrustedUpdateValue" in a;
    };
    Uo.prototype.getUntrustedUpdateValue = Uo.prototype.mi;
    var Vo = [],
        Wo = !1,
        Xo = !1,
        Yo = function (a) {
            return l["dataLayer"].push(a);
        },
        Zo = function (a, b) {
            var c = P["dataLayer"],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b &&
                (g = l.setTimeout(function () {
                    f || ((f = !0), a());
                    g = void 0;
                }, b));
            return function () {
                ++e === d && (g && (l.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)));
            };
        };
    function $o(a) {
        var b = a._clear;
        Ca(a, function (d, e) {
            "_clear" !== d && (b && zf(d, void 0), zf(d, e));
        });
        kf || (kf = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || ((c = pf()), (a["gtm.uniqueEventId"] = c), zf("gtm.uniqueEventId", c));
        return wk(a);
    }
    function ap() {
        var a = Vo[0];
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ea(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0;
        }
        return !1;
    }
    function bp() {
        for (var a = !1; !Xo && 0 < Vo.length; ) {
            if (!Wo && ap()) {
                var b = {},
                    c = ((b.event = "gtm.init_consent"), b),
                    d = {},
                    e = ((d.event = "gtm.init"), d);
                var f = Vo[0]["gtm.uniqueEventId"];
                f && ((c["gtm.uniqueEventId"] = f - 2), (e["gtm.uniqueEventId"] = f - 1));
                Vo.unshift(c, e);
                Wo = !0;
            }
            Xo = !0;
            delete tf.eventModel;
            vf();
            var g = Vo.shift();
            if (null != g) {
                var k = To(g);
                if (k) {
                    var m = g;
                    g = To(m) ? m.getUntrustedUpdateValue() : void 0;
                    for (
                        var n = [
                                "gtm.allowlist",
                                "gtm.blocklist",
                                "gtm.whitelist",
                                "gtm.blacklist",
                                "tagTypeBlacklist",
                            ],
                            p = 0;
                        p < n.length;
                        p++
                    ) {
                        var q = n[p],
                            u = wf(q, 1);
                        if (ua(u) || Rb(u)) u = H(u);
                        uf[q] = u;
                    }
                }
                try {
                    if (sa(g))
                        try {
                            g.call(xf);
                        } catch (A) {}
                    else if (ua(g)) {
                        var t = g;
                        if (h(t[0])) {
                            var r = t[0].split("."),
                                v = r.pop(),
                                x = t.slice(1),
                                y = wf(r.join("."), 2);
                            if (void 0 !== y && null !== y)
                                try {
                                    y[v].apply(y, x);
                                } catch (A) {}
                        }
                    } else {
                        if (Ea(g)) {
                            a: {
                                var w = g;
                                if (w.length && h(w[0])) {
                                    var z = zo[w[0]];
                                    if (z && (!k || !Ao[w[0]])) {
                                        g = z(w);
                                        break a;
                                    }
                                }
                                g = void 0;
                            }
                            if (!g) {
                                Xo = !1;
                                continue;
                            }
                        }
                        a = $o(g) || a;
                    }
                } finally {
                    k && vf(!0);
                }
            }
            Xo = !1;
        }
        return !a;
    }
    function cp() {
        var b = bp();
        try {
            Bo(l["dataLayer"], bf.I);
        } catch (c) {}
        return b;
    }
    var ep = function () {
            var a = wb("dataLayer", []),
                b = wb("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Ii(function () {
                b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
            });
            io(function () {
                b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function () {
                var e;
                if (0 < P.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new Uo(arguments[f]);
                } else e = [].slice.call(arguments, 0);
                var g = c.apply(a, e);
                Vo.push.apply(Vo, e);
                if (300 < this.length) for (Ad(4); 300 < this.length; ) this.shift();
                var k = "boolean" !== typeof g || g;
                return bp() && k;
            };
            var d = a.slice(0);
            Vo.push.apply(Vo, d);
            if (dp()) {
                G(cp);
            }
        },
        dp = function () {
            var a = !0;
            return a;
        };
    var fp = {};
    fp.Xc = new String("undefined");
    var sp = l.clearTimeout,
        tp = l.setTimeout,
        R = function (a, b, c) {
            if (Ak()) {
                b && G(b);
            } else return Ab(a, b, c, void 0);
        },
        up = function () {
            return new Date();
        },
        vp = function () {
            return l.location.href;
        },
        wp = function (a) {
            return Uf(Wf(a), "fragment");
        },
        xp = function (a) {
            return Vf(Wf(a));
        },
        yp = function (a, b) {
            return wf(a, b || 2);
        },
        zp = function (a, b, c) {
            var d;
            b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Yo(a))) : (d = Yo(a));
            return d;
        },
        Ap = function (a, b) {
            l[a] = b;
        },
        U = function (a, b, c) {
            b && (void 0 === l[a] || (c && !l[a])) && (l[a] = b);
            return l[a];
        },
        Bp = function (a, b, c) {
            return Cg(a, b, void 0 === c ? !0 : !!c);
        },
        Cp = function (a, b, c) {
            return 0 === Lg(a, b, c);
        },
        Dp = function (a, b) {
            if (Ak()) {
                b && G(b);
            } else Cb(a, b);
        },
        Ep = function (a) {
            return !!Vn(a, "init", !1);
        },
        Fp = function (a) {
            Tn(a, "init", !0);
        },
        Gp = function (a) {
            var b = hf,
                c = "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            bf.Ib &&
                "SGTM_TOKEN" !== bf.Ib.replaceAll("@@", "") &&
                ((c += "&sign=" + bf.Ib),
                vb && (b = vb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]));
            var d = Fl("https://", "http://", b + c);
            R(d);
        },
        Hp = function (a, b, c) {
            Nj && (Yb(a) || bk(c, b, a));
        };

    var eq = encodeURI,
        Y = encodeURIComponent,
        fq = Eb;
    var gq = function (a, b) {
        if (!a) return !1;
        var c = Uf(Wf(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
                if (0 <= f && c.indexOf(e, f) == f) return !0;
            }
        }
        return !1;
    };
    var hq = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] &&
                a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) &&
                ((d[a[f][b]] = a[f][c]), (e = !0));
        return e ? d : null;
    };
    function Pr() {
        return (l.gaGlobal = l.gaGlobal || {});
    }
    var Qr = function () {
            var a = Pr();
            a.hid = a.hid || xa();
            return a.hid;
        },
        Rr = function (a, b) {
            var c = Pr();
            if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
        };
    var rs = function () {
        if (sa(l.__uspapi)) {
            var a = "";
            try {
                l.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
                    }
                });
            } catch (b) {}
            return a;
        }
    };
    var Rs = window,
        Ss = document,
        Ts = function (a) {
            var b = Rs._gaUserPrefs;
            if ((b && b.ioo && b.ioo()) || (a && !0 === Rs["ga-disable-" + a])) return !0;
            try {
                var c = Rs.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
            } catch (f) {}
            for (var d = tg("AMP_TOKEN", String(Ss.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Ss.getElementById("__gaOptOutExtension") ? !0 : !1;
        };
    var Us = {};
    function Xs(a) {
        delete a.eventModel[M.cc];
        Zs(a.eventModel);
    }
    var Zs = function (a) {
        Ca(a, function (c) {
            "_" === c.charAt(0) && delete a[c];
        });
        var b = a[M.Ka] || {};
        Ca(b, function (c) {
            "_" === c.charAt(0) && delete b[c];
        });
    };
    var bt = function (a, b, c) {
            Hn(b, c, a);
        },
        ct = function (a, b, c) {
            Hn(b, c, a, !0);
        },
        gt = function (a, b) {};
    function dt(a, b) {}
    var Z = { g: {} };

    (Z.g.e = ["google"]),
        (function () {
            (function (a) {
                Z.__e = a;
                Z.__e.h = "e";
                Z.__e.isVendorTemplate = !0;
                Z.__e.priorityOverride = 0;
            })(function (a) {
                var b = String(Cf(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b;
            });
        })();
    (Z.g.v = ["google"]),
        (function () {
            (function (a) {
                Z.__v = a;
                Z.__v.h = "v";
                Z.__v.isVendorTemplate = !0;
                Z.__v.priorityOverride = 0;
            })(function (a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = yp(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                Hp(d, "v", a.vtp_gtmEventId);
                return d;
            });
        })();
    (Z.g.rep = ["google"]),
        (function () {
            (function (a) {
                Z.__rep = a;
                Z.__rep.h = "rep";
                Z.__rep.isVendorTemplate = !0;
                Z.__rep.priorityOverride = 0;
            })(function (a) {
                var b;
                switch (Bl(a.vtp_containerId).prefix) {
                    case "AW":
                        b = rm;
                        break;
                    case "DC":
                        b = Hm;
                        break;
                    case "GF":
                        b = Mm;
                        break;
                    case "HA":
                        b = Rm;
                        break;
                    case "UA":
                        b = on;
                        break;
                    default:
                        G(a.vtp_gtmOnFailure);
                        return;
                }
                G(a.vtp_gtmOnSuccess);
                Gn(a.vtp_containerId, b, a.vtp_remoteConfig || {});
            });
        })();

    (Z.g.cid = ["google"]),
        (function () {
            (function (a) {
                Z.__cid = a;
                Z.__cid.h = "cid";
                Z.__cid.isVendorTemplate = !0;
                Z.__cid.priorityOverride = 0;
            })(function () {
                return bf.I;
            });
        })();

    (Z.g.get = ["google"]),
        (function () {
            (function (a) {
                Z.__get = a;
                Z.__get.h = "get";
                Z.__get.isVendorTemplate = !0;
                Z.__get.priorityOverride = 0;
            })(function (a) {
                var b = a.vtp_settings;
                (a.vtp_deferrable
                    ? ct
                    : bt)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess();
            });
        })();

    (Z.g.gtagua = ["google"]),
        (function () {
            (function (a) {
                Z.__gtagua = a;
                Z.__gtagua.h = "gtagua";
                Z.__gtagua.isVendorTemplate = !0;
                Z.__gtagua.priorityOverride = 0;
            })(function (a) {
                G(a.vtp_gtmOnSuccess);
            });
        })();

    var ht = {};
    ht.dataLayer = xf;
    ht.callback = function (a) {
        nf.hasOwnProperty(a) && sa(nf[a]) && nf[a]();
        delete nf[a];
    };
    ht.bootstrap = 0;
    ht._spx = !1;
    function it() {
        P[bf.I] = ht;
        Sa(of, Z.g);
        Lc = Tc;
    }
    function jt() {
        var a = !1;
        a && Ri("INIT");
        Fd().o();
        P = l.google_tag_manager = l.google_tag_manager || {};
        gl();
        Eh.enable_gbraid_cookie_write = !0;
        var b = !!P[bf.I];
        if (b) {
            var c = P.zones;
            c && c.unregisterChild(bf.I);
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                Ac.push(e[f]);
            for (var g = d.tags || [], k = 0; k < g.length; k++) Dc.push(g[k]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) Cc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var u = p[q], t = {}, r = 0; r < u.length; r++)
                    t[u[r][0]] = Array.prototype.slice.call(u[r], 1);
                Bc.push(t);
            }
            Fc = Z;
            Jc = no;
            it();
            ep();
            Di = !1;
            Ei = 0;
            if (
                ("interactive" == B.readyState && !B.createEventObject) ||
                "complete" == B.readyState
            )
                Gi();
            else {
                Fb(B, "DOMContentLoaded", Gi);
                Fb(B, "readystatechange", Gi);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !l.frameElement;
                    } catch (A) {}
                    v && Hi();
                }
                Fb(l, "load", Gi);
            }
            fo = !1;
            "complete" === B.readyState ? ho() : Fb(l, "load", ho);
            Nj && l.setInterval(Hj, 864e5);
            lf = new Date().getTime();
            ht.bootstrap = lf;
            if (a) {
                var z = Si("INIT");
            }
        }
    }
    (function (a) {
        function b(t) {
            var r = Pa();
            return t < r + 3e5 && t > r - 9e5;
        }
        if (!l["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (B.referrer) {
                var d = Wf(B.referrer);
                c = "cct.google" === Tf(d, "host");
            }
            if (!c) {
                var e = Cg("googTaggyReferrer");
                c = e.length && e[0].length;
            }
            c && ((l["__TAGGY_INSTALLED"] = !0), Ab("https://cct.google/taggy/agent.js"));
        }
        var g = function (t) {
                var r = "GTM",
                    v = "GTM";
                (r = "OGT"), (v = "GTAG");
                var x = l["google.tagmanager.debugui2.queue"];
                x ||
                    ((x = []),
                    (l["google.tagmanager.debugui2.queue"] = x),
                    Ab(
                        "https://www.googletagmanager.com/debug/bootstrap?id=" +
                            bf.I +
                            "&src=" +
                            v +
                            "&cond=" +
                            t +
                            "&gtm=" +
                            Ek()
                    ));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: { scriptSource: vb, containerProduct: r, debug: !1, id: bf.I },
                };
                y.data.resume = function () {
                    a();
                };
                bf.Og && (y.data.initialPublish = !0);
                x.push(y);
            },
            k = void 0,
            m = Uf(l.location, "query", !1, void 0, "gtm_debug"),
            n = !0;
        n = !1;
        n && "x" === m && (k = 1);
        !k && b(Number(m)) && (k = 2);
        if (!k && B.referrer) {
            var p = Wf(B.referrer);
            "tagassistant.google.com" === Tf(p, "host") && (k = 3);
        }
        if (!k) {
            var q = Cg("__TAG_ASSISTANT");
            q.length && q[0].length && (k = 4);
        }
        if (!k && B.documentElement.hasAttribute("data-tag-assistant-present")) {
            k = 5;
            var u = Number(B.documentElement.getAttribute("data-tag-assistant-present"));
            k = b(u) ? 5 : void 0;
        }
        k && vb ? g(k) : a();
    })(jt);
})();
