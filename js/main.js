var $window = $(window),
  $document = $(document),
  $html = $("html"),
  $body = $("body"),
  viewportwidth,
  viewportheight,
  slidingPanel,
  scrolled = $window.scrollTop(),
  isFirstPageView = !0;
function scrollAppear(s) {
  if (
    $body.hasClass("is-anim-ready") &&
    !s.hasClass("scroll-appear-is-inview") &&
    !s.hasClass("hide") &&
    !s.parents(".hide").length &&
    !s.hasClass("no-more-scroll-appear")
  ) {
    var i = $window.scrollTop();
    (i +
      viewportheight * (1 - parseInt(s.data("scroll-appear-offset")) / 100) >=
      s.offset().top ||
      i + viewportheight >= $document.height()) &&
      (s.hasClass("scroll-appear-is-inview") ||
        s.addClass("scroll-appear-is-inview"));
  }
}
function scrollToHashtagOnLoad() {
  if (window.location.hash) {
    var s = $(window.location.hash);
    s.length &&
      $("html,body").animate(
        { scrollTop: s.offset().top - $(".l-navigation").outerHeight() },
        1
      );
  }
}
function viewportSize() {
  void 0 !== window.innerWidth
    ? ((viewportwidth = window.innerWidth),
      (viewportheight = window.innerHeight))
    : void 0 !== document.documentElement &&
      void 0 !== document.documentElement.clientWidth &&
      0 !== document.documentElement.clientWidth
    ? ((viewportwidth = document.documentElement.clientWidth),
      (viewportheight = document.documentElement.clientHeight))
    : ((viewportwidth = document.getElementsByTagName("body")[0].clientWidth),
      (viewportheight = document.getElementsByTagName("body")[0].clientHeight));
}
function setApngSrc(s) {
  var i = s;
  i.attr("srcset", i.data("apng-srcset"));
}
function initScript() {
  isFirstPageView ||
    $("html, body").animate({ scrollTop: 0 }, 1, function () {
      scrollToHashtagOnLoad();
    });
  var s = $("#sliding-panel");
  $html.removeClass("no-js").addClass("has-js"),
    is.touchDevice()
      ? $html.addClass("is-touch-device")
      : $html.addClass("is-not-touch-device"),
    viewportSize(),
    $window.on("resize", viewportSize);
  var i = $(".c-loading").find("img");
  if (i.length) {
    var t = 0;
    isFirstPageView || (t = 200),
      setTimeout(function () {
        var s = Math.floor(Math.random() * i.length);
        i.removeClass("d-block").addClass("d-none"),
          i.eq(s).removeClass("d-none").addClass("d-block");
      }, t);
  }
  var e = $(".l-navigation"),
    n = !1,
    a = 0;
  function l() {
    "visible" === s.css("visibility") ||
      $body.hasClass("sliding-panel-is-animating") ||
      ((scrolled = $window.scrollTop()) > a
        ? (e
            .removeClass("l-navigation-is-top")
            .addClass("l-navigation-has-scrolled"),
          (n = !0))
        : n &&
          e
            .addClass("l-navigation-is-top")
            .removeClass("l-navigation-has-scrolled"));
  }
  $(".c-top-alert").length && (a = 40), l(), $window.on("scroll resize", l);
  var o = $(".l-navigation-brand");
  function r() {
    scrolled = $window.scrollTop();
    var s = $(".l-navigation-kickstarter").find(".btn-kickstarter-support");
    s.length &&
      (scrolled + viewportheight >= $document.height()
        ? s.addClass("btn-kickstarter-support-is-anim")
        : s.removeClass("btn-kickstarter-support-is-anim"));
  }
  Modernizr.on("apng", function (s) {
    s
      ? (o.addClass("apng"),
        o.on("mouseenter", function () {
          var s;
          setApngSrc($(this).find("img"));
        }))
      : o.addClass("no-apng");
  }),
    $window.on("scroll resize", r);
  var d = $(".m-trailer-featured-testimonials-items");
  d.length &&
    (d.on("init", function () {
      var s = d.find(".c-dots-nav");
      s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          );
    }),
    $window.on("resize", function () {
      var s = d.find(".c-dots-nav");
      s.find("li.list-inline-item").length ||
        (s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          )),
        setTimeout(function () {
          s.find("li.list-inline-item").length ||
            (s.find("li").addClass("list-inline-item"),
            s
              .find("button")
              .addClass("btn")
              .html("")
              .append(
                '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
              ));
        }, 100);
    }),
    d.slick({
      arrows: !1,
      autoplay: !0,
      autoplaySpeed: 4e3,
      dots: !0,
      dotsClass: "c-dots-nav c-dots-nav-blue list-unstyled list-inline mb-0",
      fade: !0,
      pauseOnHover: !1,
      pauseOnFocus: !1,
    }),
    d.slick("slickPause"),
    $window.on("scroll resize", function () {
      d.hasClass("scroll-appear-is-inview") && d.slick("slickPlay");
    }));
  var c = $(".rotative");
  if (c.length) {
    var p = $(".m-dynamic-lightning-featured-demo .img img"),
      u = p.length;
    
  }
  var g = $(".m-screenshots-featured-item .imgs");
  g.length &&
    (g.on("init", function () {
      var s = g.find(".c-dots-nav");
      s.wrap('<div class="c-dots-nav-wrapper text-center"></div>'),
        s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          );
    }),
    $window.on("resize", function () {
      var s = g.find(".c-dots-nav");
      s.parents(".c-dots-nav-wrapper").length ||
        (s.wrap('<div class="c-dots-nav-wrapper text-center"></div>'),
        s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          )),
        setTimeout(function () {
          s.parents(".c-dots-nav-wrapper").length ||
            (s.wrap('<div class="c-dots-nav-wrapper text-center"></div>'),
            s.find("li").addClass("list-inline-item"),
            s
              .find("button")
              .addClass("btn")
              .html("")
              .append(
                '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
              ));
        }, 100);
    }),
    g.slick({
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      dots: !0,
      dotsClass:
        "c-dots-nav c-dots-nav-with-bg c-dots-nav-with-bg-creme list-unstyled list-inline mb-0",
      speed: 800,
      touchMove: !1,
      prevArrow:
        '<button class="btn btn-arrow btn-arrow-prev btn-arrow-prev-offset d-none d-md-block"><svg aria-hidden="true" class="normal"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><span class="sr-only">Previous</span></button>',
      nextArrow:
        '<button class="btn btn-arrow btn-arrow-next btn-arrow-next-offset d-none d-md-block"><svg aria-hidden="true" class="normal"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><span class="sr-only">Next</span></button>',
      responsive: [{ breakpoint: 768, settings: { speed: 500 } }],
    }));
  var v = $(".img-popup-items"),
    h = {
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      dots: !0,
      dotsClass: "c-dots-nav c-dots-nav-blue list-unstyled list-inline mb-0",
      speed: 800,
      touchMove: !1,
      prevArrow:
        '<button class="btn btn-arrow btn-arrow-bordered btn-arrow-prev btn-arrow-popup"><svg aria-hidden="true" class="normal"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><span class="border-top"></span><span class="border-bottom"></span><span class="sr-only">Previous</span></button>',
      nextArrow:
        '<button class="btn btn-arrow btn-arrow-bordered btn-arrow-next btn-arrow-popup"><svg aria-hidden="true" class="normal"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><span class="border-top"></span><span class="border-bottom"></span><span class="sr-only">Next</span></button>',
      responsive: [{ breakpoint: 768, settings: { speed: 500 } }],
    };
  v.length &&
    (v.on("init", function () {
      var s = v.find(".c-dots-nav");
      s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          );
    }),
    $window.on("resize", function () {
      var s = v.find(".c-dots-nav");
      s.find("li.list-inline-item").length ||
        (s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          )),
        setTimeout(function () {
          s.find("li.list-inline-item").length ||
            (s.find("li").addClass("list-inline-item"),
            s
              .find("button")
              .addClass("btn")
              .html("")
              .append(
                '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
              ));
        }, 100);
    }),
    v.slick(h));
  var m = $(".m-characters-featured-tabs").find(".btn-tab"),
    b = $(".m-characters-featured-items"),
    f = !1;
  b.on("beforeChange", function (s, i, t, e) {
    if (!0 !== f) return !1;
    m.removeClass("is-active"), m.eq(e).addClass("is-active"), (f = !1);
  }),
    b.length &&
      (b.slick({
        adaptiveHeight: !0,
        arrows: !1,
        draggable: !1,
        fade: !0,
        swipe: !1,
        touchMove: !1,
      }),
      m.on("click", function () {
        f = !0;
        var s = $(this),
          i = parseInt(s.data("slide-index"));
        s.hasClass("is-active") || b.slick("slickGoTo", i, !1);
      }));
  var w = $(".m-characters-featured-item").find(".imgs");
  w.length &&
    (w.on("init", function () {
      var s = w.find(".c-dots-nav");
      s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          );
    }),
    $window.on("resize", function () {
      var s = w.find(".c-dots-nav");
      s.find("li.list-inline-item").length ||
        (s.find("li").addClass("list-inline-item"),
        s
          .find("button")
          .addClass("btn")
          .html("")
          .append(
            '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
          )),
        setTimeout(function () {
          s.find("li.list-inline-item").length ||
            (s.find("li").addClass("list-inline-item"),
            s
              .find("button")
              .addClass("btn")
              .html("")
              .append(
                '<svg aria-hidden="true"><use xlink:href="images/svg/sprite.svg#bullet"></use></svg>'
              ));
        }, 100);
    }),
    w.slick({
      autoplay: !1,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      dots: !0,
      dotsClass: "c-dots-nav c-dots-nav-beige list-unstyled list-inline mb-0",
      speed: 800,
      touchMove: !1,
      prevArrow:
        '<button class="btn btn-arrow btn-arrow-bordered btn-arrow-prev d-none d-lg-flex"><svg aria-hidden="true" class="normal"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><span class="border-top"></span><span class="border-bottom"></span><span class="sr-only">Previous</span></button>',
      nextArrow:
        '<button class="btn btn-arrow btn-arrow-bordered btn-arrow-next d-none d-lg-flex"><svg aria-hidden="true" class="normal"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><svg aria-hidden="true" class="hover"><use xlink:href="images/svg/sprite.svg#arrow-right"></use></svg><span class="border-top"></span><span class="border-bottom"></span><span class="sr-only">Next</span></button>',
      responsive: [{ breakpoint: 768, settings: { speed: 500 } }],
    })),
    $body.on("click", ".magnific-video", function (s) {
      s.preventDefault(),
        $(this)
          .magnificPopup({
            iframe: {
              titleSrc: function (s) {
                return s.el.attr("data-title");
              },
              patterns: {
                youtube: {
                  index: "youtube.com/",
                  id: "v=",
                  src: "//www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                  index: "vimeo.com/",
                  id: "/",
                  src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                twitch: {
                  index: "twitch.tv/",
                  id: "/videos/",
                  src: "https://player.twitch.tv/?autoplay=true&video=%id%",
                },
              },
              srcAction: "iframe_src",
            },
            type: "iframe",
            mainClass: "mfp-fade",
            closeMarkup:
              '<button title="%title%" type="button" class="btn btn-close btn-close-bordered mfp-close"><span class="ic-close"></span><span class="border-top"></span><span class="border-bottom"></span><span class="sr-only">&#215;</span></button>',
            removalDelay: 200,
          })
          .magnificPopup("open");
    }),
    $body.on("click", ".magnific-popup", function (s) {
      s.preventDefault();
      var i = parseInt($(this).data("img-index"));
      $(this)
        .magnificPopup({
          type: "inline",
          midClick: !0,
          mainClass: "mfp-fade",
          closeBtnInside: !0,
          closeMarkup:
            '<button title="%title%" type="button" class="btn btn-close btn-close-bordered mfp-close"><span class="ic-close"></span><span class="border-top"></span><span class="border-bottom"></span><span class="sr-only">&#215;</span></button>',
          removalDelay: 200,
          callbacks: {
            open: function () {
              $(".img-popup-items").length &&
                ($(".img-popup-items").slick("setPosition"),
                $(".img-popup-items").slick("slickGoTo", i, !0));
            },
          },
        })
        .magnificPopup("open");
    }),
    $body.on("click", ".mfp-close", function () {
      $.magnificPopup.close();
    }),
    (slidingPanel = s.slidingPanel({
      addBackgroundOverlay: !1,
      addCloseButton: !1,
      transitionDurationOnOpen: 200,
      transitionDurationOnClose: 200,
      onOpenBefore: function () {
        $(".btn-open-sliding-panel").addClass(
          "btn-open-sliding-panel-is-active btn-close-sliding-panel"
        );
      },
      onCloseBefore: function () {
        $(".btn-open-sliding-panel").removeClass(
          "btn-open-sliding-panel-is-active btn-close-sliding-panel"
        );
      },
    }));
  var y = $(".device-video");
  if (
    (y.length &&
      y.each(function () {
        enableInlineVideo($(this).get(0));
      }),
    !isFirstPageView)
  )
    try {
      wpcf7.initForm($(".wpcf7-form"));
    } catch (s) {}
  var C = $(".wpcf7"),
    k;
  function P() {
    clearTimeout(k);
    var s = $(".wpcf7-response-output").removeClass("wpcf7-display-none");
    k = setTimeout(function () {
      s.addClass("wpcf7-response-output-fade-out"),
        setTimeout(function () {
          s.attr("class", "wpcf7-response-output wpcf7-display-none");
        }, 200);
    }, 3e3);
  }
  C.find(".wpcf7-response-output").addClass("c-notification"),
    C.on("wpcf7submit", P),
    C.on("wpcf7invalid", P),
    C.on("wpcf7spam", P),
    C.on("wpcf7mailsent", P),
    C.on("wpcf7mailfailed", P);
}
!(function (s) {
  var i = 200;
  s(function () {
    var t = !1,
      e = 3e3;
    function n() {
      s("html,body").animate({ scrollTop: 0 }, 1, function () {
        $body.removeClass("is-loading"),
          $body.addClass("dom-is-loaded"),
          (isFirstPageView = !1),
          scrollToHashtagOnLoad(),
          setTimeout(function () {
            var i = s(".scroll-appear");
            $body.addClass("is-anim-ready"),
              Modernizr.on("apng", function (i) {
                i &&
                  s("img.apng").each(function () {
                    setApngSrc(s(this));
                  });
              }),
              i.each(function () {
                var i;
                scrollAppear(s(this));
              }),
              $window.on("scroll resize", function () {
                i.each(function () {
                  var i;
                  scrollAppear(s(this));
                });
              });
          }, i),
          s(".barba-container").addClass("is-loaded");
      });
    }
    $window.on("load", function () {
      (t = !0),
        setTimeout(function () {
          n();
        }, 100);
    }),
      setTimeout(function () {
        t || n();
      }, 3e3);
  });
  var t = Barba.BaseTransition.extend({
    start: function () {
      Promise.all([this.newContainerLoading, this.transitionOut()]).then(
        this.transitionIn.bind(this)
      );
    },
    transitionOut: function () {
      return (
        $body.removeClass("page-is-loaded").addClass("is-changing-page"),
        $body.hasClass("sliding-panel-is-open") &&
          setTimeout(function () {
            slidingPanel.close();
          }, 200),
        s(this.oldContainer).addClass("is-changing-page").delay(800).promise()
      );
    },
    transitionIn: function () {
      var t = this;
      (i = 200),
        s(this.newContainer).addClass("is-loaded"),
        s(this.oldContainer).hide(),
        s("html,body").animate({ scrollTop: 0 }, 1, function () {
          $body.removeClass("is-changing-page").addClass("page-is-loaded"),
            $body.removeClass("is-anim-ready"),
            (isFirstPageView = !1),
            setTimeout(function () {
              var i = s(".scroll-appear");
              $body.addClass("is-anim-ready"),
                Modernizr.on("apng", function (i) {
                  i &&
                    s("img.apng").each(function () {
                      setApngSrc(s(this));
                    });
                }),
                i.each(function () {
                  var i;
                  scrollAppear(s(this));
                }),
                $window.on("scroll resize", function () {
                  i.each(function () {
                    var i;
                    scrollAppear(s(this));
                  });
                });
            }, i);
        }),
        this.done();
    },
  });
  (Barba.Pjax.getTransition = function () {
    return t;
  }),
    Barba.Dispatcher.on("transitionCompleted", function () {
      if (!isFirstPageView)
        try {
          ga("send", "pageview", location.pathname);
        } catch (s) {}
      initScript();
    }),
    Barba.Dispatcher.on("newPageReady", function (i, t, e, n) {
      var a = s("<head />").html(
          s.parseHTML(
            n.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],
            document,
            !0
          )
        ),
        l = [
          "meta[name='keywords']",
          "meta[name='description']",
          "meta[property^='og']",
          "meta[name^='twitter']",
          "meta[itemprop]",
          "link[itemprop]",
          "link[rel='prev']",
          "link[rel='next']",
          "link[rel='canonical']",
        ].join(",");
      s("head").find(l).remove(), a.find(l).appendTo("head");
    }),
    Barba.Pjax.start(),
    Barba.Prefetch.init();
})(window.jQuery || window.$);
var $cAudioPlayerPlaylist = $(".c-audio-player-playlist"),
  $btnTogglePlaylist = $(".btn-toggle-playlist"),
  $btnClosePlaylist = $(".btn-close-playlist");
function openPlaylist() {
  $btnTogglePlaylist.hasClass("btn-toggle-playlist-is-active") ||
    ($btnTogglePlaylist.addClass("btn-toggle-playlist-is-active"),
    $btnTogglePlaylist.attr("aria-expanded", "true"),
    $cAudioPlayerPlaylist.addClass("c-audio-player-playlist-is-visible"));
}
function closePlaylist() {
  $btnTogglePlaylist.hasClass("btn-toggle-playlist-is-active") &&
    ($btnTogglePlaylist.removeClass("btn-toggle-playlist-is-active"),
    $btnTogglePlaylist.attr("aria-expanded", "false"),
    $cAudioPlayerPlaylist.removeClass("c-audio-player-playlist-is-visible"));
}
$btnTogglePlaylist.on("click", function () {
  var s;
  $(this).hasClass("btn-toggle-playlist-is-active")
    ? closePlaylist()
    : openPlaylist();
}),
  $document.keyup(function (s) {
    27 === s.keyCode &&
      $cAudioPlayerPlaylist.hasClass("c-audio-player-playlist-is-visible") &&
      closePlaylist();
  }),
  $body.click(function (s) {
    0 === $(s.target).closest(".c-audio-player").length && closePlaylist();
  }),
  $btnClosePlaylist.on("click", closePlaylist);
var $playlist = $("#playlist"),
  playlistArr = [],
  $btnPlayAudio = $(".btn-play-audio"),
  $progressBar = $(".progress-bar div"),
  $btnPlaylistSongs = $playlist.find("li .btn"),
  $cAudioPlayerControlsTitle = $(".c-audio-player-controls").find(
    ".infos-wrapper .title"
  ),
  Player = function (s) {
    (this.playlist = s), (this.index = 0);
  };
$playlist.find("li").each(function () {
  var s,
    i = $(this).find(".btn");
  playlistArr.push({
    title: i.data("song-title"),
    file: i.data("song-url"),
    length: i.data("song-length"),
    isNew: i.data("song-is-new"),
    howl: null,
  });
}),
  (Player.prototype = {
    play: function (s) {
      var i = this,
        t;
      s = "number" == typeof s ? s : i.index;
      var e = i.playlist[s];
      (t = e.howl
        ? e.howl
        : (e.howl = new Howl({
            src: [e.file],
            html5: !0,
            onplay: function () {
              requestAnimationFrame(i.step.bind(i)),
                $btnPlayAudio.addClass("btn-play-audio-is-active");
            },
            onload: function () {
              $btnPlayAudio.removeClass("btn-play-audio-is-loading");
            },
            onend: function () {
              i.skip("next");
            },
            onseek: function () {
              requestAnimationFrame(i.step.bind(i));
            },
          }))).play();
      var n = '<div class="text-truncate">' + e.title + "</div>";
      (n += '<div class="nowrap flex-shrink-0">&nbsp;(' + e.length + ")</div>"),
        !0 === e.isNew &&
          (n +=
            '<div class="nowrap flex-shrink-0">&nbsp;<div class="new">New!</div></div>'),
        $cAudioPlayerControlsTitle.html(n),
        "loaded" === t.state()
          ? $btnPlayAudio.addClass("btn-play-audio-is-active")
          : $btnPlayAudio
              .removeClass("btn-play-audio-is-active")
              .addClass("btn-play-audio-is-loading"),
        (i.index = s);
    },
    pause: function () {
      var s = this,
        i;
      this.playlist[this.index].howl.pause(),
        $btnPlayAudio.removeClass("btn-play-audio-is-active");
    },
    skip: function (s) {
      var i = this,
        t = 0;
      "prev" === s
        ? (t = this.index - 1) < 0 && (t = this.playlist.length - 1)
        : (t = this.index + 1) >= this.playlist.length && (t = 0),
        this.skipTo(t);
    },
    skipTo: function (s) {
      var i = this;
      this.playlist[this.index].howl && this.playlist[this.index].howl.stop(),
        $progressBar.css("width", "100%"),
        $btnPlaylistSongs.removeClass("btn-song-is-active"),
        $btnPlaylistSongs.eq(s).addClass("btn-song-is-active"),
        this.play(s);
    },
    seek: function (s) {
      var i = this,
        t = this.playlist[this.index].howl;
      t.playing() && t.seek(t.duration() * s);
    },
    step: function () {
      var s = this,
        i = this.playlist[this.index].howl,
        t,
        e = 100 - (((i.seek() || 0) / i.duration()) * 100 || 0) + "%";
      $progressBar.css("width", e),
        i.playing() && requestAnimationFrame(this.step.bind(this));
    },
    formatTime: function (s) {
      var i = Math.floor(s / 60) || 0,
        t = s - 60 * i || 0;
      return i + ":" + (t < 10 ? "0" : "") + t;
    },
  });
var player = new Player(playlistArr);
$btnPlayAudio.on("click", function () {
  $(this).hasClass("btn-play-audio-is-active") ? player.pause() : player.play();
}),
  $btnPlaylistSongs.on("click", function () {
    player.skipTo($(this).parents("li").index());
  });
