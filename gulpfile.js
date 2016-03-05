"use strict";

// 引用
var gulp = require("gulp");
var browserify = require("gulp-browserify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var del = require("del");
var merge = require("merge-stream");
var rename = require("gulp-rename");


// 错误监听
var errorHandler = function (err) {
  console.error(err);
};


// 复制文件
gulp.task("copy", function () {
  return merge(
    gulp.src([
      "src/jquery.cursor.js"
    ])
      .pipe(gulp.dest("dist"))
  );
});

// js编译压缩
gulp.task("js", ["copy"], function () {
  return gulp.src("src/jquery.cursor.js")

    .pipe(sourcemaps.init())
    .pipe(browserify().on("error", errorHandler))

    .pipe(uglify())

    .pipe(sourcemaps.write("./"))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("dist"));

});


// 清理文件
gulp.task("c", function () {
  return del([
    'dist'
  ]);
});


// 默认任务
gulp.task("default", ["copy", "js"]);
