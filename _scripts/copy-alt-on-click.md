---
title: Dear Console, allow me to copy the alternative text of images by clicking them
name: Allow me to copy the alternative text of images by clicking them
codeexample: '$(±body±).addEventListener(±click±,e => {let alt = e.target.alt;if(alt){navigator.clipboard.writeText(alt);console.log("Copied:\n" + alt);e.preventDefault()}'
tags: accessibility, images, alternativetext
layout: default
---

{% highlight javascript %}
$('body').addEventListener('click',e => {
    let alt = e.target.alt;
    if (alt) {
        navigator.clipboard.writeText(alt);
        console.log("Copied:\n" + alt);
        e.preventDefault()
    }
})
{% endhighlight %}

