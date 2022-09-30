---
title: Dear Console, give me a list of all third party scripts
name: Give me a list of all third party scripts
codeexample: 'Array.from(document.scripts).map(script => script.src).filter(src => src && src.startsWith(window.location.origin))'
tags: scripts
layout: default
---

{% highlight javascript %}
copy(
  Array.from(document.scripts)
       .map(script => script.src)
       .filter(src => src && !src.startsWith(window.location.origin))
       .join('\n')
 )
{% endhighlight %}
