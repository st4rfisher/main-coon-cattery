const sync = require('browser-sync');

module.exports = function server(done) {
	sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

