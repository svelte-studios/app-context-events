const { each } = require('lodash');

class AggregateRoot {
  apply(events) {
    each(events, event => {
      if (this[event.eventType]) {
        this[event.eventType](event);
      }
    });
  }
}
module.exports = AggregateRoot;
