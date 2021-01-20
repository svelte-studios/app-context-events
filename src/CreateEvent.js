module.exports = user => {
  return (type, data) => {
    return {
      eventType: type,
      timestamp: new Date(),
      user,
      data,
    };
  };
};
