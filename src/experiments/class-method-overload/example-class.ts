export class ExampleClass {
  public MethodA(param1: string): any
  public MethodA(param1: string, param2: string): any
  public MethodA(param1: string, param2: string, param3: number): any
  public MethodA(param1: string, param2?: string, param3?: number) {
    if (param3)
      return param3

    if (param2)
      return param2

    if (param1)
      return param1
  }

}
