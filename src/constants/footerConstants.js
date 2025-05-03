import { IMAGE_CONSTANTS } from './imageConstants';
import { ROUTE_PATHS } from './routeConstants';

export const FOOTER_CONSTANTS = {
  footerItems: [
    {
      label: '훈련',
      path: ROUTE_PATHS.TRAINING,
      ac_icon: IMAGE_CONSTANTS.PT_ACTIVATED,
      deac_icon: IMAGE_CONSTANTS.PT_DEACTIVATED,
    },
    {
      label: '홈',
      path: ROUTE_PATHS.MAIN,
      ac_icon: IMAGE_CONSTANTS.HOME_ACTIVATED,
      deac_icon: IMAGE_CONSTANTS.HOME_DEACTIVATED,
    },
    {
      label: '마이리포트',
      path: ROUTE_PATHS.MYREPORT,
      ac_icon: IMAGE_CONSTANTS.REPORT_ACTIVATED,
      deac_icon: IMAGE_CONSTANTS.REPORT_DEACTIVATED,
    },
  ],
};
