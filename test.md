{% for s in site.scripts %}
  <h2>
    <a href="{{ s.url }}">
      {{ s.name }} - {{ s.position }}
    </a>
  </h2>
  <p>{{ s.content | markdownify }}</p>
{% endfor %}