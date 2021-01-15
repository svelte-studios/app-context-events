const { flatten } = require('lodash');
module.exports = function () {
  return function (context) {
    const events = [];
    async function callAction(agg, action, args) {
      const _events = await agg[action](context, args);
      events.push(flatten([_events]));
    }
    return { callAction, getEvents: () => events };
  };
};
