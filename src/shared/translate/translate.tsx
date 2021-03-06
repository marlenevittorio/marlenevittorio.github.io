import * as React from 'react';
import { Translation } from 'react-i18next';
import { TFunction } from 'i18next';

export interface TranslateProps {
    t: string;
    tV?: {[key: string]: string};
}

export function TranslateComponent(props: TranslateProps): JSX.Element {
    return <Translation>
        {
            (t: TFunction): string => {
                return t(props.t, props.tV);
            }
        }
    </Translation>;
}
