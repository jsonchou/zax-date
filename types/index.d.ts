import * as enums from '../src/enums'

export interface ZaxUtil {
	/**
	 * pad prefix zero
	 * @param str
	 * @param len
	 */
	pad(str: string | number, len?: number): string
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
	compare(date: Date | string | number, nowDate: Date): number
	/**
	 * set a nenw date
	 * @param date
	 * @param mode
	 * @param num
	 */
	offset(date: Date | string | number, mode: enums.OffsetType, num: number): Date
	/**
	 * get partial of date by mode
	 * @param date
	 * @param mode
	 */
	get(date: Date | string | number, mode: enums.OffsetType): number
	/**
	 * get age of date
	 * @param date
	 */
	ago(date: Date | string | number): string
	/**
	 * format date
	 * @param date
	 * @param mode
	 */
	format(date: Date | string | number, mode: string): string
	/**
	 * get diff of date
	 * @param startDate
	 * @param endDate
	 */
	diff(startDate: Date | string | number, endDate: Date | string | number): object
	/**
	 * get age by date
	 * @param date
	 * @param accurate
	 */
	age(date: Date | string | number, accurate: boolean): number
	/**
	 * check is leap year
	 * @param date
	 */
	isLeapYear(date: Date | string | number): boolean
}

declare const zaxUtil: ZaxUtil
declare const zaxDate: ZaxDate

declare const CompareType: enums.CompareType
declare const OffsetType: enums.OffsetType
declare const SetOffsetType: enums.SetOffsetType
declare const GetOffsetType: enums.GetOffsetType
