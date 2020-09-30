function initTools(AMapU) {
  AMapU.prototype.triggerEvent = function(c, eventName, extArgs = {}) {
    AMap.event.trigger(c, eventName, { target: c, ...extArgs });
  };
}

export default initTools;
