// ==UserScript==
// @name         luaga
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  luaga
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
'use strict';

function removeCaptchaDisable() {

    const element = document.getElementById("invisibleCaptchaShortlink");

    if (element && element.hasAttribute("disabled")) {
        element.removeAttribute("disabled");
        console.log("Đã bỏ disabled nút");
    }

}

window.addEventListener("load", removeCaptchaDisable);

const observer = new MutationObserver(removeCaptchaDisable);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

})();
