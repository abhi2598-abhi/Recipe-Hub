import React, { useState } from 'react';

import Card from '../shared/components/UiElements/Card';
import Button from '../shared/components/FormElements/Button';
import Input from '../shared/components/FormElements/Input';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../shared/util/Validators';
import { useForm } from '../shared/hooks/Form-hooks';

const DUMMY_USER = {
    name: "abhi",
    email: "abhi@gmail.com",
    password: "123456"
};

const ProfilePage = () => {
    // Initialize form with the dummy user's current details
    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: DUMMY_USER.name,
                isValid: true
            },
            email: {
                value: DUMMY_USER.email,
                isValid: true
            },
            password: {
                value: DUMMY_USER.password,
                isValid: true
            }
        },
        true
    );

    const submitHandler = event => {
        event.preventDefault();
       
        console.log("Updated user details:", formState.inputs);
    };

    return (
        <div className="profile-page">
            <Card className="profile-card">
                <h2>EDIT PROFILE</h2>
                <hr />
                <form onSubmit={submitHandler}>
                    <Input
                        id="name"
                        element="input"
                        type="text"
                        label="Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a valid name."
                        onInput={inputHandler}
                        initialValue={formState.inputs.name.value}
                        initialValid={formState.inputs.name.isValid}
                    />

                    <Input
                        id="email"
                        element="input"
                        type="email"
                        label="Email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Please enter a valid email."
                        onInput={inputHandler}
                        initialValue={formState.inputs.email.value}
                        initialValid={formState.inputs.email.isValid}
                    />

                    <Input
                        id="password"
                        element="input"
                        type="password"
                        label="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Please enter a password with at least 6 characters."
                        onInput={inputHandler}
                        initialValue={formState.inputs.password.value}
                        initialValid={formState.inputs.password.isValid}
                    />

                    <Button type="submit" disabled={!formState.isValid}>
                        Save Changes
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ProfilePage;
