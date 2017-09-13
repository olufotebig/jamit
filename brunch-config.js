module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'assets/js/vendor.js': /^node_modules/,
        'assets/js/site.js': /^src\/js/,
      },
    },
    stylesheets: {
      joinTo: {
        'assets/css/vendor.css': /^node_modules/,
        'assets/css/site.css': /^src\/sass/,
      },
    },
  },
  modules: {
    nameCleaner: path => path.replace(/^src\/js\//, ''),
  },
  npm: {
    enabled: true,
    globals: {
      jQuery: 'jquery',
      $: 'jquery',
      bootstrap: 'bootstrap-sass'
    },
  },
  paths: {
    public: 'public',
    watched: ['src'],
  },
  plugins: {
    copycat: {
      media: ['src/media', 'public/media'],
      fonts: ['node_modules/bootstrap-sass/assets/fonts', 'public/fonts'],
      verbose: false,
      onlyChanged: false,
    },
    nunjucks: {
      dataDir: 'src/pages-data',
      templatePath: 'src/pages',
      pattern: /\.njk?$/,
      ext: '.html',
      layoutPath: 'src/pages-templates',
    },
    sass: {
      options: {
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/'],
      },
    },
  },
};
