import * as React from 'react';
import { Title } from "./title/title";
import * as styles from "./app.scss";
import Menu from "./menu/menu";
import { ImageCouple } from "./imageCouple/imageCouple";
import { Timer } from "./timer/timer";
import { Wedding } from "./wedding/wedding";
import { connect } from 'react-redux';
import { SelectedPage, WeddingStore } from './store/store';
import { Images } from './images/images';

interface AppProps {
    selectedPage: SelectedPage;
}
function App(props: AppProps): JSX.Element {
    if (props.selectedPage === SelectedPage.Images) {
        return <Images/>
    }

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <div className={styles.title}>
                    <Title />
                </div>
                <div className={styles.menu}>
                    <Menu/>
                </div>
                <div className={styles.timer}>
                    <Timer/>
                </div>
                <div className={styles.image}>
                    <ImageCouple/>
                </div>
                <div className={styles.intro}>
                    <Wedding/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ selectedPage }: WeddingStore) => ({selectedPage});

export const AppComponent =  connect(mapStateToProps)(App);
