$(window).load(function () {
    $(".se-pre-con").fadeOut("slow");
});
Mousetrap.bind('esc', function() {
    $('.port, .gallery ul').removeClass('item_open');
});
$(function () {
    $(".menu-toggle").click(function () {
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
    });
    $(".nav li a").click(function () {
        console.log("pressed");
        $("#mobile-menu").attr("class", "menu-toggle");
        console.log("after pressed");
        $("#nav-mob").attr("class", "nav");
    });
});
var aText = new Array(
    "<span class='terminal__text__span'>Hi, i'm Mahrez BenHamad</span>",
    "<span class='terminal__text__span'>a Python developer</span>",
    "<span class='terminal__text__span'>based in Tunisia</span>",
    "<span class='terminal__text__span'>i drink a lot of coffee</span>",
    "<span class='terminal__text__span'> Scroll a bit down to see my posts...</span>",
    "<span class='terminal__text__span'># # # # # # #</span>",
    "<span class='terminal__text__span'>find me on twitter <a href='https://twitter.com/rfkl16'>mahrezbh</a></span>",
    "<span class='terminal__text__span'>I hope you are suitably impressed by all this :) </span>",
    "<span class='terminal__text__span'>Have a G'day <3 </span>"
);
var iSpeed = 40;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;
var iTextPos = 0;
var sContents = '';
var iRow;

function Typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("Typewriter()", 200);
        }
    } else {
        setTimeout("Typewriter()", iSpeed);
    }
}

$(function () {
    $(".terminal").draggable();
});
var skills = {
    ht: 90,
    jq: 60,
    sk: 90,
    ph: 75,
    il: 90,
    in: 85,
    fl: 75
};
$.each(skills, function (key, value) {
    var skillbar = $("." + key);
    skillbar.animate(
        {
            width: value + "%"
        },
        3000,
        function () {
            $(".speech-bubble").fadeIn();
        }
    );
});
$(document).scroll(function () {
    var xx = document.getElementsByClassName("gallery");
    var a = xx[0].getBoundingClientRect().top + document.documentElement.scrollTop;
    $(".title-portfolio").toggleClass("title-portfolio_alt", $(document).scrollTop() >= a - 100);
});
$(document).scroll(function () {
    var xx = document.getElementsByClassName("contact");
    var a = xx[0].getBoundingClientRect().top + document.documentElement.scrollTop;
    $(".title-contact").toggleClass("title-contact_alt", $(document).scrollTop() >= a);
});
$(document).scroll(function () {
    var x = document.getElementsByClassName("cover");
    var aa = x[0].getBoundingClientRect().top + document.documentElement.scrollTop;
    $(".title-skills").toggleClass("title_skills_alt", $(document).scrollTop() >= aa + 370);
});
$('.gallery ul li a').click(function () {
    var itemID = $(this).attr('href');
    $('.gallery ul').addClass('item_open');
    $(itemID).addClass('item_open');
    return false;
});
$('.close').click(function () {
    $('.port, .gallery ul').removeClass('item_open');
    return false;
});
$(".gallery ul li a").click(function () {
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 900);
});
$("#nav_about").click(function () {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 2000);
});
$("#nav_portfolio").click(function () {
    $('html, body').animate({
        scrollTop: $(".gallery").offset().top
    }, 2000);
});
$("#nav_contact").click(function () {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});
