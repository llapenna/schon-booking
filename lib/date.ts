import _dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import utc from "dayjs/plugin/utc";

_dayjs.extend(localeData);
_dayjs.extend(utc);

export const dayjs = _dayjs.utc;

export const WEEKDAYS = _dayjs.localeData().weekdaysShort();
