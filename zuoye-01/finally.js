
Promise.prototype.myfinally = function(fn){
  this.then(()=>{
    fn()
    console.log(1)
  }).catch((err)=>{
    fn()
    console.log(err)
    })
  }
  var p = new Promise((resolve,reject)=>{
    resolve('ok')
    // reject(‘失败了’)
  })
  p.then((data)=>{
    console.log(data)
  }).catch((err)=>{console.log(err)}).myfinally(()=>{console.log('我是finally')})
