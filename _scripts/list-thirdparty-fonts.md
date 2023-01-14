---
title: Dear Console, give me a list of all third party fonts
name: Give me a list of all third party fonts
codeexample: 'copy(Array.from(document.fonts.keys()).map(font => font.family+±-±+font.weight))'
tags: fonts
layout: default
author: Pankaj Parashar
authorlink: https://pankajparashar.com
---

{% highlight javascript %}
copy(
  Array.from(document.fonts.keys())
       .map(font => font.family + '-' + font.weight)
)
{% endhighlight %}
