import React, { useState, useContext } from "react";
import { useParams } from 'react-router-dom';

import './RecipeDetail.css'; 
import Card from "../shared/components/UiElements/Card";
import Avatar from '../shared/components/UiElements/Avatar';
import Button from "../shared/components/FormElements/Button";
import { AuthContext } from "../shared/context/auth-context";


const DUMMY_RECIPES = [
    {
        id: 'R1',
        title: 'BURGER',
        image: 'https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg',
        ingredients: [
            "1/2 lb ground beef patty",
            "Salt and pepper to taste",
            "1 slice of cheddar cheese",
            "1 sesame seed burger bun",
            "2 slices of tomato",
            "2 leaves of lettuce",
            "1 slice of onion",
            "Ketchup and mustard to taste",
            "1-2 pickle slices (optional)"
        ],
        instructions: [
            "Season the Patty: Sprinkle salt and pepper on both sides of the beef patty.",
            "Cook the Patty: Grill or pan-fry the patty over medium-high heat for about 3-4 minutes per side until browned and cooked to your liking.",
            "Add Cheese: In the last minute of cooking, place the cheese slice on the patty and cover until melted.",
            "Toast the Bun: Toast the burger bun halves on the grill or in a pan for 1-2 minutes until golden.",
            "Assemble the Burger: Spread ketchup and mustard on the bottom half of the bun, add lettuce, tomato, patty with cheese, onion, and pickles if desired.",
            "Top and Serve: Place the top bun on the burger and serve hot. Enjoy!"
        ]
    },
    {
        id: 'R2',
        title: 'PIZZA',
        image: 'https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_640.jpg',
        ingredients: [
            "1 pre-made pizza crust",
            "1/2 cup pizza sauce",
            "1 cup shredded mozzarella cheese",
            "1/4 cup sliced pepperoni",
            "Fresh basil leaves (optional)",
            "1 tbsp olive oil",
            "1/2 tsp Italian seasoning"
        ],
        instructions: [
            "Preheat the oven to 450°F (230°C).",
            "Place the pizza crust on a baking sheet or pizza stone.",
            "Spread the pizza sauce evenly over the crust.",
            "Sprinkle mozzarella cheese over the sauce.",
            "Top with pepperoni slices and basil leaves, if using.",
            "Drizzle olive oil over the pizza and sprinkle with Italian seasoning.",
            "Bake in the oven for 10-12 minutes or until cheese is melted and crust is golden.",
            "Slice and serve hot!"
        ]
    },
    {
        id: 'R3',
        title: 'PASTA',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0n9NmYOcb12mg28gcIarzuDSxXxbt6d4mDA&s',
        ingredients: [
            "8 oz spaghetti pasta",
            "2 cups marinara sauce",
            "1/2 cup grated Parmesan cheese",
            "2 tbsp olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Fresh basil leaves for garnish"
        ],
        instructions: [
            "Cook the pasta according to package instructions. Drain and set aside.",
            "In a large skillet, heat olive oil over medium heat.",
            "Add minced garlic and sauté until fragrant, about 1 minute.",
            "Add marinara sauce to the skillet and cook for 3-5 minutes until heated.",
            "Add the cooked pasta to the skillet and toss to coat with sauce.",
            "Season with salt and pepper to taste.",
            "Serve hot, topped with Parmesan cheese and fresh basil leaves."
        ]
    }
  ];
  

const RecipeDetails = () => {

const auth = useContext(AuthContext);

    const { recipeId } = useParams();
    const recipe = DUMMY_RECIPES.find((recipe) => recipe.id === recipeId);
    
    const [rating, setRating] = useState(0); // State to handle rating
    const [comments, setComments] = useState([]); // State to handle comments
    const [newComment, setNewComment] = useState(""); // State to handle input for new comments

    if (!recipe) {
        return <p>Recipe not found!</p>;
    }

    // Function to handle rating submission
    const handleRating = (newRating) => {
        setRating(newRating);
    };

    // Function to handle comment submission
    const addCommentHandler = (event) => {
        event.preventDefault();
        if (newComment.trim() === '') return;

        setComments(prevComments => [...prevComments, newComment]);
        setNewComment(''); 
    };

    return (
        <div className="recipe-details">
        {auth.isAdminLoggedIn && <Button type="submit">Delete</Button>}
            <Card className="recipe-detail__content">
                <div className="recipe-detail__image">
                    <Avatar image={recipe.image} alt={recipe.title} />
                </div>
                <div className="recipe-detail__info">
                    <h1>{recipe.title}</h1>

                    <h2>Ingredients:</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <h2>Instructions:</h2>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    {/* Rating System */}
                    {auth.isLoggedIn && <div className="rating">
                        <h2>Rate this Recipe:</h2>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span
                                    key={star}
                                    className={rating >= star ? 'star filled' : 'star'}
                                    onClick={() => handleRating(star)}
                                >
                                    *
                                </span>
                            ))}
                        </div>
                        <p>Your Rating: {rating}/5</p>
                    </div>}
                    {auth.isLoggedIn && <div>
                        {/* Displaying comments */}
                        <h2>Your Comments: </h2>
                         <ul className="comments-list">
                            {comments.length === 0 ? (
                                <p>No comments yet. Be the first to comment!</p>
                            ) : ( 
                                comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))
                            )}
                        </ul>
                    {/* Comment Section */}
                    <div className="comments-section">
                        <form onSubmit={addCommentHandler}>
                            <textarea
                                rows="3"
                                value={newComment}
                                onChange={event => setNewComment(event.target.value)}
                                placeholder="Add a comment..."
                            />
                            <Button type="submit">Submit Comment</Button>
                        </form>
                    </div>
                    </div>}
                </div>
            </Card>
        </div>
    );
};

export default RecipeDetails;
