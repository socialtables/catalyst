var gulp = require("gulp");

var SRC = "./src/**/*.js*"

var defaultTasks = ["build-examples", "test"];

gulp.task("build-examples", require("./gulp/tasks/build-examples"));
gulp.task("test", require("./gulp/tasks/test"));

gulp.task("default", defaultTasks);

/* WATCH */
gulp.task("watch", defaultTasks, function () {
  gulp.watch(SRC, defaultTasks);
});