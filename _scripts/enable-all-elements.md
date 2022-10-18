---
title: Dear Console, turn on all the disabled elements in the page
name: Turn on all disabled elenents in the page
layout: default
codeexample: '$$(±[disabled]±).forEach(e => e.disabled = false)'
tags: disabledelements,forms
---

{% highlight javascript %}
$$('[disabled]').forEach(e => e.disabled = false)
{% endhighlight %}
