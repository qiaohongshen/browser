setTimeout(() => {
  console.log('timer1')
  // Promise.resolve().then(data => {
  //   console.log('promise3')
  // })
}, 0)

Promise.resolve().then(data => {
  console.log('promise1')
  // setTimeout(() => {
  //   console.log('timer2')
  // }, 0)
})

Promise.resolve().then(data => {
  console.log('promise2')
})


// setTimeout(() => {
//   console.log('timer1')
// }, 1000)

// setTimeout(() => {
//   console.log('timer2')
// }, 0)

// setTimeout(() => {
//   console.log('timer3')
// }, 0)


setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(() => {
    new Promise((resolve, reject) => {
      resolve()
    }).then(() => {
      console.log('promise3')
      setTimeout(() => {
        console.log('timer3')
      }, 0)
    })
  })
})

Promise.resolve().then(() => {
  console.log('promise1')
  setTimeout(() => {
    console.log('timer2')
  }, 0)
})


Promise.resolve().then(() => {
  console.log('promise2')
})