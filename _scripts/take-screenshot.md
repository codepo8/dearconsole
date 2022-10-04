---
title: Dear Console, give me a screenshot of the page
name: Give me a screenshot of the page
layout: default
codeexample: 'console.screenshot()'
tags: screenshot
author: Pankaj Parashar
authorlink: https://pankajparashar.com
---

Firefox:  
{% highlight javascript %}
:screenshot                       // viewport
:screenshot --clipboard           // copy to clipboard
:screenshot --fullpage            // full page
:screenshot --selector .header    // node screenshot
{% endhighlight %}

Safari:  
{% highlight javascript %}
console.screenshot()              // viewport
console.screenshot($('html'))     // full page
console.screenshot($('.header'))  // node screenshot
{% endhighlight %}
