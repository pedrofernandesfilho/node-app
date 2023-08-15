import { getInstance, instance, instanceD } from './singleton-instance'

export function funcUseA() {
  return instance
}

export function funcUseA2() {
  return getInstance()
}
