import { funcUseA, funcUseA2 } from './use-a'
import { funcUseB, funcUseB2 } from './use-b'

export default function singletonInstanceRun() {
  console.log(singletonInstanceRun.name)

  console.log()

  console.log(funcUseA.name, funcUseA())
  console.log(funcUseB.name, funcUseB())

  console.log()

  console.log(funcUseA2.name, funcUseA2())
  console.log(funcUseB2.name, funcUseB2())
}
