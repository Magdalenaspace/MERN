//mutable vs immutable 
let name = "Name"
name[1] = "e"
console.log(name) //primitives don't change

//reassignment works
name = "Neme"
console.log(name)

//Structural Ts contain mutable data
let xArray = [1,2,3]
let yArray = xArray
xArray.push(4)
console.log(xArray)
console.log(yArray)

yArray[0] = 3
//shares the same referances
console.log(xArray)
console.log(yArray)

console.log(xArray === yArray)
console.log(yArray === xArray)

//Shallow Copy vs Deep C
//SHC
const zArray = [...yArray, 10]
console.log(zArray)
console.log(yArray)
console.log(yArray === xArray)
//shallow copy
console.log(yArray === zArray) //false

//with obj.assign()
//independatn clone
const tArray = Object.assign([],zArray)
console.log(tArray)
//not using the sam referance
console.log(tArray === zArray) //false

//these don't share reference util the original has nested structural DT
//shallow doesn't go levels deep

//for object .freeze = shallow freeze

//deep copy -> use libraries => 20:24
// https://www.youtube.com/watch?v=4Ej0LwjCDZQ