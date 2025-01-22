export interface MenuType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imagePath: string;
  ingredients: string[];
  steps: string[];
}

export const menuData: MenuType[] = [
  {
    id: "fishorbeantacoworkshop",
    title: "Fish or Bean Taco Workshop",
    description: "Learn how to make delicious fish or bean tacos from scratch.",
    tags: ["Tacos", "Mexican", "Seafood"],
    imagePath: "/images/fish-or-bean-tacos.jpg",
    ingredients: [
      "Fish (baked with spices OR fried in egg, flour, and panko)",
      "Black beans",
      "Cumin",
      "Salt",
      "Pepper",
      "Hot sauce",
      "Shallot",
      "Jalapenos",
      "Parsley",
      "Garlic",
      "Olive oil",
      "Vinegar",
      "Tomato",
      "Cilantro",
      "Red onions",
      "Lime juice",
      "Mayo",
      "Lemon juice",
      "Carrot",
      "Mustard",
      "Pinch of sugar",
    ],
    steps: [
      "Pressure cook black beans with 2x the water for the required time depending on the bean.",
      "Once finished, reserve some bean juice in a separate container, and strain the rest of the beans.",
      "Spice beans with cumin, salt, pepper, hot sauce, and more.",
      "Use an immersion blender with small splashes of bean juice until desired consistency is reached.",
      "Very finely dice the shallot/red onions, garlic, and parsley.",
      "Combine everything in a medium mixing bowl and add olive oil, vinegar, salt, and pepper.",
      "Stir well and let sit for at least 15 minutes before serving.",
      "Finely dice tomatoes and onion (and jalapeno if desired).",
      "Add everything to a medium mixing bowl and season with salt and lime juice.",
      "Let it sit for at least 15 minutes before serving.",
      "Combine shredded cabbage and carrots in a large mixing bowl.",
      "Add mayo, lemon juice, dijon mustard, salt and pepper, and a pinch of sugar (if desired).",
      "Mix well and enjoy!",
    ],
  },
  {
    id: "yachaejeonkoreanveggiepancakeworkshop",
    title: "Yachaejeon (Korean Veggie Pancake) Workshop",
    description:
      "Master the art of making Yachaejeon, a savory Korean vegetable pancake.",
    tags: ["Korean", "Savory"],
    imagePath: "/images/yachaejeon.jpg",
    ingredients: [
      "4 green onions, cut into 1-inch long pieces",
      "1/3 cup leek (optional), sliced thinly 1 inch long",
      "3 oz zucchini matchsticks (about 1/2 cup)",
      "1 green chili pepper (or jalapeño), optional, sliced",
      "3 oz onion, sliced",
      "1/3 cup sweet potato",
      "1 fresh mushroom (white, baby portobello, or shiitake)",
      "3/4 cup all-purpose flour",
      "1/2 teaspoon kosher salt",
      "3/4 cup water",
      "vegetable oil",
    ],
    steps: [
      "Combine green onion, leek (if using), zucchini, green chili pepper (if using), onion, and sweet potato in a bowl. Add flour, salt, and 3/4 cup water. Mix it well with a wooden spoon.",
      "Heat up a large non-stick skillet over medium high heat.",
      "Add about 2 tablespoons vegetable oil and swirl it around to coat the skillet evenly. Add the batter to the skillet and spread it out evenly.",
      "Turn down the heat to medium and put the sliced mushroom on top. Gently press them in with a wooden spoon or spatula.",
      "Cook for 4 to 5 minutes until the bottom turns crunchy light golden brown. Grab the handle of the skillet and twirl it around so the pancake moves and is cooked evenly underneath.",
      "Turn or flip over the pancake.",
      "Increase the heat to medium high and add 1 to 2 tablespoons of vegetable oil along the edges of the pancake. Lift up one edge with your spatula and tilt the skillet so the oil flows underneath the pancake.",
      "Cook for 3 to 4 minutes until both sides turn light golden brown, occasionally pressing down with the spatula.",
      "Flip it over one more time and cook for another 2 minutes.",
    ],
  },
  {
    id: "vegetariandumplingsworkshop",
    title: "Vegetarian Dumplings Workshop",
    description:
      "Craft your own vegetarian dumplings with this hands-on workshop.",
    tags: ["Dumplings", "Asian"],
    imagePath: "/images/vegetarian-dumplings.jpg",
    ingredients: [
      "5.5 lbs firm or extra firm tofu, drained and crumbled",
      "3 lbs napa cabbage, thinly sliced",
      "2 lbs shiitake mushrooms, finely diced",
      "0.5 lbs wood ear mushrooms, rehydrated and minced",
      "3 heads garlic, grated",
      "1 small thumb-sized ginger, grated",
      "Light soy sauce",
      "Oyster sauce",
      "Salt",
      "Sugar",
      "White pepper",
      "Cornstarch",
      "Sesame oil",
      "Shaoxing wine or sake (optional, but recommended)",
      "MSG (optional, but recommended)",
      "At least 300 store-bought dumpling skins (square)",
      "Water to seal the edges when wrapping",
    ],
    steps: [
      "Prepare the napa cabbage (already sliced width-wise) first by sprinkling salt over them and mixing to incorporate. Let it sit to draw out moisture while you prepare the other ingredients.",
      "Work on the tofu as described above. Again, let it sit while you work on the mushrooms.",
      "Work on the mushrooms and aromatics in the meantime as described above.",
      "Soak the wood ear mushrooms in regular tap water too.",
      "Once all the ingredients for the filling are prepared, combine everything in a large mixing bowl and mix in the seasonings. Make sure to squeeze out as much water from the tofu and napa cabbage as possible.",
      "Prepare the dumpling wrappers and a small bowl of water to wet the edges of the wrapper.",
      "Take 1 piece of wrapper, and with the side that is less floury facing up on your palm, scoop in around 1 Tbsp of filling. Wet one side of the wrapper by dabbing your finger into the bowl of water and running it along the edge. Bring the 2 opposite sides of the square wrapper and fold it in half. Next, bring the 2 corners together and overlap it slightly. Dab one corner wet and pinch the 2 ends together.",
      "Repeat with all the filling and wrappers.",
      "Once done, bring a large pot to boil. Once at a rolling boil, gently put in the dumplings and stir to prevent sticking. Cook until they all float to the top. Scoop it out with a slotted spoon and serve. Enjoy!",
    ],
  },
  {
    id: "eggplantlasagnaandgarlicbreadworkshop",
    title: "Eggplant Lasagna and Garlic Bread Workshop",
    description:
      "Prepare a wholesome eggplant lasagna paired with homemade garlic bread.",
    tags: ["Italian", "Comfort Food"],
    imagePath: "/images/eggplant-lasagna-garlic-bread.jpg",
    ingredients: [],
    steps: [],
  },
  {
    id: "sushibakeworkshop",
    title: "Sushi Bake Workshop",
    description:
      "Learn how to make a crowd-pleasing sushi bake in this workshop.",
    tags: ["Japanese", "Seafood", "Baked"],
    imagePath: "/images/sushi-bake.jpg",
    ingredients: [
      "1/2 lb salmon, seasoned to preference",
      "1/2 lb imitation crab, shredded and cut",
      "3 oz cream cheese at room temperature",
      "1/4 cup Japanese mayo (Kewpie mayo)",
      "2-3 cups cooked rice",
      "1 tbsp sriracha",
      "2 tbsp rice vinegar",
      "Furikake",
      "Roasted seaweed",
      "Basic seasonings",
      "Neutral oil",
    ],
    steps: [
      "Shred salmon and add to the shredded imitation crab.",
      "Add the rest of your ingredients: cream cheese, Japanese mayo, and sriracha. Combine well and set aside.",
      "Layer 1: Combine 2-3 cups of cooked rice with 2 tbsp rice vinegar. Mix well. Brush a layer of oil onto an oven-safe dish. Pour in the mixed rice and flatten it out with a spatula.",
      "Layer 2: Top the rice off with roasted seaweed (cut or shredded).",
      "Layer 3: Top the rice + seaweed off with the salmon and imitation crab mixture and spread it evenly.",
      "Broil at high heat for 5 minutes or until golden.",
      "Decorate with a drizzle of mayo, sriracha, sesame seeds, and furikake.",
      "Serve the sushi wrapped in seaweed.",
    ],
  },
  {
    id: "brushettaworkshop",
    title: "Bruschetta Workshop",
    description: "Learn how to make a bruschetta in this workshop.",
    tags: ["Italy", "Appetizer"],
    imagePath: "/images/sushi-bake.jpg",
    ingredients: [
      "2 cups red and yellow grape tomatoes (or cherry tomatoes), halved",
      "1 tbsp balsamic vinegar",
      "16 whole basil leaves, chiffonade",
      "Salt and pepper, to taste",
      "1 whole baguette",
      "1/2 cup olive oil",
      "3 cloves garlic, halved",
      "1/2 cup feta cheese",
    ],
    steps: [
      "Cut baguette (or bread of choice) diagonally (12 slices) and lay flat on a baking sheet. Lightly brush with olive oil and toast in the oven for 12-15 minutes at 375°F.",
      "Slice tomatoes into quarters and add to a bowl with balsamic vinegar, basil, salt, and pepper. Toss to combine and adjust seasonings to taste.",
      "Slice the garlic in half, then rub the cut halves of the garlic evenly over the tops of the bread slices to add as much or as little garlic flavor as desired.",
      "Serve tomato, feta cheese, and garlic mixture over toasted bread.",
    ],
  },
];
