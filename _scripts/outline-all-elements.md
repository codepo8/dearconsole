---
title: Dear Console, outline all elements on the page with random colors
name: Outline all elements on the page with random colors
layout: default
codeexample: '$$(±*±).forEach(e => e.style.outline=`1px solid hsl(${Math.random()*360},99%,50%)`)'
tags: css debugging
---

{% highlight javascript %}
$$('*').forEach(e => 
  e.style.outline = `1px solid hsl(${Math.random()*360}, 99%, 50%)`
)
{% endhighlight %}
