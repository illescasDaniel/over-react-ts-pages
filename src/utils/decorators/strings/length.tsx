import DecoratorFactory from '../decoratorFactory'
import PropertyHelper from '../utils/propertyHelper'

export default function length(params: { min: number, max: number }): PropertyDecorator {
  return DecoratorFactory.property((target: string, propertyKey: string) => {
    let value: string = target[propertyKey]
    PropertyHelper.redefine(target, propertyKey,
      () => (value.length < params.min || value.length > params.max) ? null : value,
      (newVal: string) => value = newVal)
  })
}
