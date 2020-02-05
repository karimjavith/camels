class DateService {
  toLocalDateFormat(value: string) {
    const parsedDate = new Date(value)
    return `${parsedDate.getFullYear()}/${parsedDate.getMonth() + 1}/${parsedDate.getDate()}`
  }
  toLocalTimeFormat(value: string) {
    const parsedDate = new Date(`1970-01-01T${value}`)
    return `${parsedDate.getHours()}:${parsedDate.getMinutes()}`
  }
}

export default new DateService()
