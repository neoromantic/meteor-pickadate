Package.describe({
  summary: "The mobile-friendly, responsive, and lightweight jQuery date & time input picker."
  , name: 'cwohlman:pickadate'
  , git: 'http://github.com/usefulio/meteor-pickadate.git'
  , version: '0.0.0'
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.add_files([
    'js/picker.js',
    'js/picker.date.js',
    'js/picker.time.js',
    'js/legacy.js',
    'css/classic.css',
    'css/classic.date.css',
    'css/classic.time.css',
  ], 'client');
});
