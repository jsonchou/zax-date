
import { CompareType, OffsetType } from '../src/enums'

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
	convertDateStr(date: Date | string | number): Date
}

export interface ZaxDate {
	/**
	 * compare date
	 * @param date
	 * @param nowDate
	 */
	compare(date: Date | string | number, nowDate: Date = new Date()): DateCompareResult;
	/**
	 * set a nenw date
	 * @param date
	 * @param mode
	 * @param num
	 */
	offset(date: Date | string | number, mode: OffsetType, num: number = 1): Date;
	/**
	 * get partial of date by mode
	 * @param date
	 * @param mode
	 */
	get(date: Date | string | number, mode: OffsetType): number;
	/**
	 * get age of date
	 * @param date
	 */
	ago(date: Date | string | number): string;
	/**
	 * format date
	 * @param date
	 * @param mode
	 */
	format(date: Date | string | number, mode: string = 'yyyy-mm-dd HH:MM:SS'): string;
	/**
	 * get diff of date
	 * @param startDate
	 * @param endDate
	 */
	diff(startDate: Date | string | number, endDate: Date | string | number): object;
	/**
	 * get age by date
	 * @param date
	 * @param accurate
	 */
	age(date: Date | string | number, accurate: boolean = true): number;
	/**
	 * check is leap year
	 * @param date
	 */
	isLeapYear(date: Date | string | number): boolean;
}


declare const zaxUtil: ZaxUtil
declare const zaxDate: ZaxDate

declare var compareType: CompareType
declare var OffsetType: OffsetType

