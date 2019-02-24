Buffer.myConcat = function (bArr) {
  let length = 0
  bArr.forEach(r => length+=r.length)
  let buffer = Buffer.alloc(length)
  let index = 0
  bArr.forEach(r => {
    r.copy(buffer,index,0,r.length,r)
    index+=r.length
  })
  return buffer
}

let buffer1 = Buffer.from('zhu')
let buffer2 = Buffer.from('feng')
let bufferConcat1 = Buffer.myConcat([buffer1,buffer2]).toString()
let bufferConcat2 = Buffer.concat([buffer1,buffer2]).toString()
console.log(bufferConcat1,'------',bufferConcat2)