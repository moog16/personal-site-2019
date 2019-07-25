var gulp = require('gulp');
var responsive = require('gulp-responsive');
 
const smallSuffix = '-sm';
const mediumSuffix = '-md';
const largeSuffix = '-lg';
const imageBreaks = [{
  width: '15%',
  rename: {suffix: smallSuffix}
}, {
  width: '35%',
  rename: {suffix: mediumSuffix}
}, {
  width: '65%',
  rename: {suffix: largeSuffix}
}];

const highDefImageBreaks = [{
  width: '35%',
  rename: {suffix: smallSuffix}
}, {
  width: '45%',
  rename: {suffix: mediumSuffix}
}, {
  width: '65%',
  rename: {suffix: largeSuffix}
}];

gulp.task('default', function () {
  return gulp.src('src/images/*.jpeg')
    .pipe(responsive({
      '!{remy_ocean,remy_motorcycle}.jpeg': imageBreaks,
      '{remy_motorcycle,remy_ocean}.jpeg': highDefImageBreaks,
    }))
    .pipe(gulp.dest('src/images/dist'));
});
