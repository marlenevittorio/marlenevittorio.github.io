import * as styles from './menu.scss';
import * as React from "react";
import { Dispatch } from "redux";
import { TranslateComponent } from '../../shared/translate/translate';
import {
	Link
} from "react-router-dom";
import { SELECTED_ACTION_TYPE } from '../store/actionType';
import { connect } from 'react-redux';

export interface MenuProps {
	dispatch: Dispatch;
}
function Menu(props: MenuProps) {
	function goToWedding() {
		props.dispatch({
			type: SELECTED_ACTION_TYPE.WEDDING
		})
	}

	return <div className={styles.container}>
		<div className={styles.line}/>
		<div className={styles.link}>
            <TranslateComponent t={'menu.home'}/>
		</div>
		<div className={styles.link} onClick={goToWedding}>
			<TranslateComponent t={'menu.wedding'}/>
		</div>
		<div className={styles.link}>
			<Link className={styles.linkPhotos} to="/images">
				<TranslateComponent t={'menu.images'}/>
			</Link>
		</div>
		<div className={styles.line}/>
	</div>
}

export default connect()(Menu);