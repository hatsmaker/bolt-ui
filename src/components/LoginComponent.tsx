import * as React from "react";
import {Button, Form} from "react-bootstrap";
import {css} from "emotion";
import {useHistory } from "react-router-dom";

const forgotPassClass = css`
    display: block;
    text-decoration: underline;
    margin-top: 17px;
`


export const LoginComponent: React.FunctionComponent = () => {
    const history = useHistory();
    const [validated, setValidated] = React.useState(false)

    const onSubmitHandler = (): void => {
        setValidated(true)
        history.push('./menu')
    }

    return (
        <Form noValidate validated={validated}>
            <Form.Group controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password"/>
            </Form.Group>

            <Button type="button" onClick={onSubmitHandler}>Submit form</Button>
            <a href="#" className={forgotPassClass}>Մոռացել եմ գաղտնաբարը</a>
        </Form>
    );
}
