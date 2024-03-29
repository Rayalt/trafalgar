/* global module */

let config = {
	'notGetBlocks': [],
	'ignoredBlocks': [
		'no-js'
	],
	'alwaysAddBlocks': [],
	'addStyleBefore': [
		'dev/scss/variables.scss',
		'dev/scss/mixins.scss',
		'dev/scss/vendor.scss',
		'dev/scss/typography.scss',
		'dev/scss/reboot.scss',
		//'dev/scss/fonts.scss',
		'swiper/swiper-bundle.css',
		// 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
	],
	'addStyleAfter': [
		// 'dev/scss/print.scss',
	],
	'addJsBefore': [
		// 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
	],
	'addJsAfter': [],
	'addAdditions': {
		'dev/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
	},
	'source': {
		'data':   		'dev/data/',
		'dev':          'dev/',
		'blocks':       'dev/blocks/',
		'trash':		'dev/trash/',
		'landing':		'dev/landing/',
		'build':        'build/',
		'svgAsBg':      'dev/symbols/add.add',
		'globalPath':   ''
	},
};

module.exports = config;
