# Event bus
Event bus allows pub/sub style communication which lets different modules to communicate without being dependent on each other.

### Public API
- add: Lets you attach event listener(s).

    ```js
    add("eventName", callbacks);
    ```

- remove: Lets you remove all or given event listener.

    ```js
    remove("eventName");    // should remove all the callbacks
    remove("eventName", callbacks);    // should remove only specific callbacks
    ```

- trigger: Lets you trigger events optionally passing data

    ```js
    trigger("eventName", [data]);
    ```

### Example Usage
```js
var eventBus = new EventBus();

eventBus.add("myevent1", function() {
  console.log("myevent1 triggered")
});

eventBus.trigger("myevent1");
eventBus.remove("myevent1");
```
