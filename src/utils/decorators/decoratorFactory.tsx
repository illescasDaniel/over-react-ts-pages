export default class DecoratorFactory {
  /*tslint:disable:ban-types*/

  public static class(body: any) {
    return (target: any) => body(target)
  }

  // Tested and works
  public static property<T>(body: PropertyDecorator) {
    return (target: T, propertyKey: string | symbol) => body(target, propertyKey)
  }

  public static method<T,U>(body: MethodDecorator) {
    return (target: T, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<U>) => body(target, propertyKey, descriptor)
  }

  public static parameter<T>(body: ParameterDecorator) {
    return (target: T, propertyKey: string | symbol, parameterIndex: number) => body(target, propertyKey, parameterIndex)
  }
  /*tslint:enable:ban-types*/
}
