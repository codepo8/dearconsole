---
title: Dear Console, give me a list of all render blocking resources
name: Give me a list of all render blocking resources
layout: default
codeexample: 'window.performance.getEntriesByType('resource').filter(entry => entry.renderBlockingStatus === 'blocking' ).map(({name}) => name)'
tags: rendering
---

{% highlight javascript %}
copy(
  window.performance.getEntriesByType('resource')
                    .filter(entry => entry.renderBlockingStatus === 'blocking' )
                    .map(({name}) => name)
                    .join('\n')
)
{% endhighlight %}
