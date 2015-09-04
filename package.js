Package.describe({
  name: '3stack:blaze-chosen',
  version: '1.4.2',
  summary: 'A simple template helper for {{#chosen}}',
  git: 'https://github.com/3stack-software/meteor-blaze-chosen',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.1.0.2');
  api.use([
    'blaze',
    'templating',
    'spacebars',
    'logging',
    'eskan:chosen@1.4.2'
  ]);
  api.addFiles([
    'chosen.html',
    'chosen.js'
  ], 'client');
});
