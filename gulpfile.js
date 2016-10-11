const del = require('del');
const gulp = require('gulp');
const config = require('./boilerplate');
const rename = require('gulp-rename');
const cached = require('gulp-cached');
const remember = require('gulp-remember');
const sourcemaps = require('gulp-sourcemaps');
// css
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// html
const template = require('gulp-nunjucks');
const prettify = require('gulp-html-prettify');
// javascript
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');
