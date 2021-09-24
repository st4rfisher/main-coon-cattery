const sync = require('browser-sync');

module.exports = function reload(done) {
  sync.reload();
  done();
}
