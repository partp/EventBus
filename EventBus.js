// Returns name of a function
var functionName = function(func) {
  var name = func.toString();
  name = name.substr('function '.length);
  name = name.substr(0, name.indexOf('('));
  return name;
};

function EventBus() {
  var events = {};

  this.add = function(eventName, callbacks) {
    // Checks if an entry of event exists
    if (!events.hasOwnProperty(eventName) || events[eventName] == null) {
      events[eventName] = {size: 0};
    }

    // Adds callbacks to the event
    for (var i = 1; i < arguments.length; i++) {
      var funcName = functionName(arguments[i]);
      if(!funcName)
        funcName = "anonymous" + events[eventName].size;
      events[eventName][funcName] = arguments[i];
      events[eventName].size += 1;
    }
  };

  this.remove = function(eventName, callbacks) {
    if(events[eventName]) {
      if (arguments.length === 1) {
        // As delete function is computational expensive
        events[eventName] = null;
      }
      else {
        // Removes callbacks to the event
        for (var i = 1; i < arguments.length; i++) {
          if(events[eventName][arguments[i]])
            events[eventName][arguments[i]] = null;
        }
      }
    }
  };

  this.trigger = function(eventName, data) {
    // Return if the eventName doesn't exist, or there are no callbacks
    if(events.hasOwnProperty(eventName) && events[eventName].size > 0)
      // Execute callbacks associated with a eventName
      for (funcName in events[eventName]) {
          if (events[eventName].hasOwnProperty(funcName))
            if(typeof events[eventName][funcName] === 'function')
              events[eventName][funcName](data);
      }
  };
};
