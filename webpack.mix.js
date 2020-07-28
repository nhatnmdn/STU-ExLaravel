const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .js('resources/js/products/list.js', 'public/js/products')
    .js('resources/js/products/store.js','public/js/products')
    .js('resources/js/products/update.js','public/js/products')
    .js('resources/js/products/delete.js','public/js/products')
    .js('resources/js/products/get_product.js','public/js/products')
