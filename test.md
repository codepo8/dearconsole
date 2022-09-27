
<ul id="snippets">
{% for s in site.scripts %}
  <li>
    <a href="/dearconsole{{ s.url }}">{{ s.name }}</a>
    <button data-snippet="{{ s.snippet }}"></button>
  </li>
{% endfor %}
</ul>