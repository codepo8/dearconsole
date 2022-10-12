---
title: Dear Console, outline all elements on the page with a unique color per tag
name: Outline all elements on the page with a unique color per tag
layout: default
codeexample: '$$(±*±).forEach(el => el.style.outline=`1px solid hsl(${ el.tagName.split(±±).reduce((sum, c)=> sum+=c.charCodeAt(0), 0) % 360 },99%,50%)`)'
tags: css debugging
author: Pankaj Parashar
authorlink: https://pankajparashar.com
---

{% highlight javascript %}
$$('*').forEach(el => {
    let col = el.tagName.split('').
        reduce( (sum, c) => sum+=c.charCodeAt(0), 0) % 360;
    el.style.outline = `1px solid hsl(${col}, 99%, 50%)`
})
{% endhighlight %}
