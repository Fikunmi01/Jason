import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

export const Menu = () => {
  const [snack, setSnack] = useState(false);
  const [meal, setMeal] = useState(true);
  const [drink, setDrink] = useState(false);

  const handleSnackToggle = () => {
    setSnack(true);
    setDrink(false);
    setMeal(false);
  };

  const handleMealToggle = () => {
    setMeal(true);
    setDrink(false);
    setSnack(false);
  };

  const handleDrinkToggle = () => {
    setDrink(true);
    setSnack(false);
    setMeal(false);
  };

  const numOfBbqribs = useSelector((state) => state.meal.numOfBbqribs);
  const numOfBeef = useSelector((state) => state.meal.numOfBeef);
  const numOfCajun = useSelector((state) => state.meal.numOfCajun);
  const numOfCalamari = useSelector((state) => state.snack.numOfCalamari);
  const numOfCaprese = useSelector((state) => state.snack.numOfCaprese);
  const numOfChickenparmesan = useSelector(
    (state) => state.meal.numOfChickenparmesan
  );
  const numOfChickenSatay = useSelector(
    (state) => state.snack.numOfChickenSatay
  );
  const numOfCosmopolitan = useSelector(
    (state) => state.drink.numOfCosmopolitan
  );
  const numOfEspressomartini = useSelector(
    (state) => state.drink.numOfEspressomartini
  );
  const numOfLamb = useSelector((state) => state.meal.numOfLamb);
  const numOfMargarita = useSelector((state) => state.drink.numOfMargarita);
  const numOfMojito = useSelector((state) => state.drink.numOfMojito);
  const numOfMojitomocktail = useSelector(
    (state) => state.drink.numOfMojitomocktail
  );
  const numOfMushroomrisotto = useSelector(
    (state) => state.meal.numOfMushroomrisotto
  );
  const numOfMushrooms = useSelector((state) => state.snack.numOfMushrooms);
  const numOfNachos = useSelector((state) => state.snack.numOfNachos);
  const numOfNegroni = useSelector((state) => state.drink.numOfNegroni);
  const numOfOldfashioned = useSelector(
    (state) => state.drink.numOfOldfashioned
  );
  const numOfPinacolada = useSelector((state) => state.drink.numOfPinacolada);
  const numOfSalmon = useSelector((state) => state.meal.numOfSalmon);
  const numOfShirleytemple = useSelector(
    (state) => state.drink.numOfShirleytemple
  );
  const numOfShrimp = useSelector((state) => state.snack.numOfShrimp);
  const numOfShrimppad = useSelector((state) => state.meal.numOfShrimppad);
  const numOfSpicytofu = useSelector((state) => state.meal.numOfSpicytofu);
  const numOfSpinach = useSelector((state) => state.snack.numOfSpinach);
  const numOfVeggie = useSelector((state) => state.meal.numOfVeggie);
  const numOfVirginpinacolada = useSelector(
    (state) => state.drink.numOfVirginpinacolada
  );
  const numOfWings = useSelector((state) => state.snack.numOfWings);

  const snackArray = [
    {
      id:1,
      mealName: "BRUSCHETTA CAPRESE",
      mealDetails: "Tomatoes, mozzarella, basil",
      mealRemaining: `${numOfCaprese}`,
    },
    {
      id:2,
      mealName: "GARLIC BUTTER SHRIMP",
      mealDetails: "Shrimp, garlic, butter",
      mealRemaining: `${numOfShrimp}`,
    },
    {
      id:3,
      mealName: "SPINACH ARTICHOKE DIP",
      mealDetails: "Spinach, artichokes, cream cheese",
      mealRemaining: `${numOfSpinach}`,
    },

    {
      id:4,
      mealName: "STUFFED MUSHROOMS",
      mealDetails: "Mushrooms, cream cheese, breadcrumbs",
      mealRemaining: `${numOfMushrooms}`,
    },
    {
      id:5,
      mealName: "CHICKEN SATAY",
      mealDetails: "Chicken, peanut sauce, cucumber",
      mealRemaining: `${numOfChickenSatay}`,
    },
    {
      id:6,
      mealName: "CRISPY CALAMARI",
      mealDetails: "Calamari, flour, lemon wedges",
      mealRemaining: `${numOfCalamari}`,
    },
    {
      id:7,
      mealName: "LOADED NACHOS",
      mealDetails: "Tortilla chips, cheese, salsa, guacamole",
      mealRemaining: `${numOfNachos}`,
    },
    {
      id:8,
      mealName: "BUFFALO CHICKEN WINGS",
      mealDetails: "Chicken wings, buffalo sauce, blue cheese dip",
      mealRemaining: `${numOfWings}`,
    },
  ];

  const eatArray = [
    {
      id:1,
      mealName: "SPICY TOFU STIR-FRY",
      mealDetails: "Tofu, bell peppers, broccoli, soy sauce",
      mealRemaining: `${numOfSpicytofu}`,
    },
    {
      id:2,
      mealName: "SHRIMP PAD THAI",
      mealDetails: "Shrimp, rice noodles, bean sprouts, peanuts",
      mealRemaining: `${numOfShrimppad}`,
    },
    {
      id:3,
      mealName: "MEDITERRANEAN LAMB",
      mealDetails: "Lamb chops, lemon, oregano, olive oil",
      mealRemaining: `${numOfLamb}`,
    },
    {
      id:4,
      mealName: "MUSHROOM RISOTTO",
      mealDetails: "Arborio rice, mushrooms, Parmesan cheese",
      mealRemaining: `${numOfMushroomrisotto}`,
    },
    {
      id:5,
      mealName: "TERIYAKI SALMON",
      mealDetails: "Salmon fillet, teriyaki sauce, sesame seeds, green onions",
      mealRemaining: `${numOfSalmon}`,
    },
    {
      id:6,
      mealName: "BEEF FAJITAS",
      mealDetails: "Beef strips, bell peppers, onions, fajita seasoning",
      mealRemaining: `${numOfBeef}`,
    },
    {
      id:7,
      mealName: "BBQ RIBS",
      mealDetails: "Pork ribs, BBQ sauce, brown sugar, paprika",
      mealRemaining: `${numOfBbqribs}`,
    },
    {
      id:8,
      mealName: "VEGGIE CURRY",
      mealDetails: "Mixed vegetables, curry paste, coconut milk",
      mealRemaining: `${numOfVeggie}`,
    },
    {
      id:9,
      mealName: "CHICKEN PARMESAN",
      mealDetails: "Chicken breast, marinara sauce, mozzarella cheese, basil",
      mealRemaining: `${numOfChickenparmesan}`,
    },
    {
      id:10,
      mealName: "CAJUN GRILLED SHRIMP",
      mealDetails: "Shrimp, Cajun seasoning, lemon, butter",
      mealRemaining: `${numOfCajun}`,
    },
  ];

  const drinkArray = [
    {
      id:1,
      mealName: "MOJITO",
      mealDetails: "Rum, lime juice, mint leaves, soda water",
      mealRemaining: `${numOfMojito}`,
    },
    {
      id:2,
      mealName: "NEGRONI",
      mealDetails: "Gin, Campari, sweet vermouth, orange twist",
      mealRemaining: `${numOfNegroni}`,
    },
    {
      id:3,
      mealName: "MARGARITA",
      mealDetails: "Tequila, lime juice, triple sec, salt rim",
      mealRemaining: `${numOfMargarita}`,
    },
    {
      id:4,
      mealName: "ESPRESSO MARTINI",
      mealDetails: "Vodka, coffee liqueur, espresso, sugar syrup",
      mealRemaining: `${numOfEspressomartini}`,
    },
    {
      id:5,
      mealName: "OLD FASHIONED",
      mealDetails: "Bourbon, sugar cube, Angostura bitters, orange peel",
      mealRemaining: `${numOfOldfashioned}`,
    },
    {
      id:6,
      mealName: "MOJITO MOCKTAIL",
      mealDetails: "Mint leaves, lime juice, soda water, simple syrup",
      mealRemaining: `${numOfMojitomocktail}`,
    },
    {
      id:7,
      mealName: "COSMOPOLITAN",
      mealDetails: "Vodka, cranberry juice, lime juice, orange liqueur",
      mealRemaining: `${numOfCosmopolitan}`,
    },
    {
      id:8,
      mealName: "VIRGIN PINA COLADA",
      mealDetails: "Coconut cream, pineapple juice",
      mealRemaining: `${numOfVirginpinacolada}`,
    },
    {
      id:9,
      mealName: "PIÑA COLADA",
      mealDetails: "Rum, coconut cream, pineapple juice",
      mealRemaining: `${numOfPinacolada}`,
    },
    {
      id:10,
      mealName: "SHIRLEY TEMPLE",
      mealDetails: "Ginger ale, grenadine, maraschino cherry garnish",
      mealRemaining: `${numOfShirleytemple}`,
    },
  ];

  return (
    <div className="relative font-sans px-4 lg:px-0">
      <div className="border-b-2 mb-6 lg:mb-10 border-spacing-y-6">
        <h2 className="text-3xl pb-6 text-black font-bold">EXPLORE MENU</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex lg:flex-col lg:gap-y-6 pb-5 gap-x-5">
          <p
            className={`text-2xl font-sans font-bold cursor-pointer ${
              snack ? "text-black" : "text-offWhite opacity-50"
            }`}
            onClick={handleSnackToggle}
          >
            SNACK
          </p>
          <p
            className={`text-2xl cursor-pointer font-sans font-bold ${
              meal ? "text-black" : "text-offWhite opacity-50"
            }`}
            onClick={handleMealToggle}
          >
            EAT
          </p>
          <p
            className={`text-2xl font-sans cursor-pointer font-bold ${
              drink ? "text-black" : "text-offWhite opacity-50"
            }`}
            onClick={handleDrinkToggle}
          >
            DRINK
          </p>
        </div>

        <motion.div
          className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 mb-20 "
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 2 }}
        >
          {snack ? (
            <>
              {snackArray.map((item) => (
                <div
                key={item.id}
                  className={`flex relative justify-between pb-6 lg:pb-0${
                    snack ? "visible" : "hidden"
                  }`}
                >
                  <span>
                    <h3 className="text-lg text-black font-bold">
                      {item.mealName}
                    </h3>
                    <p className="text-sm text-black opacity-90 font-medium">
                      {item.mealDetails}
                    </p>
                  </span>

                  <p className="font-bold text-black text-xl">
                    {item.mealRemaining}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}

          {meal ? (
            <>
              {eatArray.map((item) => (
                <div
                key={item.id}

                  className={`flex justify-between pb-6 lg:pb-0${
                    meal ? "visible" : "hidden"
                  }`}
                >
                  <span>
                    <h3 className="text-lg text-black font-bold">
                      {item.mealName}
                    </h3>
                    <p className="text-sm text-black opacity-90 font-medium">
                      {item.mealDetails}
                    </p>
                  </span>

                  <p className="font-bold text-black text-xl">
                    {item.mealRemaining}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}

          {drink ? (
            <>
              {drinkArray.map((item) => (
                <div
                key={item.id}

                  className={`flex justify-between pb-6 lg:pb-0 ${
                    drink ? "visible" : "hidden"
                  }`}
                >
                  <span>
                    <h3 className="text-lg text-black font-bold">
                      {item.mealName}
                    </h3>
                    <p className="text-sm text-black opacity-90 font-medium">
                      {item.mealDetails}
                    </p>
                  </span>

                  <p className="font-bold text-black text-xl">
                    {item.mealRemaining}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 mb-16 lg:mb-20">
        <img src="/assets/image4.jpg" className="lg:w-3/5" alt="" />
        <img src="/assets/image5.jpg" alt="" className="lg:w-1/3" />
      </div>
    </div>
  );
};
