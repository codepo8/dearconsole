---
title: Dear Console, outline all elements on the page with a unqiue color per tag
name: Outline all elements on the page with a unqiue color per tag
layout: default
codeexample: '$$(±*±).forEach(e => e.style.outline=`1px solid hsl(${ el.tagName.split(±±).reduce((sum, c)=> sum+=c.charCodeAt(0), 0) % 360 },99%,50%)`)'
tags: css debugging
---

{% highlight javascript %}
$$('*').forEach(el => 
        el.style.outline = `1px solid hsl(${ 
                el.tagName.split('').reduce((sum, c)=> sum+=c.charCodeAt(0), 0) % 360
        }, 99%, 50%)`
)
{% endhighlight %}
