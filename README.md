# browser
## Component
1. User Interface
2. Browser Engine
3. Rendering Engine (Layout Engine)
4. Networking
5. JavaScript Interpreter
6. UI Backend
7. Date Persistence

## Rendering Engine
1. Trident 
2. Gecko
3. Webkit (Webcore)
4. Presto
5. Blink

## JavaScript Interpreter
1. Chakra
2. SpiderMonkey
3. V8
4. javascriptcore
5. Carakan

  
Chrome/Chromium


## Macrotasks / Microtasks
[Macrotasks / Microtasks queues](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
1. script, ajax, event, setTimeout, setInterval, setImmediate(IE), MessageChannel, I/O, UI rendering
2. promise.then, MutationObserver, process.nextTick

## Vue.nextTick 
[Vue.nextTick](https://github.com/vuejs/vue/blob/dev/src/core/util/next-tick.js)

## Node Event Loop
[Node Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
1. timers
2. pending callbacks
3. idle, prepare
4. poll
5. check
6. close callbacks
