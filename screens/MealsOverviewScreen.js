import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;
  return (
    <View style={sytles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
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