import { encoder } from "./actions";
import { actionTypes } from "./reducer.types";

export const AppState = (state, dispatch) => {
    const { type, value } = dispatch;
    switch (type) {
        case actionTypes.ENCODE: {
            const val = encoder(value);
            return val;
        }
        default: {
            return state
        }
    }
}