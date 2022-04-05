const segment = require('@segment/analytics.js-integration-segmentio');
const analytics = require('@segment/analytics.js-core');

module.exports = {
  async load(writeKey) {
    analytics.use(segment);
    analytics.initialize({
      "Segment.io": {
        apiKey: writeKey
      }
    });
    return analytics
  }
}