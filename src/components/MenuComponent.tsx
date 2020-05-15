import * as React from "react";
import {css} from "emotion";
import {StateContext} from './App';
import {SET_REMAINING} from "../store/actions";
import {useHistory } from "react-router-dom";

const menuClass = css`
    
`

const menuItemClass = css`
    
`

const remainingClass = css`
    padding: 10px;
    
    span {
        display: block;
    }
`

export const MenuComponent: React.FunctionComponent = React.memo(props => {
    const {state, dispatch} = React.useContext(StateContext);
    const history = useHistory()

    const redirectToTransferPage = () => {
        history.push('./transfer')
    }

    return <div className={menuClass}>
        <div className={remainingClass}>
            <span>{state.remaining}դր</span>
            Հաշվի մնացորդ
        </div>

        <div className={menuItemClass} onClick={redirectToTransferPage}>
            Փոխանցում հասանելի գումար
        </div>

        <div className={menuItemClass}>
            Փոխանցումների պատմություն
        </div>
    </div>
})
