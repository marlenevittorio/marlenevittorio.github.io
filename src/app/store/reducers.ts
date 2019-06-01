import { SelectedPage } from "./store";
import { SELECTED_ACTION_TYPE } from "./actionType";
import { SelectedAction } from "./action";

export function getDefaultState(): SelectedPage {
    return SelectedPage.None
}

export default function selectedReducers(state: SelectedPage = getDefaultState(), action: SelectedAction): SelectedPage {
    switch (action.type) {
        case SELECTED_ACTION_TYPE.WEDDING:
            return SelectedPage.Wedding;
        case SELECTED_ACTION_TYPE.REGISTRY:
            return SelectedPage.Registry;
        case SELECTED_ACTION_TYPE.NONE:
            return SelectedPage.None;
        default:
            return state;
    }
}
