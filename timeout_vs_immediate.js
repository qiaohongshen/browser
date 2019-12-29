setTimeout(() => {
  console.log('timeout')
}, 0)

setImmediate(() => {
  console.log('immediate')
})

// fs.readFile('./browser.md', function () {
//   setImmediate(() => {
//       console.log('setImmediate')
//   })

//   setTimeout(() => {
//       console.log('timeout')
//   }, 0)
// })

// timers(setTimeout); poll放的i/o操作; 如果没有check,会阻塞至定时器到达时间; check如果有check,会在轮训完毕后立即执行。