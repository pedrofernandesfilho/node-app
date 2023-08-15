import { getInstance, instance, instanceD } from './singleton-instance'

export function funcUseB() {
  return instance
}

export function funcUseB2() {
  return getInstance()
}
