import * as React from 'react';
import {css, injectGlobal} from 'emotion'
import 'bootstrap/dist/css/bootstrap.min.css'
import {LoginComponent} from "./LoginComponent";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {IState} from "../store/IState";
import {IAction, reducer} from "../store/reducer";
import {MenuComponent} from "./MenuComponent";
import '../fonts/fonts.css'
import {TransferComponent} from "./TransferComponent";

injectGlobal`


    body {
        font-family: "arian";
    }
`

const mainClass = css`
    @media(min-width: 420px) {
        width: 70%;
        margin: 0 auto;l
    }
`;

const initialState: IState = {
    remaining: 500
}

export const StateContext = React.createContext<{ state: IState, dispatch: React.Dispatch<IAction> | any}>(
    {state: initialState, dispatch: null}
)

const App: React.FunctionComponent = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <StateContext.Provider value={{state, dispatch: dispatch!}}>
            <Container>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <LoginComponent/>
                        </Route>
                        <Route exact path="/menu">
                            <MenuComponent/>
                        </Route>
                        <Route exact path="/transfer">
                            <TransferComponent/>
                        </Route>
                    </Switch>
                </Router>
            </Container>
        </StateContext.Provider>
    );
}

export default App;
