import { useEffect, useRef } from 'react';
import { SelectedPage, WeddingStore } from '../store/store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SelectedAction } from '../store/action';
import { SELECTED_ACTION_TYPE } from '../store/actionType';
import * as React from 'react';

export interface ScrollIntoViewProps extends ScrollIntoViewMapProps {
    dispatch: Dispatch<SelectedAction>;
    selectedPage: SelectedPage;
    children?: React.ReactNode;
}

interface ScrollIntoViewMapProps {
    selected: SelectedPage
}

function ScrollIntoView(props: ScrollIntoViewProps): JSX.Element {
    const container = useRef(null);

    useEffect(() => {
        const isSelected = props.selected === props.selectedPage;
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
        {props.children}
    </div>
}

function mapStateToProps(state: WeddingStore): ScrollIntoViewMapProps {
    return {
        selected: state.selectedPage,
    };
}

export default connect(mapStateToProps)(ScrollIntoView);
