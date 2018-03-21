# A basic setup with Gulp and Express!

### Get started:
1. vagrant up : installs nodejs and gulp globally (after this, vagrant not needed)
2. npm install : installs all other dependencies in package.json

### Basics:
1. ./source/ : where JavaScript and Sass files are written and located
2. ./public/ : all buildfiles gathered here (NEVER EVER TOUCH)!
3. HTML-file index.html located in root for easy access if using gh-pages.

### Workflow:
1. Start GulpTasks: In terminal: "gulp" (alternative click gulp-icon) - builds js & sass files | Starts express server.
2. If Error -> might be due to occupied port locally. If that is the case -> change port for express in gulpfile.js
2. See page locally at: localhost:0000 (port number = port number located in gulpfile.js)

### Read more about...
[Gulp](http://gulpjs.com/ "Gulp")
[Sass](http://sass-lang.com/ "Sass")
[Setup GH-pages](https://pages.github.com/ "GH-pages")
