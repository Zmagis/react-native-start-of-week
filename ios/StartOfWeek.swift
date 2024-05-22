@objc(StartOfWeek)
class StartOfWeek: NSObject {

  @objc(getFirstWeekDay:withRejecter:)
  func getFirstWeekDay(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
    let calendar = Calendar.current
    let firstDayOfWeek = calendar.firstWeekday

    let startDay: String
    switch firstDayOfWeek {
    case 1:
        startDay = "SUNDAY"
    case 2:
        startDay = "MONDAY"
    case 3:
        startDay = "TUESDAY"
    case 4:
        startDay = "WEDNESDAY"
    case 5:
        startDay = "THURSDAY"
    case 6:
        startDay = "FRIDAY"
    case 7:
        startDay = "SATURDAY"
    default:
        startDay = "UNKNOWN" // Fallback in case firstWeekday returns an unexpected value
    }

    resolve(startDay)
  }
}
