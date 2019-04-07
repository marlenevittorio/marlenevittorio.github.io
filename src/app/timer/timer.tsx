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
			<div><TranslateComponent t={'timer.days'}/></div>
			<div><TranslateComponent t={'timer.hours'}/></div>
			<div><TranslateComponent t={'timer.minutes'}/></div>
			<div><TranslateComponent t={'timer.seconds'}/></div>
		</div>
		<div className={styles.time}>
			<div>{time.days}</div>
			<div>{time.hours}</div>
			<div>{time.minutes}</div>
			<div>{time.seconds}</div>
		</div>
	</div>
}

function timer() {
	const weddingDate = new Date(WEDDING_DATE).getTime();
	const now = new Date().getTime();
	const difference = weddingDate > now ? weddingDate - now : now - weddingDate;

	return {
		days: getDays(difference),
		hours: getHours(difference),
		minutes: getMinutes(difference),
		seconds: getSeconds(difference),
	}
}

function getDays(time: number) {
    return Math.floor(time / (1000 * 60 * 60 * 24));
}

function getHours(time: number) {
    return Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
}

function getMinutes(time: number) {
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
}

function getSeconds(time: number) {
    return Math.floor((time % (1000 * 60)) / 1000);
}
