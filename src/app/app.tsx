import * as React from 'react';
import { Title } from "./title/title";
import * as styles from "./app.scss";
import { ImageCouple } from "./imageCouple/imageCouple";
import { Timer } from "./timer/timer";
import { Wedding } from "./wedding/wedding";
import { Images } from './images/images';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Menu from './menu/menu';

export function App(): JSX.Element {
    return (
        <Router>
        <Switch>
            <Route path="/images">
                <Images />
            </Route>
            <Route path="/">
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
            </Route>
        </Switch>
        </Router>

    );
}