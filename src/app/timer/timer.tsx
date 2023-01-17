import * as React from "react";
import * as styles from "./timer.scss";
import { useEffect, useState } from "react";
import { TranslateComponent } from '../../shared/translate/translate';
import { WEDDING_DATE } from './weddingDate';

export function Timer() {
	const [time, setTime] = useState(timer());

	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTime(timer())
		}, 1000);

		return () => {
			clearInterval(timerInterval)
		};
	}, []);

	return <div className={styles.timer}>
		<div className={styles.header}>
			<div><TranslateComponent t={'timer.years'}/></div>
			<div><TranslateComponent t={'timer.days'}/></div>
			<div><TranslateComponent t={'timer.hours'}/></div>
			<div><TranslateComponent t={'timer.minutes'}/></div>
			<div><TranslateComponent t={'timer.seconds'}/></div>
		</div>
		<div className={styles.time}>
			<div>{time.years}</div>
			<div>{time.days}</div>
			<div>{time.hours}</div>
			<div>{time.minutes}</div>
			<div>{time.seconds}</div>
		</div>
	</div>
}

const timer = () => {
	const weddingDate = new Date(WEDDING_DATE).getTime();
	const now = new Date().getTime();
	const difference = weddingDate > now ? weddingDate - now : now - weddingDate;

	return {
		years: getTotalYears(difference),
		days: getDays(difference),
		hours: getHours(difference),
		minutes: getMinutes(difference),
		seconds: getSeconds(difference),
	}
};

const MILLISECONDS_IN_A_SECOND = 1000
const SECONDS_IN_A_MINUTE = 60
const MINUTES_IN_A_HOUR = 60
const HOURS_IN_A_DAY = 24
const DAYS_IN_A_YEAR = 365
const getTotalSeconds = (milliseconds: number) => Math.floor(milliseconds / MILLISECONDS_IN_A_SECOND);

const getSeconds = (milliseconds: number) => {
	const totalSeconds = getTotalSeconds(milliseconds);
	return totalSeconds % SECONDS_IN_A_MINUTE
};

const getTotalMinutes = (milliseconds: number) => {
	const totalSeconds = getTotalSeconds(milliseconds);

	return Math.floor(totalSeconds / SECONDS_IN_A_MINUTE)
};

const getMinutes = (milliseconds: number) => {
	const totalMinutes = getTotalMinutes(milliseconds);
	return totalMinutes % MINUTES_IN_A_HOUR
};

const getTotalHours = (milliseconds: number) => {
	const totalMinutes = getTotalMinutes(milliseconds);
	return Math.floor(totalMinutes / MINUTES_IN_A_HOUR)
};

const getHours = (milliseconds: number) => {
	const totalHours = getTotalHours(milliseconds);
	return totalHours % HOURS_IN_A_DAY
};

const getTotalDays = (milliseconds: number) => {
	const totalHours = getTotalHours(milliseconds);
	return Math.floor(totalHours / HOURS_IN_A_DAY);
};

const getDays = (timer: number) => {
	const totalDays = getTotalDays(timer);
	return Math.floor(totalDays % DAYS_IN_A_YEAR);
};

const getTotalYears = (time: number) => {
	const totalDays = getTotalDays(time);
	return Math.floor(totalDays / DAYS_IN_A_YEAR)
};
