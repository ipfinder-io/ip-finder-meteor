Package.describe({
  name: 'ipfinder-io:ip-finder-meteor',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor Node IPFinder library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ipfinder-io/ip-finder-meteor',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'ipfinder': '1.0.3'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles('client.browserify.js');
    api.use(['cosmos:browserify@0.9.2'], 'client');
    api.export('Ipfinder');
});