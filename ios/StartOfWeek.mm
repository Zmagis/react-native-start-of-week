#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(StartOfWeek, NSObject)

RCT_EXTERN_METHOD(getFirstWeekDay:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
