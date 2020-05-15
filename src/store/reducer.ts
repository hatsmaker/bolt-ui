import {IState} from "./IState";
import * as actionTypes from "./actions";

export interface IAction {
    type: string
    payload?: any
}

export const reducer = (state: IState, action: IAction) => {
    switch(action.type) {
        case actionTypes.SET_REMAINING: {
            return {
                ...state,
                remaining: action.payload
            }
        }

        default: {
            return state
        }
    }
}
