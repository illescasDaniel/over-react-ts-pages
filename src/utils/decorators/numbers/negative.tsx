import DecoratorFactory from '../decoratorFactory'
import PropertyHelper from '../utils/propertyHelper'

export default function negative() {
  return DecoratorFactory.property((target: number, propertyName: string) => {
    let value: number = target[propertyName]
    PropertyHelper.redefine(target, propertyName,
      () => value < 0 ? value : null,
      (newVal: number) => value = newVal)
  })
}
