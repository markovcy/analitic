declare module 'classnames' {
  type ClassValue =
    | string
    | number
    | ClassDictionary
    | ClassArray
    | undefined
    | null
    | boolean;

  interface ClassDictionary {
    [id: string]: boolean | undefined | null | string;
  }

  // This is the only way I found to break circular references between ClassArray and ClassValue
  // https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ClassArray extends Array<ClassValue> {}

  type ClassNamesFn = (...classes: ClassValue[]) => string;

  const classNames: ClassNamesFn;

  export = classNames;
}
