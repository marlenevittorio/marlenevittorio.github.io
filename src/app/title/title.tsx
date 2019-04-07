import * as React from "react";
import { TranslateComponent, TranslateProps } from "../../shared/translate/translate";
import * as styles from './title.scss';

export function Title() {
	const title: TranslateProps = {
		t: 'app.title'
	};
	
	return <div>
		<h1 className={styles.title}>
			<TranslateComponent {...title}/>
		</h1>
	</div>
}
