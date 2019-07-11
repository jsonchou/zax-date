
import * as ENUM from './enum'

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
	convertDateStr(date: stirng | number | Date): Date
}

export interface ZaxDate {
	compare(date: stirng | number | Date, ?nowDate: Date = new Date()): number;
	offset(): Date;
	ago(): string;
	format(): string;
	diff(): object;
	age(): number;
	isLeapYear(): boolean;
}

declare zaxUtil: ZaxUtil
declare zaxDate: ZaxDate
