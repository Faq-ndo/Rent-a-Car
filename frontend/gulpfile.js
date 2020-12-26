const gulp = require("gulp");
const { src, dest } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const purgecss = require("gulp-purgecss");
const imagemin = require("gulp-imagemin");
const gls = require("gulp-live-server");
const useref = require("gulp-useref");
const uglify = require("gulp-uglify-es").default;

function minifyHtml() {
  return src("dist/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

function minifyJs() {
  return src("dist/scripts/*.js").pipe(uglify()).pipe(dest("dist/scripts"));
}

function minifyCss() {
  return src("dist/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/css"));
}

function autoPrefixer() {
  src("src/assets/*.css")
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .pipe(dest("dist"));
}

function purgeCss() {
  return src("dist/css/*.css")
    .pipe(
      purgecss({
        content: ["*.html"],
      })
    )
    .pipe(dest("dist/css"));
}

function imageMin() {
  src("src/assets/images/*.jpg").pipe(imagemin()).pipe(dest("dist/images"));
}

function liveServer() {
  const serve = gls.static("dist", 8888);
  serve.start();
}

function useRef() {
  return src("./*.html").pipe(useref()).pipe(dest("dist"));
}

exports.minifyHtml = minifyHtml;
exports.minifyCss = minifyCss;
exports.autoPrefixer = autoPrefixer;
exports.purgeCss = purgeCss;
exports.imageMin = imageMin;
exports.liveServer = liveServer;
exports.useRef = useRef;
exports.minifyJs = minifyJs;

gulp.task("default", gulp.series(useRef, minifyJs, minifyHtml, minifyCss, purgeCss, imageMin, liveServer));
