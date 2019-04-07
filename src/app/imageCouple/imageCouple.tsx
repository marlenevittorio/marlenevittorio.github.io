import * as React from "react";
import * as styles from "./imageCouple.scss";

export function ImageCouple() {
	return <div className={styles.container}>
		<img width="100%" src={"resources/images/couple.jpg"} alt={"Vittorio & marlene in a park"}/>
	</div>
}
