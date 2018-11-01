import DecoratorFactory from '../decoratorFactory'
import PropertyHelper from '../utils/propertyHelper'

export default function positive(): PropertyDecorator {
  return DecoratorFactory.property((target: number, propertyKey: string) => {
    let value: number = target[propertyKey]
    PropertyHelper.redefine(target, propertyKey,
      () => value >= 0 ? value : null,
      (newVal: number) => value = newVal)
  })
}
