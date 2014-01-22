Package.describe({
  summary: 'Re-usable charts for d3.js - v1.1.15b'
});

Package.on_use(function (api) {
  api.use(['deps', 'd3'], 'client');
  api.add_files([
    'lib/nv.d3.min.js',
    'lib/nv.d3.min.css'
  ], 'client');
});

Package.on_test(function (api) {
  api.use('nvd3_revised');
  api.use('tinytest');
  api.add_files('lib/nv.d3.min.js', 'client');
  api.add_files('lib/nv.d3.min.css', 'client');
});
