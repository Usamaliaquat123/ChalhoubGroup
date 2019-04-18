const merge = require('concat');

const files = [
    './dist/challenge/runtime.js',
    './dist/challenge/polyfills.js',
    // './dist/challenge/scripts.js',
    './dist/challenge/main.js'
]

merge(files, './dist/challenge/challenge.js');
console.info('file generated');