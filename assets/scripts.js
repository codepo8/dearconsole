let copypopup = document.createElement('output');
copypopup.classList.add('popup');
copypopup.textContent = '☑️ Copied!';
document.body.appendChild(copypopup);

const showcopied = snippet => {
    snippet = snippet.replaceAll('±',"'");
    navigator.clipboard.writeText(snippet);
    console.log('Welcome to Console, paste away!');
    document.body.classList.add('copied');
    setTimeout(() => document.body.classList.remove('copied'), 1500);
};
document.querySelector('#snippets')?.addEventListener('click', e => {
    let y = e.target.getBoundingClientRect().bottom;    
    document.documentElement.style.setProperty('--mouse-y', y);
    if (e.target.tagName === 'svg') {
        showcopied(e.target.parentNode.dataset.snippet);
    }
    if (e.target.tagName === 'BUTTON') {
        showcopied(e.target.dataset.snippet);
    }
});
const filterlist = tag => {
    document.querySelectorAll('#snippets li').forEach(li => {
        if (li.classList.contains(tag) || tag === 'all') {
            li.classList.remove('hidden');
        } else {
            li.classList.add('hidden');
        }
    });
};

document.querySelector('#tags')?.addEventListener('click', e => {
if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    filterlist(e.target.dataset.tag);
}
});

