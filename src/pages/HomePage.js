import React from 'react';

import RecipeList from '../components/RecipeList';

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



const HomePage = () => {
    return (
        <RecipeList items={DUMMY_RECIPES}/>
    )
}

export default HomePage;



