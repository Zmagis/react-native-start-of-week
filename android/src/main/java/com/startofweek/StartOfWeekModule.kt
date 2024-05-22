package com.startofweek

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import java.util.Calendar;

class StartOfWeekModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun getFirstWeekDay(promise: Promise) {
    val calendar = Calendar.getInstance()
    val firstDayOfWeek = calendar.firstDayOfWeek

    val startDay = when (firstDayOfWeek) {
        Calendar.SUNDAY -> "SUNDAY"
        Calendar.MONDAY -> "MONDAY"
        Calendar.TUESDAY -> "TUESDAY"
        Calendar.WEDNESDAY -> "WEDNESDAY"
        Calendar.THURSDAY -> "THURSDAY"
        Calendar.FRIDAY -> "FRIDAY"
        Calendar.SATURDAY -> "SATURDAY"
        else -> "UNKNOWN" // Fallback in case firstDayOfWeek returns an unexpected value
    }

    promise.resolve(startDay)
  }

  companion object {
    const val NAME = "StartOfWeek"
  }
}
