/*tslint:disable:interface-name*/
export { }

type Maybe<T> = T | null

declare global {
  interface ObjectConstructor {
    ifPresent<T>(value: Maybe<T>, functor: (obj: Maybe<T>) => T): Maybe<T>
    ifPresent2<T>(value: Maybe<T>): (obj: Maybe<T>) => T
    // test1(): boolean
  }
}

/*Object.ifPresent = function <T>(functor: (obj: Maybe<T>) => T) {
  if (this) {
    return functor(this as T)
  }
  return null
}*/
// tslint:disable-next-line:only-arrow-functions
Object.ifPresent = function <T>(value: Maybe<T>, functor: (obj: Maybe<T>) => T) {
  return value ? functor(value) : null
}
/*Object.test1 = () => {
  return true
}*/

/*tslint:enable:interface-name*/
