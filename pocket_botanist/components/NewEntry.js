import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const NewEntry = ({
  common_name,
  scientific_name,
  taxonomy,
  edible_parts,
  image,
}) => {
  return (
    <View style={new_styles.page}>
      <View style={new_styles.page_top}>
        <View style={new_styles.img_box}>
          <Image source={{uri: image}} style={new_styles.plant_image} />
        </View>
        <View style={new_styles.plant_names}>
          <Text style={new_styles.text}>Common Name: {common_name}</Text>
          <Text style={new_styles.text}>
            Scientific Name: {scientific_name}
          </Text>
        </View>
      </View>
      <View style={new_styles.page_bottom}>
        <View style={new_styles.plant_info}>
          <Text style={new_styles.bottom_text}>Taxonomy: {taxonomy}</Text>
          <Text style={new_styles.bottom_text}>
            Edible Parts: {edible_parts ? edible_parts : 'None'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const new_styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Cantora One',
    padding: 5,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
    margin: 45,
    borderRadius: 15,
  },
  page_top: {
    flex: 1,
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plant_image: {
    borderColor: 'black',
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  img_box: {
    width: '45%',
    height: '100%',
  },
  plant_names: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    columnGap: 15,
    width: '55%',
  },
  page_bottom: {
    flex: 2,
    margin: 15,
    justifyContent: 'center',
  },
  plant_info: {
    alignItems: 'center',
  },
  bottom_text: {
    fontFamily: 'Cantora One',
    padding: 5,
    fontSize: 20,
  },
});

export default NewEntry;
