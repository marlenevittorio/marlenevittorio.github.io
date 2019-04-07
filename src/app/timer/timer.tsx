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
	const deadline = new Date(WEDDING_DATE).getTime();
	const now = new Date().getTime();
	const difference = deadline - now;
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	return {
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	}
}
