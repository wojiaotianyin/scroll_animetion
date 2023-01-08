const gulp = require("gulp");
const all = require("gulp-all");
const pug = require("gulp-pug");
const typescript = require("gulp-typescript");

function defaultTask() {
  return all(
    gulp
      .src(["*.pug", "!_*.pug"]) // pugフォルダ内の.pugの拡張子のファイルを変換対象にしてください、ただし、_（アンダーバー）から始まるファイルは変換させないでね。
      .pipe(
        pug({
          pretty: true,
        })
      )
      .pipe(gulp.dest("./")),
      gulp
        .src("src/*.ts")
        .pipe(
          typescript({
            pretty: true,
          })
        )
        .js.pipe(gulp.dest("./src"))
  );
}
gulp.task('build', defaultTask);
