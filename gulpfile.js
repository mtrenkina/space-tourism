import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';
const svgmin = require("gulp-svgmin");
import sync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';
import imageminMozjpeg from 'imagemin-svgo';
import fileinclude from 'gulp-file-include';
let uglify = require('gulp-uglify-es').default;
import babel from 'gulp-babel';
import ttfToWoff2 from 'gulp-ttftowoff2';
import ttfToWoff from 'gulp-ttf-to-woff';
import rigger from 'gulp-rigger';
const webp = require('gulp-webp');

const sourceFolder = 'source';
const buildFolder = 'build';
const cssPreprocessor = 'scss';

const path = {
  build: {
    html: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  source: {
    source: `${sourceFolder}/`,
    html: `${sourceFolder}/html/*.html`,
    js: `${sourceFolder}/js/script.js`,
    sass: `${sourceFolder}/${cssPreprocessor}/style.${cssPreprocessor}`,
    img: `${sourceFolder}/img/**/*.*`,
    icons: `${sourceFolder}/img/icons/icon-*.svg`,
    webp: `${sourceFolder}/img/**/*.{jpg,png}`,
    fonts: `${sourceFolder}/fonts/**/*.ttf`,
  },
  watch: {
    html: `${sourceFolder}/**/*.html`,
    js: `${sourceFolder}/js/*.js`,
    style: `${sourceFolder}/${cssPreprocessor}/**/*.${cssPreprocessor}`,
    img: `${sourceFolder}/img/**/*.*`,
    fonts: `${sourceFolder}/fonts/**/*.*`,
  },
  clean: `./${buildFolder}`,
};

// HTML assembling
export const html = () => {
  return gulp
    .src('source/index.html')
    .pipe(
      fileinclude({
        prefix: '@@',
      })
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(sync.reload({ stream: true }));
};

// Styles assembling
export const styles = () => {
  return gulp
    .src(path.source.sass)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename('styles.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(path.build.css))
    .pipe(sync.reload({ stream: true }));
};

// JS assembling
export const scripts = () => {
  return gulp
    .src(path.source.js)
    .pipe(sourcemap.init())
    .pipe(rigger())
    .pipe(uglify())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(rename('script.min.js'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest(path.build.js))
    .pipe(sync.reload({ stream: true }));
};

// Images 
export const images = () => {
  return gulp
    .src(path.source.img)
    .pipe(gulp.dest(path.build.img))
    .pipe(sync.stream())
};

// Images compress
export const images_compress = () => {
  return gulp
    .src(path.source.img)
    .pipe(
      imagemin([
        imageminOptipng({ optimizationLevel: 3 }),
        imageminSvgo({
          plugins: [
            {
              removeViewBox: false,
            },
            {
              cleanupIDs: false,
            },
            {
              removeComments: true,
            },
            {
              removeEmptyContainers: true,
            },
          ],
        }),
        imageminMozjpeg({ quality: 75, progressive: true }),
      ])
    )
    .pipe(gulp.dest(path.build.img));
};

// Images convertation to webp
export const img_webp = () => {
  return gulp
    .src(path.source.webp)
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(path.build.img));
};

// Sprite
export const sprite = () => {
  return gulp
    .src(path.source.icons)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(
      svgmin({
        plugins: [
          {
            removeViewBox: false,
          },
          {
            cleanupIDs: false,
          }
        ],
      })
    )
    .pipe(rename('sprite.min.svg'))
    .pipe(gulp.dest(path.build.img));
};

// Fonts
export const fonts = () => {
  gulp
    .src(path.source.fonts)
    .pipe(gulp.dest(path.build.fonts));
};

// Fonts convertation from ttf to woff and woff2
export const woff = () => {
  gulp
    .src(path.source.fonts)
    .pipe(ttfToWoff())
    .pipe(gulp.dest(path.build.fonts));

  gulp
    .src(path.source.fonts)
    .pipe(ttfToWoff2())
    .pipe(gulp.dest(path.build.fonts));
};

// Server
export const server = (done) => {
  sync.init({
    server: {
      baseDir: buildFolder,
    },
    port: 3000,
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

// Watcher
const watcher = () => {
  gulp.watch(path.watch.style, gulp.series('styles'));
  gulp.watch(path.watch.html, gulp.series('html'));
  gulp.watch(path.watch.js, gulp.series('scripts'));
};

export default gulp.series(server, watcher, html, styles, scripts);
