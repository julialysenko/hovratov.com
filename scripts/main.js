
var $body = $(document.body);

$(document).on('click', '.head-arrow-down', function (e) {

    e.preventDefault();
        var $this = $(this),
            $parent = $this.parent(),
            parent = $this.data('parent');

        if (parent) {
            var $p = $(parent);

            if ($p.length) $parent = $p.eq(0);
        }

        var pos = $parent.offset().top + $parent.outerHeight() + 10;

        $body.animate({scrollTop: pos});
});
/*
// image safe

var message = "";

function clickIE() {
    if (document.all) {
        (message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2) {
            (message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false");
*/

// textarea
window.autosize && autosize(document.querySelectorAll('textarea'));

// Scroll up
$(window).scroll(function(){
    if ($(this).scrollTop() >= 100) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
});

function toBeExecutedOnFirstLoad(){
  $(document).ready(function() {
    setTimeout(function () {
        $('.main-layout').css("display", "block");
    }, 3500)
    setTimeout(function () {
        $('.intro').fadeOut("slow");
    }, 3000)
});

}
if(localStorage.getItem('first') === null){
  toBeExecutedOnFirstLoad();
  localStorage.setItem('first','nope!');
} else {
     $('.intro').css("display", "none");
     $('.main-layout').css("display", "block");
}

! function e(t, n, r) {
    function o(i, a) {
        if (!n[i]) {
            if (!t[i]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(i, !0);
                if (c) return c(i, !0);
                var s = new Error("Cannot find module '" + i + "'");
                throw s.code = "MODULE_NOT_FOUND", s
            }
            var v = n[i] = {
                exports: {}
            };
            t[i][0].call(v.exports, function(e) {
                var n = t[i][1][e];
                return o(n ? n : e)
            }, v, v.exports, e, t, n, r)
        }
        return n[i].exports
    }
    for (var c = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
    return o
}({
    1: [function(e, t, n) {
        "use strict";
        for (var r = document.querySelectorAll(" .nav__item"), o = window.location.pathname.split("/")[1], c = 0; c < r.length; c++) {
            var i = r[c].href.split("/")[3];
            o === i && r[c].classList.add("nav__item--active")
        }
    }, {}],
    2: [function(e, t, n) {
        "use strict";
        e("./active-menu"), e("./js-open-nav")
    }, {
        "./active-menu": 1,
        "./js-open-nav": 3
    }],
    3: [function(e, t, n) {
        "use strict";
        var r = function() {
            return document.querySelector(".js-nav").classList.toggle("nav--open")
        };
        document.querySelector(".header .js-open-nav").addEventListener("click", r), document.querySelector(".nav").addEventListener("click", function(e) {
            var t = e.target;
            t.classList.contains("nav__item") && r()
        })
        document.querySelector(".header .nav__close").addEventListener("click", r), document.querySelector(".nav").addEventListener("click", function(e) {
            var t = e.target;
            t.classList.contains("nav__item") && r()
        })
    }, {}]
}, {}, [2]);

! function e(t, o, n) {
    function r(i, l) {
        if (!o[i]) {
            if (!t[i]) {
                var c = "function" == typeof require && require;
                if (!l && c) return c(i, !0);
                if (s) return s(i, !0);
                var u = new Error("Cannot find module '" + i + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var a = o[i] = {
                exports: {}
            };
            t[i][0].call(a.exports, function(e) {
                var o = t[i][1][e];
                return r(o ? o : e)
            }, a, a.exports, e, t, o, n)
        }
        return o[i].exports
    }
    for (var s = "function" == typeof require && require, i = 0; i < n.length; i++) r(n[i]);
    return r
}({
    1: [function(e, t, o) {
        "use strict";
        var n = window.innerHeight - 100;
        t.exports = function(e) {
            var t = document.querySelector(e);
            if (t) {
                var o = window.pageYOffset || document.documentElement.scrollTop,
                    r = t.offsetTop,
                    s = r - o;
                if (s < n) return !0
            }
        }
    }, {}],
    2: [function(e, t, o) {
        "use strict";
        var n = e("./distanceElement");
        t.exports = function(e, t) {
            if (n(e)) {
                var o = document.querySelector(e),
                    r = o.querySelectorAll(".js-anim");
                o.classList.add(t);
                for (var s = 0; s < r.length;) {
                    var i = r[s].getAttribute("data-anim");
                    r[s].classList.add("anim-" + i), s++
                }
            }
        }
    }, {
        "./distanceElement": 1
    }],
    3: [function(e, t, o) {
        "use strict";
        e("./distanceElement");
        t.exports = function(e) {
            var t = document.querySelectorAll(e + " .js-item"),
                o = document.querySelectorAll(e + " .js-item").length,
                n = 0,
                r = setInterval(function() {
                    t[n].classList.add("js-item--show"), ++n, n == o && clearInterval(r)
                }, 500)
        }
    }, {
        "./distanceElement": 1
    }],
    4: [function(e, t, o) {
        "use strict";
        e("./slider"), e("./showElements"), e("./addressShow")
    }, {
        "./addressShow": 4,
        "./showElements": 45,
        "./slider": 5
    }],
    5: [function(e, t, o) {
        "use strict";
        var n = document.querySelectorAll(".home-slider .home-slider__item"),
            r = document.querySelectorAll(".home-slider__control-item"),
            s = document.querySelectorAll(".home-slider__top"),
            i = document.querySelectorAll(".home-slider__line"),
            l = document.querySelectorAll(".home-slider__title"),
            c = 0,
            u = setInterval(function() {
                return d()
            }, 8e3),
            a = function(e) {
                n[e].classList.toggle("home-slider__item--showing"), setTimeout(function() {
                    s[e].classList.toggle("home-slider__top--showing"), i[e].classList.toggle("home-slider__line--showing"), l[e].classList.toggle("home-slider__title--showing")
                }, 300), r[e].classList.toggle("home-slider__control-item--showing")
            },
            d = function() {
                a(c), c = (c + 1) % n.length, a(c)
            };
        document.querySelector(".home-slider__control").addEventListener("click", function(e) {
            var t = e.target;
            if (t.classList.contains("home-slider__control-item")) {
                clearInterval(u), a(c);
                var o = t.getAttribute("data-currentSlide");
                a(o), c = o % n.length, u = setInterval(function() {
                    return d()
                }, 8e3)
            }
        })
    }, {}]
}, {}, [5]);