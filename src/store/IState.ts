import {ITransferHistory} from "../shared/models/ITransferHistory";

export interface IState {
    remaining: number,
    transferHistories: ITransferHistory[]
}
