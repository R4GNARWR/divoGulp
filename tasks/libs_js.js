const plugins = [
	'src/js/libs/jquery.min.js',
	'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
	'src/js/libs/swiper-bundle.min.js',
	'src/js/libs/fancybox.umd.js',

];
const {
	src,
	dest
} = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const chalk = require('chalk');

module.exports = function libs_js(done) {
	if (plugins.length > 0)
		return src(plugins)
			.pipe(map.init())
			.pipe(uglify())
			.pipe(concat('libs.min.js'))
			.pipe(map.write('../sourcemaps'))
			.pipe(dest('build/js/'))
	else {
		return done(console.log(chalk.bgYellow(`${chalk.bold('WARNING!')} You did not add any JavaScript plugins.`)));
	}
}