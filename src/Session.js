const { flatten } = require('lodash');
module.exports = function () {
  return function (context) {
    let events = [];
    async function callAction(agg, action, args) {
      const _events = await agg[action](context, args);
      events = flatten([events, _events]);
    }
    return { callAction, getEvents: () => events };
  };
};
