class ValidationService {
  isMinimumLengthValid(value: string | number, length: number) {
    return value.toString().length < length
  }
  isEmailValid(value: string) {
    const regex = RegExp(
      '[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}(\\.[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25})+'
    )
    return regex.test(value)
  }
  isPostCodeValid(value: string) {
    const regex = RegExp(
      '^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$'
    )
    return regex.test(value)
  }
}

export default new ValidationService()
