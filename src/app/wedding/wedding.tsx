import * as React from "react";
import * as styles from "./wedding.scss";
import { TranslateComponent } from "../../shared/translate/translate";
import { GoogleMap } from "../googleMap/googleMap";
import { SelectedPage } from "../store/store";
import ScrollIntoView from '../scrollIntoView/scrollIntoView';
import { Maps } from '../googleMap/maps';

export function Wedding() {
	return <ScrollIntoView selectedPage={SelectedPage.Wedding}>
		<div className={styles.text}>
			<TranslateComponent t={'wedding.celebrate'}/>
		</div>
		<div className={styles.line}/>
		<div className={styles.text}>
			<TranslateComponent t={'wedding.when'}/>
		</div>
		<div className={styles.place}>
			<div className={styles.church}>
				<div className={styles.textPlace}>
					<TranslateComponent t={'wedding.where.churchTitle'}/>
				</div>

				<div className={styles.textPlace}>
					<TranslateComponent t={'wedding.where.church'}/>
				</div>

                <div className={styles.map}>
                    <GoogleMap url={Maps.church}/>
                </div>
			</div>
			<div className={styles.reception}>
				<div className={styles.textPlace}>
					<TranslateComponent t={'wedding.where.receptionTitle'}/>
				</div>

				<div className={styles.textPlace}>
					<TranslateComponent t={'wedding.where.reception'}/>
				</div>

                <div className={styles.map}>
                    <GoogleMap url={Maps.reception}/>
                </div>
			</div>
		</div>
    </ScrollIntoView>
}
