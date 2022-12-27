import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList, ImageEditor } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation])

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration
    }
    return (
      <MealItem {...mealItemProps}  />
    );
  }
  return (
    <View style={sytles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
