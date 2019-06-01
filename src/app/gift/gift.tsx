import * as React from "react";
import * as styles from "./gift.scss";
import { TranslateComponent } from "../../shared/translate/translate";
import ScrollIntoView from '../scrollIntoView/scrollIntoView';
import { SelectedPage } from '../store/store';

export function Gift() {
    return <ScrollIntoView selectedPage={SelectedPage.Registry}>
        <div className={styles.line}/>
        <div className={styles.container}>
            <div className={styles.title}>
                <TranslateComponent t={'gift.title'}/>
            </div>

            <div className={styles.text}>
                <TranslateComponent t={'gift.text'}/>
            </div>

            <div className={styles.detailsContainer}>
                <div className={styles.details}>
                    <div className={styles.account}>
                        <span className={styles.accountTitle}>
                            <TranslateComponent t={'gift.account.name'}/>
                        </span>
                        <span className={styles.accountValue}>
                            <TranslateComponent t={'gift.account.value'}/>
                        </span>
                    </div>

                    <div className={styles.account}>
                        <span className={styles.accountTitle}>
                            <TranslateComponent t={'gift.sortCode.name'}/>
                        </span>
                        <span className={styles.accountValue}>
                            <TranslateComponent t={'gift.sortCode.value'}/>
                        </span>
                    </div>

                    <div className={styles.account}>
                        <span className={styles.accountTitle}>
                            <TranslateComponent t={'gift.bic.name'}/>
                        </span>
                        <span className={styles.accountValue}>
                            <TranslateComponent t={'gift.bic.value'}/>
                        </span>
                    </div>

                    <div className={styles.account}>
                        <span className={styles.accountTitle}>
                            <TranslateComponent t={'gift.iban.name'}/>
                        </span>
                        <span className={styles.accountValue}>
                            <TranslateComponent t={'gift.iban.value'}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </ScrollIntoView>
}
