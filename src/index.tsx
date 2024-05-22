import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-start-of-week' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const StartOfWeek = NativeModules.StartOfWeek
  ? NativeModules.StartOfWeek
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export enum WeekDay {
  Sunday = 'SUNDAY',
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Unknown = 'UNKNOWN',
}

export function getFirstWeekDay(): Promise<WeekDay> {
  return StartOfWeek.getFirstWeekDay();
}
