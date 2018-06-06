// import dependencies
import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';

const server = browserSync.create();

// setting browser sync

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    tunnel: true,
    tunnel: 'pcgrin',
    server: {
      baseDir: './public'
    }
  });
  done();
}

// setting paths
const scss_path = {
  scripts: {
    src: './dev/scss/*.scss',
    dest: './public/css/'
  }
};

const js_path = {
  scripts: {
    src: './dev/js/*.js',
    dest: './public/js/'
  }
};

const html_path = {
  scripts: {
    src: './dev/*.html',
    dest: './public/'
  }
};

// gulp task
function scss() {
  return gulp
    .src(scss_path.scripts.src, {
      sourcemaps: true
    })
    .pipe(sass())
    .pipe(gulp.dest(scss_path.scripts.dest));
}

function babel_task() {
  return gulp
    .src(js_path.scripts.src, {
      sourcemaps: true
    })
    .pipe(babel())
    .pipe(gulp.dest(js_path.scripts.dest));
}

function html() {
  return gulp
    .src(html_path.scripts.src, {
      sourcemaps: true
    })
    .pipe(gulp.dest(html_path.scripts.dest));
}

//watching
const watch_scss = () => gulp.watch(scss_path.scripts.src, gulp.series(scss, reload));
const watch_babel = () => gulp.watch(js_path.scripts.src, gulp.series(babel_task, reload));
const watch_html = () => gulp.watch(html_path.scripts.src, gulp.series(html, reload));

const dev = gulp.parallel(serve, watch_scss, watch_babel, watch_html);
export default dev;