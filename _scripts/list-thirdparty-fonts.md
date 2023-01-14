---
title: Dear Console, give me a list of all third party fonts
name: Give me a list of all third party fonts
# This is the code example that will be added to the copy buttons
# Every instance of ' needs to be replaced with ± and double
# quotes should not be used
codeexample: 'copy(Array.from(document.fonts.keys()).map(font => font.family))'
tags: fonts
layout: default
author: Pankaj Parashar
authorlink: https://pankajparashar.com
---

{% highlight javascript %}
copy(
  Array.from(document.fonts.keys())
       .map(font => font.family)
)
{% endhighlight %}
