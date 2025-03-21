export interface MenuType {
  id: string;
  title: string;
  description: string;
  tags: string[];
  ingredients: string[];
  steps: string[];
}

export const menuData: MenuType[] = [
  {
    id: "friedchickenworkshop",
    title: "Fried Chicken Workshop",
    description: "Delicious crunchy fried chicken.",
    tags: ["Deep Fried", "Chicken"],
    ingredients: [
      "2.5 lbs chicken parts",
      "2 teaspoons kosher salt",
      "2 teaspoons onion powder",
      "2 teaspoons paprika",
      "2 cups buttermilk",
      "2 teaspoons mustard powder",
      "2 cups all-purpose flour",
      "1 cup cornstarch",
      "2 teaspoons kosher salt",
      "2 teaspoons freshly ground black pepper",
      "2 teaspoons cayenne/paprika pepper",
      "2 teaspoons garlic powder",
    ],

    steps: [
      "Rinse the chicken in buttermilk with the salt, onion powder, mustard powder, and paprika for at least 2 hours.",
      "Whisk together 2 cups of all-purpose flour, 1 cup cornstarch, 2 teaspoons kosher salt, 2 teaspoons paprika, 2 teaspoons garlic powder, and 2 teaspoons black pepper. Set aside.",
      "Fill a large pot, deep fryer, or dutch oven with a high smoke point vegetable oil of your choice, and preheat to 325°F.",
      "Taking the chicken pieces one at a time, let the excess buttermilk drip off. Coat in the flour mixture, making sure the chicken is well coated. Shake off any excess. Set the chicken aside and let it sit for a few minutes until the coating starts to look a little pasty.",
      "Carefully add the piece of chicken to the deep fryer and continue with the next piece. Do not add more than three or four pieces at a time. You will need to fry in batches to avoid overcrowding the fryer. Fry until golden brown, turning every few minutes.",
      "Chicken is done when golden brown and the internal temperature reaches 165°F.",
      "When the chicken is done frying, place it on a paper towel-lined sheet tray and optionally sprinkle a little flaked salt on top. Continue with the rest of the chicken pieces.",
      "Serve with lemon wedges and spicy mayo and enjoy!",
    ],
  },
  {
    id: "pizzaworkshop",
    title: "Pizza Workshop",
    description: "A classic pizza recipe.",
    tags: ["Italian", "Pizza"],
    ingredients: [
      "4632g water",
      "44g yeast",
      "7720g all-purpose flour",
      "232g salt",
      "4 cans San Marzano tomatoes",
      "3400g mozzarella",
      "Olive oil",
      "15 packs basil",
      "142g x 4 arugula",
    ],
    steps: [
      "Combine flour, salt, yeast, and water into a bowl and mix.",
      "Knead the dough until smooth and bouncy.",
      "Let the dough rest until it doubles in size.",
      "Divide the dough into 6 equal portions.",
      "Ball the dough and let it rest for another hour or more.",
      "Stretch the pizza dough and top with desired toppings.",
      "Cook in an oven preheated at the highest temperature with a pizza stone for approximately 5 minutes.",
      "Enjoy!",
    ],
  },
  {
    id: "fishorbeantacoworkshop",
    title: "Fish or Bean Taco Workshop",
    description: "Learn how to make delicious fish or bean tacos from scratch.",
    tags: ["Tacos", "Mexican", "Seafood"],
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
    ingredients: [
      "EGGPLANT LASAGNA: 3–5 eggplants (round, fat ones)",
      "1 brown onion, diced [optional]",
      "4 cloves garlic, minced [optional]",
      "600g tomato passata or any jarred tomato sauce",
      "3 balls mozzarella, sliced",
      "1/2 bunch basil",
      "50g parmesan, grated",
      "Enough olive oil to cook all the eggplants",
      "GARLIC BREAD: 1/2 cup unsalted butter, room temp",
      "1 tbsp finely chopped fresh parsley (plus more for garnish)",
      "4 garlic cloves, grated",
      "1/8 tsp sea salt",
      "1 pound French bread/Italian bread/baguette/burger buns/Hawaiian rolls",
      "2 tbsp parmesan, grated (reserved from lasagna)",
      "Flaky sea salt (garnish)",
    ],
    steps: [
      "Over medium heat, heat up ~2 Tbsp of olive oil in a pot and sauté your diced onion and garlic until lightly browned and translucent.",
      "Add the tomato passata and cook out for 12–15 minutes. Season with salt & pepper to taste. Set aside once done.",
      "Slice the eggplants lengthways (2cm thick) and season both sides lightly with salt.",
      "Place into a colander vertically to drain and set aside for 15 minutes. Pat dry with a clean kitchen towel.",
      "In a large fry pan, over medium-high heat, heat up your oil and sear the eggplant slices in batches, careful to not overcrowd the pan.",
      "Slice mozzarella into 2cm thick rounds.",
      "In an oven-safe casserole dish or aluminum dish, start by spreading some of the tomato sauce to coat the bottom lightly, then add slices of the cooked eggplant to completely cover the bottom.",
      "Next, add some of your mozzarella cheese, basil leaves, and grated parmesan.",
      "Continue layering until all your eggplant is used up (make sure the last layer is just parmesan + breadcrumbs).",
      "GARLIC BREAD: Preheat the oven to 425°F/220°C and line a large baking sheet with parchment paper or foil.",
      "Slice bread in half lengthwise and place on a large baking sheet, cut sides up.",
      "In a medium bowl, mix butter, garlic, parsley, and salt together until well combined. Spread evenly over cut side of bread.",
      "Bake for 10–15 minutes or until slightly golden brown on the edges.",
    ],
  },
  {
    id: "sushibakeworkshop",
    title: "Sushi Bake Workshop",
    description:
      "Learn how to make a crowd-pleasing sushi bake in this workshop.",
    tags: ["Japanese", "Seafood", "Baked"],
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
  {
    id: "chickenpiccatawithfreshpastaworkshop",
    title: "Chicken Piccata with Fresh Pasta Workshop",
    description: "A delicious Chicken Piccata served with fresh pasta.",
    tags: ["Italian", "Pasta", "Chicken", "Homemade"],
    ingredients: [
      "400g All-Purpose Flour",
      "Pinch of salt",
      "Dab of oil",
      "4 eggs at room temperature",
      "Softened butter",
      "Grated Parmesan",
      "Minced Italian parsley",
      "3-4 chicken breasts",
      "Clarified butter (or regular butter)",
      "Olive oil (or any neutral oil)",
      "Flour (for coating chicken breasts)",
      "Salt & pepper",
      "1 tbsp capers + caper juice",
      "50mL white wine or white wine vinegar",
      "5-10mL lemon juice",
      "150mL chicken stock",
    ],
    steps: [
      "Make a well in the flour and salt mixture.",
      "Add eggs, olive oil, and a pinch of salt into the well.",
      "Mix the egg and olive oil with a fork without incorporating any flour yet.",
      "Slowly incorporate flour from the sides until a dough forms.",
      "Once dough forms, use your hands to incorporate the last bits of flour.",
      "Knead for 10-15 minutes until smooth and plump.",
      "Wrap with plastic wrap and let it rest for 30 minutes at room temperature.",
      "Flatten pasta dough with a roller.",
      "Run pasta dough through the widest setting (0) on a pasta machine.",
      "Set the pasta machine to (2) and roll dough through again.",
      "Fold the dough in half, reset machine to (0), and roll again.",
      "Repeat steps until you reach thinner settings (0 → 2 → 4 → 6 → 8).",
      "Run the thinned pasta sheet through the fettuccine cutter.",
      "Pat dry chicken breasts with paper towels.",
      "Butterfly chicken breasts by slicing in half horizontally.",
      "Season both sides with salt and pepper.",
      "Coat chicken with flour.",
      "Heat pan to medium-high, add clarified butter and olive oil (1:1 ratio).",
      "Sauté chicken until golden brown (~3-5 minutes per side).",
      "Remove chicken and lower heat to medium-low.",
      "Add capers and caper juice, smashing capers to release flavor.",
      "Deglaze with white wine vinegar and lemon juice, increasing heat to medium.",
      "Reduce by 30%.",
      "Add chicken stock and further reduce by 30%.",
      "Return chicken to pan and simmer uncovered for ~5 minutes.",
      "Remove chicken and continue reducing the sauce until slightly thickened.",
      "Add salt, pepper, and cold butter cubes to emulsify.",
      "Pour sauce over chicken and serve with pasta. Enjoy!",
    ],
  },
];
