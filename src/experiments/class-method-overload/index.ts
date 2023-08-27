import { ExampleClass } from "./example-class";

export default function classMethodOverloadRun() {
  const exampleClassInstance = new ExampleClass()

  console.log('MethodA with param 1 =', exampleClassInstance.MethodA('param 1'))
  console.log('MethodA with param 1 and param 2 =', exampleClassInstance.MethodA('param 1', 'param 2'))
  console.log('MethodA with param 1, param 2 and param 3 =', exampleClassInstance.MethodA('param 1', 'param 2', 3))
}
