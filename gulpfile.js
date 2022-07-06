const gulp = require('gulp');
    sass = require('gulp-sass')(require('sass')),    
    pug = require('gulp-pug'),    
    cleanCSS = require('gulp-clean-css');
    

gulp.task('scss', async function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({level:2}))
        .pipe(gulp.dest('dist/css'))       
        .pipe(browserSync.reload({
            stream: true
          }))
    });

gulp.task('pug', async function(){
    return gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', async function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
})

gulp.task('img', async function(){
    return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'))
})

function watch(){
    gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('src/pug/**/*.pug', gulp.parallel('pug'));
    gulp.watch('src/js/*.js', gulp.parallel('js'));
    gulp.watch('src/img/*', gulp.parallel('img'));
}

gulp.task('watch', watch);

// https://webref.ru/dev/gulp-for-beginners/live-reloading-with-browser-sync