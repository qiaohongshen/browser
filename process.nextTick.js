// 用来取代promise
Promise.resolve().then(() => {
  console.log('promise')
})
process.nextTick(() => { // nextTick 是优先于 promise 微任务
  console.log('nextTick')
})

// node < 10

// 现在的版本就是清空 一个宏任务 就清空微任务 ，以前的版本是等待整个队列执行后在清空微任务