export default function (context) {
  return function () {
    const events = [];
    async function callAction(agg, action, args) {
      const _events = await agg[action](context, args);
      events.push(..._events);
    }
    return { callAction, getEvents: () => events };
  };
}
