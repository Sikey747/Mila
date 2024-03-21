"use strict";

var root = document.documentElement;
var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
var marqueeContent = document.querySelector("ul.marquee-content");
root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (var i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}