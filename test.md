
<ul id="snippets">
{% for s in site.scripts %}
  <li>
    <a href="/dearconsole{{ s.url }}">{{ s.name }}</a>
    <button data-snippet="{{ s.codeexample }}"></button>
  </li>
{% endfor %}
</ul>