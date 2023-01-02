---
title: Dear Console, show me the element at the current cursor position
name: show me the element at the current cursor position
layout: default
codeexample: '$$(±*±).forEach(el => el.style.outline=`1px solid hsl(${ el.tagName.split(±±).reduce((sum, c)=> sum+=c.charCodeAt(0), 0) % 360 },99%,50%)`)'
tags: html debugging
---

{% highlight javascript %}
document.addEventListener(±mousemove±, e => {
    console.log(
        document.elementFromPoint(e.x,e.y)
    )
})
{% endhighlight %}