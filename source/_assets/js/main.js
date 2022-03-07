window.docsearch = require('docsearch.js');

import hljs from 'highlight.js/lib/core';

hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));

document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
});

function currentURL() {
    return window.location.href;
}

function docsifyPage() {
    var items = currentURL().split('#', 2);

    if (items.length < 2) {
        return null;
    }

    return items[1];
}

function redirectFromDocsifyPage() {
    var page = docsifyPage();

    if (page) {
        window.location.href = '/docs' + page.toLowerCase();
    }
}

if (docsifyPage()) {
    redirectFromDocsifyPage();
}
