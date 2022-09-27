let copypopup = document.createElement('output');
copypopup.classList.add('popup');
copypopup.textContent = '☑️ Copied!';
document.body.appendChild(copypopup);

copied = _ => {
    e.preventDefault();
    const snippet = e.target.parentNode.dataset.snippet;
    navigator.clipboard.writeText(snippet);
    console.log(snippet);
    document.body.classList.add('copied');
    setTimeout(() => document.body.classList.remove('copied'), 1500);
};

document.querySelector('#snippets')?.addEventListener('click', e => {
if (e.target.tagName === 'svg') {
    copied();
}
if (e.target.tagName === 'BUTTON') {
    copied();
}
});

