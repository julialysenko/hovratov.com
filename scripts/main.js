$(document).on('ready', function() {
      $(".main").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000
      });

      $('.projects').slick({
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            arrows: false,
            centerMode: true,
            autoplay: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            centerMode: true,
            autoplay: true,
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    });
});

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

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).on('ready', function(){
    setTimeout(function () {
        $('.mainlogo-block').css("opacity", "0");
    }, 2000)
    setTimeout(function () {
        $('.mainTopSlider').css("opacity", "1");
    }, 1000)
});

var visibleAboutUs = 0, visibleProjectsTitle = 0, visibleOfficesTitle = 0, visibleOffices = 0, visibleStatistics = 0, goes = new Array();
setTimeout(function () {
$(function () {
    $(window).scrollTop($(window).scrollTop() + 1);
    $(window).scrollTop($(window).scrollTop() - 1);

    $("div.mainTopSlider div.sliderPoints div.point").click(function () {
        var number = parseInt($(this).attr("id").substring(5, $(this).attr("id").length)) - 1;
        var bigTexts = [$("#sliderBigText1").val(), $("#sliderBigText2").val(), $("#sliderBigText3").val(), $("#sliderBigText4").val(), $("#sliderBigText5").val()];
        var smallTexts = [$("#sliderSmallText1").val(), $("#sliderSmallText2").val(), $("#sliderSmallText3").val(), $("#sliderSmallText4").val(), $("#sliderSmallText5").val()];
        var images = $("div.mainTopSlider div.topSliderBG img");
        images.css({"opacity": 0});
        var image = images.eq(number);
        image.css({"transition": "transform 0s ease-in-out, opacity 1s ease-in-out"});
        image.css({"-webkit-transition": "-webkit-transform 0s ease-in-out, opacity 1s ease-in-out"});
        setTimeout(function () {
            $("div.mainTopSlider div.bigText").animate({"top": 0, "opacity": 0}, 200);
            $("div.mainTopSlider div.smallText").animate({"margin-left": "100%", "opacity": 0}, 200);
            $("div.mainTopSlider div.sliderLine").animate({"width": 0}, 200);
            image.css({"transform": "scale(1)", "-webkit-transform": "scale(1)", "-ms-transform": "scale(1)"});
            setTimeout(function () {
                image.css({"opacity": 1})
            }, 100)
        }, 1000);
        while (number >= bigTexts.length) {
            number -= bigTexts.length
        }
        var goid = goes.length;
        goes[goid - 1] = 1;
        goes[goid] = 0;
        var thisPoint = $(this);
        setTimeout(function () {
            images.css({"transform": "scale(1)", "-webkit-transform": "scale(1)", "-ms-transform": "scale(1)"});
            go(bigTexts, smallTexts, number, image, thisPoint, goid)
        }, 2000)
    });
    var bigTexts = [$("#sliderBigText1").val(), $("#sliderBigText2").val(), $("#sliderBigText3").val(), $("#sliderBigText4").val(), $("#sliderBigText5").val()];
    var smallTexts = [$("#sliderSmallText1").val(), $("#sliderSmallText2").val(), $("#sliderSmallText3").val(), $("#sliderSmallText4").val(), $("#sliderSmallText5").val()];
    var image = $("div.mainTopSlider div.topSliderBG img.first");
    var point = $("div.mainTopSlider div.sliderPoints div.point.first");
    goes[0] = 0;
    go(bigTexts, smallTexts, 0, image, point, 0);

});
function go(bigTexts, smallTexts, textCounter, image, point, id) {
    if (goes[id] != 1) {
        $("div.mainTopSlider div.sliderPoints div.point").each(function () {
            $(this).removeClass("active")
        });
        point.addClass("active");
        var nextPoint = null;
        if (point.hasClass("last")) {
            nextPoint = $("div.mainTopSlider div.sliderPoints div.point.first")
        } else {
            nextPoint = point.next()
        }
        var bigTextDiv = $("div.mainTopSlider div.bigText");
        var smallTextDiv = $("div.mainTopSlider div.smallText");
        moveText(bigTextDiv, bigTexts[textCounter], smallTextDiv, smallTexts[textCounter]);
        textCounter++;
        if (textCounter >= bigTexts.length) {
            textCounter = 0
        }
        var nextImage = null;
        if (image.hasClass("last")) {
            nextImage = $("div.mainTopSlider div.topSliderBG img.first")
        } else {
            nextImage = image.next()
        }
        $("div.mainTopSlider div.topSliderBG img").css({
            "transform": "scale(1)",
            "-webkit-transform": "scale(1)",
            "-ms-transform": "scale(1)"
        });
        image.css({"transition": "transform 6s ease-in-out, opacity 2s ease-in-out"});
        image.css({"-webkit-transition": "-webkit-transform 6s ease-in-out, opacity 2s ease-in-out"});
        image.css({"transform": "scale(1.2)", "-webkit-transform": "scale(1.2)", "-ms-transform": "scale(1.2)"});
        setTimeout(function () {
            if (goes[id] != 1) {
                image.css({"opacity": 0});
                nextImage.css({"opacity": 1});
                setTimeout(function () {
                    go(bigTexts, smallTexts, textCounter, nextImage, nextPoint, id)
                }, 2000)
            }
        }, 6000)
    }
}
function moveText(bigTextDiv, bigText, smallTextDiv, smallText) {
    bigTextDiv.animate({"top": 0, "opacity": 0}, 600, function () {
        bigTextDiv.empty();
        bigTextDiv.html(bigText)
    });
    smallTextDiv.animate({"margin-left": "100%", "opacity": 0}, 600, function () {
        smallTextDiv.empty();
        smallTextDiv.html(smallText)
    });
    var line = $("div.mainTopSlider div.sliderLine");
    line.animate({"width": 0}, 600);
    var sliderButton = $("div.mainTopSlider div.sliderButton");
    bigTextDiv.animate({"top": "90px", "opacity": 1}, 600);
    line.animate({"width": "220px"}, 600);
    smallTextDiv.animate({"margin-left": "0%", "opacity": 1}, 600, function () {
        sliderButton.animate({"opacity": 1}, 600)
    })
}
}, 2000);