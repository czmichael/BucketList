// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');


livereload({ start: true });


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

//======== Global Variables ==========
var TOMCAT_LOCATION = '/usr/local/apache-tomcat-7.0.59/webapps/ROOT/static';
var DEV_LOCATION = 'src/main/webapp/static';

// ======== Gulp tasks ==========
gulp.task('jshint', function() {
	return gulp.src(DEV_LOCATION + '/*')
    	.pipe(jshint())
    	.pipe(jshint.reporter('jshint-stylish'))
    	.pipe(livereload());
});

gulp.task('scripts-bucket_list', function() {
	return gulp.src(DEV_LOCATION + '/*')
		.pipe(gulp.dest(TOMCAT_LOCATION + '/js/bucket_list'))
		.pipe(livereload())
		.pipe(notify('======== scripts-bucket_list is done done. =========='));
});

gulp.task('scripts-bucket_list-controllers', function() {
	return gulp.src(DEV_LOCATION + '/js/bucket_list/controllers/*')
		.pipe(gulp.dest(TOMCAT_LOCATION + '/js/bucket_list/controllers'))
		.pipe(livereload())
		.pipe(notify('======== scripts-bucket_list-controllers done. =========='));
});

gulp.task('scripts-bucket_list-services', function() {
	return gulp.src(DEV_LOCATION + '/js/bucket_list/services/*')
		.pipe(gulp.dest(TOMCAT_LOCATION + '/js/bucket_list/services'))
		.pipe(livereload())
		.pipe(notify('======== scripts-bucket_list-services done. =========='));
});

gulp.task('admin-lte', function() {
	return gulp.src(DEV_LOCATION + '/plugins/AdminLTE/js/*')
		.pipe(gulp.dest(TOMCAT_LOCATION + '/plugins/AdminLTE/js'))
		.pipe(livereload())
		.pipe(notify('======== admin-lte done. =========='));
});

gulp.task('copy-html', function() {
	return gulp.src(DEV_LOCATION + '/*.html')
		.pipe(gulp.dest(TOMCAT_LOCATION + '/'))
		.pipe(livereload())
		.pipe(notify('======== copy-html done. =========='));
});

gulp.task('less', function () {
	return gulp.src(DEV_LOCATION + '/less/bucket_list/healthfullU.less')
		.pipe(less())
		.pipe(gulp.dest(TOMCAT_LOCATION + '/css/bucket_list'))
		.pipe(livereload())
		.pipe(notify('======== less done. =========='));
});

gulp.task('image', function () {
	return gulp.src(DEV_LOCATION + '/img/*')
		.pipe(gulp.dest(TOMCAT_LOCATION + '/img'))
		.pipe(livereload())
		.pipe(notify('======== image done. =========='));
});



// ======== Gulp watch ==========
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(DEV_LOCATION + '/*.js', ['jshint', 'scripts-bucket_list']);
	gulp.watch(DEV_LOCATION + '/controllers/*.js', ['jshint', 'scripts-bucket_list-controllers']);
	gulp.watch(DEV_LOCATION + '/services/*.js', ['jshint', 'scripts-bucket_list-services']);
	gulp.watch(DEV_LOCATION + '/plugins/AdminLTE/js/*.js', ['jshint', 'admin-lte']);
	gulp.watch(DEV_LOCATION + '/*.html', ['copy-html']);
	gulp.watch(DEV_LOCATION + '/less/**/*.less', ['less']);
	gulp.watch(DEV_LOCATION + '/img/*', ['image']);
});





