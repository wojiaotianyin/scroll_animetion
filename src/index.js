"use strict";
exports.__esModule = true;
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
require("../style/index.css");
window.addEventListener("load", function () {
    gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
    var area = document.querySelector(".js-area");
    var items = document.querySelectorAll(".js-item");
    var num = items.length;
    items.forEach(function (item, i) {
        gsap_1.gsap.set(item, {
            zIndex: num - i
        });
    });
    gsap_1.gsap.set(".js-item04", {
        scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%"
    });
    gsap_1.gsap.set(".js-item05", {
        scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%"
    });
    gsap_1.gsap.set(".js-item06", {
        scale: 0, width: "100%", height: "100%", left: 0, top: 0
    });
    var tl = gsap_1.gsap.timeline({
        scrollTrigger: {
            trigger: area,
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true
        }
    });
    tl.to(".js-item04", { scale: 1, left: "-37.5%", top: "5%", duration: 1 }, "-=0.5")
        .to(".js-item04", { opacity: 0, duration: 0.2 }, "-=0.2")
        .to(".js-item05", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
        .to(".js-item05", { opacity: 0, duration: 0.2 }, "-=0.2")
        .to(".js-item06", { scale: 1, duration: 1 }, "-=0.5");
});
