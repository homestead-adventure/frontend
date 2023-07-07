!(function () {
  for (
    var e,
      t = function () {},
      n = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      i = n.length,
      o = (window.console = window.console || {});
    i--;

  )
    o[(e = n[i])] || (o[e] = t);
})(),
  /*!
   * is.js 0.9.0
   * Author: Aras Atasaygin
   */
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(function () {
          return (e.is = t());
        })
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.is = t());
  })(this, function () {
    var e = { VERSION: "0.8.0", not: {}, all: {}, any: {} },
      t = Object.prototype.toString,
      n = Array.prototype.slice,
      i = Object.prototype.hasOwnProperty;
    function o(e) {
      return function () {
        return !e.apply(null, n.call(arguments));
      };
    }
    function r(e) {
      return function () {
        for (var t = u(arguments), n = t.length, i = 0; i < n; i++)
          if (!e.call(null, t[i])) return !1;
        return !0;
      };
    }
    function s(e) {
      return function () {
        for (var t = u(arguments), n = t.length, i = 0; i < n; i++)
          if (e.call(null, t[i])) return !0;
        return !1;
      };
    }
    var a = {
      "<": function (e, t) {
        return e < t;
      },
      "<=": function (e, t) {
        return e <= t;
      },
      ">": function (e, t) {
        return e > t;
      },
      ">=": function (e, t) {
        return e >= t;
      },
    };
    function l(e, t) {
      var n = t + "",
        i = +(n.match(/\d+/) || NaN),
        o = n.match(/^[<>]=?|/)[0];
      return a[o] ? a[o](e, i) : e == i || i != i;
    }
    function u(t) {
      var i = n.call(t),
        o;
      return 1 === i.length && e.array(i[0]) && (i = i[0]), i;
    }
    (e.arguments = function (e) {
      return (
        "[object Arguments]" === t.call(e) ||
        (null != e && "object" == typeof e && "callee" in e)
      );
    }),
      (e.array =
        Array.isArray ||
        function (e) {
          return "[object Array]" === t.call(e);
        }),
      (e.boolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" === t.call(e);
      }),
      (e.char = function (t) {
        return e.string(t) && 1 === t.length;
      }),
      (e.date = function (e) {
        return "[object Date]" === t.call(e);
      }),
      (e.domNode = function (t) {
        return e.object(t) && t.nodeType > 0;
      }),
      (e.error = function (e) {
        return "[object Error]" === t.call(e);
      }),
      (e.function = function (e) {
        return "[object Function]" === t.call(e) || "function" == typeof e;
      }),
      (e.json = function (e) {
        return "[object Object]" === t.call(e);
      }),
      (e.nan = function (e) {
        return e != e;
      }),
      (e.null = function (e) {
        return null === e;
      }),
      (e.number = function (n) {
        return e.not.nan(n) && "[object Number]" === t.call(n);
      }),
      (e.object = function (e) {
        return Object(e) === e;
      }),
      (e.regexp = function (e) {
        return "[object RegExp]" === t.call(e);
      }),
      (e.sameType = function (n, i) {
        var o = t.call(n);
        return (
          o === t.call(i) &&
          ("[object Number]" !== o || !e.any.nan(n, i) || e.all.nan(n, i))
        );
      }),
      (e.sameType.api = ["not"]),
      (e.string = function (e) {
        return "[object String]" === t.call(e);
      }),
      (e.undefined = function (e) {
        return void 0 === e;
      }),
      (e.windowObject = function (e) {
        return null != e && "object" == typeof e && "setInterval" in e;
      }),
      (e.empty = function (t) {
        if (e.object(t)) {
          var n = Object.getOwnPropertyNames(t).length;
          return !!(
            0 === n ||
            (1 === n && e.array(t)) ||
            (2 === n && e.arguments(t))
          );
        }
        return "" === t;
      }),
      (e.existy = function (e) {
        return null != e;
      }),
      (e.falsy = function (e) {
        return !e;
      }),
      (e.truthy = o(e.falsy)),
      (e.above = function (t, n) {
        return e.all.number(t, n) && t > n;
      }),
      (e.above.api = ["not"]),
      (e.decimal = function (t) {
        return e.number(t) && t % 1 != 0;
      }),
      (e.equal = function (t, n) {
        return e.all.number(t, n)
          ? t === n && 1 / t == 1 / n
          : e.all.string(t, n) || e.all.regexp(t, n)
          ? "" + t == "" + n
          : !!e.all.boolean(t, n) && t === n;
      }),
      (e.equal.api = ["not"]),
      (e.even = function (t) {
        return e.number(t) && t % 2 == 0;
      }),
      (e.finite =
        isFinite ||
        function (t) {
          return e.not.infinite(t) && e.not.nan(t);
        }),
      (e.infinite = function (e) {
        return e === 1 / 0 || e === -1 / 0;
      }),
      (e.integer = function (t) {
        return e.number(t) && t % 1 == 0;
      }),
      (e.negative = function (t) {
        return e.number(t) && t < 0;
      }),
      (e.odd = function (t) {
        return e.number(t) && t % 2 == 1;
      }),
      (e.positive = function (t) {
        return e.number(t) && t > 0;
      }),
      (e.under = function (t, n) {
        return e.all.number(t, n) && t < n;
      }),
      (e.under.api = ["not"]),
      (e.within = function (t, n, i) {
        return e.all.number(t, n, i) && t > n && t < i;
      }),
      (e.within.api = ["not"]);
    var d = {
      affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
      alphaNumeric: /^[A-Za-z0-9]+$/,
      caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
      creditCard:
        /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
      dateString:
        /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
      email:
        /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
      eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
      hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
      hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
      ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
      ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
      nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      socialSecurityNumber:
        /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
      timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
      ukPostCode:
        /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
      url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
      usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
    };
    function c(t, n) {
      e[t] = function (e) {
        return n[t].test(e);
      };
    }
    for (var p in d) d.hasOwnProperty(p) && c(p, d);
    (e.ip = function (t) {
      return e.ipv4(t) || e.ipv6(t);
    }),
      (e.capitalized = function (t) {
        if (e.not.string(t)) return !1;
        for (var n = t.split(" "), i = 0; i < n.length; i++) {
          var o = n[i];
          if (o.length) {
            var r = o.charAt(0);
            if (r !== r.toUpperCase()) return !1;
          }
        }
        return !0;
      }),
      (e.endWith = function (t, n) {
        if (e.not.string(t)) return !1;
        n += "";
        var i = t.length - n.length;
        return i >= 0 && t.indexOf(n, i) === i;
      }),
      (e.endWith.api = ["not"]),
      (e.include = function (e, t) {
        return e.indexOf(t) > -1;
      }),
      (e.include.api = ["not"]),
      (e.lowerCase = function (t) {
        return e.string(t) && t === t.toLowerCase();
      }),
      (e.palindrome = function (t) {
        if (e.not.string(t)) return !1;
        for (
          var n =
              (t = t.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()).length - 1,
            i = 0,
            o = Math.floor(n / 2);
          i <= o;
          i++
        )
          if (t.charAt(i) !== t.charAt(n - i)) return !1;
        return !0;
      }),
      (e.space = function (t) {
        if (e.not.char(t)) return !1;
        var n = t.charCodeAt(0);
        return (n > 8 && n < 14) || 32 === n;
      }),
      (e.startWith = function (t, n) {
        return e.string(t) && 0 === t.indexOf(n);
      }),
      (e.startWith.api = ["not"]),
      (e.upperCase = function (t) {
        return e.string(t) && t === t.toUpperCase();
      });
    var f = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      h = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];
    (e.day = function (t, n) {
      return e.date(t) && n.toLowerCase() === f[t.getDay()];
    }),
      (e.day.api = ["not"]),
      (e.dayLightSavingTime = function (e) {
        var t = new Date(e.getFullYear(), 0, 1),
          n = new Date(e.getFullYear(), 6, 1),
          i = Math.max(t.getTimezoneOffset(), n.getTimezoneOffset());
        return e.getTimezoneOffset() < i;
      }),
      (e.future = function (t) {
        var n = new Date();
        return e.date(t) && t.getTime() > n.getTime();
      }),
      (e.inDateRange = function (t, n, i) {
        if (e.not.date(t) || e.not.date(n) || e.not.date(i)) return !1;
        var o = t.getTime();
        return o > n.getTime() && o < i.getTime();
      }),
      (e.inDateRange.api = ["not"]),
      (e.inLastMonth = function (t) {
        return e.inDateRange(
          t,
          new Date(new Date().setMonth(new Date().getMonth() - 1)),
          new Date()
        );
      }),
      (e.inLastWeek = function (t) {
        return e.inDateRange(
          t,
          new Date(new Date().setDate(new Date().getDate() - 7)),
          new Date()
        );
      }),
      (e.inLastYear = function (t) {
        return e.inDateRange(
          t,
          new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
          new Date()
        );
      }),
      (e.inNextMonth = function (t) {
        return e.inDateRange(
          t,
          new Date(),
          new Date(new Date().setMonth(new Date().getMonth() + 1))
        );
      }),
      (e.inNextWeek = function (t) {
        return e.inDateRange(
          t,
          new Date(),
          new Date(new Date().setDate(new Date().getDate() + 7))
        );
      }),
      (e.inNextYear = function (t) {
        return e.inDateRange(
          t,
          new Date(),
          new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        );
      }),
      (e.leapYear = function (t) {
        return e.number(t) && ((t % 4 == 0 && t % 100 != 0) || t % 400 == 0);
      }),
      (e.month = function (t, n) {
        return e.date(t) && n.toLowerCase() === h[t.getMonth()];
      }),
      (e.month.api = ["not"]),
      (e.past = function (t) {
        var n = new Date();
        return e.date(t) && t.getTime() < n.getTime();
      }),
      (e.quarterOfYear = function (t, n) {
        return (
          e.date(t) && e.number(n) && n === Math.floor((t.getMonth() + 3) / 3)
        );
      }),
      (e.quarterOfYear.api = ["not"]),
      (e.today = function (t) {
        var n,
          i = new Date().toDateString();
        return e.date(t) && t.toDateString() === i;
      }),
      (e.tomorrow = function (t) {
        var n = new Date(),
          i = new Date(n.setDate(n.getDate() + 1)).toDateString();
        return e.date(t) && t.toDateString() === i;
      }),
      (e.weekend = function (t) {
        return e.date(t) && (6 === t.getDay() || 0 === t.getDay());
      }),
      (e.weekday = o(e.weekend)),
      (e.year = function (t, n) {
        return e.date(t) && e.number(n) && n === t.getFullYear();
      }),
      (e.year.api = ["not"]),
      (e.yesterday = function (t) {
        var n = new Date(),
          i = new Date(n.setDate(n.getDate() - 1)).toDateString();
        return e.date(t) && t.toDateString() === i;
      });
    var m = e.windowObject("object" == typeof global && global) && global,
      g = e.windowObject("object" == typeof self && self) && self,
      v = e.windowObject("object" == typeof this && this) && this,
      y = m || g || v || Function("return this")(),
      _ = g && g.document,
      w = y.is,
      b = g && g.navigator,
      T = ((b && b.appVersion) || "").toLowerCase(),
      A = ((b && b.userAgent) || "").toLowerCase(),
      x = ((b && b.vendor) || "").toLowerCase();
    function S() {
      var t = e;
      for (var n in t)
        if (i.call(t, n) && e.function(t[n]))
          for (
            var a = t[n].api || ["not", "all", "any"], l = 0;
            l < a.length;
            l++
          )
            "not" === a[l] && (e.not[n] = o(e[n])),
              "all" === a[l] && (e.all[n] = r(e[n])),
              "any" === a[l] && (e.any[n] = s(e[n]));
    }
    return (
      (e.android = function () {
        return /android/.test(A);
      }),
      (e.android.api = ["not"]),
      (e.androidPhone = function () {
        return /android/.test(A) && /mobile/.test(A);
      }),
      (e.androidPhone.api = ["not"]),
      (e.androidTablet = function () {
        return /android/.test(A) && !/mobile/.test(A);
      }),
      (e.androidTablet.api = ["not"]),
      (e.blackberry = function () {
        return /blackberry/.test(A) || /bb10/.test(A);
      }),
      (e.blackberry.api = ["not"]),
      (e.chrome = function (e) {
        var t = /google inc/.test(x)
          ? A.match(/(?:chrome|crios)\/(\d+)/)
          : null;
        return null !== t && l(t[1], e);
      }),
      (e.chrome.api = ["not"]),
      (e.desktop = function () {
        return e.not.mobile() && e.not.tablet();
      }),
      (e.desktop.api = ["not"]),
      (e.edge = function (e) {
        var t = A.match(/edge\/(\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.edge.api = ["not"]),
      (e.firefox = function (e) {
        var t = A.match(/(?:firefox|fxios)\/(\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.firefox.api = ["not"]),
      (e.ie = function (e) {
        var t = A.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.ie.api = ["not"]),
      (e.ios = function () {
        return e.iphone() || e.ipad() || e.ipod();
      }),
      (e.ios.api = ["not"]),
      (e.ipad = function (e) {
        var t = A.match(/ipad.+?os (\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.ipad.api = ["not"]),
      (e.iphone = function (e) {
        var t = A.match(/iphone(?:.+?os (\d+))?/);
        return null !== t && l(t[1] || 1, e);
      }),
      (e.iphone.api = ["not"]),
      (e.ipod = function (e) {
        var t = A.match(/ipod.+?os (\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.ipod.api = ["not"]),
      (e.linux = function () {
        return /linux/.test(T);
      }),
      (e.linux.api = ["not"]),
      (e.mac = function () {
        return /mac/.test(T);
      }),
      (e.mac.api = ["not"]),
      (e.mobile = function () {
        return (
          e.iphone() ||
          e.ipod() ||
          e.androidPhone() ||
          e.blackberry() ||
          e.windowsPhone()
        );
      }),
      (e.mobile.api = ["not"]),
      (e.offline = o(e.online)),
      (e.offline.api = ["not"]),
      (e.online = function () {
        return !b || !0 === b.onLine;
      }),
      (e.online.api = ["not"]),
      (e.opera = function (e) {
        var t = A.match(/(?:^opera.+?version|opr)\/(\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.opera.api = ["not"]),
      (e.phantom = function (e) {
        var t = A.match(/phantomjs\/(\d+)/);
        return null !== t && l(t[1], e);
      }),
      (e.phantom.api = ["not"]),
      (e.safari = function (e) {
        var t = A.match(/version\/(\d+).+?safari/);
        return null !== t && l(t[1], e);
      }),
      (e.safari.api = ["not"]),
      (e.tablet = function () {
        return e.ipad() || e.androidTablet() || e.windowsTablet();
      }),
      (e.tablet.api = ["not"]),
      (e.touchDevice = function () {
        return (
          !!_ &&
          ("ontouchstart" in g ||
            ("DocumentTouch" in g && _ instanceof DocumentTouch))
        );
      }),
      (e.touchDevice.api = ["not"]),
      (e.windows = function () {
        return /win/.test(T);
      }),
      (e.windows.api = ["not"]),
      (e.windowsPhone = function () {
        return e.windows() && /phone/.test(A);
      }),
      (e.windowsPhone.api = ["not"]),
      (e.windowsTablet = function () {
        return e.windows() && e.not.windowsPhone() && /touch/.test(A);
      }),
      (e.windowsTablet.api = ["not"]),
      (e.propertyCount = function (t, n) {
        if (e.not.object(t) || e.not.number(n)) return !1;
        var o = 0;
        for (var r in t) if (i.call(t, r) && ++o > n) return !1;
        return o === n;
      }),
      (e.propertyCount.api = ["not"]),
      (e.propertyDefined = function (t, n) {
        return e.object(t) && e.string(n) && n in t;
      }),
      (e.propertyDefined.api = ["not"]),
      (e.inArray = function (t, n) {
        if (e.not.array(n)) return !1;
        for (var i = 0; i < n.length; i++) if (n[i] === t) return !0;
        return !1;
      }),
      (e.inArray.api = ["not"]),
      (e.sorted = function (t, n) {
        if (e.not.array(t)) return !1;
        for (var i = a[n] || a[">="], o = 1; o < t.length; o++)
          if (!i(t[o], t[o - 1])) return !1;
        return !0;
      }),
      S(),
      (e.setNamespace = function () {
        return (y.is = w), this;
      }),
      (e.setRegexp = function (e, t) {
        for (var n in d) i.call(d, n) && t === n && (d[n] = e);
      }),
      e
    );
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Barba", [], t)
      : "object" == typeof exports
      ? (exports.Barba = t())
      : (e.Barba = t());
  })(this, function () {
    return (function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = { exports: {}, id: i, loaded: !1 });
        return (
          e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = "http://localhost:8080/dist"), t(0);
    })([
      function (e, t, n) {
        "function" != typeof Promise && (window.Promise = n(1));
        var i = {
          version: "1.0.0",
          BaseTransition: n(4),
          BaseView: n(6),
          BaseCache: n(8),
          Dispatcher: n(7),
          HistoryManager: n(9),
          Pjax: n(10),
          Prefetch: n(13),
          Utils: n(5),
        };
        e.exports = i;
      },
      function (e, t, n) {
        (function (t) {
          !(function (n) {
            function i() {}
            function o(e, t) {
              return function () {
                e.apply(t, arguments);
              };
            }
            function r(e) {
              if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
              if ("function" != typeof e) throw new TypeError("not a function");
              (this._state = 0),
                (this._handled = !1),
                (this._value = void 0),
                (this._deferreds = []),
                c(e, this);
            }
            function s(e, t) {
              for (; 3 === e._state; ) e = e._value;
              return 0 === e._state
                ? void e._deferreds.push(t)
                : ((e._handled = !0),
                  void f(function () {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                      var i;
                      try {
                        i = n(e._value);
                      } catch (e) {
                        return void l(t.promise, e);
                      }
                      a(t.promise, i);
                    } else (1 === e._state ? a : l)(t.promise, e._value);
                  }));
            }
            function a(e, t) {
              try {
                if (t === e)
                  throw new TypeError(
                    "A promise cannot be resolved with itself."
                  );
                if (t && ("object" == typeof t || "function" == typeof t)) {
                  var n = t.then;
                  if (t instanceof r)
                    return (e._state = 3), (e._value = t), void u(e);
                  if ("function" == typeof n) return void c(o(n, t), e);
                }
                (e._state = 1), (e._value = t), u(e);
              } catch (t) {
                l(e, t);
              }
            }
            function l(e, t) {
              (e._state = 2), (e._value = t), u(e);
            }
            function u(e) {
              2 === e._state &&
                0 === e._deferreds.length &&
                f(function () {
                  e._handled || h(e._value);
                });
              for (var t = 0, n = e._deferreds.length; t < n; t++)
                s(e, e._deferreds[t]);
              e._deferreds = null;
            }
            function d(e, t, n) {
              (this.onFulfilled = "function" == typeof e ? e : null),
                (this.onRejected = "function" == typeof t ? t : null),
                (this.promise = n);
            }
            function c(e, t) {
              var n = !1;
              try {
                e(
                  function (e) {
                    n || ((n = !0), a(t, e));
                  },
                  function (e) {
                    n || ((n = !0), l(t, e));
                  }
                );
              } catch (e) {
                if (n) return;
                (n = !0), l(t, e);
              }
            }
            var p = setTimeout,
              f =
                ("function" == typeof t && t) ||
                function (e) {
                  p(e, 0);
                },
              h = function (e) {
                "undefined" != typeof console &&
                  console &&
                  console.warn("Possible Unhandled Promise Rejection:", e);
              };
            (r.prototype.catch = function (e) {
              return this.then(null, e);
            }),
              (r.prototype.then = function (e, t) {
                var n = new this.constructor(i);
                return s(this, new d(e, t, n)), n;
              }),
              (r.all = function (e) {
                var t = Array.prototype.slice.call(e);
                return new r(function (e, n) {
                  function i(r, s) {
                    try {
                      if (
                        s &&
                        ("object" == typeof s || "function" == typeof s)
                      ) {
                        var a = s.then;
                        if ("function" == typeof a)
                          return void a.call(
                            s,
                            function (e) {
                              i(r, e);
                            },
                            n
                          );
                      }
                      (t[r] = s), 0 == --o && e(t);
                    } catch (e) {
                      n(e);
                    }
                  }
                  if (0 === t.length) return e([]);
                  for (var o = t.length, r = 0; r < t.length; r++) i(r, t[r]);
                });
              }),
              (r.resolve = function (e) {
                return e && "object" == typeof e && e.constructor === r
                  ? e
                  : new r(function (t) {
                      t(e);
                    });
              }),
              (r.reject = function (e) {
                return new r(function (t, n) {
                  n(e);
                });
              }),
              (r.race = function (e) {
                return new r(function (t, n) {
                  for (var i = 0, o = e.length; i < o; i++) e[i].then(t, n);
                });
              }),
              (r._setImmediateFn = function (e) {
                f = e;
              }),
              (r._setUnhandledRejectionFn = function (e) {
                h = e;
              }),
              void 0 !== e && e.exports
                ? (e.exports = r)
                : n.Promise || (n.Promise = r);
          })(this);
        }).call(t, n(2).setImmediate);
      },
      function (e, t, n) {
        (function (e, i) {
          function o(e, t) {
            (this._id = e), (this._clearFn = t);
          }
          var r = n(3).nextTick,
            s = Function.prototype.apply,
            a = Array.prototype.slice,
            l = {},
            u = 0;
          (t.setTimeout = function () {
            return new o(s.call(setTimeout, window, arguments), clearTimeout);
          }),
            (t.setInterval = function () {
              return new o(
                s.call(setInterval, window, arguments),
                clearInterval
              );
            }),
            (t.clearTimeout = t.clearInterval =
              function (e) {
                e.close();
              }),
            (o.prototype.unref = o.prototype.ref = function () {}),
            (o.prototype.close = function () {
              this._clearFn.call(window, this._id);
            }),
            (t.enroll = function (e, t) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
            }),
            (t.unenroll = function (e) {
              clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
            }),
            (t._unrefActive = t.active =
              function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 &&
                  (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout();
                  }, t));
              }),
            (t.setImmediate =
              "function" == typeof e
                ? e
                : function (e) {
                    var n = u++,
                      i = !(arguments.length < 2) && a.call(arguments, 1);
                    return (
                      (l[n] = !0),
                      r(function () {
                        l[n] &&
                          (i ? e.apply(null, i) : e.call(null),
                          t.clearImmediate(n));
                      }),
                      n
                    );
                  }),
            (t.clearImmediate =
              "function" == typeof i
                ? i
                : function (e) {
                    delete l[e];
                  });
        }).call(t, n(2).setImmediate, n(2).clearImmediate);
      },
      function (e, t) {
        function n() {
          c &&
            u &&
            ((c = !1),
            u.length ? (d = u.concat(d)) : (p = -1),
            d.length && i());
        }
        function i() {
          if (!c) {
            var e = s(n);
            c = !0;
            for (var t = d.length; t; ) {
              for (u = d, d = []; ++p < t; ) u && u[p].run();
              (p = -1), (t = d.length);
            }
            (u = null), (c = !1), a(e);
          }
        }
        function o(e, t) {
          (this.fun = e), (this.array = t);
        }
        function r() {}
        var s,
          a,
          l = (e.exports = {});
        !(function () {
          try {
            s = setTimeout;
          } catch (e) {
            s = function () {
              throw new Error("setTimeout is not defined");
            };
          }
          try {
            a = clearTimeout;
          } catch (e) {
            a = function () {
              throw new Error("clearTimeout is not defined");
            };
          }
        })();
        var u,
          d = [],
          c = !1,
          p = -1;
        (l.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          d.push(new o(e, t)), 1 !== d.length || c || s(i, 0);
        }),
          (o.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (l.title = "browser"),
          (l.browser = !0),
          (l.env = {}),
          (l.argv = []),
          (l.version = ""),
          (l.versions = {}),
          (l.on = r),
          (l.addListener = r),
          (l.once = r),
          (l.off = r),
          (l.removeListener = r),
          (l.removeAllListeners = r),
          (l.emit = r),
          (l.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (l.cwd = function () {
            return "/";
          }),
          (l.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (l.umask = function () {
            return 0;
          });
      },
      function (e, t, n) {
        var i = n(5),
          o = {
            oldContainer: void 0,
            newContainer: void 0,
            newContainerLoading: void 0,
            extend: function (e) {
              return i.extend(this, e);
            },
            init: function (e, t) {
              var n = this;
              return (
                (this.oldContainer = e),
                (this._newContainerPromise = t),
                (this.deferred = i.deferred()),
                (this.newContainerReady = i.deferred()),
                (this.newContainerLoading = this.newContainerReady.promise),
                this.start(),
                this._newContainerPromise.then(function (e) {
                  (n.newContainer = e), n.newContainerReady.resolve();
                }),
                this.deferred.promise
              );
            },
            done: function () {
              this.oldContainer.parentNode.removeChild(this.oldContainer),
                (this.newContainer.style.visibility = "visible"),
                this.deferred.resolve();
            },
            start: function () {},
          };
        e.exports = o;
      },
      function (e, t) {
        var n = {
          getCurrentUrl: function () {
            return (
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              window.location.search
            );
          },
          cleanLink: function (e) {
            return e.replace(/#.*/, "");
          },
          xhrTimeout: 5e3,
          xhr: function (e) {
            var t = this.deferred(),
              n = new XMLHttpRequest();
            return (
              (n.onreadystatechange = function () {
                if (4 === n.readyState)
                  return 200 === n.status
                    ? t.resolve(n.responseText)
                    : t.reject(new Error("xhr: HTTP code is not 200"));
              }),
              (n.ontimeout = function () {
                return t.reject(new Error("xhr: Timeout exceeded"));
              }),
              n.open("GET", e),
              (n.timeout = this.xhrTimeout),
              n.setRequestHeader("x-barba", "yes"),
              n.send(),
              t.promise
            );
          },
          extend: function (e, t) {
            var n = Object.create(e);
            for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n;
          },
          deferred: function () {
            return new (function () {
              (this.resolve = null),
                (this.reject = null),
                (this.promise = new Promise(
                  function (e, t) {
                    (this.resolve = e), (this.reject = t);
                  }.bind(this)
                ));
            })();
          },
          getPort: function (e) {
            var t = void 0 !== e ? e : window.location.port,
              n = window.location.protocol;
            return "" != t
              ? parseInt(t)
              : "http:" === n
              ? 80
              : "https:" === n
              ? 443
              : void 0;
          },
        };
        e.exports = n;
      },
      function (e, t, n) {
        var i = n(7),
          o = n(5),
          r = {
            namespace: null,
            extend: function (e) {
              return o.extend(this, e);
            },
            init: function () {
              var e = this;
              i.on("initStateChange", function (t, n) {
                n && n.namespace === e.namespace && e.onLeave();
              }),
                i.on("newPageReady", function (t, n, i) {
                  (e.container = i), t.namespace === e.namespace && e.onEnter();
                }),
                i.on("transitionCompleted", function (t, n) {
                  t.namespace === e.namespace && e.onEnterCompleted(),
                    n && n.namespace === e.namespace && e.onLeaveCompleted();
                });
            },
            onEnter: function () {},
            onEnterCompleted: function () {},
            onLeave: function () {},
            onLeaveCompleted: function () {},
          };
        e.exports = r;
      },
      function (e, t) {
        var n = {
          events: {},
          on: function (e, t) {
            (this.events[e] = this.events[e] || []), this.events[e].push(t);
          },
          off: function (e, t) {
            e in this.events != 0 &&
              this.events[e].splice(this.events[e].indexOf(t), 1);
          },
          trigger: function (e) {
            if (e in this.events != 0)
              for (var t = 0; t < this.events[e].length; t++)
                this.events[e][t].apply(
                  this,
                  Array.prototype.slice.call(arguments, 1)
                );
          },
        };
        e.exports = n;
      },
      function (e, t, n) {
        var i = n(5),
          o = {
            data: {},
            extend: function (e) {
              return i.extend(this, e);
            },
            set: function (e, t) {
              this.data[e] = t;
            },
            get: function (e) {
              return this.data[e];
            },
            reset: function () {
              this.data = {};
            },
          };
        e.exports = o;
      },
      function (e, t) {
        var n = {
          history: [],
          add: function (e, t) {
            t || (t = void 0), this.history.push({ url: e, namespace: t });
          },
          currentStatus: function () {
            return this.history[this.history.length - 1];
          },
          prevStatus: function () {
            var e = this.history;
            return e.length < 2 ? null : e[e.length - 2];
          },
        };
        e.exports = n;
      },
      function (e, t, n) {
        var i = n(5),
          o = n(7),
          r = n(11),
          s = n(8),
          a = n(9),
          l,
          u = {
            Dom: n(12),
            History: a,
            Cache: s,
            cacheEnabled: !0,
            transitionProgress: !1,
            ignoreClassLink: "no-barba",
            start: function () {
              this.init();
            },
            init: function () {
              var e = this.Dom.getContainer(),
                t;
              this.Dom.getWrapper().setAttribute("aria-live", "polite"),
                this.History.add(
                  this.getCurrentUrl(),
                  this.Dom.getNamespace(e)
                ),
                o.trigger("initStateChange", this.History.currentStatus()),
                o.trigger(
                  "newPageReady",
                  this.History.currentStatus(),
                  {},
                  e,
                  this.Dom.currentHTML
                ),
                o.trigger("transitionCompleted", this.History.currentStatus()),
                this.bindEvents();
            },
            bindEvents: function () {
              document.addEventListener("click", this.onLinkClick.bind(this)),
                window.addEventListener(
                  "popstate",
                  this.onStateChange.bind(this)
                );
            },
            getCurrentUrl: function () {
              return i.cleanLink(i.getCurrentUrl());
            },
            goTo: function (e) {
              window.history.pushState(null, null, e), this.onStateChange();
            },
            forceGoTo: function (e) {
              window.location = e;
            },
            load: function (e) {
              var t,
                n = i.deferred(),
                o = this;
              return (
                (t = this.Cache.get(e)) ||
                  ((t = i.xhr(e)), this.Cache.set(e, t)),
                t.then(
                  function (e) {
                    var t = o.Dom.parseResponse(e);
                    o.Dom.putContainer(t),
                      o.cacheEnabled || o.Cache.reset(),
                      n.resolve(t);
                  },
                  function () {
                    o.forceGoTo(e), n.reject();
                  }
                ),
                n.promise
              );
            },
            getHref: function (e) {
              if (e)
                return e.getAttribute &&
                  "string" == typeof e.getAttribute("xlink:href")
                  ? e.getAttribute("xlink:href")
                  : "string" == typeof e.href
                  ? e.href
                  : void 0;
            },
            onLinkClick: function (e) {
              for (var t = e.target; t && !this.getHref(t); ) t = t.parentNode;
              if (this.preventCheck(e, t)) {
                e.stopPropagation(),
                  e.preventDefault(),
                  o.trigger("linkClicked", t, e);
                var n = this.getHref(t);
                this.goTo(n);
              }
            },
            preventCheck: function (e, t) {
              if (!window.history.pushState) return !1;
              var n = this.getHref(t);
              return !(
                !t ||
                !n ||
                e.which > 1 ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey ||
                (t.target && "_blank" === t.target) ||
                window.location.protocol !== t.protocol ||
                window.location.hostname !== t.hostname ||
                i.getPort() !== i.getPort(t.port) ||
                n.indexOf("#") > -1 ||
                (t.getAttribute &&
                  "string" == typeof t.getAttribute("download")) ||
                i.cleanLink(n) == i.cleanLink(location.href) ||
                t.classList.contains(this.ignoreClassLink)
              );
            },
            getTransition: function () {
              return r;
            },
            onStateChange: function () {
              var e = this.getCurrentUrl();
              if (
                (this.transitionProgress && this.forceGoTo(e),
                this.History.currentStatus().url === e)
              )
                return !1;
              this.History.add(e);
              var t = this.load(e),
                n = Object.create(this.getTransition());
              (this.transitionProgress = !0),
                o.trigger(
                  "initStateChange",
                  this.History.currentStatus(),
                  this.History.prevStatus()
                );
              var i = n.init(this.Dom.getContainer(), t);
              t.then(this.onNewContainerLoaded.bind(this)),
                i.then(this.onTransitionEnd.bind(this));
            },
            onNewContainerLoaded: function (e) {
              var t;
              (this.History.currentStatus().namespace =
                this.Dom.getNamespace(e)),
                o.trigger(
                  "newPageReady",
                  this.History.currentStatus(),
                  this.History.prevStatus(),
                  e,
                  this.Dom.currentHTML
                );
            },
            onTransitionEnd: function () {
              (this.transitionProgress = !1),
                o.trigger(
                  "transitionCompleted",
                  this.History.currentStatus(),
                  this.History.prevStatus()
                );
            },
          };
        e.exports = u;
      },
      function (e, t, n) {
        var i,
          o = n(4).extend({
            start: function () {
              this.newContainerLoading.then(this.finish.bind(this));
            },
            finish: function () {
              (document.body.scrollTop = 0), this.done();
            },
          });
        e.exports = o;
      },
      function (e, t) {
        var n = {
          dataNamespace: "namespace",
          wrapperId: "barba-wrapper",
          containerClass: "barba-container",
          currentHTML: document.documentElement.innerHTML,
          parseResponse: function (e) {
            this.currentHTML = e;
            var t = document.createElement("div");
            t.innerHTML = e;
            var n = t.querySelector("title");
            return n && (document.title = n.textContent), this.getContainer(t);
          },
          getWrapper: function () {
            var e = document.getElementById(this.wrapperId);
            if (!e) throw new Error("Barba.js: wrapper not found!");
            return e;
          },
          getContainer: function (e) {
            if ((e || (e = document.body), !e))
              throw new Error("Barba.js: DOM not ready!");
            var t = this.parseContainer(e);
            if ((t && t.jquery && (t = t[0]), !t))
              throw new Error("Barba.js: no container found");
            return t;
          },
          getNamespace: function (e) {
            return e && e.dataset
              ? e.dataset[this.dataNamespace]
              : e
              ? e.getAttribute("data-" + this.dataNamespace)
              : null;
          },
          putContainer: function (e) {
            var t;
            (e.style.visibility = "hidden"), this.getWrapper().appendChild(e);
          },
          parseContainer: function (e) {
            return e.querySelector("." + this.containerClass);
          },
        };
        e.exports = n;
      },
      function (e, t, n) {
        var i = n(5),
          o = n(10),
          r = {
            ignoreClassLink: "no-barba-prefetch",
            init: function () {
              return (
                !!window.history.pushState &&
                (document.body.addEventListener(
                  "mouseover",
                  this.onLinkEnter.bind(this)
                ),
                void document.body.addEventListener(
                  "touchstart",
                  this.onLinkEnter.bind(this)
                ))
              );
            },
            onLinkEnter: function (e) {
              for (var t = e.target; t && !o.getHref(t); ) t = t.parentNode;
              if (t && !t.classList.contains(this.ignoreClassLink)) {
                var n = o.getHref(t);
                if (o.preventCheck(e, t) && !o.Cache.get(n)) {
                  var r = i.xhr(n);
                  o.Cache.set(n, r);
                }
              }
            },
          };
        e.exports = r;
      },
    ]);
  }),
  (function (e) {
    var t = navigator.userAgent;
    e.HTMLPictureElement &&
      /ecko/.test(t) &&
      t.match(/rv\:(\d+)/) &&
      RegExp.$1 < 45 &&
      addEventListener(
        "resize",
        (function () {
          var t,
            n = document.createElement("source"),
            i = function (e) {
              var t,
                i,
                o = e.parentNode;
              "PICTURE" === o.nodeName.toUpperCase()
                ? ((t = n.cloneNode()),
                  o.insertBefore(t, o.firstElementChild),
                  setTimeout(function () {
                    o.removeChild(t);
                  }))
                : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) &&
                  ((e._pfLastSize = e.offsetWidth),
                  (i = e.sizes),
                  (e.sizes += ",100vw"),
                  setTimeout(function () {
                    e.sizes = i;
                  }));
            },
            o = function () {
              var e,
                t = document.querySelectorAll(
                  "picture > img, img[srcset][sizes]"
                );
              for (e = 0; e < t.length; e++) i(t[e]);
            },
            r = function () {
              clearTimeout(t), (t = setTimeout(o, 99));
            },
            s = e.matchMedia && matchMedia("(orientation: landscape)"),
            a = function () {
              r(), s && s.addListener && s.addListener(r);
            };
          return (
            (n.srcset =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            /^[c|i]|d$/.test(document.readyState || "")
              ? a()
              : document.addEventListener("DOMContentLoaded", a),
            r
          );
        })()
      );
  })(window),
  (function (e, t, n) {
    "use strict";
    function i(e) {
      return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
    }
    function o(t, n) {
      var i = new e.Image();
      return (
        (i.onerror = function () {
          (k[t] = !1), te();
        }),
        (i.onload = function () {
          (k[t] = 1 === i.width), te();
        }),
        (i.src = n),
        "pending"
      );
    }
    function r() {
      (H = !1),
        (R = e.devicePixelRatio),
        (B = {}),
        (j = {}),
        (y.DPR = R || 1),
        (W.width = Math.max(e.innerWidth || 0, S.clientWidth)),
        (W.height = Math.max(e.innerHeight || 0, S.clientHeight)),
        (W.vw = W.width / 100),
        (W.vh = W.height / 100),
        (v = [W.height, W.width, R].join("-")),
        (W.em = y.getEmValue()),
        (W.rem = W.em);
    }
    function s(e, t, n, i) {
      var o, r, s, a;
      return (
        "saveData" === C.algorithm
          ? e > 2.7
            ? (a = n + 1)
            : ((s = (r = t - n) * (o = Math.pow(e - 0.6, 1.5))),
              i && (s += 0.1 * o),
              (a = e + s))
          : (a = n > 1 ? Math.sqrt(e * t) : e),
        a > n
      );
    }
    function a(e) {
      var t,
        n = y.getSet(e),
        i = !1;
      "pending" !== n &&
        ((i = v), n && ((t = y.setRes(n)), y.applySetCandidate(t, e))),
        (e[y.ns].evaled = i);
    }
    function l(e, t) {
      return e.res - t.res;
    }
    function u(e, t, n) {
      var i;
      return (
        !n && t && (n = (n = e[y.ns].sets) && n[n.length - 1]),
        (i = d(t, n)) &&
          ((t = y.makeUrl(t)),
          (e[y.ns].curSrc = t),
          (e[y.ns].curCan = i),
          i.res || ee(i, i.set.sizes)),
        i
      );
    }
    function d(e, t) {
      var n, i, o;
      if (e && t)
        for (o = y.parseSet(t), e = y.makeUrl(e), n = 0; n < o.length; n++)
          if (e === y.makeUrl(o[n].url)) {
            i = o[n];
            break;
          }
      return i;
    }
    function c(e, t) {
      var n,
        i,
        o,
        r,
        s = e.getElementsByTagName("source");
      for (n = 0, i = s.length; i > n; n++)
        ((o = s[n])[y.ns] = !0),
          (r = o.getAttribute("srcset")) &&
            t.push({
              srcset: r,
              media: o.getAttribute("media"),
              type: o.getAttribute("type"),
              sizes: o.getAttribute("sizes"),
            });
    }
    function p(e, t) {
      function n(t) {
        var n,
          i = t.exec(e.substring(p));
        return i ? ((n = i[0]), (p += n.length), n) : void 0;
      }
      function o() {
        var e,
          n,
          i,
          o,
          r,
          l,
          u,
          d,
          c,
          p = !1,
          h = {};
        for (o = 0; o < a.length; o++)
          (l = (r = a[o])[r.length - 1]),
            (u = r.substring(0, r.length - 1)),
            (d = parseInt(u, 10)),
            (c = parseFloat(u)),
            Q.test(u) && "w" === l
              ? ((e || n) && (p = !0), 0 === d ? (p = !0) : (e = d))
              : X.test(u) && "x" === l
              ? ((e || n || i) && (p = !0), 0 > c ? (p = !0) : (n = c))
              : Q.test(u) && "h" === l
              ? ((i || n) && (p = !0), 0 === d ? (p = !0) : (i = d))
              : (p = !0);
        p ||
          ((h.url = s),
          e && (h.w = e),
          n && (h.d = n),
          i && (h.h = i),
          i || n || e || (h.d = 1),
          1 === h.d && (t.has1x = !0),
          (h.set = t),
          f.push(h));
      }
      function r() {
        for (n(U), l = "", u = "in descriptor"; ; ) {
          if (((d = e.charAt(p)), "in descriptor" === u))
            if (i(d)) l && (a.push(l), (l = ""), (u = "after descriptor"));
            else {
              if ("," === d) return (p += 1), l && a.push(l), void o();
              if ("(" === d) (l += d), (u = "in parens");
              else {
                if ("" === d) return l && a.push(l), void o();
                l += d;
              }
            }
          else if ("in parens" === u)
            if (")" === d) (l += d), (u = "in descriptor");
            else {
              if ("" === d) return a.push(l), void o();
              l += d;
            }
          else if ("after descriptor" === u)
            if (i(d));
            else {
              if ("" === d) return void o();
              (u = "in descriptor"), (p -= 1);
            }
          p += 1;
        }
      }
      for (var s, a, l, u, d, c = e.length, p = 0, f = []; ; ) {
        if ((n(G), p >= c)) return f;
        (s = n(Y)),
          (a = []),
          "," === s.slice(-1) ? ((s = s.replace(V, "")), o()) : r();
      }
    }
    function f(e) {
      function t(e) {
        function t() {
          r && (s.push(r), (r = ""));
        }
        function n() {
          s[0] && (a.push(s), (s = []));
        }
        for (var o, r = "", s = [], a = [], l = 0, u = 0, d = !1; ; ) {
          if ("" === (o = e.charAt(u))) return t(), n(), a;
          if (d) {
            if ("*" === o && "/" === e[u + 1]) {
              (d = !1), (u += 2), t();
              continue;
            }
            u += 1;
          } else {
            if (i(o)) {
              if ((e.charAt(u - 1) && i(e.charAt(u - 1))) || !r) {
                u += 1;
                continue;
              }
              if (0 === l) {
                t(), (u += 1);
                continue;
              }
              o = " ";
            } else if ("(" === o) l += 1;
            else if (")" === o) l -= 1;
            else {
              if ("," === o) {
                t(), n(), (u += 1);
                continue;
              }
              if ("/" === o && "*" === e.charAt(u + 1)) {
                (d = !0), (u += 2);
                continue;
              }
            }
            (r += o), (u += 1);
          }
        }
      }
      function n(e) {
        return (
          !!(d.test(e) && parseFloat(e) >= 0) ||
          !!c.test(e) ||
          "0" === e ||
          "-0" === e ||
          "+0" === e
        );
      }
      var o,
        r,
        s,
        a,
        l,
        u,
        d =
          /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        c = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      for (s = (r = t(e)).length, o = 0; s > o; o++)
        if (n((l = (a = r[o])[a.length - 1]))) {
          if (((u = l), a.pop(), 0 === a.length)) return u;
          if (((a = a.join(" ")), y.matchesMedia(a))) return u;
        }
      return "100vw";
    }
    t.createElement("picture");
    var h,
      m,
      g,
      v,
      y = {},
      _ = !1,
      w = function () {},
      b = t.createElement("img"),
      T = b.getAttribute,
      A = b.setAttribute,
      x = b.removeAttribute,
      S = t.documentElement,
      k = {},
      C = { algorithm: "" },
      E = "data-pfsrc",
      I = E + "set",
      O = navigator.userAgent,
      P =
        /rident/.test(O) ||
        (/ecko/.test(O) && O.match(/rv\:(\d+)/) && RegExp.$1 > 35),
      L = "currentSrc",
      $ = /\s+\+?\d+(e\d+)?w/,
      D = /(\([^)]+\))?\s*(.+)/,
      F = e.picturefillCFG,
      M =
        "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
      z = "font-size:100%!important;",
      H = !0,
      B = {},
      j = {},
      R = e.devicePixelRatio,
      W = { px: 1, in: 96 },
      N = t.createElement("a"),
      q = !1,
      U = /^[ \t\n\r\u000c]+/,
      G = /^[, \t\n\r\u000c]+/,
      Y = /^[^ \t\n\r\u000c]+/,
      V = /[,]+$/,
      Q = /^\d+$/,
      X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      Z = function (e, t, n, i) {
        e.addEventListener
          ? e.addEventListener(t, n, i || !1)
          : e.attachEvent && e.attachEvent("on" + t, n);
      },
      K = function (e) {
        var t = {};
        return function (n) {
          return n in t || (t[n] = e(n)), t[n];
        };
      },
      J = (function () {
        var e = /^([\d\.]+)(em|vw|px)$/,
          t = function () {
            for (var e = arguments, t = 0, n = e[0]; ++t in e; )
              n = n.replace(e[t], e[++t]);
            return n;
          },
          n = K(function (e) {
            return (
              "return " +
              t(
                (e || "").toLowerCase(),
                /\band\b/g,
                "&&",
                /,/g,
                "||",
                /min-([a-z-\s]+):/g,
                "e.$1>=",
                /max-([a-z-\s]+):/g,
                "e.$1<=",
                /calc([^)]+)/g,
                "($1)",
                /(\d+[\.]*[\d]*)([a-z]+)/g,
                "($1 * e.$2)",
                /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                ""
              ) +
              ";"
            );
          });
        return function (t, i) {
          var o;
          if (!(t in B))
            if (((B[t] = !1), i && (o = t.match(e)))) B[t] = o[1] * W[o[2]];
            else
              try {
                B[t] = new Function("e", n(t))(W);
              } catch (e) {}
          return B[t];
        };
      })(),
      ee = function (e, t) {
        return (
          e.w
            ? ((e.cWidth = y.calcListLength(t || "100vw")),
              (e.res = e.w / e.cWidth))
            : (e.res = e.d),
          e
        );
      },
      te = function (e) {
        if (_) {
          var n,
            i,
            o,
            r = e || {};
          if (
            (r.elements &&
              1 === r.elements.nodeType &&
              ("IMG" === r.elements.nodeName.toUpperCase()
                ? (r.elements = [r.elements])
                : ((r.context = r.elements), (r.elements = null))),
            (o = (n =
              r.elements ||
              y.qsa(
                r.context || t,
                r.reevaluate || r.reselect ? y.sel : y.selShort
              )).length))
          ) {
            for (y.setupRun(r), q = !0, i = 0; o > i; i++) y.fillImg(n[i], r);
            y.teardownRun(r);
          }
        }
      };
    (h =
      e.console && console.warn
        ? function (e) {
            console.warn(e);
          }
        : w),
      L in b || (L = "src"),
      (k["image/jpeg"] = !0),
      (k["image/gif"] = !0),
      (k["image/png"] = !0),
      (k["image/svg+xml"] = t.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image",
        "1.1"
      )),
      (y.ns = ("pf" + new Date().getTime()).substr(0, 9)),
      (y.supSrcset = "srcset" in b),
      (y.supSizes = "sizes" in b),
      (y.supPicture = !!e.HTMLPictureElement),
      y.supSrcset &&
        y.supPicture &&
        !y.supSizes &&
        (function (e) {
          (b.srcset = "data:,a"),
            (e.src = "data:,a"),
            (y.supSrcset = b.complete === e.complete),
            (y.supPicture = y.supSrcset && y.supPicture);
        })(t.createElement("img")),
      y.supSrcset && !y.supSizes
        ? (function () {
            var e =
                "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
              n =
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
              i = t.createElement("img"),
              o = function () {
                var e;
                2 === i.width && (y.supSizes = !0),
                  (g = y.supSrcset && !y.supSizes),
                  (_ = !0),
                  setTimeout(te);
              };
            (i.onload = o),
              (i.onerror = o),
              i.setAttribute("sizes", "9px"),
              (i.srcset = n + " 1w," + e + " 9w"),
              (i.src = n);
          })()
        : (_ = !0),
      (y.selShort = "picture>img,img[srcset]"),
      (y.sel = y.selShort),
      (y.cfg = C),
      (y.DPR = R || 1),
      (y.u = W),
      (y.types = k),
      (y.setSize = w),
      (y.makeUrl = K(function (e) {
        return (N.href = e), N.href;
      })),
      (y.qsa = function (e, t) {
        return "querySelector" in e ? e.querySelectorAll(t) : [];
      }),
      (y.matchesMedia = function () {
        return (
          e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
            ? (y.matchesMedia = function (e) {
                return !e || matchMedia(e).matches;
              })
            : (y.matchesMedia = y.mMQ),
          y.matchesMedia.apply(this, arguments)
        );
      }),
      (y.mMQ = function (e) {
        return !e || J(e);
      }),
      (y.calcLength = function (e) {
        var t = J(e, !0) || !1;
        return 0 > t && (t = !1), t;
      }),
      (y.supportsType = function (e) {
        return !e || k[e];
      }),
      (y.parseSize = K(function (e) {
        var t = (e || "").match(D);
        return { media: t && t[1], length: t && t[2] };
      })),
      (y.parseSet = function (e) {
        return e.cands || (e.cands = p(e.srcset, e)), e.cands;
      }),
      (y.getEmValue = function () {
        var e;
        if (!m && (e = t.body)) {
          var n = t.createElement("div"),
            i = S.style.cssText,
            o = e.style.cssText;
          (n.style.cssText = M),
            (S.style.cssText = z),
            (e.style.cssText = z),
            e.appendChild(n),
            (m = n.offsetWidth),
            e.removeChild(n),
            (m = parseFloat(m, 10)),
            (S.style.cssText = i),
            (e.style.cssText = o);
        }
        return m || 16;
      }),
      (y.calcListLength = function (e) {
        if (!(e in j) || C.uT) {
          var t = y.calcLength(f(e));
          j[e] = t || W.width;
        }
        return j[e];
      }),
      (y.setRes = function (e) {
        var t;
        if (e)
          for (var n = 0, i = (t = y.parseSet(e)).length; i > n; n++)
            ee(t[n], e.sizes);
        return t;
      }),
      (y.setRes.res = ee),
      (y.applySetCandidate = function (e, t) {
        if (e.length) {
          var n,
            i,
            o,
            r,
            a,
            d,
            c,
            p,
            f,
            h = t[y.ns],
            m = y.DPR;
          if (
            ((d = h.curSrc || t[L]),
            (c = h.curCan || u(t, d, e[0].set)) &&
              c.set === e[0].set &&
              ((f = P && !t.complete && c.res - 0.1 > m) ||
                ((c.cached = !0), c.res >= m && (a = c))),
            !a)
          )
            for (e.sort(l), a = e[(r = e.length) - 1], i = 0; r > i; i++)
              if ((n = e[i]).res >= m) {
                a =
                  e[(o = i - 1)] &&
                  (f || d !== y.makeUrl(n.url)) &&
                  s(e[o].res, n.res, m, e[o].cached)
                    ? e[o]
                    : n;
                break;
              }
          a &&
            ((p = y.makeUrl(a.url)),
            (h.curSrc = p),
            (h.curCan = a),
            p !== d && y.setSrc(t, a),
            y.setSize(t));
        }
      }),
      (y.setSrc = function (e, t) {
        var n;
        (e.src = t.url),
          "image/svg+xml" === t.set.type &&
            ((n = e.style.width),
            (e.style.width = e.offsetWidth + 1 + "px"),
            e.offsetWidth + 1 && (e.style.width = n));
      }),
      (y.getSet = function (e) {
        var t,
          n,
          i,
          o = !1,
          r = e[y.ns].sets;
        for (t = 0; t < r.length && !o; t++)
          if (
            (n = r[t]).srcset &&
            y.matchesMedia(n.media) &&
            (i = y.supportsType(n.type))
          ) {
            "pending" === i && (n = i), (o = n);
            break;
          }
        return o;
      }),
      (y.parseSets = function (e, t, i) {
        var o,
          r,
          s,
          a,
          l = t && "PICTURE" === t.nodeName.toUpperCase(),
          u = e[y.ns];
        (u.src === n || i.src) &&
          ((u.src = T.call(e, "src")),
          u.src ? A.call(e, E, u.src) : x.call(e, E)),
          (u.srcset === n || i.srcset || !y.supSrcset || e.srcset) &&
            ((o = T.call(e, "srcset")), (u.srcset = o), (a = !0)),
          (u.sets = []),
          l && ((u.pic = !0), c(t, u.sets)),
          u.srcset
            ? ((r = { srcset: u.srcset, sizes: T.call(e, "sizes") }),
              u.sets.push(r),
              (s = (g || u.src) && $.test(u.srcset || "")) ||
                !u.src ||
                d(u.src, r) ||
                r.has1x ||
                ((r.srcset += ", " + u.src),
                r.cands.push({ url: u.src, d: 1, set: r })))
            : u.src && u.sets.push({ srcset: u.src, sizes: null }),
          (u.curCan = null),
          (u.curSrc = n),
          (u.supported = !(l || (r && !y.supSrcset) || (s && !y.supSizes))),
          a &&
            y.supSrcset &&
            !u.supported &&
            (o ? (A.call(e, I, o), (e.srcset = "")) : x.call(e, I)),
          u.supported &&
            !u.srcset &&
            ((!u.src && e.src) || e.src !== y.makeUrl(u.src)) &&
            (null === u.src ? e.removeAttribute("src") : (e.src = u.src)),
          (u.parsed = !0);
      }),
      (y.fillImg = function (e, t) {
        var n,
          i = t.reselect || t.reevaluate;
        e[y.ns] || (e[y.ns] = {}),
          (n = e[y.ns]),
          (i || n.evaled !== v) &&
            ((!n.parsed || t.reevaluate) && y.parseSets(e, e.parentNode, t),
            n.supported ? (n.evaled = v) : a(e));
      }),
      (y.setupRun = function () {
        (!q || H || R !== e.devicePixelRatio) && r();
      }),
      y.supPicture
        ? ((te = w), (y.fillImg = w))
        : (function () {
            var n,
              i = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
              o = function () {
                var e = t.readyState || "";
                (r = setTimeout(o, "loading" === e ? 200 : 999)),
                  t.body &&
                    (y.fillImgs(), (n = n || i.test(e)) && clearTimeout(r));
              },
              r = setTimeout(o, t.body ? 9 : 99),
              s = function (e, t) {
                var n,
                  i,
                  o = function () {
                    var r = new Date() - i;
                    t > r ? (n = setTimeout(o, t - r)) : ((n = null), e());
                  };
                return function () {
                  (i = new Date()), n || (n = setTimeout(o, t));
                };
              },
              a = S.clientHeight,
              l;
            Z(
              e,
              "resize",
              s(function () {
                (H =
                  Math.max(e.innerWidth || 0, S.clientWidth) !== W.width ||
                  S.clientHeight !== a),
                  (a = S.clientHeight),
                  H && y.fillImgs();
              }, 99)
            ),
              Z(t, "readystatechange", o);
          })(),
      (y.picturefill = te),
      (y.fillImgs = te),
      (y.teardownRun = w),
      (te._ = y),
      (e.picturefillCFG = {
        pf: y,
        push: function (e) {
          var t = e.shift();
          "function" == typeof y[t]
            ? y[t].apply(y, e)
            : ((C[t] = e[0]), q && y.fillImgs({ reselect: !0 }));
        },
      });
    for (; F && F.length; ) e.picturefillCFG.push(F.shift());
    (e.picturefill = te),
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = te)
        : "function" == typeof define &&
          define.amd &&
          define("picturefill", function () {
            return te;
          }),
      y.supPicture ||
        (k["image/webp"] = o(
          "image/webp",
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
        ));
  })(window, document),
  /**
   * @copyright Copyright (c) 2017 IcoMoon.io
   * @license   Licensed under MIT license
   *            See https://github.com/Keyamoon/svgxuse
   * @version   1.2.6
   */
  (function () {
    if ("undefined" != typeof window && window.addEventListener) {
      var e = Object.create(null),
        t,
        n = function () {
          clearTimeout(t), (t = setTimeout(s, 100));
        },
        i = function () {},
        o = function () {
          if (
            (window.addEventListener("resize", n, !1),
            window.addEventListener("orientationchange", n, !1),
            window.MutationObserver)
          ) {
            var e = new MutationObserver(n);
            e.observe(document.documentElement, {
              childList: !0,
              subtree: !0,
              attributes: !0,
            }),
              (i = function () {
                try {
                  e.disconnect(),
                    window.removeEventListener("resize", n, !1),
                    window.removeEventListener("orientationchange", n, !1);
                } catch (e) {}
              });
          } else
            document.documentElement.addEventListener(
              "DOMSubtreeModified",
              n,
              !1
            ),
              (i = function () {
                document.documentElement.removeEventListener(
                  "DOMSubtreeModified",
                  n,
                  !1
                ),
                  window.removeEventListener("resize", n, !1),
                  window.removeEventListener("orientationchange", n, !1);
              });
        },
        r = function (e) {
          function t(e) {
            if (void 0 !== e.protocol) var t = e;
            else (t = document.createElement("a")).href = e;
            return t.protocol.replace(/:/g, "") + t.host;
          }
          if (window.XMLHttpRequest) {
            var n = new XMLHttpRequest(),
              i = t(location);
            (e = t(e)),
              (n =
                void 0 === n.withCredentials && "" !== e && e !== i
                  ? XDomainRequest || void 0
                  : XMLHttpRequest);
          }
          return n;
        },
        s = function () {
          function t() {
            0 === --d && (i(), o());
          }
          function n(t) {
            return function () {
              !0 !== e[t.base] &&
                (t.useEl.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  "#" + t.hash
                ),
                t.useEl.hasAttribute("href") &&
                  t.useEl.setAttribute("href", "#" + t.hash));
            };
          }
          function s(e) {
            return function () {
              var n = document.body,
                i = document.createElement("x");
              (e.onload = null),
                (i.innerHTML = e.responseText),
                (i = i.getElementsByTagName("svg")[0]) &&
                  (i.setAttribute("aria-hidden", "true"),
                  (i.style.position = "absolute"),
                  (i.style.width = 0),
                  (i.style.height = 0),
                  (i.style.overflow = "hidden"),
                  n.insertBefore(i, n.firstChild)),
                t();
            };
          }
          function a(e) {
            return function () {
              (e.onerror = null), (e.ontimeout = null), t();
            };
          }
          var l,
            u,
            d = 0;
          i();
          var c = document.getElementsByTagName("use");
          for (u = 0; u < c.length; u += 1) {
            try {
              var p = c[u].getBoundingClientRect();
            } catch (e) {
              p = !1;
            }
            var f =
                (l =
                  c[u].getAttribute("href") ||
                  c[u].getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
                  c[u].getAttribute("xlink:href")) && l.split
                  ? l.split("#")
                  : ["", ""],
              h = f[0];
            f = f[1];
            var m =
              p &&
              0 === p.left &&
              0 === p.right &&
              0 === p.top &&
              0 === p.bottom;
            p && 0 === p.width && 0 === p.height && !m
              ? (c[u].hasAttribute("href") &&
                  c[u].setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    "xlink:href",
                    l
                  ),
                h.length &&
                  (!0 !== (l = e[h]) &&
                    setTimeout(n({ useEl: c[u], base: h, hash: f }), 0),
                  void 0 === l &&
                    void 0 !== (f = r(h)) &&
                    ((l = new f()),
                    (e[h] = l),
                    (l.onload = s(l)),
                    (l.onerror = a(l)),
                    (l.ontimeout = a(l)),
                    l.open("GET", h),
                    l.send(),
                    (d += 1))))
              : m
              ? h.length &&
                e[h] &&
                setTimeout(n({ useEl: c[u], base: h, hash: f }), 0)
              : void 0 === e[h]
              ? (e[h] = !0)
              : e[h].onload && (e[h].abort(), delete e[h].onload, (e[h] = !0));
          }
          (c = ""), (d += 1), t();
        },
        a = function () {
          window.removeEventListener("load", a, !1), (t = setTimeout(s, 0));
        };
      "complete" !== document.readyState
        ? window.addEventListener("load", a, !1)
        : a();
    }
  })(),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    ((t = (function () {
      var t = 0;
      function n(n, i) {
        var o = this,
          r;
        (o.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (o.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(o, o.initials),
          (o.activeBreakpoint = null),
          (o.animType = null),
          (o.animProp = null),
          (o.breakpoints = []),
          (o.breakpointSettings = []),
          (o.cssTransitions = !1),
          (o.focussed = !1),
          (o.interrupted = !1),
          (o.hidden = "hidden"),
          (o.paused = !0),
          (o.positionProp = null),
          (o.respondTo = null),
          (o.rowCount = 1),
          (o.shouldClick = !0),
          (o.$slider = e(n)),
          (o.$slidesCache = null),
          (o.transformType = null),
          (o.transitionType = null),
          (o.visibilityChange = "visibilitychange"),
          (o.windowWidth = 0),
          (o.windowTimer = null),
          (r = e(n).data("slick") || {}),
          (o.options = e.extend({}, o.defaults, i, r)),
          (o.currentSlide = o.options.initialSlide),
          (o.originalSettings = o.options),
          void 0 !== document.mozHidden
            ? ((o.hidden = "mozHidden"),
              (o.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((o.hidden = "webkitHidden"),
              (o.visibilityChange = "webkitvisibilitychange")),
          (o.autoPlay = e.proxy(o.autoPlay, o)),
          (o.autoPlayClear = e.proxy(o.autoPlayClear, o)),
          (o.autoPlayIterator = e.proxy(o.autoPlayIterator, o)),
          (o.changeSlide = e.proxy(o.changeSlide, o)),
          (o.clickHandler = e.proxy(o.clickHandler, o)),
          (o.selectHandler = e.proxy(o.selectHandler, o)),
          (o.setPosition = e.proxy(o.setPosition, o)),
          (o.swipeHandler = e.proxy(o.swipeHandler, o)),
          (o.dragHandler = e.proxy(o.dragHandler, o)),
          (o.keyHandler = e.proxy(o.keyHandler, o)),
          (o.instanceUid = t++),
          (o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          o.registerBreakpoints(),
          o.init(!0);
      }
      return n;
    })()).prototype.activateADA = function () {
      var e;
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd =
        function (t, n, i) {
          var o = this;
          if ("boolean" == typeof n) (i = n), (n = null);
          else if (n < 0 || n >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof n
              ? 0 === n && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : i
                ? e(t).insertBefore(o.$slides.eq(n))
                : e(t).insertAfter(o.$slides.eq(n))
              : !0 === i
              ? e(t).prependTo(o.$slideTrack)
              : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, n) {
              e(n).attr("data-slick-index", t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  { top: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = "translate(0px," + e + "px)"),
                          o.$slideTrack.css(i));
                  },
                  complete: function () {
                    n && n.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical
                ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function () {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this,
          n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
      }),
      (t.prototype.asNavFor = function (t) {
        var n,
          i = this.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t = this,
          n,
          i;
        if (!0 === t.options.dots && t.slideCount > t.options.slidesToShow) {
          for (
            t.$slider.addClass("slick-dotted"),
              i = e("<ul />").addClass(t.options.dotsClass),
              n = 0;
            n <= t.getDotCount();
            n += 1
          )
            i.append(
              e("<li />").append(t.options.customPaging.call(this, t, n))
            );
          (t.$dots = i.appendTo(t.options.appendDots)),
            t.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e = this,
          t,
          n,
          i,
          o,
          r,
          s,
          a;
        if (
          ((o = document.createDocumentFragment()),
          (s = e.$slider.children()),
          e.options.rows > 0)
        ) {
          for (
            a = e.options.slidesPerRow * e.options.rows,
              r = Math.ceil(s.length / a),
              t = 0;
            t < r;
            t++
          ) {
            var l = document.createElement("div");
            for (n = 0; n < e.options.rows; n++) {
              var u = document.createElement("div");
              for (i = 0; i < e.options.slidesPerRow; i++) {
                var d = t * a + (n * e.options.slidesPerRow + i);
                s.get(d) && u.appendChild(s.get(d));
              }
              l.appendChild(u);
            }
            o.appendChild(l);
          }
          e.$slider.empty().append(o),
            e.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / e.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.checkResponsive = function (t, n) {
        var i = this,
          o,
          r,
          s,
          a = !1,
          l = i.$slider.width(),
          u = window.innerWidth || e(window).width();
        if (
          ("window" === i.respondTo
            ? (s = u)
            : "slider" === i.respondTo
            ? (s = l)
            : "min" === i.respondTo && (s = Math.min(u, l)),
          i.options.responsive &&
            i.options.responsive.length &&
            null !== i.options.responsive)
        ) {
          for (o in ((r = null), i.breakpoints))
            i.breakpoints.hasOwnProperty(o) &&
              (!1 === i.originalSettings.mobileFirst
                ? s < i.breakpoints[o] && (r = i.breakpoints[o])
                : s > i.breakpoints[o] && (r = i.breakpoints[o]));
          null !== r
            ? null !== i.activeBreakpoint
              ? (r !== i.activeBreakpoint || n) &&
                ((i.activeBreakpoint = r),
                "unslick" === i.breakpointSettings[r]
                  ? i.unslick(r)
                  : ((i.options = e.extend(
                      {},
                      i.originalSettings,
                      i.breakpointSettings[r]
                    )),
                    !0 === t && (i.currentSlide = i.options.initialSlide),
                    i.refresh(t)),
                (a = r))
              : ((i.activeBreakpoint = r),
                "unslick" === i.breakpointSettings[r]
                  ? i.unslick(r)
                  : ((i.options = e.extend(
                      {},
                      i.originalSettings,
                      i.breakpointSettings[r]
                    )),
                    !0 === t && (i.currentSlide = i.options.initialSlide),
                    i.refresh(t)),
                (a = r))
            : null !== i.activeBreakpoint &&
              ((i.activeBreakpoint = null),
              (i.options = i.originalSettings),
              !0 === t && (i.currentSlide = i.options.initialSlide),
              i.refresh(t),
              (a = r)),
            t || !1 === a || i.$slider.trigger("breakpoint", [i, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, n) {
        var i = this,
          o = e(t.currentTarget),
          r,
          s,
          a;
        switch (
          (o.is("a") && t.preventDefault(),
          o.is("li") || (o = o.closest("li")),
          (r = (a = i.slideCount % i.options.slidesToScroll != 0)
            ? 0
            : (i.slideCount - i.currentSlide) % i.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (s =
              0 === r ? i.options.slidesToScroll : i.options.slidesToShow - r),
              i.slideCount > i.options.slidesToShow &&
                i.slideHandler(i.currentSlide - s, !1, n);
            break;
          case "next":
            (s = 0 === r ? i.options.slidesToScroll : r),
              i.slideCount > i.options.slidesToShow &&
                i.slideHandler(i.currentSlide + s, !1, n);
            break;
          case "index":
            var l =
              0 === t.data.index
                ? 0
                : t.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(l), !1, n),
              o.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, n, i;
        if (((i = 0), e > (n = this.getNavigableIndexes())[n.length - 1]))
          e = n[n.length - 1];
        else
          for (var o in n) {
            if (e < n[o]) {
              e = i;
              break;
            }
            i = n[o];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e = this,
          t;
        e.options.rows > 0 &&
          ((t = e.$slides.children().children()).removeAttr("style"),
          e.$slider.empty().append(t));
      }),
      (t.prototype.clickHandler = function (e) {
        var t;
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick", "*", function (n) {
            var i = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus &&
                i.is(":focus") &&
                ((t.focussed = !0), t.autoPlay());
            }, 0);
          })
          .on("blur.slick", "*", function (n) {
            var i = e(this);
            t.options.pauseOnFocus && ((t.focussed = !1), t.autoPlay());
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          var e;
          return this.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t = this,
          n,
          i,
          o = 0,
          r,
          s;
        return (
          (t.slideOffset = 0),
          (i = t.$slides.first().outerHeight(!0)),
          !0 === t.options.infinite
            ? (t.slideCount > t.options.slidesToShow &&
                ((t.slideOffset = t.slideWidth * t.options.slidesToShow * -1),
                (s = -1),
                !0 === t.options.vertical &&
                  !0 === t.options.centerMode &&
                  (2 === t.options.slidesToShow
                    ? (s = -1.5)
                    : 1 === t.options.slidesToShow && (s = -2)),
                (o = i * t.options.slidesToShow * s)),
              t.slideCount % t.options.slidesToScroll != 0 &&
                e + t.options.slidesToScroll > t.slideCount &&
                t.slideCount > t.options.slidesToShow &&
                (e > t.slideCount
                  ? ((t.slideOffset =
                      (t.options.slidesToShow - (e - t.slideCount)) *
                      t.slideWidth *
                      -1),
                    (o =
                      (t.options.slidesToShow - (e - t.slideCount)) * i * -1))
                  : ((t.slideOffset =
                      (t.slideCount % t.options.slidesToScroll) *
                      t.slideWidth *
                      -1),
                    (o = (t.slideCount % t.options.slidesToScroll) * i * -1))))
            : e + t.options.slidesToShow > t.slideCount &&
              ((t.slideOffset =
                (e + t.options.slidesToShow - t.slideCount) * t.slideWidth),
              (o = (e + t.options.slidesToShow - t.slideCount) * i)),
          t.slideCount <= t.options.slidesToShow &&
            ((t.slideOffset = 0), (o = 0)),
          !0 === t.options.centerMode && t.slideCount <= t.options.slidesToShow
            ? (t.slideOffset =
                (t.slideWidth * Math.floor(t.options.slidesToShow)) / 2 -
                (t.slideWidth * t.slideCount) / 2)
            : !0 === t.options.centerMode && !0 === t.options.infinite
            ? (t.slideOffset +=
                t.slideWidth * Math.floor(t.options.slidesToShow / 2) -
                t.slideWidth)
            : !0 === t.options.centerMode &&
              ((t.slideOffset = 0),
              (t.slideOffset +=
                t.slideWidth * Math.floor(t.options.slidesToShow / 2))),
          (n =
            !1 === t.options.vertical
              ? e * t.slideWidth * -1 + t.slideOffset
              : e * i * -1 + o),
          !0 === t.options.variableWidth &&
            ((r =
              t.slideCount <= t.options.slidesToShow ||
              !1 === t.options.infinite
                ? t.$slideTrack.children(".slick-slide").eq(e)
                : t.$slideTrack
                    .children(".slick-slide")
                    .eq(e + t.options.slidesToShow)),
            (n =
              !0 === t.options.rtl
                ? r[0]
                  ? -1 * (t.$slideTrack.width() - r[0].offsetLeft - r.width())
                  : 0
                : r[0]
                ? -1 * r[0].offsetLeft
                : 0),
            !0 === t.options.centerMode &&
              ((r =
                t.slideCount <= t.options.slidesToShow ||
                !1 === t.options.infinite
                  ? t.$slideTrack.children(".slick-slide").eq(e)
                  : t.$slideTrack
                      .children(".slick-slide")
                      .eq(e + t.options.slidesToShow + 1)),
              (n =
                !0 === t.options.rtl
                  ? r[0]
                    ? -1 * (t.$slideTrack.width() - r[0].offsetLeft - r.width())
                    : 0
                  : r[0]
                  ? -1 * r[0].offsetLeft
                  : 0),
              (n += (t.$list.width() - r.outerWidth()) / 2))),
          n
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          var t;
          return this.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e = this,
          t = 0,
          n = 0,
          i = [],
          o;
        for (
          !1 === e.options.infinite
            ? (o = e.slideCount)
            : ((t = -1 * e.options.slidesToScroll),
              (n = -1 * e.options.slidesToScroll),
              (o = 2 * e.slideCount));
          t < o;

        )
          i.push(t),
            (t = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return i;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t = this,
          n,
          i,
          o,
          r;
        return (
          (r =
            !0 === t.options.centerMode ? Math.floor(t.$list.width() / 2) : 0),
          (o = -1 * t.swipeLeft + r),
          !0 === t.options.swipeToSlide
            ? (t.$slideTrack.find(".slick-slide").each(function (n, r) {
                var s, a, l;
                if (
                  ((s = e(r).outerWidth()),
                  (a = r.offsetLeft),
                  !0 !== t.options.centerMode && (a += s / 2),
                  o < (l = a + s))
                )
                  return (i = r), !1;
              }),
              (n =
                Math.abs(e(i).attr("data-slick-index") - t.currentSlide) || 1))
            : t.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          var n;
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
      (t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find(".slick-cloned"))
              .each(function (n) {
                var o = i.indexOf(n);
                if (
                  (e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + n,
                    tabindex: -1,
                  }),
                  -1 !== o)
                ) {
                  var r = "slick-slide-control" + t.instanceUid + o;
                  e("#" + r).length && e(this).attr({ "aria-describedby": r });
                }
              }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var r = i[o];
                e(this).attr({ role: "presentation" }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + t.instanceUid + o,
                      "aria-controls": "slick-slide" + t.instanceUid + r,
                      "aria-label": o + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
          t.options.focusOnChange
            ? t.$slides.eq(o).attr({ tabindex: "0" })
            : t.$slides.eq(o).removeAttr("tabindex");
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          t.slideCount > t.options.slidesToShow &&
          (e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            t.slideCount > t.options.slidesToShow &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" },
              }));
      }),
      (t.prototype.lazyLoad = function () {
        var t = this,
          n,
          i,
          o,
          r;
        function s(n) {
          e("img[data-lazy]", n).each(function () {
            var n = e(this),
              i = e(this).attr("data-lazy"),
              o = e(this).attr("data-srcset"),
              r = e(this).attr("data-sizes") || t.$slider.attr("data-sizes"),
              s = document.createElement("img");
            (s.onload = function () {
              n.animate({ opacity: 0 }, 100, function () {
                o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                  n.attr("src", i).animate({ opacity: 1 }, 200, function () {
                    n.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  t.$slider.trigger("lazyLoaded", [t, n, i]);
              });
            }),
              (s.onerror = function () {
                n
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  t.$slider.trigger("lazyLoadError", [t, n, i]);
              }),
              (s.src = i);
          });
        }
        if (
          (!0 === t.options.centerMode
            ? !0 === t.options.infinite
              ? (r =
                  (o = t.currentSlide + (t.options.slidesToShow / 2 + 1)) +
                  t.options.slidesToShow +
                  2)
              : ((o = Math.max(
                  0,
                  t.currentSlide - (t.options.slidesToShow / 2 + 1)
                )),
                (r = t.options.slidesToShow / 2 + 1 + 2 + t.currentSlide))
            : ((o = t.options.infinite
                ? t.options.slidesToShow + t.currentSlide
                : t.currentSlide),
              (r = Math.ceil(o + t.options.slidesToShow)),
              !0 === t.options.fade &&
                (o > 0 && o--, r <= t.slideCount && r++)),
          (n = t.$slider.find(".slick-slide").slice(o, r)),
          "anticipated" === t.options.lazyLoad)
        )
          for (
            var a = o - 1, l = r, u = t.$slider.find(".slick-slide"), d = 0;
            d < t.options.slidesToScroll;
            d++
          )
            a < 0 && (a = t.slideCount - 1),
              (n = (n = n.add(u.eq(a))).add(u.eq(l))),
              a--,
              l++;
        s(n),
          t.slideCount <= t.options.slidesToShow
            ? s((i = t.$slider.find(".slick-slide")))
            : t.currentSlide >= t.slideCount - t.options.slidesToShow
            ? s(
                (i = t.$slider
                  .find(".slick-cloned")
                  .slice(0, t.options.slidesToShow))
              )
            : 0 === t.currentSlide &&
              s(
                (i = t.$slider
                  .find(".slick-cloned")
                  .slice(-1 * t.options.slidesToShow))
              );
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          var e;
          this.changeSlide({ data: { message: "next" } });
        }),
      (t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          var e = this;
          e.autoPlayClear(), (e.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (t) {
        var n = this,
          i;
        n.unslicked ||
          (n.$slider.trigger("afterChange", [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(),
            n.options.focusOnChange &&
              e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          var e;
          this.changeSlide({ data: { message: "previous" } });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n = this,
          i = e("img[data-lazy]", n.$slider),
          o,
          r,
          s,
          a,
          l;
        i.length
          ? ((o = i.first()),
            (r = o.attr("data-lazy")),
            (s = o.attr("data-srcset")),
            (a = o.attr("data-sizes") || n.$slider.attr("data-sizes")),
            ((l = document.createElement("img")).onload = function () {
              s && (o.attr("srcset", s), a && o.attr("sizes", a)),
                o
                  .attr("src", r)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === n.options.adaptiveHeight && n.setPosition(),
                n.$slider.trigger("lazyLoaded", [n, o, r]),
                n.progressiveLazyLoad();
            }),
            (l.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    n.progressiveLazyLoad(t + 1);
                  }, 500)
                : (o
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  n.$slider.trigger("lazyLoadError", [n, o, r]),
                  n.progressiveLazyLoad());
            }),
            (l.src = r))
          : n.$slider.trigger("allImagesLoaded", [n]);
      }),
      (t.prototype.refresh = function (t) {
        var n = this,
          i,
          o;
        (o = n.slideCount - n.options.slidesToShow),
          !n.options.infinite && n.currentSlide > o && (n.currentSlide = o),
          n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
          (i = n.currentSlide),
          n.destroy(!0),
          e.extend(n, n.initials, { currentSlide: i }),
          n.init(),
          t || n.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t = this,
          n,
          i,
          o,
          r = t.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          for (n in ((t.respondTo = t.options.respondTo || "window"), r))
            if (((o = t.breakpoints.length - 1), r.hasOwnProperty(n))) {
              for (i = r[n].breakpoint; o >= 0; )
                t.breakpoints[o] &&
                  t.breakpoints[o] === i &&
                  t.breakpoints.splice(o, 1),
                  o--;
              t.breakpoints.push(i), (t.breakpointSettings[i] = r[n].settings);
            }
          t.breakpoints.sort(function (e, n) {
            return t.options.mobileFirst ? e - n : n - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove =
        function (e, t, n) {
          var i = this;
          if (
            ((e =
              "boolean" == typeof e
                ? !0 === (t = e)
                  ? 0
                  : i.slideCount - 1
                : !0 === t
                ? --e
                : e),
            i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            !0 === n
              ? i.$slideTrack.children().remove()
              : i.$slideTrack.children(this.options.slide).eq(e).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (t.prototype.setCSS = function (e) {
        var t = this,
          n = {},
          i,
          o;
        !0 === t.options.rtl && (e = -e),
          (i = "left" == t.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o = "top" == t.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n[t.positionProp] = e),
          !1 === t.transformsEnabled
            ? t.$slideTrack.css(n)
            : ((n = {}),
              !1 === t.cssTransitions
                ? ((n[t.animType] = "translate(" + i + ", " + o + ")"),
                  t.$slideTrack.css(n))
                : ((n[t.animType] = "translate3d(" + i + ", " + o + ", 0px)"),
                  t.$slideTrack.css(n)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t = this,
          n;
        t.$slides.each(function (i, o) {
          (n = t.slideWidth * i * -1),
            !0 === t.options.rtl
              ? e(o).css({
                  position: "relative",
                  right: n,
                  top: 0,
                  zIndex: t.options.zIndex - 2,
                  opacity: 0,
                })
              : e(o).css({
                  position: "relative",
                  left: n,
                  top: 0,
                  zIndex: t.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          t.$slides
            .eq(t.currentSlide)
            .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t = this,
            n,
            i,
            o,
            r,
            s = !1,
            a;
          if (
            ("object" === e.type(arguments[0])
              ? ((o = arguments[0]), (s = arguments[1]), (a = "multiple"))
              : "string" === e.type(arguments[0]) &&
                ((o = arguments[0]),
                (r = arguments[1]),
                (s = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === e.type(arguments[1])
                  ? (a = "responsive")
                  : void 0 !== arguments[1] && (a = "single")),
            "single" === a)
          )
            t.options[o] = r;
          else if ("multiple" === a)
            e.each(o, function (e, n) {
              t.options[e] = n;
            });
          else if ("responsive" === a)
            for (i in r)
              if ("array" !== e.type(t.options.responsive))
                t.options.responsive = [r[i]];
              else {
                for (n = t.options.responsive.length - 1; n >= 0; )
                  t.options.responsive[n].breakpoint === r[i].breakpoint &&
                    t.options.responsive.splice(n, 1),
                    n--;
                t.options.responsive.push(r[i]);
              }
          s && (t.unload(), t.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t = this,
          n,
          i,
          o,
          r;
        if (
          ((i = t.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          t.$slides.eq(e).addClass("slick-current"),
          !0 === t.options.centerMode)
        ) {
          var s = t.options.slidesToShow % 2 == 0 ? 1 : 0;
          (n = Math.floor(t.options.slidesToShow / 2)),
            !0 === t.options.infinite &&
              (e >= n && e <= t.slideCount - 1 - n
                ? t.$slides
                    .slice(e - n + s, e + n + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((o = t.options.slidesToShow + e),
                  i
                    .slice(o - n + 1 + s, o + n + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? i
                    .eq(i.length - 1 - t.options.slidesToShow)
                    .addClass("slick-center")
                : e === t.slideCount - 1 &&
                  i.eq(t.options.slidesToShow).addClass("slick-center")),
            t.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= t.slideCount - t.options.slidesToShow
            ? t.$slides
                .slice(e, e + t.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= t.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((r = t.slideCount % t.options.slidesToShow),
              (o = !0 === t.options.infinite ? t.options.slidesToShow + e : e),
              t.options.slidesToShow == t.options.slidesToScroll &&
              t.slideCount - e < t.options.slidesToShow
                ? i
                    .slice(o - (t.options.slidesToShow - r), o + r)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i
                    .slice(o, o + t.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== t.options.lazyLoad &&
          "anticipated" !== t.options.lazyLoad) ||
          t.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t = this,
          n,
          i,
          o;
        if (
          (!0 === t.options.fade && (t.options.centerMode = !1),
          !0 === t.options.infinite &&
            !1 === t.options.fade &&
            ((i = null), t.slideCount > t.options.slidesToShow))
        ) {
          for (
            o =
              !0 === t.options.centerMode
                ? t.options.slidesToShow + 1
                : t.options.slidesToShow,
              n = t.slideCount;
            n > t.slideCount - o;
            n -= 1
          )
            (i = n - 1),
              e(t.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i - t.slideCount)
                .prependTo(t.$slideTrack)
                .addClass("slick-cloned");
          for (n = 0; n < o + t.slideCount; n += 1)
            (i = n),
              e(t.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i + t.slideCount)
                .appendTo(t.$slideTrack)
                .addClass("slick-cloned");
          t.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), (t.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? n.slideHandler(o, !1, !0)
            : n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          r,
          s,
          a = null,
          l = this,
          u;
        if (
          ((t = t || !1),
          !(
            (!0 === l.animating && !0 === l.options.waitForAnimate) ||
            (!0 === l.options.fade && l.currentSlide === e)
          ))
        )
          if (
            (!1 === t && l.asNavFor(e),
            (i = e),
            (a = l.getLeft(i)),
            (s = l.getLeft(l.currentSlide)),
            (l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft),
            !1 === l.options.infinite &&
              !1 === l.options.centerMode &&
              (e < 0 || e > l.getDotCount() * l.options.slidesToScroll))
          )
            !1 === l.options.fade &&
              ((i = l.currentSlide),
              !0 !== n && l.slideCount > l.options.slidesToShow
                ? l.animateSlide(s, function () {
                    l.postSlide(i);
                  })
                : l.postSlide(i));
          else if (
            !1 === l.options.infinite &&
            !0 === l.options.centerMode &&
            (e < 0 || e > l.slideCount - l.options.slidesToScroll)
          )
            !1 === l.options.fade &&
              ((i = l.currentSlide),
              !0 !== n && l.slideCount > l.options.slidesToShow
                ? l.animateSlide(s, function () {
                    l.postSlide(i);
                  })
                : l.postSlide(i));
          else {
            if (
              (l.options.autoplay && clearInterval(l.autoPlayTimer),
              (o =
                i < 0
                  ? l.slideCount % l.options.slidesToScroll != 0
                    ? l.slideCount - (l.slideCount % l.options.slidesToScroll)
                    : l.slideCount + i
                  : i >= l.slideCount
                  ? l.slideCount % l.options.slidesToScroll != 0
                    ? 0
                    : i - l.slideCount
                  : i),
              (l.animating = !0),
              l.$slider.trigger("beforeChange", [l, l.currentSlide, o]),
              (r = l.currentSlide),
              (l.currentSlide = o),
              l.setSlideClasses(l.currentSlide),
              l.options.asNavFor &&
                (u = (u = l.getNavTarget()).slick("getSlick")).slideCount <=
                  u.options.slidesToShow &&
                u.setSlideClasses(l.currentSlide),
              l.updateDots(),
              l.updateArrows(),
              !0 === l.options.fade)
            )
              return (
                !0 !== n
                  ? (l.fadeSlideOut(r),
                    l.fadeSlide(o, function () {
                      l.postSlide(o);
                    }))
                  : l.postSlide(o),
                void l.animateHeight()
              );
            !0 !== n && l.slideCount > l.options.slidesToShow
              ? l.animateSlide(a, function () {
                  l.postSlide(o);
                })
              : l.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && i >= 0
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i <= 360 && i >= 315
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t = this,
          n,
          i;
        if (((t.dragging = !1), (t.swiping = !1), t.scrolling))
          return (t.scrolling = !1), !1;
        if (
          ((t.interrupted = !1),
          (t.shouldClick = !(t.touchObject.swipeLength > 10)),
          void 0 === t.touchObject.curX)
        )
          return !1;
        if (
          (!0 === t.touchObject.edgeHit &&
            t.$slider.trigger("edge", [t, t.swipeDirection()]),
          t.touchObject.swipeLength >= t.touchObject.minSwipe)
        ) {
          switch ((i = t.swipeDirection())) {
            case "left":
            case "down":
              (n = t.options.swipeToSlide
                ? t.checkNavigable(t.currentSlide + t.getSlideCount())
                : t.currentSlide + t.getSlideCount()),
                (t.currentDirection = 0);
              break;
            case "right":
            case "up":
              (n = t.options.swipeToSlide
                ? t.checkNavigable(t.currentSlide - t.getSlideCount())
                : t.currentSlide - t.getSlideCount()),
                (t.currentDirection = 1);
          }
          "vertical" != i &&
            (t.slideHandler(n),
            (t.touchObject = {}),
            t.$slider.trigger("swipe", [t, i]));
        } else
          t.touchObject.startX !== t.touchObject.curX &&
            (t.slideHandler(t.currentSlide), (t.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t = this,
          n = !1,
          i,
          o,
          r,
          s,
          a,
          l;
        return (
          (a = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!t.dragging || t.scrolling || (a && 1 !== a.length)) &&
            ((i = t.getLeft(t.currentSlide)),
            (t.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX),
            (t.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY),
            (t.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2))
            )),
            (l = Math.round(
              Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2))
            )),
            !t.options.verticalSwiping && !t.swiping && l > 4
              ? ((t.scrolling = !0), !1)
              : (!0 === t.options.verticalSwiping &&
                  (t.touchObject.swipeLength = l),
                (o = t.swipeDirection()),
                void 0 !== e.originalEvent &&
                  t.touchObject.swipeLength > 4 &&
                  ((t.swiping = !0), e.preventDefault()),
                (s =
                  (!1 === t.options.rtl ? 1 : -1) *
                  (t.touchObject.curX > t.touchObject.startX ? 1 : -1)),
                !0 === t.options.verticalSwiping &&
                  (s = t.touchObject.curY > t.touchObject.startY ? 1 : -1),
                (r = t.touchObject.swipeLength),
                (t.touchObject.edgeHit = !1),
                !1 === t.options.infinite &&
                  ((0 === t.currentSlide && "right" === o) ||
                    (t.currentSlide >= t.getDotCount() && "left" === o)) &&
                  ((r = t.touchObject.swipeLength * t.options.edgeFriction),
                  (t.touchObject.edgeHit = !0)),
                !1 === t.options.vertical
                  ? (t.swipeLeft = i + r * s)
                  : (t.swipeLeft =
                      i + r * (t.$list.height() / t.listWidth) * s),
                !0 === t.options.verticalSwiping && (t.swipeLeft = i + r * s),
                !0 !== t.options.fade &&
                  !1 !== t.options.touchMove &&
                  (!0 === t.animating
                    ? ((t.swipeLeft = null), !1)
                    : void t.setCSS(t.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t = this,
          n;
        if (
          ((t.interrupted = !0),
          1 !== t.touchObject.fingerCount ||
            t.slideCount <= t.options.slidesToShow)
        )
          return (t.touchObject = {}), !1;
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (n = e.originalEvent.touches[0]),
          (t.touchObject.startX = t.touchObject.curX =
            void 0 !== n ? n.pageX : e.clientX),
          (t.touchObject.startY = t.touchObject.curY =
            void 0 !== n ? n.pageY : e.clientY),
          (t.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this,
          t;
        (t = Math.floor(e.options.slidesToShow / 2)),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e = this,
          n = arguments[0],
          i = Array.prototype.slice.call(arguments, 1),
          o = e.length,
          r,
          s;
        for (r = 0; r < o; r++)
          if (
            ("object" == typeof n || void 0 === n
              ? (e[r].slick = new t(e[r], n))
              : (s = e[r].slick[n].apply(e[r].slick, i)),
            void 0 !== s)
          )
            return s;
        return e;
      });
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (e) {
    var t,
      n,
      i,
      o,
      r,
      s,
      a = "Close",
      l = "BeforeClose",
      u = "AfterClose",
      d = "BeforeAppend",
      c = "MarkupParse",
      p = "Open",
      f = "Change",
      h = "mfp",
      m = "." + h,
      g = "mfp-ready",
      v = "mfp-removing",
      y = "mfp-prevent-close",
      _ = function () {},
      w = !!window.jQuery,
      b = e(window),
      T = function (e, n) {
        t.ev.on(h + e + m, n);
      },
      A = function (t, n, i, o) {
        var r = document.createElement("div");
        return (
          (r.className = "mfp-" + t),
          i && (r.innerHTML = i),
          o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)),
          r
        );
      },
      x = function (n, i) {
        t.ev.triggerHandler(h + n, i),
          t.st.callbacks &&
            ((n = n.charAt(0).toLowerCase() + n.slice(1)),
            t.st.callbacks[n] &&
              t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
      },
      S = function (n) {
        return (
          (n === s && t.currTemplate.closeBtn) ||
            ((t.currTemplate.closeBtn = e(
              t.st.closeMarkup.replace("%title%", t.st.tClose)
            )),
            (s = n)),
          t.currTemplate.closeBtn
        );
      },
      k = function () {
        e.magnificPopup.instance ||
          ((t = new _()).init(), (e.magnificPopup.instance = t));
      },
      C = function () {
        var e = document.createElement("p").style,
          t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition) return !0;
        for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
        return !1;
      };
    (_.prototype = {
      constructor: _,
      init: function () {
        var n = navigator.appVersion;
        (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
          (t.isAndroid = /android/gi.test(n)),
          (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
          (t.supportsTransition = C()),
          (t.probablyMobile =
            t.isAndroid ||
            t.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (i = e(document)),
          (t.popupsCache = {});
      },
      open: function (n) {
        var o;
        if (!1 === n.isObj) {
          (t.items = n.items.toArray()), (t.index = 0);
          var s,
            a = n.items;
          for (o = 0; o < a.length; o++)
            if (((s = a[o]).parsed && (s = s.el[0]), s === n.el[0])) {
              t.index = o;
              break;
            }
        } else
          (t.items = e.isArray(n.items) ? n.items : [n.items]),
            (t.index = n.index || 0);
        if (!t.isOpen) {
          (t.types = []),
            (r = ""),
            n.mainEl && n.mainEl.length ? (t.ev = n.mainEl.eq(0)) : (t.ev = i),
            n.key
              ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}),
                (t.currTemplate = t.popupsCache[n.key]))
              : (t.currTemplate = {}),
            (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
            (t.fixedContentPos =
              "auto" === t.st.fixedContentPos
                ? !t.probablyMobile
                : t.st.fixedContentPos),
            t.st.modal &&
              ((t.st.closeOnContentClick = !1),
              (t.st.closeOnBgClick = !1),
              (t.st.showCloseBtn = !1),
              (t.st.enableEscapeKey = !1)),
            t.bgOverlay ||
              ((t.bgOverlay = A("bg").on("click" + m, function () {
                t.close();
              })),
              (t.wrap = A("wrap")
                .attr("tabindex", -1)
                .on("click" + m, function (e) {
                  t._checkIfClose(e.target) && t.close();
                })),
              (t.container = A("container", t.wrap))),
            (t.contentContainer = A("content")),
            t.st.preloader &&
              (t.preloader = A("preloader", t.container, t.st.tLoading));
          var l = e.magnificPopup.modules;
          for (o = 0; o < l.length; o++) {
            var u = l[o];
            (u = u.charAt(0).toUpperCase() + u.slice(1)), t["init" + u].call(t);
          }
          x("BeforeOpen"),
            t.st.showCloseBtn &&
              (t.st.closeBtnInside
                ? (T(c, function (e, t, n, i) {
                    n.close_replaceWith = S(i.type);
                  }),
                  (r += " mfp-close-btn-in"))
                : t.wrap.append(S())),
            t.st.alignTop && (r += " mfp-align-top"),
            t.fixedContentPos
              ? t.wrap.css({
                  overflow: t.st.overflowY,
                  overflowX: "hidden",
                  overflowY: t.st.overflowY,
                })
              : t.wrap.css({ top: b.scrollTop(), position: "absolute" }),
            (!1 === t.st.fixedBgPos ||
              ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) &&
              t.bgOverlay.css({ height: i.height(), position: "absolute" }),
            t.st.enableEscapeKey &&
              i.on("keyup" + m, function (e) {
                27 === e.keyCode && t.close();
              }),
            b.on("resize" + m, function () {
              t.updateSize();
            }),
            t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
            r && t.wrap.addClass(r);
          var d = (t.wH = b.height()),
            f = {};
          if (t.fixedContentPos && t._hasScrollBar(d)) {
            var h = t._getScrollbarSize();
            h && (f.marginRight = h);
          }
          t.fixedContentPos &&
            (t.isIE7
              ? e("body, html").css("overflow", "hidden")
              : (f.overflow = "hidden"));
          var v = t.st.mainClass;
          return (
            t.isIE7 && (v += " mfp-ie7"),
            v && t._addClassToMFP(v),
            t.updateItemHTML(),
            x("BuildControls"),
            e("html").css(f),
            t.bgOverlay
              .add(t.wrap)
              .prependTo(t.st.prependTo || e(document.body)),
            (t._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              t.content
                ? (t._addClassToMFP(g), t._setFocus())
                : t.bgOverlay.addClass(g),
                i.on("focusin" + m, t._onFocusIn);
            }, 16),
            (t.isOpen = !0),
            t.updateSize(d),
            x(p),
            n
          );
        }
        t.updateItemHTML();
      },
      close: function () {
        t.isOpen &&
          (x(l),
          (t.isOpen = !1),
          t.st.removalDelay && !t.isLowIE && t.supportsTransition
            ? (t._addClassToMFP(v),
              setTimeout(function () {
                t._close();
              }, t.st.removalDelay))
            : t._close());
      },
      _close: function () {
        x(a);
        var n = v + " " + g + " ";
        if (
          (t.bgOverlay.detach(),
          t.wrap.detach(),
          t.container.empty(),
          t.st.mainClass && (n += t.st.mainClass + " "),
          t._removeClassFromMFP(n),
          t.fixedContentPos)
        ) {
          var o = { marginRight: "" };
          t.isIE7 ? e("body, html").css("overflow", "") : (o.overflow = ""),
            e("html").css(o);
        }
        i.off("keyup.mfp focusin" + m),
          t.ev.off(m),
          t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          t.bgOverlay.attr("class", "mfp-bg"),
          t.container.attr("class", "mfp-container"),
          !t.st.showCloseBtn ||
            (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) ||
            (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
          t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
          (t.currItem = null),
          (t.content = null),
          (t.currTemplate = null),
          (t.prevHeight = 0),
          x(u);
      },
      updateSize: function (e) {
        if (t.isIOS) {
          var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;
          t.wrap.css("height", i), (t.wH = i);
        } else t.wH = e || b.height();
        t.fixedContentPos || t.wrap.css("height", t.wH), x("Resize");
      },
      updateItemHTML: function () {
        var n = t.items[t.index];
        t.contentContainer.detach(),
          t.content && t.content.detach(),
          n.parsed || (n = t.parseEl(t.index));
        var i = n.type;
        if (
          (x("BeforeChange", [t.currItem ? t.currItem.type : "", i]),
          (t.currItem = n),
          !t.currTemplate[i])
        ) {
          var r = !!t.st[i] && t.st[i].markup;
          x("FirstMarkupParse", r), (t.currTemplate[i] = !r || e(r));
        }
        o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
        var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](
          n,
          t.currTemplate[i]
        );
        t.appendContent(s, i),
          (n.preloaded = !0),
          x(f, n),
          (o = n.type),
          t.container.prepend(t.contentContainer),
          x("AfterChange");
      },
      appendContent: function (e, n) {
        (t.content = e),
          e
            ? t.st.showCloseBtn &&
              t.st.closeBtnInside &&
              !0 === t.currTemplate[n]
              ? t.content.find(".mfp-close").length || t.content.append(S())
              : (t.content = e)
            : (t.content = ""),
          x(d),
          t.container.addClass("mfp-" + n + "-holder"),
          t.contentContainer.append(t.content);
      },
      parseEl: function (n) {
        var i,
          o = t.items[n];
        if (
          (o.tagName
            ? (o = { el: e(o) })
            : ((i = o.type), (o = { data: o, src: o.src })),
          o.el)
        ) {
          for (var r = t.types, s = 0; s < r.length; s++)
            if (o.el.hasClass("mfp-" + r[s])) {
              i = r[s];
              break;
            }
          (o.src = o.el.attr("data-mfp-src")),
            o.src || (o.src = o.el.attr("href"));
        }
        return (
          (o.type = i || t.st.type || "inline"),
          (o.index = n),
          (o.parsed = !0),
          (t.items[n] = o),
          x("ElementParse", o),
          t.items[n]
        );
      },
      addGroup: function (e, n) {
        var i = function (i) {
          (i.mfpEl = this), t._openClick(i, e, n);
        };
        n || (n = {});
        var o = "click.magnificPopup";
        (n.mainEl = e),
          n.items
            ? ((n.isObj = !0), e.off(o).on(o, i))
            : ((n.isObj = !1),
              n.delegate
                ? e.off(o).on(o, n.delegate, i)
                : ((n.items = e), e.off(o).on(o, i)));
      },
      _openClick: function (n, i, o) {
        var r;
        if (
          (void 0 !== o.midClick
            ? o.midClick
            : e.magnificPopup.defaults.midClick) ||
          !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)
        ) {
          var s =
            void 0 !== o.disableOn
              ? o.disableOn
              : e.magnificPopup.defaults.disableOn;
          if (s)
            if (e.isFunction(s)) {
              if (!s.call(t)) return !0;
            } else if (b.width() < s) return !0;
          n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
            (o.el = e(n.mfpEl)),
            o.delegate && (o.items = i.find(o.delegate)),
            t.open(o);
        }
      },
      updateStatus: function (e, i) {
        if (t.preloader) {
          n !== e && t.container.removeClass("mfp-s-" + n),
            i || "loading" !== e || (i = t.st.tLoading);
          var o = { status: e, text: i };
          x("UpdateStatus", o),
            (e = o.status),
            (i = o.text),
            t.preloader.html(i),
            t.preloader.find("a").on("click", function (e) {
              e.stopImmediatePropagation();
            }),
            t.container.addClass("mfp-s-" + e),
            (n = e);
        }
      },
      _checkIfClose: function (n) {
        if (!e(n).hasClass(y)) {
          var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;
          if (i && o) return !0;
          if (
            !t.content ||
            e(n).hasClass("mfp-close") ||
            (t.preloader && n === t.preloader[0])
          )
            return !0;
          if (n === t.content[0] || e.contains(t.content[0], n)) {
            if (i) return !0;
          } else if (o && e.contains(document, n)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (e) {
        t.bgOverlay.addClass(e), t.wrap.addClass(e);
      },
      _removeClassFromMFP: function (e) {
        this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
      },
      _hasScrollBar: function (e) {
        return (
          (t.isIE7 ? i.height() : document.body.scrollHeight) >
          (e || b.height())
        );
      },
      _setFocus: function () {
        (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
      },
      _onFocusIn: function (n) {
        return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target)
          ? void 0
          : (t._setFocus(), !1);
      },
      _parseMarkup: function (t, n, i) {
        var o;
        i.data && (n = e.extend(i.data, n)),
          x(c, [t, n, i]),
          e.each(n, function (n, i) {
            if (void 0 === i || !1 === i) return !0;
            if ((o = n.split("_")).length > 1) {
              var r = t.find(m + "-" + o[0]);
              if (r.length > 0) {
                var s = o[1];
                "replaceWith" === s
                  ? r[0] !== i[0] && r.replaceWith(i)
                  : "img" === s
                  ? r.is("img")
                    ? r.attr("src", i)
                    : r.replaceWith(
                        e("<img>").attr("src", i).attr("class", r.attr("class"))
                      )
                  : r.attr(o[1], i);
              }
            } else t.find(m + "-" + n).html(i);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === t.scrollbarSize) {
          var e = document.createElement("div");
          (e.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(e),
            (t.scrollbarSize = e.offsetWidth - e.clientWidth),
            document.body.removeChild(e);
        }
        return t.scrollbarSize;
      },
    }),
      (e.magnificPopup = {
        instance: null,
        proto: _.prototype,
        modules: [],
        open: function (t, n) {
          return (
            k(),
            ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0),
            (t.index = n || 0),
            this.instance.open(t)
          );
        },
        close: function () {
          return e.magnificPopup.instance && e.magnificPopup.instance.close();
        },
        registerModule: function (t, n) {
          n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (e.fn.magnificPopup = function (n) {
        k();
        var i = e(this);
        if ("string" == typeof n)
          if ("open" === n) {
            var o,
              r = w ? i.data("magnificPopup") : i[0].magnificPopup,
              s = parseInt(arguments[1], 10) || 0;
            r.items
              ? (o = r.items[s])
              : ((o = i),
                r.delegate && (o = o.find(r.delegate)),
                (o = o.eq(s))),
              t._openClick({ mfpEl: o }, i, r);
          } else
            t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else
          (n = e.extend(!0, {}, n)),
            w ? i.data("magnificPopup", n) : (i[0].magnificPopup = n),
            t.addGroup(i, n);
        return i;
      });
    var E,
      I,
      O,
      P = "inline",
      L = function () {
        O && (I.after(O.addClass(E)).detach(), (O = null));
      };
    e.magnificPopup.registerModule(P, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          t.types.push(P),
            T(a + "." + P, function () {
              L();
            });
        },
        getInline: function (n, i) {
          if ((L(), n.src)) {
            var o = t.st.inline,
              r = e(n.src);
            if (r.length) {
              var s = r[0].parentNode;
              s &&
                s.tagName &&
                (I || ((E = o.hiddenClass), (I = A(E)), (E = "mfp-" + E)),
                (O = r.after(I).detach().removeClass(E))),
                t.updateStatus("ready");
            } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
            return (n.inlineElement = r), r;
          }
          return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
        },
      },
    });
    var $,
      D = "ajax",
      F = function () {
        $ && e(document.body).removeClass($);
      },
      M = function () {
        F(), t.req && t.req.abort();
      };
    e.magnificPopup.registerModule(D, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          t.types.push(D),
            ($ = t.st.ajax.cursor),
            T(a + "." + D, M),
            T("BeforeChange." + D, M);
        },
        getAjax: function (n) {
          $ && e(document.body).addClass($), t.updateStatus("loading");
          var i = e.extend(
            {
              url: n.src,
              success: function (i, o, r) {
                var s = { data: i, xhr: r };
                x("ParseAjax", s),
                  t.appendContent(e(s.data), D),
                  (n.finished = !0),
                  F(),
                  t._setFocus(),
                  setTimeout(function () {
                    t.wrap.addClass(g);
                  }, 16),
                  t.updateStatus("ready"),
                  x("AjaxContentAdded");
              },
              error: function () {
                F(),
                  (n.finished = n.loadError = !0),
                  t.updateStatus(
                    "error",
                    t.st.ajax.tError.replace("%url%", n.src)
                  );
              },
            },
            t.st.ajax.settings
          );
          return (t.req = e.ajax(i)), "";
        },
      },
    });
    var z,
      H = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
          if (e.isFunction(i)) return i.call(t, n);
          if (n.el) return n.el.attr(i) || "";
        }
        return "";
      };
    e.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var n = t.st.image,
            i = ".image";
          t.types.push("image"),
            T(p + i, function () {
              "image" === t.currItem.type &&
                n.cursor &&
                e(document.body).addClass(n.cursor);
            }),
            T(a + i, function () {
              n.cursor && e(document.body).removeClass(n.cursor),
                b.off("resize" + m);
            }),
            T("Resize" + i, t.resizeImage),
            t.isLowIE && T("AfterChange", t.resizeImage);
        },
        resizeImage: function () {
          var e = t.currItem;
          if (e && e.img && t.st.image.verticalFit) {
            var n = 0;
            t.isLowIE &&
              (n =
                parseInt(e.img.css("padding-top"), 10) +
                parseInt(e.img.css("padding-bottom"), 10)),
              e.img.css("max-height", t.wH - n);
          }
        },
        _onImageHasSize: function (e) {
          e.img &&
            ((e.hasSize = !0),
            z && clearInterval(z),
            (e.isCheckingImgSize = !1),
            x("ImageHasSize", e),
            e.imgHidden &&
              (t.content && t.content.removeClass("mfp-loading"),
              (e.imgHidden = !1)));
        },
        findImageSize: function (e) {
          var n = 0,
            i = e.img[0],
            o = function (r) {
              z && clearInterval(z),
                (z = setInterval(function () {
                  return i.naturalWidth > 0
                    ? void t._onImageHasSize(e)
                    : (n > 200 && clearInterval(z),
                      void (3 === ++n
                        ? o(10)
                        : 40 === n
                        ? o(50)
                        : 100 === n && o(500)));
                }, r));
            };
          o(1);
        },
        getImage: function (n, i) {
          var o = 0,
            r = function () {
              n &&
                (n.img[0].complete
                  ? (n.img.off(".mfploader"),
                    n === t.currItem &&
                      (t._onImageHasSize(n), t.updateStatus("ready")),
                    (n.hasSize = !0),
                    (n.loaded = !0),
                    x("ImageLoadComplete"))
                  : 200 > ++o
                  ? setTimeout(r, 100)
                  : s());
            },
            s = function () {
              n &&
                (n.img.off(".mfploader"),
                n === t.currItem &&
                  (t._onImageHasSize(n),
                  t.updateStatus("error", a.tError.replace("%url%", n.src))),
                (n.hasSize = !0),
                (n.loaded = !0),
                (n.loadError = !0));
            },
            a = t.st.image,
            l = i.find(".mfp-img");
          if (l.length) {
            var u = document.createElement("img");
            (u.className = "mfp-img"),
              n.el &&
                n.el.find("img").length &&
                (u.alt = n.el.find("img").attr("alt")),
              (n.img = e(u).on("load.mfploader", r).on("error.mfploader", s)),
              (u.src = n.src),
              l.is("img") && (n.img = n.img.clone()),
              (u = n.img[0]).naturalWidth > 0
                ? (n.hasSize = !0)
                : u.width || (n.hasSize = !1);
          }
          return (
            t._parseMarkup(i, { title: H(n), img_replaceWith: n.img }, n),
            t.resizeImage(),
            n.hasSize
              ? (z && clearInterval(z),
                n.loadError
                  ? (i.addClass("mfp-loading"),
                    t.updateStatus("error", a.tError.replace("%url%", n.src)))
                  : (i.removeClass("mfp-loading"), t.updateStatus("ready")),
                i)
              : (t.updateStatus("loading"),
                (n.loading = !0),
                n.hasSize ||
                  ((n.imgHidden = !0),
                  i.addClass("mfp-loading"),
                  t.findImageSize(n)),
                i)
          );
        },
      },
    });
    var B,
      j = function () {
        return (
          void 0 === B &&
            (B = void 0 !== document.createElement("p").style.MozTransform),
          B
        );
      };
    e.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (e) {
          return e.is("img") ? e : e.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var e,
            n = t.st.zoom,
            i = ".zoom";
          if (n.enabled && t.supportsTransition) {
            var o,
              r,
              s = n.duration,
              u = function (e) {
                var t = e
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  i = "all " + n.duration / 1e3 + "s " + n.easing,
                  o = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  r = "transition";
                return (
                  (o["-webkit-" + r] =
                    o["-moz-" + r] =
                    o["-o-" + r] =
                    o[r] =
                      i),
                  t.css(o),
                  t
                );
              },
              d = function () {
                t.content.css("visibility", "visible");
              };
            T("BuildControls" + i, function () {
              if (t._allowZoom()) {
                if (
                  (clearTimeout(o),
                  t.content.css("visibility", "hidden"),
                  !(e = t._getItemToZoom()))
                )
                  return void d();
                (r = u(e)).css(t._getOffset()),
                  t.wrap.append(r),
                  (o = setTimeout(function () {
                    r.css(t._getOffset(!0)),
                      (o = setTimeout(function () {
                        d(),
                          setTimeout(function () {
                            r.remove(), (e = r = null), x("ZoomAnimationEnded");
                          }, 16);
                      }, s));
                  }, 16));
              }
            }),
              T(l + i, function () {
                if (t._allowZoom()) {
                  if ((clearTimeout(o), (t.st.removalDelay = s), !e)) {
                    if (!(e = t._getItemToZoom())) return;
                    r = u(e);
                  }
                  r.css(t._getOffset(!0)),
                    t.wrap.append(r),
                    t.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      r.css(t._getOffset());
                    }, 16);
                }
              }),
              T(a + i, function () {
                t._allowZoom() && (d(), r && r.remove(), (e = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === t.currItem.type;
        },
        _getItemToZoom: function () {
          return !!t.currItem.hasSize && t.currItem.img;
        },
        _getOffset: function (n) {
          var i,
            o = (i = n
              ? t.currItem.img
              : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            r = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);
          o.top -= e(window).scrollTop() - r;
          var a = {
            width: i.width(),
            height: (w ? i.innerHeight() : i[0].offsetHeight) - s - r,
          };
          return (
            j()
              ? (a["-moz-transform"] = a.transform =
                  "translate(" + o.left + "px," + o.top + "px)")
              : ((a.left = o.left), (a.top = o.top)),
            a
          );
        },
      },
    });
    var R = "iframe",
      W = "//about:blank",
      N = function (e) {
        if (t.currTemplate[R]) {
          var n = t.currTemplate[R].find("iframe");
          n.length &&
            (e || (n[0].src = W),
            t.isIE8 && n.css("display", e ? "block" : "none"));
        }
      };
    e.magnificPopup.registerModule(R, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          t.types.push(R),
            T("BeforeChange", function (e, t, n) {
              t !== n && (t === R ? N() : n === R && N(!0));
            }),
            T(a + "." + R, function () {
              N();
            });
        },
        getIframe: function (n, i) {
          var o = n.src,
            r = t.st.iframe;
          e.each(r.patterns, function () {
            return o.indexOf(this.index) > -1
              ? (this.id &&
                  (o =
                    "string" == typeof this.id
                      ? o.substr(
                          o.lastIndexOf(this.id) + this.id.length,
                          o.length
                        )
                      : this.id.call(this, o)),
                (o = this.src.replace("%id%", o)),
                !1)
              : void 0;
          });
          var s = {};
          return (
            r.srcAction && (s[r.srcAction] = o),
            t._parseMarkup(i, s, n),
            t.updateStatus("ready"),
            i
          );
        },
      },
    });
    var q = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e;
      },
      U = function (e, t, n) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
      };
    e.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var n = t.st.gallery,
            o = ".mfp-gallery";
          return (
            (t.direction = !0),
            !(!n || !n.enabled) &&
              ((r += " mfp-gallery"),
              T(p + o, function () {
                n.navigateByImgClick &&
                  t.wrap.on("click" + o, ".mfp-img", function () {
                    return t.items.length > 1 ? (t.next(), !1) : void 0;
                  }),
                  i.on("keydown" + o, function (e) {
                    37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                  });
              }),
              T("UpdateStatus" + o, function (e, n) {
                n.text &&
                  (n.text = U(n.text, t.currItem.index, t.items.length));
              }),
              T(c + o, function (e, i, o, r) {
                var s = t.items.length;
                o.counter = s > 1 ? U(n.tCounter, r.index, s) : "";
              }),
              T("BuildControls" + o, function () {
                if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                  var i = n.arrowMarkup,
                    o = (t.arrowLeft = e(
                      i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(y)),
                    r = (t.arrowRight = e(
                      i
                        .replace(/%title%/gi, n.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(y));
                  o.click(function () {
                    t.prev();
                  }),
                    r.click(function () {
                      t.next();
                    }),
                    t.container.append(o.add(r));
                }
              }),
              T(f + o, function () {
                t._preloadTimeout && clearTimeout(t._preloadTimeout),
                  (t._preloadTimeout = setTimeout(function () {
                    t.preloadNearbyImages(), (t._preloadTimeout = null);
                  }, 16));
              }),
              void T(a + o, function () {
                i.off(o),
                  t.wrap.off("click" + o),
                  (t.arrowRight = t.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (t.direction = !0), (t.index = q(t.index + 1)), t.updateItemHTML();
        },
        prev: function () {
          (t.direction = !1), (t.index = q(t.index - 1)), t.updateItemHTML();
        },
        goTo: function (e) {
          (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);
          for (e = 1; e <= (t.direction ? o : i); e++)
            t._preloadItem(t.index + e);
          for (e = 1; e <= (t.direction ? i : o); e++)
            t._preloadItem(t.index - e);
        },
        _preloadItem: function (n) {
          if (((n = q(n)), !t.items[n].preloaded)) {
            var i = t.items[n];
            i.parsed || (i = t.parseEl(n)),
              x("LazyLoad", i),
              "image" === i.type &&
                (i.img = e('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    i.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (i.hasSize = !0), (i.loadError = !0), x("LazyLoadError", i);
                  })
                  .attr("src", i.src)),
              (i.preloaded = !0);
          }
        },
      },
    });
    var G = "retina";
    e.magnificPopup.registerModule(G, {
      options: {
        replaceSrc: function (e) {
          return e.src.replace(/\.\w+$/, function (e) {
            return "@2x" + e;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var e = t.st.retina,
              n = e.ratio;
            (n = isNaN(n) ? n() : n) > 1 &&
              (T("ImageHasSize." + G, function (e, t) {
                t.img.css({
                  "max-width": t.img[0].naturalWidth / n,
                  width: "100%",
                });
              }),
              T("ElementParse." + G, function (t, i) {
                i.src = e.replaceSrc(i, n);
              }));
          }
        },
      },
    }),
      k();
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.EvEmitter = t());
  })("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.on = function (e, t) {
        if (e && t) {
          var n = (this._events = this._events || {}),
            i = (n[e] = n[e] || []);
          return -1 == i.indexOf(t) && i.push(t), this;
        }
      }),
      (t.once = function (e, t) {
        if (e && t) {
          this.on(e, t);
          var n = (this._onceEvents = this._onceEvents || {}),
            i;
          return ((n[e] = n[e] || {})[t] = !0), this;
        }
      }),
      (t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          var i = n.indexOf(t);
          return -1 != i && n.splice(i, 1), this;
        }
      }),
      (t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          (n = n.slice(0)), (t = t || []);
          for (
            var i = this._onceEvents && this._onceEvents[e], o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o],
              s;
            i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
          }
          return this;
        }
      }),
      (t.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      e
    );
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (n) {
          return t(e, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function i(e) {
      return Array.isArray(e)
        ? e
        : "object" == typeof e && "number" == typeof e.length
        ? u.call(e)
        : [e];
      var t;
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = i(s)),
            (this.options = n({}, this.options)),
            "function" == typeof t ? (r = t) : n(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            a && (this.jqDeferred = new a.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void l.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var a = e.jQuery,
      l = e.console,
      u = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
          for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
            var o = n[i];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (i = 0; i < r.length; i++) {
              var s = r[i];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var d = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage);
            null !== i;

          ) {
            var o = i && i[2];
            o && this.addBackground(o, e), (i = n.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var n = new s(e, t);
        this.images.push(n);
      }),
      (o.prototype.check = function () {
        function e(e, n, i) {
          setTimeout(function () {
            t.progress(e, n, i);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, n) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && l && l.log("progress: " + n, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e;
        return this.getIsImageComplete()
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        var e;
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((a = t).fn.imagesLoaded = function (e, t) {
            var n;
            return new o(this, e, t).jqDeferred.promise(a(this));
          });
      }),
      o.makeJQueryPlugin(),
      o
    );
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
          return t(e, n);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("jquery")))
      : (e.jQueryBridget = t(e, e.jQuery));
  })(window, function (e, t) {
    "use strict";
    function n(n, r, a) {
      function l(e, t, i) {
        var o,
          r = "$()." + n + '("' + t + '")';
        return (
          e.each(function (e, l) {
            var u = a.data(l, n);
            if (u) {
              var d = u[t];
              if (d && "_" != t.charAt(0)) {
                var c = d.apply(u, i);
                o = void 0 === o ? c : o;
              } else s(r + " is not a valid method");
            } else s(n + " not initialized. Cannot call methods, i.e. " + r);
          }),
          void 0 !== o ? o : e
        );
      }
      function u(e, t) {
        e.each(function (e, i) {
          var o = a.data(i, n);
          o ? (o.option(t), o._init()) : ((o = new r(i, t)), a.data(i, n, o));
        });
      }
      (a = a || t || e.jQuery) &&
        (r.prototype.option ||
          (r.prototype.option = function (e) {
            a.isPlainObject(e) &&
              (this.options = a.extend(!0, this.options, e));
          }),
        (a.fn[n] = function (e) {
          if ("string" == typeof e) {
            var t = o.call(arguments, 1);
            return l(this, e, t);
          }
          return u(this, e), this;
        }),
        i(a));
    }
    function i(e) {
      !e || (e && e.bridget) || (e.bridget = n);
    }
    var o = Array.prototype.slice,
      r = e.console,
      s =
        void 0 === r
          ? function () {}
          : function (e) {
              r.error(e);
            };
    return i(t || e.jQuery), n;
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.EvEmitter = t());
  })("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.on = function (e, t) {
        if (e && t) {
          var n = (this._events = this._events || {}),
            i = (n[e] = n[e] || []);
          return -1 == i.indexOf(t) && i.push(t), this;
        }
      }),
      (t.once = function (e, t) {
        if (e && t) {
          this.on(e, t);
          var n = (this._onceEvents = this._onceEvents || {}),
            i;
          return ((n[e] = n[e] || {})[t] = !0), this;
        }
      }),
      (t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          var i = n.indexOf(t);
          return -1 != i && n.splice(i, 1), this;
        }
      }),
      (t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
          (n = n.slice(0)), (t = t || []);
          for (
            var i = this._onceEvents && this._onceEvents[e], o = 0;
            o < n.length;
            o++
          ) {
            var r = n[o],
              s;
            i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
          }
          return this;
        }
      }),
      (t.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      e
    );
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.getSize = t());
  })(window, function () {
    "use strict";
    function e(e) {
      var t = parseFloat(e),
        n;
      return -1 == e.indexOf("%") && !isNaN(t) && t;
    }
    function t() {}
    function n() {
      for (
        var e = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          t = 0;
        u > t;
        t++
      ) {
        var n;
        e[l[t]] = 0;
      }
      return e;
    }
    function i(e) {
      var t = getComputedStyle(e);
      return (
        t ||
          a(
            "Style returned " +
              t +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        t
      );
    }
    function o() {
      if (!d) {
        d = !0;
        var t = document.createElement("div");
        (t.style.width = "200px"),
          (t.style.padding = "1px 2px 3px 4px"),
          (t.style.borderStyle = "solid"),
          (t.style.borderWidth = "1px 2px 3px 4px"),
          (t.style.boxSizing = "border-box");
        var n = document.body || document.documentElement;
        n.appendChild(t);
        var o = i(t);
        (s = 200 == Math.round(e(o.width))),
          (r.isBoxSizeOuter = s),
          n.removeChild(t);
      }
    }
    function r(t) {
      if (
        (o(),
        "string" == typeof t && (t = document.querySelector(t)),
        t && "object" == typeof t && t.nodeType)
      ) {
        var r = i(t);
        if ("none" == r.display) return n();
        var a = {};
        (a.width = t.offsetWidth), (a.height = t.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == r.boxSizing), c = 0;
          u > c;
          c++
        ) {
          var p = l[c],
            f = r[p],
            h = parseFloat(f);
          a[p] = isNaN(h) ? 0 : h;
        }
        var m = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          v = a.marginLeft + a.marginRight,
          y = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          w = a.borderTopWidth + a.borderBottomWidth,
          b = d && s,
          T = e(r.width);
        !1 !== T && (a.width = T + (b ? 0 : m + _));
        var A = e(r.height);
        return (
          !1 !== A && (a.height = A + (b ? 0 : g + w)),
          (a.innerWidth = a.width - (m + _)),
          (a.innerHeight = a.height - (g + w)),
          (a.outerWidth = a.width + v),
          (a.outerHeight = a.height + y),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? t
          : function (e) {
              console.error(e);
            },
      l = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      u = l.length,
      d = !1;
    return r;
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", t)
      : "object" == typeof module && module.exports
      ? (module.exports = t())
      : (e.matchesSelector = t());
  })(window, function () {
    "use strict";
    var e = (function () {
      var e = window.Element.prototype;
      if (e.matches) return "matches";
      if (e.matchesSelector) return "matchesSelector";
      for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
        var i,
          o = t[n] + "MatchesSelector";
        if (e[o]) return o;
      }
    })();
    return function (t, n) {
      return t[e](n);
    };
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (n) {
            return t(e, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = t(e, e.matchesSelector));
  })(window, function (e, t) {
    var n = {
        extend: function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        modulo: function (e, t) {
          return ((e % t) + t) % t;
        },
      },
      i = Array.prototype.slice;
    (n.makeArray = function (e) {
      return Array.isArray(e)
        ? e
        : null == e
        ? []
        : "object" == typeof e && "number" == typeof e.length
        ? i.call(e)
        : [e];
      var t;
    }),
      (n.removeFrom = function (e, t) {
        var n = e.indexOf(t);
        -1 != n && e.splice(n, 1);
      }),
      (n.getParent = function (e, n) {
        for (; e.parentNode && e != document.body; )
          if (((e = e.parentNode), t(e, n))) return e;
      }),
      (n.getQueryElement = function (e) {
        return "string" == typeof e ? document.querySelector(e) : e;
      }),
      (n.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (n.filterFindElements = function (e, i) {
        e = n.makeArray(e);
        var o = [];
        return (
          e.forEach(function (e) {
            if (e instanceof HTMLElement) {
              if (!i) return void o.push(e);
              t(e, i) && o.push(e);
              for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++)
                o.push(n[r]);
            }
          }),
          o
        );
      }),
      (n.debounceMethod = function (e, t, n) {
        n = n || 100;
        var i = e.prototype[t],
          o = t + "Timeout";
        e.prototype[t] = function () {
          var e = this[o];
          clearTimeout(e);
          var t = arguments,
            r = this;
          this[o] = setTimeout(function () {
            i.apply(r, t), delete r[o];
          }, n);
        };
      }),
      (n.docReady = function (e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t
          ? setTimeout(e)
          : document.addEventListener("DOMContentLoaded", e);
      }),
      (n.toDashed = function (e) {
        return e
          .replace(/(.)([A-Z])/g, function (e, t, n) {
            return t + "-" + n;
          })
          .toLowerCase();
      });
    var o = e.console;
    return (
      (n.htmlInit = function (t, i) {
        n.docReady(function () {
          var r = n.toDashed(i),
            s = "data-" + r,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + r),
            u = n.makeArray(a).concat(n.makeArray(l)),
            d = s + "-options",
            c = e.jQuery;
          u.forEach(function (e) {
            var n,
              r = e.getAttribute(s) || e.getAttribute(d);
            try {
              n = r && JSON.parse(r);
            } catch (t) {
              return void (
                o &&
                o.error("Error parsing " + s + " on " + e.className + ": " + t)
              );
            }
            var a = new t(e, n);
            c && c.data(e, i, a);
          });
        });
      }),
      n
    );
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          t
        )
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("ev-emitter"), require("get-size")))
      : ((e.Outlayer = {}), (e.Outlayer.Item = t(e.EvEmitter, e.getSize)));
  })(window, function (e, t) {
    "use strict";
    function n(e) {
      for (var t in e) return !1;
      return (t = null), !0;
    }
    function i(e, t) {
      e &&
        ((this.element = e),
        (this.layout = t),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function o(e) {
      return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase();
      });
    }
    var r = document.documentElement.style,
      s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
      l = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      u = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      d = (i.prototype = Object.create(e.prototype));
    (d.constructor = i),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (d.getSize = function () {
        this.size = t(this.element);
      }),
      (d.css = function (e) {
        var t = this.element.style;
        for (var n in e) {
          var i;
          t[u[n] || n] = e[n];
        }
      }),
      (d.getPosition = function () {
        var e = getComputedStyle(this.element),
          t = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          i = e[t ? "left" : "right"],
          o = e[n ? "top" : "bottom"],
          r = parseFloat(i),
          s = parseFloat(o),
          a = this.layout.size;
        -1 != i.indexOf("%") && (r = (r / 100) * a.width),
          -1 != o.indexOf("%") && (s = (s / 100) * a.height),
          (r = isNaN(r) ? 0 : r),
          (s = isNaN(s) ? 0 : s),
          (r -= t ? a.paddingLeft : a.paddingRight),
          (s -= n ? a.paddingTop : a.paddingBottom),
          (this.position.x = r),
          (this.position.y = s);
      }),
      (d.layoutPosition = function () {
        var e = this.layout.size,
          t = {},
          n = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = n ? "paddingLeft" : "paddingRight",
          r = n ? "left" : "right",
          s = n ? "right" : "left",
          a = this.position.x + e[o];
        (t[r] = this.getXValue(a)), (t[s] = "");
        var l = i ? "paddingTop" : "paddingBottom",
          u = i ? "top" : "bottom",
          d = i ? "bottom" : "top",
          c = this.position.y + e[l];
        (t[u] = this.getYValue(c)),
          (t[d] = ""),
          this.css(t),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t
          ? (e / this.layout.size.width) * 100 + "%"
          : e + "px";
      }),
      (d.getYValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t
          ? (e / this.layout.size.height) * 100 + "%"
          : e + "px";
      }),
      (d._transitionTo = function (e, t) {
        this.getPosition();
        var n = this.position.x,
          i = this.position.y,
          o = e == this.position.x && t == this.position.y;
        if ((this.setPosition(e, t), !o || this.isTransitioning)) {
          var r = e - n,
            s = t - i,
            a = {};
          (a.transform = this.getTranslate(r, s)),
            this.transition({
              to: a,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (d.getTranslate = function (e, t) {
        var n, i;
        return (
          "translate3d(" +
          (e = this.layout._getOption("originLeft") ? e : -e) +
          "px, " +
          (t = this.layout._getOption("originTop") ? t : -t) +
          "px, 0)"
        );
      }),
      (d.goTo = function (e, t) {
        this.setPosition(e, t), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (e, t) {
        (this.position.x = parseFloat(e)), (this.position.y = parseFloat(t));
      }),
      (d._nonTransition = function (e) {
        for (var t in (this.css(e.to),
        e.isCleaning && this._removeStyles(e.to),
        e.onTransitionEnd))
          e.onTransitionEnd[t].call(this);
      }),
      (d.transition = function (e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var t = this._transn;
          for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
          for (n in e.to)
            (t.ingProperties[n] = !0), e.isCleaning && (t.clean[n] = !0);
          if (e.from) {
            this.css(e.from);
            var i = this.element.offsetHeight;
            i = null;
          }
          this.enableTransition(e.to),
            this.css(e.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(e);
      });
    var c = "opacity," + o(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var e = this.layout.options.transitionDuration;
        (e = "number" == typeof e ? e + "ms" : e),
          this.css({
            transitionProperty: c,
            transitionDuration: e,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(l, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (e) {
        this.ontransitionend(e);
      }),
      (d.onotransitionend = function (e) {
        this.ontransitionend(e);
      });
    var p = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (e) {
      if (e.target === this.element) {
        var t = this._transn,
          i = p[e.propertyName] || e.propertyName,
          o;
        if (
          (delete t.ingProperties[i],
          n(t.ingProperties) && this.disableTransition(),
          i in t.clean &&
            ((this.element.style[e.propertyName] = ""), delete t.clean[i]),
          i in t.onEnd)
        )
          t.onEnd[i].call(this), delete t.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(l, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (e) {
        var t = {};
        for (var n in e) t[n] = "";
        this.css(t);
      });
    var f = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(f);
      }),
      (d.stagger = function (e) {
        (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var e = this.layout.options,
          t = {},
          n;
        (t[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var n in t) return n;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var e = this.layout.options,
          t = {},
          n;
        (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      i
    );
  }),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (n, i, o, r) {
            return t(e, n, i, o, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = t(
          e,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (e.Outlayer = t(
          e,
          e.EvEmitter,
          e.getSize,
          e.fizzyUIUtils,
          e.Outlayer.Item
        ));
  })(window, function (e, t, n, i, o) {
    "use strict";
    function r(e, t) {
      var n = i.getQueryElement(e);
      if (n) {
        (this.element = n),
          u && (this.$element = u(this.element)),
          (this.options = i.extend({}, this.constructor.defaults)),
          this.option(t);
        var o = ++c,
          r;
        (this.element.outlayerGUID = o),
          (p[o] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || e));
    }
    function s(e) {
      function t() {
        e.apply(this, arguments);
      }
      return (
        (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        t
      );
    }
    function a(e) {
      if ("number" == typeof e) return e;
      var t = e.match(/(^\d*\.?\d*)(\w*)/),
        n = t && t[1],
        i = t && t[2],
        o;
      return n.length ? (n = parseFloat(n)) * (h[i] || 1) : 0;
    }
    var l = e.console,
      u = e.jQuery,
      d = function () {},
      c = 0,
      p = {};
    (r.namespace = "outlayer"),
      (r.Item = o),
      (r.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var f = r.prototype;
    i.extend(f, t.prototype),
      (f.option = function (e) {
        i.extend(this.options, e);
      }),
      (f._getOption = function (e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t]
          ? this.options[t]
          : this.options[e];
      }),
      (r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (f._create = function () {
        var e;
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          i.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (f._itemize = function (e) {
        for (
          var t = this._filterFindItemElements(e),
            n = this.constructor.Item,
            i = [],
            o = 0;
          o < t.length;
          o++
        ) {
          var r,
            s = new n(t[o], this);
          i.push(s);
        }
        return i;
      }),
      (f._filterFindItemElements = function (e) {
        return i.filterFindElements(e, this.options.itemSelector);
      }),
      (f.getItemElements = function () {
        return this.items.map(function (e) {
          return e.element;
        });
      }),
      (f.layout = function () {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
          t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), (this._isLayoutInited = !0);
      }),
      (f._init = f.layout),
      (f._resetLayout = function () {
        this.getSize();
      }),
      (f.getSize = function () {
        this.size = n(this.element);
      }),
      (f._getMeasurement = function (e, t) {
        var i,
          o = this.options[e];
        o
          ? ("string" == typeof o
              ? (i = this.element.querySelector(o))
              : o instanceof HTMLElement && (i = o),
            (this[e] = i ? n(i)[t] : o))
          : (this[e] = 0);
      }),
      (f.layoutItems = function (e, t) {
        (e = this._getItemsForLayout(e)),
          this._layoutItems(e, t),
          this._postLayout();
      }),
      (f._getItemsForLayout = function (e) {
        return e.filter(function (e) {
          return !e.isIgnored;
        });
      }),
      (f._layoutItems = function (e, t) {
        if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
          var n = [];
          e.forEach(function (e) {
            var i = this._getItemLayoutPosition(e);
            (i.item = e), (i.isInstant = t || e.isLayoutInstant), n.push(i);
          }, this),
            this._processLayoutQueue(n);
        }
      }),
      (f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (f._processLayoutQueue = function (e) {
        this.updateStagger(),
          e.forEach(function (e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t);
          }, this);
      }),
      (f.updateStagger = function () {
        var e = this.options.stagger;
        return null == e
          ? void (this.stagger = 0)
          : ((this.stagger = a(e)), this.stagger);
      }),
      (f._positionItem = function (e, t, n, i, o) {
        i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n));
      }),
      (f._postLayout = function () {
        this.resizeContainer();
      }),
      (f.resizeContainer = function () {
        var e;
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (f._getContainerSize = d),
      (f._setContainerMeasure = function (e, t) {
        if (void 0 !== e) {
          var n = this.size;
          n.isBorderBox &&
            (e += t
              ? n.paddingLeft +
                n.paddingRight +
                n.borderLeftWidth +
                n.borderRightWidth
              : n.paddingBottom +
                n.paddingTop +
                n.borderTopWidth +
                n.borderBottomWidth),
            (e = Math.max(e, 0)),
            (this.element.style[t ? "width" : "height"] = e + "px");
        }
      }),
      (f._emitCompleteOnItems = function (e, t) {
        function n() {
          o.dispatchEvent(e + "Complete", null, [t]);
        }
        function i() {
          ++s == r && n();
        }
        var o = this,
          r = t.length;
        if (t && r) {
          var s = 0;
          t.forEach(function (t) {
            t.once(e, i);
          });
        } else n();
      }),
      (f.dispatchEvent = function (e, t, n) {
        var i = t ? [t].concat(n) : n;
        if ((this.emitEvent(e, i), u))
          if (((this.$element = this.$element || u(this.element)), t)) {
            var o = u.Event(t);
            (o.type = e), this.$element.trigger(o, n);
          } else this.$element.trigger(e, n);
      }),
      (f.ignore = function (e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0);
      }),
      (f.unignore = function (e) {
        var t = this.getItem(e);
        t && delete t.isIgnored;
      }),
      (f.stamp = function (e) {
        (e = this._find(e)) &&
          ((this.stamps = this.stamps.concat(e)), e.forEach(this.ignore, this));
      }),
      (f.unstamp = function (e) {
        (e = this._find(e)) &&
          e.forEach(function (e) {
            i.removeFrom(this.stamps, e), this.unignore(e);
          }, this);
      }),
      (f._find = function (e) {
        return e
          ? ("string" == typeof e && (e = this.element.querySelectorAll(e)),
            (e = i.makeArray(e)))
          : void 0;
      }),
      (f._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (f._getBoundingRect = function () {
        var e = this.element.getBoundingClientRect(),
          t = this.size;
        this._boundingRect = {
          left: e.left + t.paddingLeft + t.borderLeftWidth,
          top: e.top + t.paddingTop + t.borderTopWidth,
          right: e.right - (t.paddingRight + t.borderRightWidth),
          bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
        };
      }),
      (f._manageStamp = d),
      (f._getElementOffset = function (e) {
        var t = e.getBoundingClientRect(),
          i = this._boundingRect,
          o = n(e),
          r;
        return {
          left: t.left - i.left - o.marginLeft,
          top: t.top - i.top - o.marginTop,
          right: i.right - t.right - o.marginRight,
          bottom: i.bottom - t.bottom - o.marginBottom,
        };
      }),
      (f.handleEvent = i.handleEvent),
      (f.bindResize = function () {
        e.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (f.unbindResize = function () {
        e.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (f.onresize = function () {
        this.resize();
      }),
      i.debounceMethod(r, "onresize", 100),
      (f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (f.needsResizeLayout = function () {
        var e = n(this.element),
          t;
        return this.size && e && e.innerWidth !== this.size.innerWidth;
      }),
      (f.addItems = function (e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t;
      }),
      (f.appended = function (e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t));
      }),
      (f.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
          var n = this.items.slice(0);
          (this.items = t.concat(n)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(t, !0),
            this.reveal(t),
            this.layoutItems(n);
        }
      }),
      (f.reveal = function (e) {
        if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
          var t = this.updateStagger();
          e.forEach(function (e, n) {
            e.stagger(n * t), e.reveal();
          });
        }
      }),
      (f.hide = function (e) {
        if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
          var t = this.updateStagger();
          e.forEach(function (e, n) {
            e.stagger(n * t), e.hide();
          });
        }
      }),
      (f.revealItemElements = function (e) {
        var t = this.getItems(e);
        this.reveal(t);
      }),
      (f.hideItemElements = function (e) {
        var t = this.getItems(e);
        this.hide(t);
      }),
      (f.getItem = function (e) {
        for (var t = 0; t < this.items.length; t++) {
          var n = this.items[t];
          if (n.element == e) return n;
        }
      }),
      (f.getItems = function (e) {
        e = i.makeArray(e);
        var t = [];
        return (
          e.forEach(function (e) {
            var n = this.getItem(e);
            n && t.push(n);
          }, this),
          t
        );
      }),
      (f.remove = function (e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t),
          t &&
            t.length &&
            t.forEach(function (e) {
              e.remove(), i.removeFrom(this.items, e);
            }, this);
      }),
      (f.destroy = function () {
        var e = this.element.style;
        (e.height = ""),
          (e.position = ""),
          (e.width = ""),
          this.items.forEach(function (e) {
            e.destroy();
          }),
          this.unbindResize();
        var t = this.element.outlayerGUID;
        delete p[t],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (r.data = function (e) {
        var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
        return t && p[t];
      }),
      (r.create = function (e, t) {
        var n = s(r);
        return (
          (n.defaults = i.extend({}, r.defaults)),
          i.extend(n.defaults, t),
          (n.compatOptions = i.extend({}, r.compatOptions)),
          (n.namespace = e),
          (n.data = r.data),
          (n.Item = s(o)),
          i.htmlInit(n, e),
          u && u.bridget && u.bridget(e, n),
          n
        );
      });
    var h = { ms: 1, s: 1e3 };
    return (r.Item = o), r;
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(["outlayer/outlayer", "get-size/get-size"], t)
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("outlayer"), require("get-size")))
      : (e.Masonry = t(e.Outlayer, e.getSize));
  })(window, function (e, t) {
    var n = e.create("masonry");
    n.compatOptions.fitWidth = "isFitWidth";
    var i = n.prototype;
    return (
      (i._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (i.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var e = this.items[0],
            n = e && e.element;
          this.columnWidth = (n && t(n).outerWidth) || this.containerWidth;
        }
        var i = (this.columnWidth += this.gutter),
          o = this.containerWidth + this.gutter,
          r = o / i,
          s = i - (o % i),
          a;
        (r = Math[s && 1 > s ? "round" : "floor"](r)),
          (this.cols = Math.max(r, 1));
      }),
      (i.getContainerWidth = function () {
        var e,
          n = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          i = t(n);
        this.containerWidth = i && i.innerWidth;
      }),
      (i._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
          n,
          i = Math[t && 1 > t ? "round" : "ceil"](
            e.size.outerWidth / this.columnWidth
          );
        i = Math.min(i, this.cols);
        for (
          var o,
            r = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](i, e),
            s = { x: this.columnWidth * r.col, y: r.y },
            a = r.y + e.size.outerHeight,
            l = i + r.col,
            u = r.col;
          l > u;
          u++
        )
          this.colYs[u] = a;
        return s;
      }),
      (i._getTopColPosition = function (e) {
        var t = this._getTopColGroup(e),
          n = Math.min.apply(Math, t);
        return { col: t.indexOf(n), y: n };
      }),
      (i._getTopColGroup = function (e) {
        if (2 > e) return this.colYs;
        for (var t = [], n = this.cols + 1 - e, i = 0; n > i; i++)
          t[i] = this._getColGroupY(i, e);
        return t;
      }),
      (i._getColGroupY = function (e, t) {
        if (2 > t) return this.colYs[e];
        var n = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, n);
      }),
      (i._getHorizontalColPosition = function (e, t) {
        var n = this.horizontalColIndex % this.cols,
          i;
        n = e > 1 && n + e > this.cols ? 0 : n;
        var o = t.size.outerWidth && t.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? n + e : this.horizontalColIndex),
          { col: n, y: this._getColGroupY(n, e) }
        );
      }),
      (i._manageStamp = function (e) {
        var n = t(e),
          i = this._getElementOffset(e),
          o,
          r = this._getOption("originLeft") ? i.left : i.right,
          s = r + n.outerWidth,
          a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        (l -= s % this.columnWidth ? 0 : 1), (l = Math.min(this.cols - 1, l));
        for (
          var u,
            d =
              (this._getOption("originTop") ? i.top : i.bottom) + n.outerHeight,
            c = a;
          l >= c;
          c++
        )
          this.colYs[c] = Math.max(d, this.colYs[c]);
      }),
      (i._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (e.width = this._getContainerFitWidth()),
          e
        );
      }),
      (i._getContainerFitWidth = function () {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; ) e++;
        return (this.cols - e) * this.columnWidth - this.gutter;
      }),
      (i.needsResizeLayout = function () {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth;
      }),
      n
    );
  }),
  (function (e, t) {
    "use strict";
    function n(n, i, r, a, l) {
      function u() {
        (x = e.devicePixelRatio > 1),
          (r = d(r)),
          i.delay >= 0 &&
            setTimeout(function () {
              c(!0);
            }, i.delay),
          (i.delay < 0 || i.combined) &&
            ((a.e = y(i.throttle, function (e) {
              "resize" === e.type && (T = A = -1), c(e.all);
            })),
            (a.a = function (e) {
              (e = d(e)), r.push.apply(r, e);
            }),
            (a.g = function () {
              return (r = o(r).filter(function () {
                return !o(this).data(i.loadedName);
              }));
            }),
            (a.f = function (e) {
              for (var t = 0; t < e.length; t++) {
                var n = r.filter(function () {
                  return this === e[t];
                });
                n.length && c(!1, n);
              }
            }),
            c(),
            o(i.appendScroll).on("scroll." + l + " resize." + l, a.e));
      }
      function d(e) {
        for (
          var r = i.defaultImage,
            s = i.placeholder,
            a = i.imageBase,
            l = i.srcsetAttribute,
            u = i.loaderAttribute,
            d = i._f || {},
            c = 0,
            p = (e = o(e)
              .filter(function () {
                var e = o(this),
                  n = g(this);
                return (
                  !e.data(i.handledName) &&
                  (e.attr(i.attribute) || e.attr(l) || e.attr(u) || d[n] !== t)
                );
              })
              .data("plugin_" + i.name, n)).length;
          c < p;
          c++
        ) {
          var f = o(e[c]),
            h = g(e[c]),
            m = f.attr(i.imageBaseAttribute) || a;
          h === E && m && f.attr(l) && f.attr(l, v(f.attr(l), m)),
            d[h] === t || f.attr(u) || f.attr(u, d[h]),
            h === E && r && !f.attr(I)
              ? f.attr(I, r)
              : h === E ||
                !s ||
                (f.css(L) && "none" !== f.css(L)) ||
                f.css(L, "url('" + s + "')");
        }
        return e;
      }
      function c(e, t) {
        if (r.length) {
          for (
            var s = t || r,
              a = !1,
              l = i.imageBase || "",
              u = i.srcsetAttribute,
              d = i.handledName,
              c = 0;
            c < s.length;
            c++
          )
            if (e || t || f(s[c])) {
              var h = o(s[c]),
                m = g(s[c]),
                v = h.attr(i.attribute),
                y = h.attr(i.imageBaseAttribute) || l,
                _ = h.attr(i.loaderAttribute);
              h.data(d) ||
                (i.visibleOnly && !h.is(":visible")) ||
                !(
                  ((v || h.attr(u)) &&
                    ((m === E &&
                      (y + v !== h.attr(I) || h.attr(u) !== h.attr(O))) ||
                      (m !== E && y + v !== h.css(L)))) ||
                  _
                ) ||
                ((a = !0), h.data(d, !0), p(h, m, y, _));
            }
          a &&
            (r = o(r).filter(function () {
              return !o(this).data(d);
            }));
        } else i.autoDestroy && n.destroy();
      }
      function p(e, t, n, r) {
        ++b;
        var s = function () {
          w("onError", e), _(), (s = o.noop);
        };
        w("beforeLoad", e);
        var a = i.attribute,
          l = i.srcsetAttribute,
          u = i.sizesAttribute,
          d = i.retinaAttribute,
          c = i.removeAttribute,
          p = i.loadedName,
          f = e.attr(d);
        if (r) {
          var h = function () {
            c && e.removeAttr(i.loaderAttribute),
              e.data(p, !0),
              w(S, e),
              setTimeout(_, 1),
              (h = o.noop);
          };
          e.off(C).one(C, s).one(k, h),
            w(r, e, function (t) {
              t ? (e.off(k), h()) : (e.off(C), s());
            }) || e.trigger(C);
        } else {
          var m = o(new Image());
          m.one(C, s).one(k, function () {
            e.hide(),
              t === E
                ? e.attr(P, m.attr(P)).attr(O, m.attr(O)).attr(I, m.attr(I))
                : e.css(L, "url('" + m.attr(I) + "')"),
              e[i.effect](i.effectTime),
              c &&
                (e.removeAttr(
                  a + " " + l + " " + d + " " + i.imageBaseAttribute
                ),
                u !== P && e.removeAttr(u)),
              e.data(p, !0),
              w(S, e),
              m.remove(),
              _();
          });
          var g = (x && f ? f : e.attr(a)) || "";
          m
            .attr(P, e.attr(u))
            .attr(O, e.attr(l))
            .attr(I, g ? n + g : null),
            m.complete && m.trigger(k);
        }
      }
      function f(e) {
        var t = e.getBoundingClientRect(),
          n = i.scrollDirection,
          o = i.threshold,
          r = m() + o > t.top && -o < t.bottom,
          s = h() + o > t.left && -o < t.right;
        return "vertical" === n ? r : "horizontal" === n ? s : r && s;
      }
      function h() {
        return T >= 0 ? T : (T = o(e).width());
      }
      function m() {
        return A >= 0 ? A : (A = o(e).height());
      }
      function g(e) {
        return e.tagName.toLowerCase();
      }
      function v(e, t) {
        if (t) {
          var n = e.split(",");
          e = "";
          for (var i = 0, o = n.length; i < o; i++)
            e += t + n[i].trim() + (i !== o - 1 ? "," : "");
        }
        return e;
      }
      function y(e, t) {
        var o,
          r = 0;
        return function (s, a) {
          function l() {
            (r = +new Date()), t.call(n, s);
          }
          var u = +new Date() - r;
          o && clearTimeout(o),
            u > e || !i.enableThrottle || a ? l() : (o = setTimeout(l, e - u));
        };
      }
      function _() {
        --b, r.length || b || w("onFinishedAll");
      }
      function w(e, t, o) {
        return !!(e = i[e]) && (e.apply(n, [].slice.call(arguments, 1)), !0);
      }
      var b = 0,
        T = -1,
        A = -1,
        x = !1,
        S = "afterLoad",
        k = "load",
        C = "error",
        E = "img",
        I = "src",
        O = "srcset",
        P = "sizes",
        L = "background-image";
      "event" === i.bind || s ? u() : o(e).on(k + "." + l, u);
    }
    function i(i, s) {
      var a = this,
        l = o.extend({}, a.config, s),
        u = {},
        d = l.name + "-" + ++r;
      return (
        (a.config = function (e, n) {
          return n === t ? l[e] : ((l[e] = n), a);
        }),
        (a.addItems = function (e) {
          return u.a && u.a("string" === o.type(e) ? o(e) : e), a;
        }),
        (a.getItems = function () {
          return u.g ? u.g() : {};
        }),
        (a.update = function (e) {
          return u.e && u.e({}, !e), a;
        }),
        (a.force = function (e) {
          return u.f && u.f("string" === o.type(e) ? o(e) : e), a;
        }),
        (a.loadAll = function () {
          return u.e && u.e({ all: !0 }, !0), a;
        }),
        (a.destroy = function () {
          return (
            o(l.appendScroll).off("." + d, u.e), o(e).off("." + d), (u = {}), t
          );
        }),
        n(a, l, i, u, d),
        l.chainable ? i : a
      );
    }
    var o = e.jQuery || e.Zepto,
      r = 0,
      s = !1;
    (o.fn.Lazy = o.fn.lazy =
      function (e) {
        return new i(this, e);
      }),
      (o.Lazy = o.lazy =
        function (e, n, r) {
          if ((o.isFunction(n) && ((r = n), (n = [])), o.isFunction(r))) {
            (e = o.isArray(e) ? e : [e]), (n = o.isArray(n) ? n : [n]);
            for (
              var s = i.prototype.config,
                a = s._f || (s._f = {}),
                l = 0,
                u = e.length;
              l < u;
              l++
            )
              (s[e[l]] === t || o.isFunction(s[e[l]])) && (s[e[l]] = r);
            for (var d = 0, c = n.length; d < c; d++) a[n[d]] = e[0];
          }
        }),
      (i.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: e,
        scrollDirection: "both",
        imageBase: null,
        defaultImage:
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: t,
        afterLoad: t,
        onError: t,
        onFinishedAll: t,
      }),
      o(e).on("load", function () {
        s = !0;
      });
  })(window),
  (function (e) {
    function t(e, t) {
      if (!(e.originalEvent.touches.length > 1)) {
        e.preventDefault();
        var n = e.originalEvent.changedTouches[0],
          i = document.createEvent("MouseEvents");
        i.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          n.screenX,
          n.screenY,
          n.clientX,
          n.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          e.target.dispatchEvent(i);
      }
    }
    if (((e.support.touch = "ontouchend" in document), e.support.touch)) {
      var n,
        i = e.ui.mouse.prototype,
        o = i._mouseInit,
        r = i._mouseDestroy;
      (i._touchStart = function (e) {
        var i = this;
        !n &&
          i._mouseCapture(e.originalEvent.changedTouches[0]) &&
          ((n = !0),
          (i._touchMoved = !1),
          t(e, "mouseover"),
          t(e, "mousemove"),
          t(e, "mousedown"));
      }),
        (i._touchMove = function (e) {
          n && ((this._touchMoved = !0), t(e, "mousemove"));
        }),
        (i._touchEnd = function (e) {
          n &&
            (t(e, "mouseup"),
            t(e, "mouseout"),
            this._touchMoved || t(e, "click"),
            (n = !1));
        }),
        (i._mouseInit = function () {
          var t = this;
          t.element.bind({
            touchstart: e.proxy(t, "_touchStart"),
            touchmove: e.proxy(t, "_touchMove"),
            touchend: e.proxy(t, "_touchEnd"),
          }),
            o.call(t);
        }),
        (i._mouseDestroy = function () {
          var t = this;
          t.element.unbind({
            touchstart: e.proxy(t, "_touchStart"),
            touchmove: e.proxy(t, "_touchMove"),
            touchend: e.proxy(t, "_touchEnd"),
          }),
            r.call(t);
        });
    }
  })(jQuery),
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e(jQuery);
  })(function (e) {
    return (
      e.widget("ui.rotatable", e.ui.mouse, {
        widgetEventPrefix: "rotate",
        options: {
          classes: {},
          create: null,
          distance: 1,
          delay: 0,
          disabled: !1,
          alsoRotate: !1,
          angle: 0,
          handle: !0,
          handleElementSelector: "<div></div>",
          rotationOriginPosition: { top: null, left: null },
          snap: !1,
          snapStep: 22.5,
          rotate: function (e, t) {},
          start: function (e, t) {},
          stop: function (e, t) {},
          wheel: !0,
          wheelStep: 7.5,
        },
        plugins: {},
        handlers: {},
        elementStartAngle: 0,
        elementCurrentAngle: 0,
        elementStopAngle: 0,
        mouseStartAngle: 0,
        isRotating: !1,
        hasRotated: !1,
        _num: function (e) {
          return parseFloat(e) || 0;
        },
        _isNumber: function (e) {
          return !isNaN(parseFloat(e));
        },
        _round: function (e, t) {
          var n = this._num(e),
            i = Math.pow(10, t),
            o = n * i;
          return Math.round(o) / i;
        },
        _mod: function (e, t) {
          return ((e % t) + t) % t;
        },
        _canBeParent: function () {
          return !this.element[0].nodeName.match(
            /^(canvas|textarea|input|select|button|img)$/i
          );
        },
        _enableSelection: function (e) {
          return (
            e.attr("unselectable", "off"),
            e.css("user-select", "auto"),
            e.off(".ui-disableSelection")
          );
        },
        _disableSelection: function (e) {
          e.attr("unselectable", "on"), e.css("user-select", "none");
          var t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return e.on(t + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        },
        _angleInDegrees: function (e) {
          return (180 * e) / Math.PI;
        },
        _calculateSnap: function (e) {
          return Math.round(e / this.options.snapStep) * this.options.snapStep;
        },
        _getElementOffset: function () {
          this._do(0);
          var e = this.element.offset();
          return this._do(this.elementCurrentAngle), e;
        },
        _isRotationOriginPositionGiven: function () {
          return (
            "number" == typeof this.options.rotationOriginPosition.top ||
            "number" == typeof this.options.rotationOriginPosition.left
          );
        },
        _getRotationOriginPositionTop: function () {
          return "number" == typeof this.options.rotationOriginPosition.top
            ? this.options.rotationOriginPosition.top
            : Math.round(this.element.height() / 2);
        },
        _getRotationOriginPositionLeft: function () {
          return "number" == typeof this.options.rotationOriginPosition.left
            ? this.options.rotationOriginPosition.left
            : Math.round(this.element.width() / 2);
        },
        _calculateOrigin: function () {
          var e = this._getElementOffset();
          if (this._isRotationOriginPositionGiven())
            return {
              x: e.left + this._getRotationOriginPositionLeft(),
              y: e.top + this._getRotationOriginPositionTop(),
            };
          var t = this.element.css("transform-origin");
          if ("string" == typeof t) {
            var n = t.match(/([\d.]+)px +([\d.]+)px/);
            if (null !== n)
              return {
                x: e.left + this._num(n[1]),
                y: e.top + this._num(n[2]),
              };
          }
          return {
            x: e.left + Math.round(this.element.width() / 2),
            y: e.top + Math.round(this.element.height() / 2),
          };
        },
        _calculateRotationAngleViaMousePosition: function (e) {
          var t = this._calculateOrigin(),
            n = e.pageX - t.x,
            i = e.pageY - t.y,
            o =
              this._angleInDegrees(Math.atan2(i, n)) -
              this.mouseStartAngle +
              this.elementStartAngle;
          return (
            (this.options.snap || e.shiftKey) && (o = this._calculateSnap(o)),
            this._mod(o, 360)
          );
        },
        _do: function (e) {
          var t = this.element,
            n = t.css("transform");
          if (void 0 !== n) {
            this._isRotationOriginPositionGiven() &&
              t.css(
                "transform-origin",
                this._getRotationOriginPositionLeft() +
                  "px " +
                  this._getRotationOriginPositionTop() +
                  "px"
              );
            var i = "rotate(" + e + "deg) ";
            if ("none" !== n) {
              var o = /matrix\((.*),(.*),(.*),(.*),(.*),(.*)\)/.exec(n);
              if (null !== o) {
                var r = this._num(o[1]),
                  s = this._num(o[2]),
                  a = this._num(o[3]),
                  l = this._num(o[4]),
                  u = this._num(o[5]),
                  d = this._num(o[6]);
                0 !== u &&
                  (i +=
                    0 === d
                      ? "translate(" + u + "px) "
                      : "translate(" + u + "px, " + d + "px) ");
                var c = r * l - s * a,
                  p = null,
                  f = null;
                if (0 !== r || 0 !== s) {
                  var h = this._round(Math.sqrt(r * r + s * s), 5);
                  this._angleInDegrees(
                    s > 0 ? Math.acos(r / h) : -Math.acos(r / h)
                  ),
                    (p = h),
                    (f = this._round(c / h, 5)),
                    (1 === p && 1 === f) ||
                      (i += "scale(" + p + (p === f ? "" : ", " + f) + ") "),
                    0 !== (p = Math.atan((r * a + s * l) / (h * h))) &&
                      (i += "skewX(" + this._angleInDegrees(p) + "deg) ");
                } else if (0 !== a || 0 !== l) {
                  var m = Math.sqrt(a * a + l * l);
                  this._angleInDegrees(
                    Math.PI / 2 -
                      (l > 0 ? Math.acos(-a / m) : -Math.acos(a / m))
                  ),
                    (f = m),
                    (1 == (p = c / m) && 1 === f) ||
                      (i += "scale(" + p + (p === f ? "" : ", " + f) + ") "),
                    0 !== (p = Math.atan((r * a + s * l) / (m * m))) &&
                      (i += "skewY(" + this._angleInDegrees(p) + "deg) ");
                } else i += "scale(0) ";
              }
            }
            t.css("transform", i);
          }
        },
        _create: function () {
          var t = this.options;
          this.element.addClass("ui-rotatable"),
            t.handle && this._placeHandle(),
            (this.handlers = { _mouseWheel: e.proxy(this._mouseWheel, this) }),
            t.wheel && this.element.bind("wheel", this.handlers._mouseWheel),
            this.rotationOriginPosition(t.rotationOriginPosition),
            (this.elementCurrentAngle = this._mod(
              this.options.angle || 0,
              360
            )),
            this._do(this.elementCurrentAngle),
            this._mouseInit();
        },
        _destroy: function () {
          this._mouseDestroy(),
            this.element.removeClass("ui-rotatable"),
            this.element.off("rotatable"),
            this.element.find(".ui-rotatable-handle:first").remove(),
            this.options.wheel &&
              this.element.unbind("wheel", this.handlers._mouseWheel);
        },
        _placeHandle: function () {
          var t = this.options;
          if (this.element && this._canBeParent()) {
            var n = this.element.find(".ui-rotatable-handle:first");
            n.length < 1 &&
              ((n = e(t.handleElementSelector)).addClass("ui-rotatable-handle"),
              n.appendTo(this.element),
              this._disableSelection(n)),
              "absolute" !== n.css("position") && n.css("position", "absolute"),
              n.width() < 1 && n.width(9),
              n.height() < 1 && n.height(9),
              "auto" === n.css("cursor") && n.css("cursor", "grab");
          }
        },
        _getJqHandle: function () {
          return this.options.handle
            ? this.element.find(".ui-rotatable-handle:first")
            : this.element;
        },
        _propagate: function (t, n) {
          e.ui.plugin.call(this, t, [n, this.ui()]),
            "rotate" !== t && this._trigger(t, n, this.ui());
        },
        _setOption: function (e, t) {
          this._super(e, t);
        },
        _mouseCapture: function (e) {
          var t = this.options;
          if (!this.element || this.element.disabled || t.disabled) return !1;
          if (t.handle) {
            var n = this._getJqHandle();
            if (e.target !== n[0]) return !1;
          } else if (e.target !== this.element[0]) return !1;
          return !0;
        },
        _mouseStart: function (e) {
          var t = this._getJqHandle(),
            n = this._calculateOrigin(),
            i = e.pageX - n.x,
            o = e.pageY - n.y;
          return (
            (this.mouseStartAngle = this._angleInDegrees(Math.atan2(o, i))),
            (this.elementStartAngle = this.elementCurrentAngle),
            (this.isRotating = !0),
            (this.hasRotated = !1),
            this.element.addClass("ui-rotatable-rotating"),
            t.length > 0 &&
              "grab" === t.css("cursor") &&
              t.css("cursor", "grabbing"),
            this._propagate("start", e),
            !0
          );
        },
        _mouseDrag: function (e) {
          if (!this.element || this.element.disabled || this.options.disabled)
            return !1;
          var t = this._calculateRotationAngleViaMousePosition(e),
            n = this.elementCurrentAngle;
          if (
            ((this.elementCurrentAngle = t),
            !1 === this._propagate("rotate", e))
          )
            return (this.elementCurrentAngle = n), !1;
          var i = this.ui();
          return !1 === this._trigger("rotate", e, i)
            ? ((this.elementCurrentAngle = n), !1)
            : (i.angle.current !== t &&
                ((t = i.angle.current), (this.elementCurrentAngle = t)),
              this._do(t),
              n !== t && (this.hasRotated = !0),
              !1);
        },
        _mouseStop: function (e) {
          if (!this.element) return !1;
          var t = this._getJqHandle();
          return (
            (this.isRotating = !1),
            (this.elementStopAngle = this.elementCurrentAngle),
            this.element.removeClass("ui-rotatable-rotating"),
            t.length > 0 &&
              "grabbing" === t.css("cursor") &&
              t.css("cursor", "grab"),
            this._propagate("stop", e),
            !1
          );
        },
        _mouseWheel: function (e) {
          if (!this.element || this.element.disabled || this.options.disabled)
            return !1;
          var t = Math.round(
            e.originalEvent.deltaY * this._num(this.options.wheelStep)
          );
          return (
            (this.options.snap || e.shiftKey) && (t = this._calculateSnap(t)),
            (t = this.elementCurrentAngle + t),
            this.angle(t),
            this._trigger("rotate", e, this.ui()),
            !0
          );
        },
        angle: function (e) {
          var t = this.options;
          if (void 0 === e) return t.angle;
          (t.angle = e),
            (this.elementCurrentAngle = this._mod(e, 360)),
            this._do(t.angle);
        },
        handle: function (e) {
          var t = this.options;
          if (void 0 === e) return t.handle;
          (t.handle = e), t.handle && this._placeHandle();
        },
        handleElementSelector: function (e) {
          var t = this.options;
          if (void 0 === e) return t.handleElementSelector;
          (t.handleElementSelector = e), t.handle && this._placeHandle();
        },
        rotationOriginPosition: function (e) {
          var t = this.options;
          if (void 0 === e) return t.rotationOriginPosition;
          "number" == typeof e.top && (t.rotationOriginPosition.top = e.top),
            "number" == typeof e.left &&
              (t.rotationOriginPosition.left = e.left);
        },
        ui: function () {
          return {
            element: this.element,
            angle: {
              start: this.elementStartAngle,
              current: this.elementCurrentAngle,
              stop: this.elementStopAngle,
            },
          };
        },
      }),
      e.ui.plugin.add("rotatable", "alsoRotate", {
        start: function () {
          var t = e(this).rotatable("instance").options;
          e(t.alsoRotate).each(function () {
            e(this).data("ui-rotatable-alsorotate", {});
          });
        },
        rotate: function (t, n) {
          var i = e(this).rotatable("instance").options;
          e(i.alsoRotate).each(function () {
            e(this).data("ui-rotatable-alsorotate");
          });
        },
        stop: function () {
          e(this).removeData("ui-rotatable-alsorotate");
        },
      }),
      e.ui.rotatable,
      e.ui.rotatable
    );
  }),
  (function (e) {
    "function" == typeof define && define.amd && define.amd.jQuery
      ? define(["jquery"], e)
      : e(
          "undefined" != typeof module && module.exports
            ? require("jquery")
            : jQuery
        );
  })(function (e) {
    "use strict";
    function t(t) {
      return (
        !t ||
          void 0 !== t.allowPageScroll ||
          (void 0 === t.swipe && void 0 === t.swipeStatus) ||
          (t.allowPageScroll = d),
        void 0 !== t.click && void 0 === t.tap && (t.tap = t.click),
        t || (t = {}),
        (t = e.extend({}, e.fn.swipe.defaults, t)),
        this.each(function () {
          var i = e(this),
            o = i.data(E);
          o || ((o = new n(this, t)), i.data(E, o));
        })
      );
    }
    function n(t, n) {
      function i(t) {
        if (!(ue() || e(t.target).closest(n.excludedElements, Ue).length > 0)) {
          var i = t.originalEvent ? t.originalEvent : t;
          if (
            !i.pointerType ||
            "mouse" != i.pointerType ||
            0 != n.fallbackToMouseEvents
          ) {
            var o,
              r = i.touches,
              s = r ? r[0] : i;
            return (
              (Ge = b),
              r
                ? (Ye = r.length)
                : !1 !== n.preventDefaultEvents && t.preventDefault(),
              (Fe = 0),
              (Me = null),
              (ze = null),
              (Ne = null),
              (He = 0),
              (Be = 0),
              (je = 0),
              (Re = 1),
              (We = 0),
              (qe = ge()),
              ae(),
              ce(0, s),
              !r || Ye === n.fingers || n.fingers === _ || N()
                ? ((Qe = Se()),
                  2 == Ye &&
                    (ce(1, r[1]), (Be = je = _e(Ve[0].start, Ve[1].start))),
                  (n.swipeStatus || n.pinchStatus) && (o = F(i, Ge)))
                : (o = !1),
              !1 === o
                ? (F(i, (Ge = x)), o)
                : (n.hold &&
                    (tt = setTimeout(
                      e.proxy(function () {
                        Ue.trigger("hold", [i.target]),
                          n.hold && (o = n.hold.call(Ue, i, i.target));
                      }, this),
                      n.longTapThreshold
                    )),
                  de(!0),
                  null)
            );
          }
        }
      }
      function I(e) {
        var t = e.originalEvent ? e.originalEvent : e;
        if (Ge !== A && Ge !== x && !le()) {
          var i,
            o = t.touches,
            r,
            s = pe(o ? o[0] : t);
          if (
            ((Xe = Se()),
            o && (Ye = o.length),
            n.hold && clearTimeout(tt),
            (Ge = T),
            2 == Ye &&
              (0 == Be
                ? (ce(1, o[1]), (Be = je = _e(Ve[0].start, Ve[1].start)))
                : (pe(o[1]),
                  (je = _e(Ve[0].end, Ve[1].end)),
                  (Ne = be(Ve[0].end, Ve[1].end))),
              (Re = we(Be, je)),
              (We = Math.abs(Be - je))),
            Ye === n.fingers || n.fingers === _ || !o || N())
          ) {
            if (
              ((Me = xe(s.start, s.end)),
              R(e, (ze = xe(s.last, s.end))),
              (Fe = Te(s.start, s.end)),
              (He = ye()),
              he(Me, Fe),
              (i = F(t, Ge)),
              !n.triggerOnTouchEnd || n.triggerOnTouchLeave)
            ) {
              var a = !0;
              if (n.triggerOnTouchLeave) {
                var l = ke(this);
                a = Ce(s.end, l);
              }
              !n.triggerOnTouchEnd && a
                ? (Ge = D(T))
                : n.triggerOnTouchLeave && !a && (Ge = D(A)),
                (Ge != x && Ge != A) || F(t, Ge);
            }
          } else F(t, (Ge = x));
          !1 === i && F(t, (Ge = x));
        }
      }
      function O(e) {
        var t = e.originalEvent ? e.originalEvent : e,
          i = t.touches;
        if (i) {
          if (i.length && !le()) return se(t), !0;
          if (i.length && le()) return !0;
        }
        return (
          le() && (Ye = Ke),
          (Xe = Se()),
          (He = ye()),
          H() || !z()
            ? F(t, (Ge = x))
            : n.triggerOnTouchEnd || (!1 === n.triggerOnTouchEnd && Ge === T)
            ? (!1 !== n.preventDefaultEvents && e.preventDefault(),
              F(t, (Ge = A)))
            : !n.triggerOnTouchEnd && X()
            ? M(t, (Ge = A), h)
            : Ge === T && F(t, (Ge = x)),
          de(!1),
          null
        );
      }
      function P() {
        (Ye = 0),
          (Xe = 0),
          (Qe = 0),
          (Be = 0),
          (je = 0),
          (Re = 1),
          ae(),
          de(!1);
      }
      function L(e) {
        var t = e.originalEvent ? e.originalEvent : e;
        n.triggerOnTouchLeave && F(t, (Ge = D(A)));
      }
      function $() {
        Ue.unbind(Oe, i),
          Ue.unbind(De, P),
          Ue.unbind(Pe, I),
          Ue.unbind(Le, O),
          $e && Ue.unbind($e, L),
          de(!1);
      }
      function D(e) {
        var t = e,
          i = j(),
          o = z(),
          r = H();
        return (
          !i || r
            ? (t = x)
            : !o || e != T || (n.triggerOnTouchEnd && !n.triggerOnTouchLeave)
            ? !o && e == A && n.triggerOnTouchLeave && (t = x)
            : (t = A),
          t
        );
      }
      function F(e, t) {
        var n,
          i = e.touches;
        return (
          (Y() || G()) && (n = M(e, t, p)),
          (q() || N()) && !1 !== n && (n = M(e, t, f)),
          oe() && !1 !== n
            ? (n = M(e, t, m))
            : re() && !1 !== n
            ? (n = M(e, t, g))
            : ie() && !1 !== n && (n = M(e, t, h)),
          t === x && P(e),
          t === A && ((i && i.length) || P(e)),
          n
        );
      }
      function M(t, i, d) {
        var c;
        if (d == p) {
          if (
            (Ue.trigger("swipeStatus", [
              i,
              Me || null,
              Fe || 0,
              He || 0,
              Ye,
              Ve,
              ze,
            ]),
            n.swipeStatus &&
              !1 ===
                (c = n.swipeStatus.call(
                  Ue,
                  t,
                  i,
                  Me || null,
                  Fe || 0,
                  He || 0,
                  Ye,
                  Ve,
                  ze
                )))
          )
            return !1;
          if (i == A && U()) {
            if (
              (clearTimeout(et),
              clearTimeout(tt),
              Ue.trigger("swipe", [Me, Fe, He, Ye, Ve, ze]),
              n.swipe &&
                !1 === (c = n.swipe.call(Ue, t, Me, Fe, He, Ye, Ve, ze)))
            )
              return !1;
            switch (Me) {
              case o:
                Ue.trigger("swipeLeft", [Me, Fe, He, Ye, Ve, ze]),
                  n.swipeLeft &&
                    (c = n.swipeLeft.call(Ue, t, Me, Fe, He, Ye, Ve, ze));
                break;
              case r:
                Ue.trigger("swipeRight", [Me, Fe, He, Ye, Ve, ze]),
                  n.swipeRight &&
                    (c = n.swipeRight.call(Ue, t, Me, Fe, He, Ye, Ve, ze));
                break;
              case s:
                Ue.trigger("swipeUp", [Me, Fe, He, Ye, Ve, ze]),
                  n.swipeUp &&
                    (c = n.swipeUp.call(Ue, t, Me, Fe, He, Ye, Ve, ze));
                break;
              case a:
                Ue.trigger("swipeDown", [Me, Fe, He, Ye, Ve, ze]),
                  n.swipeDown &&
                    (c = n.swipeDown.call(Ue, t, Me, Fe, He, Ye, Ve, ze));
            }
          }
        }
        if (d == f) {
          if (
            (Ue.trigger("pinchStatus", [
              i,
              Ne || null,
              We || 0,
              He || 0,
              Ye,
              Re,
              Ve,
            ]),
            n.pinchStatus &&
              !1 ===
                (c = n.pinchStatus.call(
                  Ue,
                  t,
                  i,
                  Ne || null,
                  We || 0,
                  He || 0,
                  Ye,
                  Re,
                  Ve
                )))
          )
            return !1;
          if (i == A && W())
            switch (Ne) {
              case l:
                Ue.trigger("pinchIn", [
                  Ne || null,
                  We || 0,
                  He || 0,
                  Ye,
                  Re,
                  Ve,
                ]),
                  n.pinchIn &&
                    (c = n.pinchIn.call(
                      Ue,
                      t,
                      Ne || null,
                      We || 0,
                      He || 0,
                      Ye,
                      Re,
                      Ve
                    ));
                break;
              case u:
                Ue.trigger("pinchOut", [
                  Ne || null,
                  We || 0,
                  He || 0,
                  Ye,
                  Re,
                  Ve,
                ]),
                  n.pinchOut &&
                    (c = n.pinchOut.call(
                      Ue,
                      t,
                      Ne || null,
                      We || 0,
                      He || 0,
                      Ye,
                      Re,
                      Ve
                    ));
            }
        }
        return (
          d == h
            ? (i !== x && i !== A) ||
              (clearTimeout(et),
              clearTimeout(tt),
              Z() && !ee()
                ? ((Je = Se()),
                  (et = setTimeout(
                    e.proxy(function () {
                      (Je = null),
                        Ue.trigger("tap", [t.target]),
                        n.tap && (c = n.tap.call(Ue, t, t.target));
                    }, this),
                    n.doubleTapThreshold
                  )))
                : ((Je = null),
                  Ue.trigger("tap", [t.target]),
                  n.tap && (c = n.tap.call(Ue, t, t.target))))
            : d == m
            ? (i !== x && i !== A) ||
              (clearTimeout(et),
              clearTimeout(tt),
              (Je = null),
              Ue.trigger("doubletap", [t.target]),
              n.doubleTap && (c = n.doubleTap.call(Ue, t, t.target)))
            : d == g &&
              ((i !== x && i !== A) ||
                (clearTimeout(et),
                (Je = null),
                Ue.trigger("longtap", [t.target]),
                n.longTap && (c = n.longTap.call(Ue, t, t.target)))),
          c
        );
      }
      function z() {
        var e = !0;
        return null !== n.threshold && (e = Fe >= n.threshold), e;
      }
      function H() {
        var e = !1;
        return (
          null !== n.cancelThreshold &&
            null !== Me &&
            (e = me(Me) - Fe >= n.cancelThreshold),
          e
        );
      }
      function B() {
        return null === n.pinchThreshold || We >= n.pinchThreshold;
      }
      function j() {
        var e;
        return !n.maxTimeThreshold || !(He >= n.maxTimeThreshold);
      }
      function R(e, t) {
        if (!1 !== n.preventDefaultEvents)
          if (n.allowPageScroll === d) e.preventDefault();
          else {
            var i = n.allowPageScroll === c;
            switch (t) {
              case o:
                ((n.swipeLeft && i) || (!i && n.allowPageScroll != v)) &&
                  e.preventDefault();
                break;
              case r:
                ((n.swipeRight && i) || (!i && n.allowPageScroll != v)) &&
                  e.preventDefault();
                break;
              case s:
                ((n.swipeUp && i) || (!i && n.allowPageScroll != y)) &&
                  e.preventDefault();
                break;
              case a:
                ((n.swipeDown && i) || (!i && n.allowPageScroll != y)) &&
                  e.preventDefault();
            }
          }
      }
      function W() {
        var e = V(),
          t = Q(),
          n = B();
        return e && t && n;
      }
      function N() {
        return !!(n.pinchStatus || n.pinchIn || n.pinchOut);
      }
      function q() {
        return !(!W() || !N());
      }
      function U() {
        var e = j(),
          t = z(),
          n = V(),
          i = Q(),
          o,
          r;
        return !H() && i && n && t && e;
      }
      function G() {
        return !!(
          n.swipe ||
          n.swipeStatus ||
          n.swipeLeft ||
          n.swipeRight ||
          n.swipeUp ||
          n.swipeDown
        );
      }
      function Y() {
        return !(!U() || !G());
      }
      function V() {
        return Ye === n.fingers || n.fingers === _ || !S;
      }
      function Q() {
        return 0 !== Ve[0].end.x;
      }
      function X() {
        return !!n.tap;
      }
      function Z() {
        return !!n.doubleTap;
      }
      function K() {
        return !!n.longTap;
      }
      function J() {
        if (null == Je) return !1;
        var e = Se();
        return Z() && e - Je <= n.doubleTapThreshold;
      }
      function ee() {
        return J();
      }
      function te() {
        return (1 === Ye || !S) && (isNaN(Fe) || Fe < n.threshold);
      }
      function ne() {
        return He > n.longTapThreshold && w > Fe;
      }
      function ie() {
        return !(!te() || !X());
      }
      function oe() {
        return !(!J() || !Z());
      }
      function re() {
        return !(!ne() || !K());
      }
      function se(e) {
        (Ze = Se()), (Ke = e.touches.length + 1);
      }
      function ae() {
        (Ze = 0), (Ke = 0);
      }
      function le() {
        var e = !1,
          t;
        Ze && Se() - Ze <= n.fingerReleaseThreshold && (e = !0);
        return e;
      }
      function ue() {
        return !(!0 !== Ue.data(E + "_intouch"));
      }
      function de(e) {
        Ue &&
          (!0 === e
            ? (Ue.bind(Pe, I), Ue.bind(Le, O), $e && Ue.bind($e, L))
            : (Ue.unbind(Pe, I, !1),
              Ue.unbind(Le, O, !1),
              $e && Ue.unbind($e, L, !1)),
          Ue.data(E + "_intouch", !0 === e));
      }
      function ce(e, t) {
        var n = {
          start: { x: 0, y: 0 },
          last: { x: 0, y: 0 },
          end: { x: 0, y: 0 },
        };
        return (
          (n.start.x = n.last.x = n.end.x = t.pageX || t.clientX),
          (n.start.y = n.last.y = n.end.y = t.pageY || t.clientY),
          (Ve[e] = n),
          n
        );
      }
      function pe(e) {
        var t = void 0 !== e.identifier ? e.identifier : 0,
          n = fe(t);
        return (
          null === n && (n = ce(t, e)),
          (n.last.x = n.end.x),
          (n.last.y = n.end.y),
          (n.end.x = e.pageX || e.clientX),
          (n.end.y = e.pageY || e.clientY),
          n
        );
      }
      function fe(e) {
        return Ve[e] || null;
      }
      function he(e, t) {
        e != d && ((t = Math.max(t, me(e))), (qe[e].distance = t));
      }
      function me(e) {
        return qe[e] ? qe[e].distance : void 0;
      }
      function ge() {
        var e = {};
        return (
          (e[o] = ve(o)), (e[r] = ve(r)), (e[s] = ve(s)), (e[a] = ve(a)), e
        );
      }
      function ve(e) {
        return { direction: e, distance: 0 };
      }
      function ye() {
        return Xe - Qe;
      }
      function _e(e, t) {
        var n = Math.abs(e.x - t.x),
          i = Math.abs(e.y - t.y);
        return Math.round(Math.sqrt(n * n + i * i));
      }
      function we(e, t) {
        var n;
        return ((t / e) * 1).toFixed(2);
      }
      function be() {
        return 1 > Re ? u : l;
      }
      function Te(e, t) {
        return Math.round(
          Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        );
      }
      function Ae(e, t) {
        var n = e.x - t.x,
          i = t.y - e.y,
          o = Math.atan2(i, n),
          r = Math.round((180 * o) / Math.PI);
        return 0 > r && (r = 360 - Math.abs(r)), r;
      }
      function xe(e, t) {
        if (Ee(e, t)) return d;
        var n = Ae(e, t);
        return 45 >= n && n >= 0
          ? o
          : 360 >= n && n >= 315
          ? o
          : n >= 135 && 225 >= n
          ? r
          : n > 45 && 135 > n
          ? a
          : s;
      }
      function Se() {
        var e;
        return new Date().getTime();
      }
      function ke(t) {
        var n = (t = e(t)).offset(),
          i;
        return {
          left: n.left,
          right: n.left + t.outerWidth(),
          top: n.top,
          bottom: n.top + t.outerHeight(),
        };
      }
      function Ce(e, t) {
        return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom;
      }
      function Ee(e, t) {
        return e.x == t.x && e.y == t.y;
      }
      var n = e.extend({}, n),
        Ie = S || C || !n.fallbackToMouseEvents,
        Oe = Ie
          ? C
            ? k
              ? "MSPointerDown"
              : "pointerdown"
            : "touchstart"
          : "mousedown",
        Pe = Ie
          ? C
            ? k
              ? "MSPointerMove"
              : "pointermove"
            : "touchmove"
          : "mousemove",
        Le = Ie
          ? C
            ? k
              ? "MSPointerUp"
              : "pointerup"
            : "touchend"
          : "mouseup",
        $e = Ie ? (C ? "mouseleave" : null) : "mouseleave",
        De = C ? (k ? "MSPointerCancel" : "pointercancel") : "touchcancel",
        Fe = 0,
        Me = null,
        ze = null,
        He = 0,
        Be = 0,
        je = 0,
        Re = 1,
        We = 0,
        Ne = 0,
        qe = null,
        Ue = e(t),
        Ge = "start",
        Ye = 0,
        Ve = {},
        Qe = 0,
        Xe = 0,
        Ze = 0,
        Ke = 0,
        Je = 0,
        et = null,
        tt = null;
      try {
        Ue.bind(Oe, i), Ue.bind(De, P);
      } catch (t) {
        e.error("events not supported " + Oe + "," + De + " on jQuery.swipe");
      }
      (this.enable = function () {
        return this.disable(), Ue.bind(Oe, i), Ue.bind(De, P), Ue;
      }),
        (this.disable = function () {
          return $(), Ue;
        }),
        (this.destroy = function () {
          $(), Ue.data(E, null), (Ue = null);
        }),
        (this.option = function (t, i) {
          if ("object" == typeof t) n = e.extend(n, t);
          else if (void 0 !== n[t]) {
            if (void 0 === i) return n[t];
            n[t] = i;
          } else {
            if (!t) return n;
            e.error("Option " + t + " does not exist on jQuery.swipe.options");
          }
          return null;
        });
    }
    var i = "1.6.18",
      o = "left",
      r = "right",
      s = "up",
      a = "down",
      l = "in",
      u = "out",
      d = "none",
      c = "auto",
      p = "swipe",
      f = "pinch",
      h = "tap",
      m = "doubletap",
      g = "longtap",
      v = "horizontal",
      y = "vertical",
      _ = "all",
      w = 10,
      b = "start",
      T = "move",
      A = "end",
      x = "cancel",
      S = "ontouchstart" in window,
      k =
        window.navigator.msPointerEnabled &&
        !window.navigator.pointerEnabled &&
        !S,
      C =
        (window.navigator.pointerEnabled ||
          window.navigator.msPointerEnabled) &&
        !S,
      E = "TouchSwipe",
      I = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: ".noSwipe",
        preventDefaultEvents: !0,
      };
    (e.fn.swipe = function (n) {
      var i = e(this),
        o = i.data(E);
      if (o && "string" == typeof n) {
        if (o[n])
          return o[n].apply(o, Array.prototype.slice.call(arguments, 1));
        e.error("Method " + n + " does not exist on jQuery.swipe");
      } else if (o && "object" == typeof n) o.option.apply(o, arguments);
      else if (!(o || ("object" != typeof n && n)))
        return t.apply(this, arguments);
      return i;
    }),
      (e.fn.swipe.version = i),
      (e.fn.swipe.defaults = I),
      (e.fn.swipe.phases = {
        PHASE_START: b,
        PHASE_MOVE: T,
        PHASE_END: A,
        PHASE_CANCEL: x,
      }),
      (e.fn.swipe.directions = {
        LEFT: o,
        RIGHT: r,
        UP: s,
        DOWN: a,
        IN: l,
        OUT: u,
      }),
      (e.fn.swipe.pageScroll = {
        NONE: d,
        HORIZONTAL: v,
        VERTICAL: y,
        AUTO: c,
      }),
      (e.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: _,
      });
  }),
  (function (e) {
    e.fn.slidingPanel = function (t) {
      function n() {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      }
      function i() {
        if (a.hasClass(c + "-is-animating")) return !1;
        "function" == typeof r.onOpenBefore && r.onOpenBefore.call(this),
          (f = s.scrollTop()),
          l.css({ top: -f + "px" }),
          a.addClass(c + "-is-animating"),
          u.attr("aria-expanded", "true"),
          setTimeout(function () {
            a.addClass(c + "-is-animating-in");
          }, 10),
          setTimeout(function () {
            a
              .removeClass(c + "-is-animating " + c + "-is-animating-in")
              .addClass(c + "-is-open"),
              "function" == typeof r.onOpenAfter && r.onOpenAfter.call(this);
          }, r.transitionDurationOnOpen);
      }
      function o() {
        if (a.hasClass(c + "-is-animating")) return !1;
        "function" == typeof r.onCloseBefore && r.onCloseBefore.call(this),
          a.removeClass(c + "-is-open").addClass(c + "-is-animating"),
          u.attr("aria-expanded", "false"),
          setTimeout(function () {
            a.addClass(c + "-is-animating-out");
          }, 10),
          setTimeout(function () {
            a.removeClass(c + "-is-animating " + c + "-is-animating-out"),
              l.css({ top: "" }),
              s.scrollTop(f),
              "function" == typeof r.onCloseAfter && r.onCloseAfter.call(this);
          }, r.transitionDurationOnClose);
      }
      var r = e.extend(
        {
          addBackgroundOverlay: !0,
          addCloseButton: !0,
          appearFrom: "left",
          btnOpenSlidingPanel: ".btn-open-sliding-panel",
          closeButtonContent: "",
          closeOnEsc: !0,
          closeOnOverlay: !0,
          closeOnSwipe: !0,
          contentToClone: null,
          transitionDurationOnOpen: 200,
          transitionDurationOnClose: 200,
          onOpenBefore: function () {},
          onOpenAfter: function () {},
          onCloseBefore: function () {},
          onCloseAfter: function () {},
        },
        t
      );
      (this.open = function () {
        i();
      }),
        (this.close = function () {
          o();
        });
      var s = e(window),
        a = e("body"),
        l = e("#site-wrapper"),
        u = e(r.btnOpenSlidingPanel),
        d = this,
        c = this.attr("id"),
        p = this.find(".sliding-panel-overflow"),
        f = s.scrollTop();
      if (
        (p.attr("id", c + "-overflow"),
        r.addCloseButton &&
          this.append(
            '<button type="button" class="btn btn-default btn-close-' +
              c +
              '">' +
              r.closeButtonContent +
              "</button>"
          ),
        r.contentToClone && p.append(r.contentToClone.clone()),
        "" !== r.appearFrom &&
          ("right" === r.appearFrom
            ? this.addClass("appear-from-right")
            : "left" === r.appearFrom && this.addClass("appear-from-left")),
        r.addBackgroundOverlay &&
          !e("#" + c + "-overlay").length &&
          l.append('<div id="' + c + '-overlay"><br></div>'),
        n())
      ) {
        var h = 0,
          m = document.getElementById(c + "-overflow");
        m.addEventListener(
          "touchstart",
          function (e) {
            h = this.scrollTop + e.touches[0].pageY;
          },
          !1
        ),
          m.addEventListener(
            "touchmove",
            function (e) {
              this.scrollTop = h - e.touches[0].pageY;
            },
            !1
          );
      }
      return (
        a.on("click touchstart", r.btnOpenSlidingPanel, function (t) {
          if (
            (t.stopPropagation(),
            e(r.btnOpenSlidingPanel).is(":button") || t.preventDefault(),
            !0 === t.handled || a.hasClass(c + "-is-open"))
          )
            return !1;
          i(), (t.handled = !0);
        }),
        a.on("click touchstart", ".btn-close-" + c, function (t) {
          if (
            (t.stopPropagation(),
            e(".btn-close-" + c).is(":button") || t.preventDefault(),
            !0 === t.handled || !a.hasClass(c + "-is-open"))
          )
            return !1;
          o(), (t.handled = !0);
        }),
        r.closeOnOverlay &&
          a.on("click touchstart", "#" + c + "-overlay", function (e) {
            if (
              (e.stopPropagation(),
              !0 === e.handled || !a.hasClass(c + "-is-open"))
            )
              return !1;
            o(), (e.handled = !0);
          }),
        r.closeOnEsc &&
          e(document).keyup(function (e) {
            27 === e.keyCode && a.hasClass(c + "-is-open") && o();
          }),
        r.closeOnSwipe &&
          this.swipe({
            swipe: function (e, t) {
              a.hasClass(c + "-is-open") &&
                ("right" === r.appearFrom && "right" === t
                  ? o()
                  : "left" === r.appearFrom && "left" === t && o());
            },
            preventDefaultEvents: !1,
          }),
        this
      );
    };
  })(jQuery),
  (function () {
    "use strict";
    var e = function () {
      this.init();
    };
    e.prototype = {
      init: function () {
        var e = this || t;
        return (
          (e._counter = 1e3),
          (e._html5AudioPool = []),
          (e.html5PoolSize = 10),
          (e._codecs = {}),
          (e._howls = []),
          (e._muted = !1),
          (e._volume = 1),
          (e._canPlayEvent = "canplaythrough"),
          (e._navigator =
            "undefined" != typeof window && window.navigator
              ? window.navigator
              : null),
          (e.masterGain = null),
          (e.noAudio = !1),
          (e.usingWebAudio = !0),
          (e.autoSuspend = !0),
          (e.ctx = null),
          (e.autoUnlock = !0),
          e._setup(),
          e
        );
      },
      volume: function (e) {
        var n = this || t;
        if (
          ((e = parseFloat(e)), n.ctx || u(), void 0 !== e && e >= 0 && e <= 1)
        ) {
          if (((n._volume = e), n._muted)) return n;
          n.usingWebAudio &&
            n.masterGain.gain.setValueAtTime(e, t.ctx.currentTime);
          for (var i = 0; i < n._howls.length; i++)
            if (!n._howls[i]._webAudio)
              for (
                var o = n._howls[i]._getSoundIds(), r = 0;
                r < o.length;
                r++
              ) {
                var s = n._howls[i]._soundById(o[r]);
                s && s._node && (s._node.volume = s._volume * e);
              }
          return n;
        }
        return n._volume;
      },
      mute: function (e) {
        var n = this || t;
        n.ctx || u(),
          (n._muted = e),
          n.usingWebAudio &&
            n.masterGain.gain.setValueAtTime(
              e ? 0 : n._volume,
              t.ctx.currentTime
            );
        for (var i = 0; i < n._howls.length; i++)
          if (!n._howls[i]._webAudio)
            for (var o = n._howls[i]._getSoundIds(), r = 0; r < o.length; r++) {
              var s = n._howls[i]._soundById(o[r]);
              s && s._node && (s._node.muted = !!e || s._muted);
            }
        return n;
      },
      unload: function () {
        for (var e = this || t, n = e._howls.length - 1; n >= 0; n--)
          e._howls[n].unload();
        return (
          e.usingWebAudio &&
            e.ctx &&
            void 0 !== e.ctx.close &&
            (e.ctx.close(), (e.ctx = null), u()),
          e
        );
      },
      codecs: function (e) {
        return (this || t)._codecs[e.replace(/^x-/, "")];
      },
      _setup: function () {
        var e = this || t;
        if (
          ((e.state = (e.ctx && e.ctx.state) || "suspended"),
          e._autoSuspend(),
          !e.usingWebAudio)
        )
          if ("undefined" != typeof Audio)
            try {
              var n;
              void 0 === (n = new Audio()).oncanplaythrough &&
                (e._canPlayEvent = "canplay");
            } catch (t) {
              e.noAudio = !0;
            }
          else e.noAudio = !0;
        try {
          var n;
          (n = new Audio()).muted && (e.noAudio = !0);
        } catch (e) {}
        return e.noAudio || e._setupCodecs(), e;
      },
      _setupCodecs: function () {
        var e = this || t,
          n = null;
        try {
          n = "undefined" != typeof Audio ? new Audio() : null;
        } catch (t) {
          return e;
        }
        if (!n || "function" != typeof n.canPlayType) return e;
        var i = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          o = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
          r = o && parseInt(o[0].split("/")[1], 10) < 33;
        return (
          (e._codecs = {
            mp3: !(
              r ||
              (!i && !n.canPlayType("audio/mp3;").replace(/^no$/, ""))
            ),
            mpeg: !!i,
            opus: !!n
              .canPlayType('audio/ogg; codecs="opus"')
              .replace(/^no$/, ""),
            ogg: !!n
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            oga: !!n
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              n.canPlayType("audio/x-m4a;") ||
              n.canPlayType("audio/m4a;") ||
              n.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              n.canPlayType("audio/x-mp4;") ||
              n.canPlayType("audio/mp4;") ||
              n.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !!n
              .canPlayType('audio/webm; codecs="vorbis"')
              .replace(/^no$/, ""),
            webm: !!n
              .canPlayType('audio/webm; codecs="vorbis"')
              .replace(/^no$/, ""),
            dolby: !!n
              .canPlayType('audio/mp4; codecs="ec-3"')
              .replace(/^no$/, ""),
            flac: !!(
              n.canPlayType("audio/x-flac;") || n.canPlayType("audio/flac;")
            ).replace(/^no$/, ""),
          }),
          e
        );
      },
      _unlockAudio: function () {
        var e = this || t;
        if (!e._audioUnlocked && e.ctx) {
          (e._audioUnlocked = !1),
            (e.autoUnlock = !1),
            e._mobileUnloaded ||
              44100 === e.ctx.sampleRate ||
              ((e._mobileUnloaded = !0), e.unload()),
            (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
          var n = function (t) {
            for (var i = 0; i < e.html5PoolSize; i++)
              try {
                var o = new Audio();
                (o._unlocked = !0), e._releaseHtml5Audio(o);
              } catch (t) {
                e.noAudio = !0;
              }
            for (var i = 0; i < e._howls.length; i++)
              if (!e._howls[i]._webAudio)
                for (
                  var r = e._howls[i]._getSoundIds(), s = 0;
                  s < r.length;
                  s++
                ) {
                  var a = e._howls[i]._soundById(r[s]);
                  a &&
                    a._node &&
                    !a._node._unlocked &&
                    ((a._node._unlocked = !0), a._node.load());
                }
            e._autoResume();
            var l = e.ctx.createBufferSource();
            (l.buffer = e._scratchBuffer),
              l.connect(e.ctx.destination),
              void 0 === l.start ? l.noteOn(0) : l.start(0),
              "function" == typeof e.ctx.resume && e.ctx.resume(),
              (l.onended = function () {
                l.disconnect(0),
                  (e._audioUnlocked = !0),
                  document.removeEventListener("touchstart", n, !0),
                  document.removeEventListener("touchend", n, !0),
                  document.removeEventListener("click", n, !0);
                for (var t = 0; t < e._howls.length; t++)
                  e._howls[t]._emit("unlock");
              });
          };
          return (
            document.addEventListener("touchstart", n, !0),
            document.addEventListener("touchend", n, !0),
            document.addEventListener("click", n, !0),
            e
          );
        }
      },
      _obtainHtml5Audio: function () {
        var e = this || t;
        if (e._html5AudioPool.length) return e._html5AudioPool.pop();
        var n = new Audio().play();
        return (
          n &&
            "undefined" != typeof Promise &&
            (n instanceof Promise || "function" == typeof n.then) &&
            n.catch(function () {
              console.warn(
                "HTML5 Audio pool exhausted, returning potentially locked audio object."
              );
            }),
          new Audio()
        );
      },
      _releaseHtml5Audio: function (e) {
        var n = this || t;
        return e._unlocked && n._html5AudioPool.push(e), n;
      },
      _autoSuspend: function () {
        var e = this;
        if (
          e.autoSuspend &&
          e.ctx &&
          void 0 !== e.ctx.suspend &&
          t.usingWebAudio
        ) {
          for (var n = 0; n < e._howls.length; n++)
            if (e._howls[n]._webAudio)
              for (var i = 0; i < e._howls[n]._sounds.length; i++)
                if (!e._howls[n]._sounds[i]._paused) return e;
          return (
            e._suspendTimer && clearTimeout(e._suspendTimer),
            (e._suspendTimer = setTimeout(function () {
              e.autoSuspend &&
                ((e._suspendTimer = null),
                (e.state = "suspending"),
                e.ctx.suspend().then(function () {
                  (e.state = "suspended"),
                    e._resumeAfterSuspend &&
                      (delete e._resumeAfterSuspend, e._autoResume());
                }));
            }, 3e4)),
            e
          );
        }
      },
      _autoResume: function () {
        var e = this;
        if (e.ctx && void 0 !== e.ctx.resume && t.usingWebAudio)
          return (
            "running" === e.state && e._suspendTimer
              ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
              : "suspended" === e.state
              ? (e.ctx.resume().then(function () {
                  e.state = "running";
                  for (var t = 0; t < e._howls.length; t++)
                    e._howls[t]._emit("resume");
                }),
                e._suspendTimer &&
                  (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
              : "suspending" === e.state && (e._resumeAfterSuspend = !0),
            e
          );
      },
    };
    var t = new e(),
      n = function (e) {
        var t = this;
        e.src && 0 !== e.src.length
          ? t.init(e)
          : console.error(
              "An array of source files must be passed with any new Howl."
            );
      };
    n.prototype = {
      init: function (e) {
        var n = this;
        return (
          t.ctx || u(),
          (n._autoplay = e.autoplay || !1),
          (n._format = "string" != typeof e.format ? e.format : [e.format]),
          (n._html5 = e.html5 || !1),
          (n._muted = e.mute || !1),
          (n._loop = e.loop || !1),
          (n._pool = e.pool || 5),
          (n._preload = "boolean" != typeof e.preload || e.preload),
          (n._rate = e.rate || 1),
          (n._sprite = e.sprite || {}),
          (n._src = "string" != typeof e.src ? e.src : [e.src]),
          (n._volume = void 0 !== e.volume ? e.volume : 1),
          (n._xhrWithCredentials = e.xhrWithCredentials || !1),
          (n._duration = 0),
          (n._state = "unloaded"),
          (n._sounds = []),
          (n._endTimers = {}),
          (n._queue = []),
          (n._playLock = !1),
          (n._onend = e.onend ? [{ fn: e.onend }] : []),
          (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
          (n._onload = e.onload ? [{ fn: e.onload }] : []),
          (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
          (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
          (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
          (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
          (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
          (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
          (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
          (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
          (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
          (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
          (n._onresume = []),
          (n._webAudio = t.usingWebAudio && !n._html5),
          void 0 !== t.ctx && t.ctx && t.autoUnlock && t._unlockAudio(),
          t._howls.push(n),
          n._autoplay &&
            n._queue.push({
              event: "play",
              action: function () {
                n.play();
              },
            }),
          n._preload && n.load(),
          n
        );
      },
      load: function () {
        var e = this,
          n = null;
        if (!t.noAudio) {
          "string" == typeof e._src && (e._src = [e._src]);
          for (var o = 0; o < e._src.length; o++) {
            var s, a;
            if (e._format && e._format[o]) s = e._format[o];
            else {
              if ("string" != typeof (a = e._src[o])) {
                e._emit(
                  "loaderror",
                  null,
                  "Non-string found in selected audio sources - ignoring."
                );
                continue;
              }
              (s = /^data:audio\/([^;,]+);/i.exec(a)) ||
                (s = /\.([^.]+)$/.exec(a.split("?", 1)[0])),
                s && (s = s[1].toLowerCase());
            }
            if (
              (s ||
                console.warn(
                  'No file extension was found. Consider using the "format" property or specify an extension.'
                ),
              s && t.codecs(s))
            ) {
              n = e._src[o];
              break;
            }
          }
          return n
            ? ((e._src = n),
              (e._state = "loading"),
              "https:" === window.location.protocol &&
                "http:" === n.slice(0, 5) &&
                ((e._html5 = !0), (e._webAudio = !1)),
              new i(e),
              e._webAudio && r(e),
              e)
            : void e._emit(
                "loaderror",
                null,
                "No codec support for selected audio sources."
              );
        }
        e._emit("loaderror", null, "No audio support.");
      },
      play: function (e, n) {
        var i = this,
          o = null;
        if ("number" == typeof e) (o = e), (e = null);
        else {
          if ("string" == typeof e && "loaded" === i._state && !i._sprite[e])
            return null;
          if (void 0 === e && ((e = "__default"), !i._playLock)) {
            for (var r = 0, s = 0; s < i._sounds.length; s++)
              i._sounds[s]._paused &&
                !i._sounds[s]._ended &&
                (r++, (o = i._sounds[s]._id));
            1 === r ? (e = null) : (o = null);
          }
        }
        var a = o ? i._soundById(o) : i._inactiveSound();
        if (!a) return null;
        if (
          (o && !e && (e = a._sprite || "__default"), "loaded" !== i._state)
        ) {
          (a._sprite = e), (a._ended = !1);
          var l = a._id;
          return (
            i._queue.push({
              event: "play",
              action: function () {
                i.play(l);
              },
            }),
            l
          );
        }
        if (o && !a._paused) return n || i._loadQueue("play"), a._id;
        i._webAudio && t._autoResume();
        var u = Math.max(0, a._seek > 0 ? a._seek : i._sprite[e][0] / 1e3),
          d = Math.max(0, (i._sprite[e][0] + i._sprite[e][1]) / 1e3 - u),
          c = (1e3 * d) / Math.abs(a._rate),
          p = i._sprite[e][0] / 1e3,
          f = (i._sprite[e][0] + i._sprite[e][1]) / 1e3;
        (a._sprite = e), (a._ended = !1);
        var h = function () {
          (a._paused = !1),
            (a._seek = u),
            (a._start = p),
            (a._stop = f),
            (a._loop = !(!a._loop && !i._sprite[e][2]));
        };
        if (!(u >= f)) {
          var m = a._node;
          if (i._webAudio) {
            var g = function () {
              (i._playLock = !1), h(), i._refreshBuffer(a);
              var e = a._muted || i._muted ? 0 : a._volume;
              m.gain.setValueAtTime(e, t.ctx.currentTime),
                (a._playStart = t.ctx.currentTime),
                void 0 === m.bufferSource.start
                  ? a._loop
                    ? m.bufferSource.noteGrainOn(0, u, 86400)
                    : m.bufferSource.noteGrainOn(0, u, d)
                  : a._loop
                  ? m.bufferSource.start(0, u, 86400)
                  : m.bufferSource.start(0, u, d),
                c !== 1 / 0 &&
                  (i._endTimers[a._id] = setTimeout(i._ended.bind(i, a), c)),
                n ||
                  setTimeout(function () {
                    i._emit("play", a._id), i._loadQueue();
                  }, 0);
            };
            "running" === t.state
              ? g()
              : ((i._playLock = !0), i.once("resume", g), i._clearTimer(a._id));
          } else {
            var v = function () {
              (m.currentTime = u),
                (m.muted = a._muted || i._muted || t._muted || m.muted),
                (m.volume = a._volume * t.volume()),
                (m.playbackRate = a._rate);
              try {
                var o = m.play();
                if (
                  (o &&
                  "undefined" != typeof Promise &&
                  (o instanceof Promise || "function" == typeof o.then)
                    ? ((i._playLock = !0),
                      h(),
                      o
                        .then(function () {
                          (i._playLock = !1),
                            (m._unlocked = !0),
                            n || (i._emit("play", a._id), i._loadQueue());
                        })
                        .catch(function () {
                          (i._playLock = !1),
                            i._emit(
                              "playerror",
                              a._id,
                              "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                            ),
                            (a._ended = !0),
                            (a._paused = !0);
                        }))
                    : n ||
                      ((i._playLock = !1),
                      h(),
                      i._emit("play", a._id),
                      i._loadQueue()),
                  (m.playbackRate = a._rate),
                  m.paused)
                )
                  return void i._emit(
                    "playerror",
                    a._id,
                    "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                  );
                "__default" !== e || a._loop
                  ? (i._endTimers[a._id] = setTimeout(i._ended.bind(i, a), c))
                  : ((i._endTimers[a._id] = function () {
                      i._ended(a),
                        m.removeEventListener("ended", i._endTimers[a._id], !1);
                    }),
                    m.addEventListener("ended", i._endTimers[a._id], !1));
              } catch (e) {
                i._emit("playerror", a._id, e);
              }
            };
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
              m.src && ((m.src = i._src), m.load());
            var y =
              (window && window.ejecta) ||
              (!m.readyState && t._navigator.isCocoonJS);
            if (m.readyState >= 3 || y) v();
            else {
              i._playLock = !0;
              var _ = function () {
                v(), m.removeEventListener(t._canPlayEvent, _, !1);
              };
              m.addEventListener(t._canPlayEvent, _, !1), i._clearTimer(a._id);
            }
          }
          return a._id;
        }
        i._ended(a);
      },
      pause: function (e) {
        var t = this;
        if ("loaded" !== t._state || t._playLock)
          return (
            t._queue.push({
              event: "pause",
              action: function () {
                t.pause(e);
              },
            }),
            t
          );
        for (var n = t._getSoundIds(e), i = 0; i < n.length; i++) {
          t._clearTimer(n[i]);
          var o = t._soundById(n[i]);
          if (
            o &&
            !o._paused &&
            ((o._seek = t.seek(n[i])),
            (o._rateSeek = 0),
            (o._paused = !0),
            t._stopFade(n[i]),
            o._node)
          )
            if (t._webAudio) {
              if (!o._node.bufferSource) continue;
              void 0 === o._node.bufferSource.stop
                ? o._node.bufferSource.noteOff(0)
                : o._node.bufferSource.stop(0),
                t._cleanBuffer(o._node);
            } else
              (isNaN(o._node.duration) && o._node.duration !== 1 / 0) ||
                o._node.pause();
          arguments[1] || t._emit("pause", o ? o._id : null);
        }
        return t;
      },
      stop: function (e, t) {
        var n = this;
        if ("loaded" !== n._state || n._playLock)
          return (
            n._queue.push({
              event: "stop",
              action: function () {
                n.stop(e);
              },
            }),
            n
          );
        for (var i = n._getSoundIds(e), o = 0; o < i.length; o++) {
          n._clearTimer(i[o]);
          var r = n._soundById(i[o]);
          r &&
            ((r._seek = r._start || 0),
            (r._rateSeek = 0),
            (r._paused = !0),
            (r._ended = !0),
            n._stopFade(i[o]),
            r._node &&
              (n._webAudio
                ? r._node.bufferSource &&
                  (void 0 === r._node.bufferSource.stop
                    ? r._node.bufferSource.noteOff(0)
                    : r._node.bufferSource.stop(0),
                  n._cleanBuffer(r._node))
                : (isNaN(r._node.duration) && r._node.duration !== 1 / 0) ||
                  ((r._node.currentTime = r._start || 0),
                  r._node.pause(),
                  r._node.duration === 1 / 0 && n._clearSound(r._node))),
            t || n._emit("stop", r._id));
        }
        return n;
      },
      mute: function (e, n) {
        var i = this;
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "mute",
              action: function () {
                i.mute(e, n);
              },
            }),
            i
          );
        if (void 0 === n) {
          if ("boolean" != typeof e) return i._muted;
          i._muted = e;
        }
        for (var o = i._getSoundIds(n), r = 0; r < o.length; r++) {
          var s = i._soundById(o[r]);
          s &&
            ((s._muted = e),
            s._interval && i._stopFade(s._id),
            i._webAudio && s._node
              ? s._node.gain.setValueAtTime(
                  e ? 0 : s._volume,
                  t.ctx.currentTime
                )
              : s._node && (s._node.muted = !!t._muted || e),
            i._emit("mute", s._id));
        }
        return i;
      },
      volume: function () {
        var e,
          n,
          i = this,
          o = arguments,
          r;
        if (0 === o.length) return i._volume;
        if (
          (1 === o.length || (2 === o.length && void 0 === o[1])
            ? i._getSoundIds().indexOf(o[0]) >= 0
              ? (n = parseInt(o[0], 10))
              : (e = parseFloat(o[0]))
            : o.length >= 2 &&
              ((e = parseFloat(o[0])), (n = parseInt(o[1], 10))),
          !(void 0 !== e && e >= 0 && e <= 1))
        )
          return (r = n ? i._soundById(n) : i._sounds[0]) ? r._volume : 0;
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "volume",
              action: function () {
                i.volume.apply(i, o);
              },
            }),
            i
          );
        void 0 === n && (i._volume = e), (n = i._getSoundIds(n));
        for (var s = 0; s < n.length; s++)
          (r = i._soundById(n[s])) &&
            ((r._volume = e),
            o[2] || i._stopFade(n[s]),
            i._webAudio && r._node && !r._muted
              ? r._node.gain.setValueAtTime(e, t.ctx.currentTime)
              : r._node && !r._muted && (r._node.volume = e * t.volume()),
            i._emit("volume", r._id));
        return i;
      },
      fade: function (e, n, i, o) {
        var r = this;
        if ("loaded" !== r._state || r._playLock)
          return (
            r._queue.push({
              event: "fade",
              action: function () {
                r.fade(e, n, i, o);
              },
            }),
            r
          );
        (e = parseFloat(e)),
          (n = parseFloat(n)),
          (i = parseFloat(i)),
          r.volume(e, o);
        for (var s = r._getSoundIds(o), a = 0; a < s.length; a++) {
          var l = r._soundById(s[a]);
          if (l) {
            if ((o || r._stopFade(s[a]), r._webAudio && !l._muted)) {
              var u = t.ctx.currentTime,
                d = u + i / 1e3;
              (l._volume = e),
                l._node.gain.setValueAtTime(e, u),
                l._node.gain.linearRampToValueAtTime(n, d);
            }
            r._startFadeInterval(l, e, n, i, s[a], void 0 === o);
          }
        }
        return r;
      },
      _startFadeInterval: function (e, t, n, i, o, r) {
        var s = this,
          a = t,
          l = n - t,
          u = Math.abs(l / 0.01),
          d = Math.max(4, u > 0 ? i / u : i),
          c = Date.now();
        (e._fadeTo = n),
          (e._interval = setInterval(function () {
            var o = (Date.now() - c) / i;
            (c = Date.now()),
              (a += l * o),
              (a = Math.max(0, a)),
              (a = Math.min(1, a)),
              (a = Math.round(100 * a) / 100),
              s._webAudio ? (e._volume = a) : s.volume(a, e._id, !0),
              r && (s._volume = a),
              ((n < t && a <= n) || (n > t && a >= n)) &&
                (clearInterval(e._interval),
                (e._interval = null),
                (e._fadeTo = null),
                s.volume(n, e._id),
                s._emit("fade", e._id));
          }, d));
      },
      _stopFade: function (e) {
        var n = this,
          i = n._soundById(e);
        return (
          i &&
            i._interval &&
            (n._webAudio &&
              i._node.gain.cancelScheduledValues(t.ctx.currentTime),
            clearInterval(i._interval),
            (i._interval = null),
            n.volume(i._fadeTo, e),
            (i._fadeTo = null),
            n._emit("fade", e)),
          n
        );
      },
      loop: function () {
        var e,
          t,
          n,
          i = this,
          o = arguments;
        if (0 === o.length) return i._loop;
        if (1 === o.length) {
          if ("boolean" != typeof o[0])
            return !!(n = i._soundById(parseInt(o[0], 10))) && n._loop;
          (e = o[0]), (i._loop = e);
        } else 2 === o.length && ((e = o[0]), (t = parseInt(o[1], 10)));
        for (var r = i._getSoundIds(t), s = 0; s < r.length; s++)
          (n = i._soundById(r[s])) &&
            ((n._loop = e),
            i._webAudio &&
              n._node &&
              n._node.bufferSource &&
              ((n._node.bufferSource.loop = e),
              e &&
                ((n._node.bufferSource.loopStart = n._start || 0),
                (n._node.bufferSource.loopEnd = n._stop))));
        return i;
      },
      rate: function () {
        var e,
          n,
          i = this,
          o = arguments,
          r;
        if (0 === o.length) n = i._sounds[0]._id;
        else if (1 === o.length) {
          var s = i._getSoundIds(),
            a = s.indexOf(o[0]);
          a >= 0 ? (n = parseInt(o[0], 10)) : (e = parseFloat(o[0]));
        } else
          2 === o.length && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
        if ("number" != typeof e)
          return (r = i._soundById(n)) ? r._rate : i._rate;
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "rate",
              action: function () {
                i.rate.apply(i, o);
              },
            }),
            i
          );
        void 0 === n && (i._rate = e), (n = i._getSoundIds(n));
        for (var l = 0; l < n.length; l++)
          if ((r = i._soundById(n[l]))) {
            i.playing(n[l]) &&
              ((r._rateSeek = i.seek(n[l])),
              (r._playStart = i._webAudio ? t.ctx.currentTime : r._playStart)),
              (r._rate = e),
              i._webAudio && r._node && r._node.bufferSource
                ? r._node.bufferSource.playbackRate.setValueAtTime(
                    e,
                    t.ctx.currentTime
                  )
                : r._node && (r._node.playbackRate = e);
            var u = i.seek(n[l]),
              d = (i._sprite[r._sprite][0] + i._sprite[r._sprite][1]) / 1e3 - u,
              c = (1e3 * d) / Math.abs(r._rate);
            (!i._endTimers[n[l]] && r._paused) ||
              (i._clearTimer(n[l]),
              (i._endTimers[n[l]] = setTimeout(i._ended.bind(i, r), c))),
              i._emit("rate", r._id);
          }
        return i;
      },
      seek: function () {
        var e,
          n,
          i = this,
          o = arguments;
        if (0 === o.length) n = i._sounds[0]._id;
        else if (1 === o.length) {
          var r = i._getSoundIds(),
            s = r.indexOf(o[0]);
          s >= 0
            ? (n = parseInt(o[0], 10))
            : i._sounds.length &&
              ((n = i._sounds[0]._id), (e = parseFloat(o[0])));
        } else
          2 === o.length && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
        if (void 0 === n) return i;
        if ("loaded" !== i._state || i._playLock)
          return (
            i._queue.push({
              event: "seek",
              action: function () {
                i.seek.apply(i, o);
              },
            }),
            i
          );
        var a = i._soundById(n);
        if (a) {
          if (!("number" == typeof e && e >= 0)) {
            if (i._webAudio) {
              var l = i.playing(n) ? t.ctx.currentTime - a._playStart : 0,
                u = a._rateSeek ? a._rateSeek - a._seek : 0;
              return a._seek + (u + l * Math.abs(a._rate));
            }
            return a._node.currentTime;
          }
          var d = i.playing(n);
          d && i.pause(n, !0),
            (a._seek = e),
            (a._ended = !1),
            i._clearTimer(n),
            i._webAudio ||
              !a._node ||
              isNaN(a._node.duration) ||
              (a._node.currentTime = e);
          var c = function () {
            i._emit("seek", n), d && i.play(n, !0);
          };
          if (d && !i._webAudio) {
            var p = function () {
              i._playLock ? setTimeout(p, 0) : c();
            };
            setTimeout(p, 0);
          } else c();
        }
        return i;
      },
      playing: function (e) {
        var t = this;
        if ("number" == typeof e) {
          var n = t._soundById(e);
          return !!n && !n._paused;
        }
        for (var i = 0; i < t._sounds.length; i++)
          if (!t._sounds[i]._paused) return !0;
        return !1;
      },
      duration: function (e) {
        var t = this,
          n = t._duration,
          i = t._soundById(e);
        return i && (n = t._sprite[i._sprite][1] / 1e3), n;
      },
      state: function () {
        return this._state;
      },
      unload: function () {
        for (var e = this, n = e._sounds, i = 0; i < n.length; i++)
          n[i]._paused || e.stop(n[i]._id),
            e._webAudio ||
              (e._clearSound(n[i]._node),
              n[i]._node.removeEventListener("error", n[i]._errorFn, !1),
              n[i]._node.removeEventListener(t._canPlayEvent, n[i]._loadFn, !1),
              t._releaseHtml5Audio(n[i]._node)),
            delete n[i]._node,
            e._clearTimer(n[i]._id);
        var r = t._howls.indexOf(e);
        r >= 0 && t._howls.splice(r, 1);
        var s = !0;
        for (i = 0; i < t._howls.length; i++)
          if (
            t._howls[i]._src === e._src ||
            e._src.indexOf(t._howls[i]._src) >= 0
          ) {
            s = !1;
            break;
          }
        return (
          o && s && delete o[e._src],
          (t.noAudio = !1),
          (e._state = "unloaded"),
          (e._sounds = []),
          (e = null),
          null
        );
      },
      on: function (e, t, n, i) {
        var o = this,
          r = o["_on" + e];
        return (
          "function" == typeof t &&
            r.push(i ? { id: n, fn: t, once: i } : { id: n, fn: t }),
          o
        );
      },
      off: function (e, t, n) {
        var i = this,
          o = i["_on" + e],
          r = 0;
        if (("number" == typeof t && ((n = t), (t = null)), t || n))
          for (r = 0; r < o.length; r++) {
            var s = n === o[r].id;
            if ((t === o[r].fn && s) || (!t && s)) {
              o.splice(r, 1);
              break;
            }
          }
        else if (e) i["_on" + e] = [];
        else {
          var a = Object.keys(i);
          for (r = 0; r < a.length; r++)
            0 === a[r].indexOf("_on") &&
              Array.isArray(i[a[r]]) &&
              (i[a[r]] = []);
        }
        return i;
      },
      once: function (e, t, n) {
        var i = this;
        return i.on(e, t, n, 1), i;
      },
      _emit: function (e, t, n) {
        for (var i = this, o = i["_on" + e], r = o.length - 1; r >= 0; r--)
          (o[r].id && o[r].id !== t && "load" !== e) ||
            (setTimeout(
              function (e) {
                e.call(this, t, n);
              }.bind(i, o[r].fn),
              0
            ),
            o[r].once && i.off(e, o[r].fn, o[r].id));
        return i._loadQueue(e), i;
      },
      _loadQueue: function (e) {
        var t = this;
        if (t._queue.length > 0) {
          var n = t._queue[0];
          n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action();
        }
        return t;
      },
      _ended: function (e) {
        var n = this,
          i = e._sprite;
        if (
          !n._webAudio &&
          e._node &&
          !e._node.paused &&
          !e._node.ended &&
          e._node.currentTime < e._stop
        )
          return setTimeout(n._ended.bind(n, e), 100), n;
        var o = !(!e._loop && !n._sprite[i][2]);
        if (
          (n._emit("end", e._id),
          !n._webAudio && o && n.stop(e._id, !0).play(e._id),
          n._webAudio && o)
        ) {
          n._emit("play", e._id),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            (e._playStart = t.ctx.currentTime);
          var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
          n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), r);
        }
        return (
          n._webAudio &&
            !o &&
            ((e._paused = !0),
            (e._ended = !0),
            (e._seek = e._start || 0),
            (e._rateSeek = 0),
            n._clearTimer(e._id),
            n._cleanBuffer(e._node),
            t._autoSuspend()),
          n._webAudio || o || n.stop(e._id, !0),
          n
        );
      },
      _clearTimer: function (e) {
        var t = this;
        if (t._endTimers[e]) {
          if ("function" != typeof t._endTimers[e])
            clearTimeout(t._endTimers[e]);
          else {
            var n = t._soundById(e);
            n &&
              n._node &&
              n._node.removeEventListener("ended", t._endTimers[e], !1);
          }
          delete t._endTimers[e];
        }
        return t;
      },
      _soundById: function (e) {
        for (var t = this, n = 0; n < t._sounds.length; n++)
          if (e === t._sounds[n]._id) return t._sounds[n];
        return null;
      },
      _inactiveSound: function () {
        var e = this;
        e._drain();
        for (var t = 0; t < e._sounds.length; t++)
          if (e._sounds[t]._ended) return e._sounds[t].reset();
        return new i(e);
      },
      _drain: function () {
        var e = this,
          t = e._pool,
          n = 0,
          i = 0;
        if (!(e._sounds.length < t)) {
          for (i = 0; i < e._sounds.length; i++) e._sounds[i]._ended && n++;
          for (i = e._sounds.length - 1; i >= 0; i--) {
            if (n <= t) return;
            e._sounds[i]._ended &&
              (e._webAudio &&
                e._sounds[i]._node &&
                e._sounds[i]._node.disconnect(0),
              e._sounds.splice(i, 1),
              n--);
          }
        }
      },
      _getSoundIds: function (e) {
        var t = this;
        if (void 0 === e) {
          for (var n = [], i = 0; i < t._sounds.length; i++)
            n.push(t._sounds[i]._id);
          return n;
        }
        return [e];
      },
      _refreshBuffer: function (e) {
        var n = this;
        return (
          (e._node.bufferSource = t.ctx.createBufferSource()),
          (e._node.bufferSource.buffer = o[n._src]),
          e._panner
            ? e._node.bufferSource.connect(e._panner)
            : e._node.bufferSource.connect(e._node),
          (e._node.bufferSource.loop = e._loop),
          e._loop &&
            ((e._node.bufferSource.loopStart = e._start || 0),
            (e._node.bufferSource.loopEnd = e._stop || 0)),
          e._node.bufferSource.playbackRate.setValueAtTime(
            e._rate,
            t.ctx.currentTime
          ),
          n
        );
      },
      _cleanBuffer: function (e) {
        var n = this,
          i = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
        if (
          t._scratchBuffer &&
          e.bufferSource &&
          ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), i)
        )
          try {
            e.bufferSource.buffer = t._scratchBuffer;
          } catch (e) {}
        return (e.bufferSource = null), n;
      },
      _clearSound: function (e) {
        /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent) ||
          (e.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      },
    };
    var i = function (e) {
      (this._parent = e), this.init();
    };
    i.prototype = {
      init: function () {
        var e = this,
          n = e._parent;
        return (
          (e._muted = n._muted),
          (e._loop = n._loop),
          (e._volume = n._volume),
          (e._rate = n._rate),
          (e._seek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++t._counter),
          n._sounds.push(e),
          e.create(),
          e
        );
      },
      create: function () {
        var e = this,
          n = e._parent,
          i = t._muted || e._muted || e._parent._muted ? 0 : e._volume;
        return (
          n._webAudio
            ? ((e._node =
                void 0 === t.ctx.createGain
                  ? t.ctx.createGainNode()
                  : t.ctx.createGain()),
              e._node.gain.setValueAtTime(i, t.ctx.currentTime),
              (e._node.paused = !0),
              e._node.connect(t.masterGain))
            : t.noAudio ||
              ((e._node = t._obtainHtml5Audio()),
              (e._errorFn = e._errorListener.bind(e)),
              e._node.addEventListener("error", e._errorFn, !1),
              (e._loadFn = e._loadListener.bind(e)),
              e._node.addEventListener(t._canPlayEvent, e._loadFn, !1),
              (e._node.src = n._src),
              (e._node.preload = "auto"),
              (e._node.volume = i * t.volume()),
              e._node.load()),
          e
        );
      },
      reset: function () {
        var e = this,
          n = e._parent;
        return (
          (e._muted = n._muted),
          (e._loop = n._loop),
          (e._volume = n._volume),
          (e._rate = n._rate),
          (e._seek = 0),
          (e._rateSeek = 0),
          (e._paused = !0),
          (e._ended = !0),
          (e._sprite = "__default"),
          (e._id = ++t._counter),
          e
        );
      },
      _errorListener: function () {
        var e = this;
        e._parent._emit(
          "loaderror",
          e._id,
          e._node.error ? e._node.error.code : 0
        ),
          e._node.removeEventListener("error", e._errorFn, !1);
      },
      _loadListener: function () {
        var e = this,
          n = e._parent;
        (n._duration = Math.ceil(10 * e._node.duration) / 10),
          0 === Object.keys(n._sprite).length &&
            (n._sprite = { __default: [0, 1e3 * n._duration] }),
          "loaded" !== n._state &&
            ((n._state = "loaded"), n._emit("load"), n._loadQueue()),
          e._node.removeEventListener(t._canPlayEvent, e._loadFn, !1);
      },
    };
    var o = {},
      r = function (e) {
        var t = e._src;
        if (o[t]) return (e._duration = o[t].duration), void l(e);
        if (/^data:[^;]+;base64,/.test(t)) {
          for (
            var n = atob(t.split(",")[1]), i = new Uint8Array(n.length), r = 0;
            r < n.length;
            ++r
          )
            i[r] = n.charCodeAt(r);
          a(i.buffer, e);
        } else {
          var u = new XMLHttpRequest();
          u.open("GET", t, !0),
            (u.withCredentials = e._xhrWithCredentials),
            (u.responseType = "arraybuffer"),
            (u.onload = function () {
              var t = (u.status + "")[0];
              "0" === t || "2" === t || "3" === t
                ? a(u.response, e)
                : e._emit(
                    "loaderror",
                    null,
                    "Failed loading audio file with status: " + u.status + "."
                  );
            }),
            (u.onerror = function () {
              e._webAudio &&
                ((e._html5 = !0),
                (e._webAudio = !1),
                (e._sounds = []),
                delete o[t],
                e.load());
            }),
            s(u);
        }
      },
      s = function (e) {
        try {
          e.send();
        } catch (t) {
          e.onerror();
        }
      },
      a = function (e, n) {
        var i = function () {
            n._emit("loaderror", null, "Decoding audio data failed.");
          },
          r = function (e) {
            e && n._sounds.length > 0 ? ((o[n._src] = e), l(n, e)) : i();
          };
        "undefined" != typeof Promise && 1 === t.ctx.decodeAudioData.length
          ? t.ctx.decodeAudioData(e).then(r).catch(i)
          : t.ctx.decodeAudioData(e, r, i);
      },
      l = function (e, t) {
        t && !e._duration && (e._duration = t.duration),
          0 === Object.keys(e._sprite).length &&
            (e._sprite = { __default: [0, 1e3 * e._duration] }),
          "loaded" !== e._state &&
            ((e._state = "loaded"), e._emit("load"), e._loadQueue());
      },
      u = function () {
        if (t.usingWebAudio) {
          try {
            "undefined" != typeof AudioContext
              ? (t.ctx = new AudioContext())
              : "undefined" != typeof webkitAudioContext
              ? (t.ctx = new webkitAudioContext())
              : (t.usingWebAudio = !1);
          } catch (e) {
            t.usingWebAudio = !1;
          }
          t.ctx || (t.usingWebAudio = !1);
          var e = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform),
            n =
              t._navigator &&
              t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            i = n ? parseInt(n[1], 10) : null;
          if (e && i && i < 9) {
            var o = /safari/.test(
              t._navigator && t._navigator.userAgent.toLowerCase()
            );
            ((t._navigator && t._navigator.standalone && !o) ||
              (t._navigator && !t._navigator.standalone && !o)) &&
              (t.usingWebAudio = !1);
          }
          t.usingWebAudio &&
            ((t.masterGain =
              void 0 === t.ctx.createGain
                ? t.ctx.createGainNode()
                : t.ctx.createGain()),
            t.masterGain.gain.setValueAtTime(
              t._muted ? 0 : t._volume,
              t.ctx.currentTime
            ),
            t.masterGain.connect(t.ctx.destination)),
            t._setup();
        }
      };
    "function" == typeof define &&
      define.amd &&
      define([], function () {
        return { Howler: t, Howl: n };
      }),
      "undefined" != typeof exports &&
        ((exports.Howler = t), (exports.Howl = n)),
      "undefined" != typeof window
        ? ((window.HowlerGlobal = e),
          (window.Howler = t),
          (window.Howl = n),
          (window.Sound = i))
        : "undefined" != typeof global &&
          ((global.HowlerGlobal = e),
          (global.Howler = t),
          (global.Howl = n),
          (global.Sound = i));
  })(),
  (function () {
    "use strict";
    (HowlerGlobal.prototype._pos = [0, 0, 0]),
      (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
      (HowlerGlobal.prototype.stereo = function (e) {
        var t = this;
        if (!t.ctx || !t.ctx.listener) return t;
        for (var n = t._howls.length - 1; n >= 0; n--) t._howls[n].stereo(e);
        return t;
      }),
      (HowlerGlobal.prototype.pos = function (e, t, n) {
        var i = this;
        return i.ctx && i.ctx.listener
          ? ((t = "number" != typeof t ? i._pos[1] : t),
            (n = "number" != typeof n ? i._pos[2] : n),
            "number" != typeof e
              ? i._pos
              : ((i._pos = [e, t, n]),
                void 0 !== i.ctx.listener.positionX
                  ? (i.ctx.listener.positionX.setTargetAtTime(
                      i._pos[0],
                      Howler.ctx.currentTime,
                      0.1
                    ),
                    i.ctx.listener.positionY.setTargetAtTime(
                      i._pos[1],
                      Howler.ctx.currentTime,
                      0.1
                    ),
                    i.ctx.listener.positionZ.setTargetAtTime(
                      i._pos[2],
                      Howler.ctx.currentTime,
                      0.1
                    ))
                  : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]),
                i))
          : i;
      }),
      (HowlerGlobal.prototype.orientation = function (e, t, n, i, o, r) {
        var s = this;
        if (!s.ctx || !s.ctx.listener) return s;
        var a = s._orientation;
        return (
          (t = "number" != typeof t ? a[1] : t),
          (n = "number" != typeof n ? a[2] : n),
          (i = "number" != typeof i ? a[3] : i),
          (o = "number" != typeof o ? a[4] : o),
          (r = "number" != typeof r ? a[5] : r),
          "number" != typeof e
            ? a
            : ((s._orientation = [e, t, n, i, o, r]),
              void 0 !== s.ctx.listener.forwardX
                ? (s.ctx.listener.forwardX.setTargetAtTime(
                    e,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  s.ctx.listener.forwardY.setTargetAtTime(
                    t,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  s.ctx.listener.forwardZ.setTargetAtTime(
                    n,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  s.ctx.listener.upX.setTargetAtTime(
                    i,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  s.ctx.listener.upY.setTargetAtTime(
                    o,
                    Howler.ctx.currentTime,
                    0.1
                  ),
                  s.ctx.listener.upZ.setTargetAtTime(
                    r,
                    Howler.ctx.currentTime,
                    0.1
                  ))
                : s.ctx.listener.setOrientation(e, t, n, i, o, r),
              s)
        );
      }),
      (Howl.prototype.init = (function (e) {
        return function (t) {
          var n = this;
          return (
            (n._orientation = t.orientation || [1, 0, 0]),
            (n._stereo = t.stereo || null),
            (n._pos = t.pos || null),
            (n._pannerAttr = {
              coneInnerAngle:
                void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
              coneOuterAngle:
                void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
              coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
              distanceModel:
                void 0 !== t.distanceModel ? t.distanceModel : "inverse",
              maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
              panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
              refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
              rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1,
            }),
            (n._onstereo = t.onstereo ? [{ fn: t.onstereo }] : []),
            (n._onpos = t.onpos ? [{ fn: t.onpos }] : []),
            (n._onorientation = t.onorientation
              ? [{ fn: t.onorientation }]
              : []),
            e.call(this, t)
          );
        };
      })(Howl.prototype.init)),
      (Howl.prototype.stereo = function (t, n) {
        var i = this;
        if (!i._webAudio) return i;
        if ("loaded" !== i._state)
          return (
            i._queue.push({
              event: "stereo",
              action: function () {
                i.stereo(t, n);
              },
            }),
            i
          );
        var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if (void 0 === n) {
          if ("number" != typeof t) return i._stereo;
          (i._stereo = t), (i._pos = [t, 0, 0]);
        }
        for (var r = i._getSoundIds(n), s = 0; s < r.length; s++) {
          var a = i._soundById(r[s]);
          if (a) {
            if ("number" != typeof t) return a._stereo;
            (a._stereo = t),
              (a._pos = [t, 0, 0]),
              a._node &&
                ((a._pannerAttr.panningModel = "equalpower"),
                (a._panner && a._panner.pan) || e(a, o),
                "spatial" === o
                  ? void 0 !== a._panner.positionX
                    ? (a._panner.positionX.setValueAtTime(
                        t,
                        Howler.ctx.currentTime
                      ),
                      a._panner.positionY.setValueAtTime(
                        0,
                        Howler.ctx.currentTime
                      ),
                      a._panner.positionZ.setValueAtTime(
                        0,
                        Howler.ctx.currentTime
                      ))
                    : a._panner.setPosition(t, 0, 0)
                  : a._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)),
              i._emit("stereo", a._id);
          }
        }
        return i;
      }),
      (Howl.prototype.pos = function (t, n, i, o) {
        var r = this;
        if (!r._webAudio) return r;
        if ("loaded" !== r._state)
          return (
            r._queue.push({
              event: "pos",
              action: function () {
                r.pos(t, n, i, o);
              },
            }),
            r
          );
        if (
          ((n = "number" != typeof n ? 0 : n),
          (i = "number" != typeof i ? -0.5 : i),
          void 0 === o)
        ) {
          if ("number" != typeof t) return r._pos;
          r._pos = [t, n, i];
        }
        for (var s = r._getSoundIds(o), a = 0; a < s.length; a++) {
          var l = r._soundById(s[a]);
          if (l) {
            if ("number" != typeof t) return l._pos;
            (l._pos = [t, n, i]),
              l._node &&
                ((l._panner && !l._panner.pan) || e(l, "spatial"),
                void 0 !== l._panner.positionX
                  ? (l._panner.positionX.setValueAtTime(
                      t,
                      Howler.ctx.currentTime
                    ),
                    l._panner.positionY.setValueAtTime(
                      n,
                      Howler.ctx.currentTime
                    ),
                    l._panner.positionZ.setValueAtTime(
                      i,
                      Howler.ctx.currentTime
                    ))
                  : l._panner.setPosition(t, n, i)),
              r._emit("pos", l._id);
          }
        }
        return r;
      }),
      (Howl.prototype.orientation = function (t, n, i, o) {
        var r = this;
        if (!r._webAudio) return r;
        if ("loaded" !== r._state)
          return (
            r._queue.push({
              event: "orientation",
              action: function () {
                r.orientation(t, n, i, o);
              },
            }),
            r
          );
        if (
          ((n = "number" != typeof n ? r._orientation[1] : n),
          (i = "number" != typeof i ? r._orientation[2] : i),
          void 0 === o)
        ) {
          if ("number" != typeof t) return r._orientation;
          r._orientation = [t, n, i];
        }
        for (var s = r._getSoundIds(o), a = 0; a < s.length; a++) {
          var l = r._soundById(s[a]);
          if (l) {
            if ("number" != typeof t) return l._orientation;
            (l._orientation = [t, n, i]),
              l._node &&
                (l._panner ||
                  (l._pos || (l._pos = r._pos || [0, 0, -0.5]),
                  e(l, "spatial")),
                void 0 !== l._panner.orientationX
                  ? (l._panner.orientationX.setValueAtTime(
                      t,
                      Howler.ctx.currentTime
                    ),
                    l._panner.orientationY.setValueAtTime(
                      n,
                      Howler.ctx.currentTime
                    ),
                    l._panner.orientationZ.setValueAtTime(
                      i,
                      Howler.ctx.currentTime
                    ))
                  : l._panner.setOrientation(t, n, i)),
              r._emit("orientation", l._id);
          }
        }
        return r;
      }),
      (Howl.prototype.pannerAttr = function () {
        var t,
          n,
          i,
          o = this,
          r = arguments;
        if (!o._webAudio) return o;
        if (0 === r.length) return o._pannerAttr;
        if (1 === r.length) {
          if ("object" != typeof r[0])
            return (i = o._soundById(parseInt(r[0], 10)))
              ? i._pannerAttr
              : o._pannerAttr;
          (t = r[0]),
            void 0 === n &&
              (t.pannerAttr ||
                (t.pannerAttr = {
                  coneInnerAngle: t.coneInnerAngle,
                  coneOuterAngle: t.coneOuterAngle,
                  coneOuterGain: t.coneOuterGain,
                  distanceModel: t.distanceModel,
                  maxDistance: t.maxDistance,
                  refDistance: t.refDistance,
                  rolloffFactor: t.rolloffFactor,
                  panningModel: t.panningModel,
                }),
              (o._pannerAttr = {
                coneInnerAngle:
                  void 0 !== t.pannerAttr.coneInnerAngle
                    ? t.pannerAttr.coneInnerAngle
                    : o._coneInnerAngle,
                coneOuterAngle:
                  void 0 !== t.pannerAttr.coneOuterAngle
                    ? t.pannerAttr.coneOuterAngle
                    : o._coneOuterAngle,
                coneOuterGain:
                  void 0 !== t.pannerAttr.coneOuterGain
                    ? t.pannerAttr.coneOuterGain
                    : o._coneOuterGain,
                distanceModel:
                  void 0 !== t.pannerAttr.distanceModel
                    ? t.pannerAttr.distanceModel
                    : o._distanceModel,
                maxDistance:
                  void 0 !== t.pannerAttr.maxDistance
                    ? t.pannerAttr.maxDistance
                    : o._maxDistance,
                refDistance:
                  void 0 !== t.pannerAttr.refDistance
                    ? t.pannerAttr.refDistance
                    : o._refDistance,
                rolloffFactor:
                  void 0 !== t.pannerAttr.rolloffFactor
                    ? t.pannerAttr.rolloffFactor
                    : o._rolloffFactor,
                panningModel:
                  void 0 !== t.pannerAttr.panningModel
                    ? t.pannerAttr.panningModel
                    : o._panningModel,
              }));
        } else 2 === r.length && ((t = r[0]), (n = parseInt(r[1], 10)));
        for (var s = o._getSoundIds(n), a = 0; a < s.length; a++)
          if ((i = o._soundById(s[a]))) {
            var l = i._pannerAttr;
            l = {
              coneInnerAngle:
                void 0 !== t.coneInnerAngle
                  ? t.coneInnerAngle
                  : l.coneInnerAngle,
              coneOuterAngle:
                void 0 !== t.coneOuterAngle
                  ? t.coneOuterAngle
                  : l.coneOuterAngle,
              coneOuterGain:
                void 0 !== t.coneOuterGain ? t.coneOuterGain : l.coneOuterGain,
              distanceModel:
                void 0 !== t.distanceModel ? t.distanceModel : l.distanceModel,
              maxDistance:
                void 0 !== t.maxDistance ? t.maxDistance : l.maxDistance,
              refDistance:
                void 0 !== t.refDistance ? t.refDistance : l.refDistance,
              rolloffFactor:
                void 0 !== t.rolloffFactor ? t.rolloffFactor : l.rolloffFactor,
              panningModel:
                void 0 !== t.panningModel ? t.panningModel : l.panningModel,
            };
            var u = i._panner;
            u
              ? ((u.coneInnerAngle = l.coneInnerAngle),
                (u.coneOuterAngle = l.coneOuterAngle),
                (u.coneOuterGain = l.coneOuterGain),
                (u.distanceModel = l.distanceModel),
                (u.maxDistance = l.maxDistance),
                (u.refDistance = l.refDistance),
                (u.rolloffFactor = l.rolloffFactor),
                (u.panningModel = l.panningModel))
              : (i._pos || (i._pos = o._pos || [0, 0, -0.5]), e(i, "spatial"));
          }
        return o;
      }),
      (Sound.prototype.init = (function (e) {
        return function () {
          var t = this,
            n = t._parent;
          (t._orientation = n._orientation),
            (t._stereo = n._stereo),
            (t._pos = n._pos),
            (t._pannerAttr = n._pannerAttr),
            e.call(this),
            t._stereo
              ? n.stereo(t._stereo)
              : t._pos && n.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
        };
      })(Sound.prototype.init)),
      (Sound.prototype.reset = (function (e) {
        return function () {
          var t = this,
            n = t._parent;
          return (
            (t._orientation = n._orientation),
            (t._stereo = n._stereo),
            (t._pos = n._pos),
            (t._pannerAttr = n._pannerAttr),
            t._stereo
              ? n.stereo(t._stereo)
              : t._pos
              ? n.pos(t._pos[0], t._pos[1], t._pos[2], t._id)
              : t._panner &&
                (t._panner.disconnect(0),
                (t._panner = void 0),
                n._refreshBuffer(t)),
            e.call(this)
          );
        };
      })(Sound.prototype.reset));
    var e = function (e, t) {
      "spatial" === (t = t || "spatial")
        ? ((e._panner = Howler.ctx.createPanner()),
          (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
          (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
          (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
          (e._panner.distanceModel = e._pannerAttr.distanceModel),
          (e._panner.maxDistance = e._pannerAttr.maxDistance),
          (e._panner.refDistance = e._pannerAttr.refDistance),
          (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
          (e._panner.panningModel = e._pannerAttr.panningModel),
          void 0 !== e._panner.positionX
            ? (e._panner.positionX.setValueAtTime(
                e._pos[0],
                Howler.ctx.currentTime
              ),
              e._panner.positionY.setValueAtTime(
                e._pos[1],
                Howler.ctx.currentTime
              ),
              e._panner.positionZ.setValueAtTime(
                e._pos[2],
                Howler.ctx.currentTime
              ))
            : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
          void 0 !== e._panner.orientationX
            ? (e._panner.orientationX.setValueAtTime(
                e._orientation[0],
                Howler.ctx.currentTime
              ),
              e._panner.orientationY.setValueAtTime(
                e._orientation[1],
                Howler.ctx.currentTime
              ),
              e._panner.orientationZ.setValueAtTime(
                e._orientation[2],
                Howler.ctx.currentTime
              ))
            : e._panner.setOrientation(
                e._orientation[0],
                e._orientation[1],
                e._orientation[2]
              ))
        : ((e._panner = Howler.ctx.createStereoPanner()),
          e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
        e._panner.connect(e._node),
        e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
    };
  })(),
  (function (e, t, n) {
    function i(e, t) {
      return typeof e === t;
    }
    function o() {
      var e, t, n, o, r, s, a;
      for (var d in u)
        if (u.hasOwnProperty(d)) {
          if (
            ((e = []),
            (t = u[d]).name &&
              (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++)
              e.push(t.options.aliases[n].toLowerCase());
          for (
            o = i(t.fn, "function") ? t.fn() : t.fn, r = 0;
            r < e.length;
            r++
          )
            1 === (a = (s = e[r]).split(".")).length
              ? (c[a[0]] = o)
              : (!c[a[0]] ||
                  c[a[0]] instanceof Boolean ||
                  (c[a[0]] = new Boolean(c[a[0]])),
                (c[a[0]][a[1]] = o)),
              l.push((o ? "" : "no-") + a.join("-"));
        }
    }
    function r(e) {
      var t = p.className,
        n = c._config.classPrefix || "";
      if ((f && (t = t.baseVal), c._config.enableJSClass)) {
        var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        t = t.replace(i, "$1" + n + "js$2");
      }
      c._config.enableClasses &&
        ((t += " " + n + e.join(" " + n)),
        f ? (p.className.baseVal = t) : (p.className = t));
    }
    function s() {
      return "function" != typeof t.createElement
        ? t.createElement(arguments[0])
        : f
        ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
        : t.createElement.apply(t, arguments);
    }
    function a(e, t) {
      if ("object" == typeof e) for (var n in e) h(e, n) && a(n, e[n]);
      else {
        var i = (e = e.toLowerCase()).split("."),
          o = c[i[0]];
        if ((2 == i.length && (o = o[i[1]]), void 0 !== o)) return c;
        (t = "function" == typeof t ? t() : t),
          1 == i.length
            ? (c[i[0]] = t)
            : (!c[i[0]] ||
                c[i[0]] instanceof Boolean ||
                (c[i[0]] = new Boolean(c[i[0]])),
              (c[i[0]][i[1]] = t)),
          r([(t && 0 != t ? "" : "no-") + i.join("-")]),
          c._trigger(e, t);
      }
      return c;
    }
    var l = [],
      u = [],
      d = {
        _version: "3.6.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (e, t) {
          var n = this;
          setTimeout(function () {
            t(n[e]);
          }, 0);
        },
        addTest: function (e, t, n) {
          u.push({ name: e, fn: t, options: n });
        },
        addAsyncTest: function (e) {
          u.push({ name: null, fn: e });
        },
      },
      c = function () {};
    (c.prototype = d), (c = new c());
    var p = t.documentElement,
      f = "svg" === p.nodeName.toLowerCase(),
      h;
    c.addTest("canvas", function () {
      var e = s("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
      (function () {
        var e = {}.hasOwnProperty;
        h =
          i(e, "undefined") || i(e.call, "undefined")
            ? function (e, t) {
                return t in e && i(e.constructor.prototype[t], "undefined");
              }
            : function (t, n) {
                return e.call(t, n);
              };
      })(),
      (d._l = {}),
      (d.on = function (e, t) {
        this._l[e] || (this._l[e] = []),
          this._l[e].push(t),
          c.hasOwnProperty(e) &&
            setTimeout(function () {
              c._trigger(e, c[e]);
            }, 0);
      }),
      (d._trigger = function (e, t) {
        if (this._l[e]) {
          var n = this._l[e];
          setTimeout(function () {
            var e, i;
            for (e = 0; e < n.length; e++) (i = n[e])(t);
          }, 0),
            delete this._l[e];
        }
      }),
      c._q.push(function () {
        d.addTest = a;
      }),
      c.addAsyncTest(function () {
        if (!c.canvas) return !1;
        var e = new Image(),
          t = s("canvas"),
          n = t.getContext("2d");
        (e.onload = function () {
          a("apng", function () {
            return (
              void 0 !== t.getContext &&
              (n.drawImage(e, 0, 0), 0 === n.getImageData(0, 0, 1, 1).data[3])
            );
          });
        }),
          (e.src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==");
      }),
      o(),
      r(l),
      delete d.addTest,
      delete d.addAsyncTest;
    for (var m = 0; m < c._q.length; m++) c._q[m]();
    e.Modernizr = c;
  })(window, document);
/*! npm.im/iphone-inline-video 2.2.2 */
var enableInlineVideo = (function () {
  "use strict";
  /*! npm.im/intervalometer */ function e(e, t, n, i) {
    function o(n) {
      (r = t(o, i)), e(n - (s || n)), (s = n);
    }
    var r, s;
    return {
      start: function () {
        r || o(0);
      },
      stop: function () {
        n(r), (r = null), (s = 0);
      },
    };
  }
  function t(t) {
    return e(t, requestAnimationFrame, cancelAnimationFrame);
  }
  function n(e, t, n) {
    function i(i) {
      (n && !n(e, t)) || i.stopImmediatePropagation();
    }
    return e.addEventListener(t, i), i;
  }
  function i(e, t, n, i) {
    function o() {
      return n[t];
    }
    function r(e) {
      n[t] = e;
    }
    i && r(e[t]), Object.defineProperty(e, t, { get: o, set: r });
  }
  function o(e, t, n) {
    n.addEventListener(t, function () {
      return e.dispatchEvent(new Event(t));
    });
  }
  function r(e, t) {
    Promise.resolve().then(function () {
      e.dispatchEvent(new Event(t));
    });
  }
  function s(e) {
    var t = new Audio();
    return (
      o(e, "play", t),
      o(e, "playing", t),
      o(e, "pause", t),
      (t.crossOrigin = e.crossOrigin),
      (t.src = e.src || e.currentSrc || "data:"),
      t
    );
  }
  function a(e, t, n) {
    (g || 0) + 200 < Date.now() && ((e[_] = !0), (g = Date.now())),
      n || (e.currentTime = t),
      (T[++A % 3] = (100 * t) | 0);
  }
  function l(e) {
    return e.driver.currentTime >= e.video.duration;
  }
  function u(e) {
    var t = this;
    t.video.readyState >= t.video.HAVE_FUTURE_DATA
      ? (t.hasAudio ||
          ((t.driver.currentTime =
            t.video.currentTime + (e * t.video.playbackRate) / 1e3),
          t.video.loop && l(t) && (t.driver.currentTime = 0)),
        a(t.video, t.driver.currentTime))
      : t.video.networkState === t.video.NETWORK_IDLE &&
        0 === t.video.buffered.length &&
        t.video.load(),
      t.video.ended && (delete t.video[_], t.video.pause(!0));
  }
  function d() {
    var e = this,
      t = e[y];
    e.webkitDisplayingFullscreen
      ? e[w]()
      : ("data:" !== t.driver.src &&
          t.driver.src !== e.src &&
          (a(e, 0, !0), (t.driver.src = e.src)),
        e.paused &&
          ((t.paused = !1),
          0 === e.buffered.length && e.load(),
          t.driver.play(),
          t.updater.start(),
          t.hasAudio ||
            (r(e, "play"),
            t.video.readyState >= t.video.HAVE_ENOUGH_DATA &&
              r(e, "playing"))));
  }
  function c(e) {
    var t = this,
      n = t[y];
    n.driver.pause(),
      n.updater.stop(),
      t.webkitDisplayingFullscreen && t[b](),
      (n.paused && !e) ||
        ((n.paused = !0),
        n.hasAudio || r(t, "pause"),
        t.ended &&
          !t.webkitDisplayingFullscreen &&
          ((t[_] = !0), r(t, "ended")));
  }
  function p(e, n) {
    var i = {};
    (e[y] = i),
      (i.paused = !0),
      (i.hasAudio = n),
      (i.video = e),
      (i.updater = t(u.bind(i))),
      n
        ? (i.driver = s(e))
        : (e.addEventListener("canplay", function () {
            e.paused || r(e, "playing");
          }),
          (i.driver = {
            src: e.src || e.currentSrc || "data:",
            muted: !0,
            paused: !0,
            pause: function () {
              i.driver.paused = !0;
            },
            play: function () {
              (i.driver.paused = !1), l(i) && a(e, 0);
            },
            get ended() {
              return l(i);
            },
          })),
      e.addEventListener(
        "emptied",
        function () {
          var t = !i.driver.src || "data:" === i.driver.src;
          i.driver.src &&
            i.driver.src !== e.src &&
            (a(e, 0, !0),
            (i.driver.src = e.src),
            t || (!n && e.autoplay) ? i.driver.play() : i.updater.stop());
        },
        !1
      ),
      e.addEventListener("webkitbeginfullscreen", function () {
        e.paused
          ? n && 0 === i.driver.buffered.length && i.driver.load()
          : (e.pause(), e[w]());
      }),
      n &&
        (e.addEventListener("webkitendfullscreen", function () {
          i.driver.currentTime = e.currentTime;
        }),
        e.addEventListener("seeking", function () {
          T.indexOf((100 * e.currentTime) | 0) < 0 &&
            (i.driver.currentTime = e.currentTime);
        }));
  }
  function f(e) {
    var t = e[_];
    return delete e[_], !e.webkitDisplayingFullscreen && !t;
  }
  function h(e) {
    var t = e[y];
    (e[w] = e.play),
      (e[b] = e.pause),
      (e.play = d),
      (e.pause = c),
      i(e, "paused", t.driver),
      i(e, "muted", t.driver, !0),
      i(e, "playbackRate", t.driver, !0),
      i(e, "ended", t.driver),
      i(e, "loop", t.driver, !0),
      n(e, "seeking", function (e) {
        return !e.webkitDisplayingFullscreen;
      }),
      n(e, "seeked", function (e) {
        return !e.webkitDisplayingFullscreen;
      }),
      n(e, "timeupdate", f),
      n(e, "ended", f);
  }
  function m(e, t) {
    if ((void 0 === t && (t = {}), !e[y])) {
      if (!t.everywhere) {
        if (!v) return;
        if (
          !(t.iPad || t.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(
            navigator.userAgent
          )
        )
          return;
      }
      e.pause();
      var n = e.autoplay;
      (e.autoplay = !1),
        p(e, !e.muted),
        h(e),
        e.classList.add("IIV"),
        e.muted &&
          n &&
          (e.play(),
          e.addEventListener("playing", function t() {
            (e.autoplay = !0), e.removeEventListener("playing", t);
          })),
        /iPhone|iPod|iPad/.test(navigator.platform) ||
          console.warn(
            "iphone-inline-video is not guaranteed to work in emulated environments"
          );
    }
  }
  var g,
    v =
      "object" == typeof document &&
      "object-fit" in document.head.style &&
      !matchMedia("(-webkit-video-playable-inline)").matches,
    y = "fregante:iphone-inline-video",
    _ = "fregante:iphone-inline-video:event",
    w = "fregante:iphone-inline-video:nativeplay",
    b = "fregante:iphone-inline-video:nativepause",
    T = [],
    A = 0;
  return m;
})();
