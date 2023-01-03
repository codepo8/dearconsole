---
title: Dear Console, show me the element at the current cursor position
name: Show me the element at the current cursor position
layout: default
codeexample: 'document.addEventListener(±mousemove±,e=>{console.log(document.elementFromPoint(e.x,e.y))})'
tags: html debugging
---

{% highlight javascript %}
document.addEventListener('mousemove', e => {
    console.log(
        document.elementFromPoint(e.x,e.y)
    )
})
{% endhighlight %}
