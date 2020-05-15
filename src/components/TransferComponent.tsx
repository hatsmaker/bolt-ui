import React from "react";
import {Alert, Button, Col, Form} from "react-bootstrap";
import {css} from "emotion";
import {StateContext} from "./App";
import {MIN_REMAINING} from "../constants/minRemaining";

const centerClass = css`
    align-items: flex-end;
`

export const TransferComponent: React.FunctionComponent = React.memo(props => {
    const [validated, setValidated] = React.useState(false)
    const {state, dispatch} = React.useContext(StateContext);

    const onSubmitHandler = () => {
        setValidated(true)
    }

    const disableTransfer = state.remaining <= MIN_REMAINING

    return <div>
        {disableTransfer &&
            <Alert variant='info'>
                Դուք չունեք բավարար գեւմար Ձեր հաշվին
            </Alert>
        }
        <Form noValidate validated={validated}>
            <Form.Row className={centerClass}>
                <Form.Group as={Col} xs={8}>
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Իդրամի հաշվեհամար"
                        defaultValue="Mark"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Check
                        custom
                        label="Հիշել"
                        type='checkbox'
                        id='remember-checkbox'
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="number" placeholder="Փոխանցվող գումարը"/>
            </Form.Group>

            <Button type="button" onClick={onSubmitHandler} disabled={disableTransfer}>Submit form</Button>
        </Form>
    </div>
})
