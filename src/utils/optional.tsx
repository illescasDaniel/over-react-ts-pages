import { isNullOrUndefined } from 'util'

type Nullable<T> = T | null | undefined

export default class Optional<T> {

  public static of<T>(value: Nullable<T>) {
    return new Optional(value)
  }

  private _value: Nullable<T>

  constructor(value: Nullable<T>) {
    this._value = value
  }

  public assign(value: Nullable<T>) {
    this._value = value
  }

  public ifPresent<U>(functor: (_: T) => Nullable<U>) {
    if (!isNullOrUndefined(this._value)) {
      return Optional.of<U>(functor(this._value as T))
    }
    return Optional.of<U>(null)
  }

  public _ = <U extends {}>(f: (_: T) => Nullable<U>) => this.ifPresent(f)
  public __ = (value: T) => this.orElse(value)
  public ___ = <U extends {}>(value: Nullable<U> | Optional<U>) => this.or(value)

  public orElse(value: T) {
    return isNullOrUndefined(this._value) ? value : this._value
  }

  public or<U>(value: Nullable<U> | Optional<U>) {
    return isNullOrUndefined(this._value) ? value : this._value
  }
}