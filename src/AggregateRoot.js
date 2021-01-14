import { each } from 'lodash';

class Aggregate {
  lastUpdated = new Date();

  apply = function (events) {
    each(events, event => {
      if (this[event.eventType]) {
        this[event.eventType](event);
        this.lastUpdated = new Date();
      }
    });
  };
}
export default Aggregate;
