document.querySelector('#snippets')?.addEventListener('click', e => {
if (e.target.tagName === 'svg') {
    e.preventDefault();
    const snippet = e.target.parentNode.dataset.snippet;
    navigator.clipboard.writeText(snippet);
    console.log(snippet)
}
});
