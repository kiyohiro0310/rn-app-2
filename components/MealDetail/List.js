import { Text, View, StyleSheet } from "react-native";

function List({data}) {
  return data.map((dataPoint) => (
    <View key={dataPoint}>
      <Text style={styles.listItem} key={dataPoint}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    }
});