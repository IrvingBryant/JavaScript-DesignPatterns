let addEvent = function(ele, type, handler) {
  if (window.addEventListener) {
    addEvent = function() {
      ele.addEventListener(type, handler, false);
    };
  } else if (window.attachEvent) {
    addEvent = function() {
      ele.attachEvent("on" + type, handler);
    };
  }
  addEvent(ele, type, handler);
};
