// JavaScript Document
var gulp = require('gulp');  //拷贝
var concat = require('gulp-concat');  //连接JS
var uglify = require('gulp-uglify'); //压缩文件(压缩的是格式)
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
//创建gulp任务
//第一个参数为任务的名称
//第二个参数为任务所依赖的其他任务可以（省略）
//第三个参数时执行任务所要运行的代码
gulp.task('copy-index', function (){
        //取到指定的文件
        gulp.src('./src/case1.html')
            .pipe(gulp.dest('./dist')) //将文件拷贝到指定路径
})

gulp.task('copy-html',function (){
        gulp.src('./src/html/*.html') //取到html文件夹下所有的html文件
            .pipe(gulp.dest('./dist/html'))//将文件拷贝到指定路径

})

gulp.task('copy-vendor',function (){
         gulp.src('./src/vendor/**/*.*')  /*取得文件夹下所有文件*/
            .pipe(gulp.dest('./dist/vendor'))
})


gulp.task('concat', function (){
    gulp.src('./src/script/**/*.js')
        .pipe(concat('output.js'))
        .pipe(gulp.dest())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})



gulp.task('sass', function (){
    gulp.src('./src/style/**/*.scss')
        .pipe(sass())
        .pipe(minify())
        .pipe(gulp.dest('./dist/'))
})


gulp.task('watch', function (){  //事件监听
    gulp.watch('./src/case1.html',[copy-index]);
})