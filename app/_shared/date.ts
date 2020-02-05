class DateService {
  addZero(num: Number | String) {
    let value = num
    if (num < 10) {
      value = '0' + num
    }
    return value
  }
  toLocalDateFormat(value: string) {
    const parsedDate = new Date(value)
    return `${parsedDate.getFullYear()}/${parsedDate.getMonth() + 1}/${parsedDate.getDate()}`
  }
  toLocalTimeFormat(value: string) {
    const parsedDate = new Date(`1970-01-01T${value}`)
    return `${this.addZero(parsedDate.getHours())}:${this.addZero(parsedDate.getMinutes())}`
  }
  toLocalTimeFormatFromDateTime(value: string) {
    const parsedDate = new Date(value)
    return `${this.addZero(parsedDate.getHours())}:${this.addZero(parsedDate.getMinutes())}`
  }
}

export default new DateService()
