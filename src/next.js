const { AnalyticsBrowser } = require('@segment/analytics-next');
module.exports = {
  async load(writeKey) {
    return AnalyticsBrowser.load({
      writeKey
    }).then(([ajs, context]) => ajs);
  }
}