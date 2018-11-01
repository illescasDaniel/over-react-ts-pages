export default class PropertyHelper {
  public static redefine(target: any, propertyName: string, getter: () => any, setter: (newVal: any) => void) {
    if (delete target[propertyName]) {
      Object.defineProperty(target, propertyName, {
        configurable: true,
        enumerable: true,
        get: getter,
        set: setter,
      })
    }
  }
}
