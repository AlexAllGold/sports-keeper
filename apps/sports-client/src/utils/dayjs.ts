import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const dateFormat = (date: Date) => dayjs(date).utc().local().format('DD-MM-YYYY');
