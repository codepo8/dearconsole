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

const snippets = document.querySelector('#snippets');
const snippet = document.querySelectorAll('.snippet');
const code = document.querySelectorAll('.code');
const copy = document.querySelectorAll('.copy');
const copied = document.querySelectorAll('.copied');

snippets?.addEventListener('click', e => {
    let y = e.target.getBoundingClientRect().bottom;    
    document.documentElement.style.setProperty('--mouse-y', y);
    if (e.target.tagName === 'svg') {
        showcopied(e.target.parentNode.dataset.snippet);
    }
    if (e.target.tagName === 'BUTTON') {
        showcopied(e.target.dataset.snippet);
    }
});

function showcopied(snippet) {
    for (let i = 0; i < snippet.length; i++) {
        if (snippet[i].dataset.snippet === snippet) {
            snippet[i].querySelector('.code').classList.toggle('show');
            snippet[i].querySelector('.copied').classList.toggle('show');
            setTimeout(() => {
                snippet[i].querySelector('.code').classList.remove('show');
                snippet[i].querySelector('.copied').classList.remove('show');
            }, 2000);
        }
    }
}

const filterlist = tag => {
    let all = 0;
    let parent = document.querySelector('#snippets');
    document.querySelectorAll('#snippets li').forEach(li => {
        if (li.classList.contains(tag) || tag === 'all') {
            li.classList.remove('hidden');
            all++;
        } else {
            li.classList.add('hidden');
        }
    });
    if (all > 1) {
        parent.classList.add('multicolumn');
    } else {
        parent.classList.remove('multicolumn');
    }
};

document.querySelector('#tags')?.addEventListener('click', e => {
if (e.target.tagName === 'BUTTON') {
    e.preventDefault();
    filterlist(e.target.dataset.tag);
}
});