import React from "react";

import Card from "../shared/components/UiElements/Card";
import Button from "../shared/components/FormElements/Button";
import Input from "../shared/components/FormElements/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../shared/util/Validators";
import ImageUpload from "../shared/components/FormElements/ImageUpload";
import { useForm } from '../shared/hooks/Form-hooks';


import './AddRecipe.css'


const AddRecipe = () => {

const [formState, inputHandler] = useForm({
    title: {
        value: '',
        isValid: false
    },
    ingredients: {
        value: '',
        isValid: false
    },
    instructions: {
        value: '',
        isValid: false
    },
    image: {
        value: '',
        isValid: false
    }
}, false);

    const recipeSubmitHandler = () => {

    }


    return (
        <div className="add-recipe-container">
            <Card className="addrecipe" >
            <h1>ADD RECIPE</h1>
            <form onSubmit={recipeSubmitHandler}>
            <Input 
            id='title'
            label='Recipe Name'
            element='input'
            type='text'
            placeholder='Enter the recipe Name'
            validator={[VALIDATOR_REQUIRE()]}
            errorText='Name is Required'
            onInput={inputHandler}
            />
            <Input 
            id='ingredients'
            label='Recipe Ingredients'
            element='textarea'
            type='text'
            placeholder='Enter the recipe Ingredients'
            validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(20)]}
            errorText='Ingredients are Required'
            rows='5'
            onInput={inputHandler}
            />
            <Input 
            id='instructions'
            label='Recipe Cooking Instructions'
            element='textarea'
            type='text'
            placeholder='Enter the recipe Cooking Instructions'
            validator={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(20)]}
            errorText='Instructions are Required'
            rows='5'
            onInput={inputHandler}
            />
            <ImageUpload id='image' errorText='Please Provide an Image' onInput={inputHandler}/>
            <Button type="submit" disabled={!formState.isValid}>Add Recipe</Button>
            </form>
            </Card>
        </div>
    )
}

export default AddRecipe;

