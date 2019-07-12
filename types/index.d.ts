
import { CompareType, DateOffsetType, DateGetOffsetType, DateSetOffsetType, DateParamsType } from '../src/enums'

export interface ZaxUtil {
	/**
	 * pad prefix zero
	 * @param str
	 * @param len
	 */
	pad(str: string | number, len: number = 2): string
	/**
	 * convert string | number | Date to Date
	 * @param date
	 */
	convertDateStr(date: DateOffsetType): Date
}

export interface ZaxDate {
	compare(date: DateParamsType, ?nowDate: Date = new Date()): DateCompareResult;
	offset(date: DateParamsType, mode: DateSetOffsetType = 'date', ?num: number = 1): Date;
	get(date: DateParamsType, mode: DateGetOffsetType = 'date'): number;
	ago(date: DateParamsType): string;
	format(date: DateParamsType, ?mode: string = 'yyyy-mm-dd HH:MM:SS'): string;
	diff(startDate: DateParamsType, endDate: DateParamsType): object;
	age(date: DateParamsType, ?accurate: boolean = true): number;
	isLeapYear(date: DateParamsType): boolean;
}


declare const zaxUtil: ZaxUtil
declare const zaxDate: ZaxDate
