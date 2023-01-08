import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../style/index.css";

window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);
    const area = document.querySelector(".js-area");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;
    items.forEach((item, i) => {
        gsap.set(item, {
            zIndex: num - i,
        });
    });
    gsap.set(".js-item04", {
        scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item05", {
        scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
    });
    gsap.set(".js-item06", {
        scale: 0, width: "100%", height: "100%", left: 0, top: 0,
    });
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: area, //トリガー
            start: "top top", //開始位置
            end: "+=4000", //終了位置
            scrub: true, //ピン留め
            pin: true, //スクロール量に応じて動かす
        }
    });
    tl.to(".js-item04", { scale: 1, left: "-37.5%", top: "5%", duration: 1 }, "-=0.5")
        .to(".js-item04", { opacity: 0, duration: 0.2 }, "-=0.2")
        .to(".js-item05", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
        .to(".js-item05", { opacity: 0, duration: 0.2 }, "-=0.2")
        .to(".js-item06", { scale: 1, duration: 1 }, "-=0.5")

});
