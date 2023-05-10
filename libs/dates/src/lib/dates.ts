import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export const formats = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm:ss',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
};

export const timeToDayjs = (time: string) => dayjs(time, formats.time);
export const dayjsToTime = (dayjs: dayjs.Dayjs) => dayjs.format(formats.time);

export const dateToDayjs = (date: string) => dayjs(date, formats.date);
export const dayjsToDate = (dayjs: dayjs.Dayjs) => dayjs.format(formats.date);

export const dateTimeToDayjs = (dateTime: string) =>
  dayjs(dateTime, formats.dateTime);
export const dayjsToDateTime = (dayjs: dayjs.Dayjs) =>
  dayjs.format(formats.dateTime);
