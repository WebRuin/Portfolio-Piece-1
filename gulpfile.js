// Include gulp [Gulp Core & plugins for tasks]
var gulp = require("gulp");

// Include Our Plugins
var jshint = require("gulp-jshint"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    express = require("express"),
    postcss = require('gulp-postcss'),
    imageop = require('gulp-image-optimization'),
    app = express();

gulp.task("express", function() {
    app.use(express.static(__dirname));
    app.listen(6006, "0.0.0.0"); // <- CHANGE PORT NUMBER TO PREFERRED CHOICE
});

// Lint Task [Checks any JS in our source/javascript/ directory and makes sure there are no errors]
gulp.task("lint", function() {
    return gulp.src("./source/javascript/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

// Compile Our Sass [Compiles our Sass files in source/sass/directory into CSS and saves CSS in public/stylesheet]
gulp.task("scss", function() {
    gulp.src('./source/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheet'))
});

// Concatenate & Minify JS [Concatenates all JS files in source/javascript/ directory and saves output to public/javascript]
// The concatenated file is then minified, renamed and saved
gulp.task("scripts", function() {
    return gulp.src("./source/javascript/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./public/javascript"))
        .pipe(rename("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./public/javascript"));
});
 
gulp.task('imagemin', function(cb) {
    gulp.src(['source/images/*.png','source/images/*.jpg','source/images/*.gif','source/images/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});

// gulp.task('css', function () {
//     return gulp.src('./public/stylesheet/*.css')
//         .pipe(postcss())
//         .pipe(gulp.dest('./public/stylesheet'));
// });

// Watch Files For Changes [Runs tasks as we make changes to our files]
gulp.task("watch", function() {
    gulp.watch("./source/javascript/*.js", ["lint", "scripts"]);
    gulp.watch("./source/scss/*.scss", ["scss"]);
});

// Default Task [Grouped reference to our other tasks]
gulp.task("default", ["express", "lint", "scss", "scripts", "watch"]);
