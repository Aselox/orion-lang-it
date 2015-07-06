Package.describe({
  name: 'aselox:orion-lang-it',
  version: '1.1.0',
  summary: 'Orion Italian language',
  git: 'https://github.com/Aselox/orion-lang-it',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('orionjs:lang-en@1.1.0'); // This is the base language
  api.imply('orionjs:lang-en');

  api.addFiles('it.js');
});
