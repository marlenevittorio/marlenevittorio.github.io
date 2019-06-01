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
	function goToWedding() {
		props.dispatch({
			type: SELECTED_ACTION_TYPE.WEDDING
		})
	}

    function goToRegistry() {
        props.dispatch({
            type: SELECTED_ACTION_TYPE.REGISTRY
        })
    }
	return <div className={styles.container}>
		<div className={styles.line}/>
		<div className={styles.link}>
            <TranslateComponent t={'menu.home'}/>
		</div>
		<div onClick={goToWedding} className={styles.link}>
            <TranslateComponent t={'menu.wedding'}/>
		</div>

        <div onClick={goToRegistry} className={styles.link}>
            <TranslateComponent t={'menu.registry'}/>
        </div>
		<div className={styles.line}/>
	</div>
}

export default connect()(Menu);
