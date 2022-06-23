const fs = require('fs-extra');
const concat = require('concat');

build = async() => {
    const files = [
        './dist/web-component-test/runtime.js',
        './dist/web-component-test/polyfills.js',
        './dist/web-component-test/main.js'
    ];

    await fs.ensureDir('widget');
    await concat(files, 'widget/news-widget.js');
}
build();