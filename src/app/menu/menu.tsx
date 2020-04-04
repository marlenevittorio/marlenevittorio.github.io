import * as styles from './menu.scss';
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { SELECTED_ACTION_TYPE } from "../store/actionType";
import { TranslateComponent } from '../../shared/translate/translate';

export interface MenuProps {
	dispatch: Dispatch;
}
export function Menu(props: MenuProps) {
	function goToImages() {
		props.dispatch({
			type: SELECTED_ACTION_TYPE.IMAGES
		})
	}

	return <div className={styles.container}>
		<div className={styles.line}/>
		<div className={styles.link}>
            <TranslateComponent t={'menu.home'}/>
		</div>
		<div onClick={goToImages} className={styles.link}>
            <TranslateComponent t={'menu.images'}/>
		</div>
		<div className={styles.line}/>
	</div>
}

export default connect()(Menu);
