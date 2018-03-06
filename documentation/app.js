var markdownpdf = require("markdown-pdf");
var mdDocs = ["readme.md"],
    bookPath = "out/documentation.pdf";
var options = {
    paperFormat: 'A4',
    cssPath: './css/style.css',
    highlightCssPath: './node_modules/markdown-pdf/css/highlight.css'
};
markdownpdf(options).concat.from(mdDocs).to(bookPath, function () {
    console.log("Created", bookPath);
});