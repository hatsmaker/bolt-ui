import * as React from "react";
import {css} from "emotion";
import {TitleComponent} from "./shared/TitleComponent";
import {StateContext} from "./App";
import {ITransferHistory} from "../shared/models/ITransferHistory";
import {mainColor} from "../constants/colors";
import {formatter} from "../shared/helpers/formatter";

const amountClass = css`
    color: ${mainColor};
    font-weight: bold;
    font-size: 21px;
`

const transferItemClass = css`
    display: flex;
    justify-content: space-between;
    padding: 19px 0px;
    
    & + & {
        border-top: 1px solid #ddd;
    }
`

const dateClass = css`
    letter-spacing: 1.1px;
`

export const TransferHistoryComponent: React.FunctionComponent = React.memo(props => {
    const {state} = React.useContext(StateContext);

    return <div>
        <TitleComponent>
            Փոխանցումների պատնություն
            <p>նախկինում կատարած փոխանցումները</p>
        </TitleComponent>

        <div>
            {state.transferHistories.map((transfer: ITransferHistory, index: number) => (
                <div className={transferItemClass} key={index}>
                    <span className={amountClass}>{formatter(transfer.amount)}դր</span>
                    <span className={dateClass}>{transfer.date}</span>
                </div>
            ))}
        </div>
    </div>
})
