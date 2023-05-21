import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const PlantCounter = ({plant_count}) => {
  return (
    <View style={pc_styles.plant_counter}>
      <Image
        source={require('../assets/images/PB_Leaf.png')}
        style={pc_styles.leaf}
      />
      <Text style={pc_styles.text}>{plant_count}</Text>
    </View>
  );
};

const pc_styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 20,
    fontFamily: 'Cantora One',
  },
  leaf: {
    width: 30,
    height: 30,
  },
  plant_counter: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    height: '50%',
    marginBottom: 10,
    borderRadius: 15,
  },
});

export default PlantCounter;
