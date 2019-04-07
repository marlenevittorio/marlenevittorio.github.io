import * as React from "react";
import { useEffect, useRef } from "react";
import * as styles from "./wedding.scss";
import { TranslateComponent } from "../../shared/translate/translate";
import { GoogleMap } from "../googleMap/googleMap";
import { Maps } from "../googleMap/maps";
import { connect } from "react-redux";
import { SelectedPage, WeddingStore } from "../store/store";
import { SelectedAction } from "../store/action";
import { Dispatch } from "redux";
import { SELECTED_ACTION_TYPE } from "../store/actionType";

export interface WeddingProps extends WeddingMapProps {
	selected: SelectedPage
	dispatch: Dispatch<SelectedAction>
}

interface WeddingMapProps {
	selected: SelectedPage
}

export function Wedding(props: WeddingProps) {
	const container = useRef(null);

	useEffect(() => {
		const isSelected = props.selected === SelectedPage.Wedding;
		if (isSelected) {
			container.current.scrollIntoView({
				behavior: 'smooth',
				inline: 'center',
			});

			props.dispatch({
				type: SELECTED_ACTION_TYPE.NONE
			})
		}
	}, [props.selected]);

	return <div ref={container}>
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
	</div>
}

function mapStateToProps(state: WeddingStore): WeddingMapProps {
	return {
		selected: state.selectedPage,
	};
}

export default connect(mapStateToProps)(Wedding);
