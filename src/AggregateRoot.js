import { each } from 'lodash';

class AggregateRoot {
  apply = function (events) {
    each(events, event => {
      if (this[event.eventType]) {
        this[event.eventType](event);
      }
    });
  };
}
export default AggregateRoot;
