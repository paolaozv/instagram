var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
var clean = require("gulp-clean-css");
var watch = require("gulp-watch");

gulp.task("lab", function() {
	console.log("Funcionando");
});

gulp.task("webserver", function() {
	gulp.src("public/")
		.pipe(webserver({
			fallback: "index.html",
			livereload: true,
			directoryListing: false,
			open: true
		}));
});

gulp.task("sass", function() {
	return gulp.src("./src/sass/main.scss")
			   .pipe(sass())
			   .pipe(gulp.dest("./public/css"));
});

gulp.task("clean", function() {
	return gulp.src("css/*.css")
			   .pipe(clean({
			   		compatibility: "ie8"
			   }))
			   .pipe(gulp.dest("public"));
});

gulp.task("watch", function(){
	gulp.watch("./sass/**/*", ["sass"]);
});

gulp.task("default", ["watch", "sass", "clean", "webserver"]);