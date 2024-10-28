import React, { useState } from "react";


import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../shared/util/Validators";
import Card from "../shared/components/UiElements/Card";
import Button from "../shared/components/FormElements/Button";
import Input from "../shared/components/FormElements/Input";
import { useForm } from '../shared/hooks/Form-hooks';


const Auth = () => {

    const [isLoginMode, setIsLoginMode] = useState(false); 
    const [isAdminMode, setIsAdminMode] = useState(true); 

    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    const switchRoleHandler = () => {
        if (isAdminMode) {
            setFormData(
                {
                ...formState.inputs,
                adminKey: {
                    value: '',
                    isValid: false
                }
            },false
        )
        }
        setIsAdminMode(prevMode => !prevMode);
    };

    return (<React.Fragment>
            <Card className="authentication">
            {!isLoginMode ? <h2>SIGN-UP</h2> : <h2>LOGIN</h2>}
            <hr />
            <form>
                {!isLoginMode && (
                    <div>
                        <Input
                            id="name"
                            element="input"
                            label="Name"
                            type="text"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorText="Name is Required"
                            placeholder="Enter Your Name"
                            onInput={inputHandler}
                        />
                    </div>
                )}

                <Input
                    id="email"
                    element="input"
                    label="E-Mail"
                    type="email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Email is required"
                    placeholder="Enter Your Email"
                    onInput={inputHandler}
                />

                <Input
                    id="password"
                    element="input"
                    label="Password"
                    type="password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Password must be at least 5 characters"
                    placeholder="Enter Your Password"
                    onInput={inputHandler}
                />

                {/* Show Admin Key input only if both Login Mode and Admin Mode are active */}
                {isLoginMode && isAdminMode && (
                    <Input
                        id="adminKey"
                        element="input"
                        label="Admin Key"
                        type="password"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Admin Key is required for Admin Login"
                        placeholder="Enter Admin Key"
                        onInput={inputHandler}
                    />
                )}

                {isLoginMode && (
                    <div>
                        <Button inverse type="button" onClick={switchRoleHandler}>
                            Switch to {isAdminMode ? 'User' : 'Admin'} Login
                        </Button>
                    </div>
                )}
            </form>

            <Button type="submit" disabled={!formState.isValid}>{!isLoginMode ? 'Sign-Up' : (isAdminMode ? 'Admin Login' : 'User Login')}</Button>
            {!isAdminMode && <Button inverse onClick={switchModeHandler}>
                Switch to {isLoginMode ? 'Signup' : 'Login'}
            </Button>}
        </Card>
    </React.Fragment>
    );
};

export default Auth;
