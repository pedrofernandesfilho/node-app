import { funcModA, varA } from "./modules/module-a"
import { funcModB } from "./modules/module-b"
import { funcModC } from "./modules/module-c"
import { funcModD } from "./modules/module-d"

console.log('#> Console Log Index TS')
console.log('#> Console Log Index TS 2')

//console.log(funcModA())

console.log(funcModB())
console.log(funcModC())

console.log(funcModB())
console.log(funcModC())

console.log(funcModD())

console.log(varA)
