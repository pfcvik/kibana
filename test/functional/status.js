define(function (require) {
  var registerSuite = require('intern!object');
  var expect = require('intern/dojo/node!expect.js');
  var config = require('intern').config;
  var getPage = require('intern/dojo/node!../utils/getPage');

  registerSuite(function () {
    return {
      'status': function () {
        return this.remote
          .get(getPage(config.kibana, 'status'))
          .setFindTimeout(60000)
          .findByCssSelector('.plugin_status_breakdown')
          .getVisibleText()
          .then(function (text) {
            expect(text.indexOf('plugin:kibana Ready')).to.be.above(-1);
          });
      }
    };
  });
});
