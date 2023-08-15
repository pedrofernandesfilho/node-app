import { funcModA, varA } from "./module-a"
import { funcModB } from "./module-b"
import { funcModC } from "./module-c"
import { funcModD } from "./module-d"

export default function sharedVarRun() {
  console.log('varA:', varA) // output= varA: 1
  console.log('varA:', varA) // output= varA: 1

  console.log('funcModA():', funcModA()) // output= funcModA(): 2
  console.log('funcModB():', funcModB()) // output= funcModB(): 3
  console.log('funcModC():', funcModC()) // output= funcModC(): 4

  console.log('funcModB():', funcModB()) // output= funcModB(): 5
  console.log('funcModC():', funcModC()) // output= funcModC(): 6

  console.log('funcModD():', funcModD()) // output= funcModD(): 6

  console.log('varA', varA) // output= varA: 6

  console.log('funcModA():', funcModA()) // output= funcModA(): 7
}
