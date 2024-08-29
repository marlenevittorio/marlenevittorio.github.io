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
	const weddingDate = new Date(WEDDING_DATE);
	const now = new Date();

	let years = now.getFullYear() - weddingDate.getFullYear();

	let anniversaryThisYear = new Date(now.getFullYear(), weddingDate.getMonth(), weddingDate.getDate(), weddingDate.getHours(), weddingDate.getMinutes(), weddingDate.getSeconds());
	if (now < anniversaryThisYear) {
		years--;
	}

	let pastAnniversary = new Date(weddingDate);
	pastAnniversary.setFullYear(weddingDate.getFullYear() + years);

	let remainingMilliseconds = now.getTime() - pastAnniversary.getTime();

	let days = Math.floor(remainingMilliseconds / (1000 * SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR * 24));
	remainingMilliseconds -= days * (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR * HOURS_IN_A_DAY);

	let hours = Math.floor(remainingMilliseconds / (1000 * SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR));
	remainingMilliseconds -= hours * (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE * 60);

	let minutes = Math.floor(remainingMilliseconds / (1000 * 60));
	remainingMilliseconds -= minutes * (MILLISECONDS_IN_A_SECOND * SECONDS_IN_A_MINUTE);

	let seconds = Math.floor(remainingMilliseconds / MILLISECONDS_IN_A_SECOND);

	return {
		years,
		days,
		hours,
		minutes,
		seconds
	}
};

const MILLISECONDS_IN_A_SECOND = 1000
const SECONDS_IN_A_MINUTE = 60
const MINUTES_IN_A_HOUR = 60
const HOURS_IN_A_DAY = 24

