import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import axios from 'axios';
import NewEntry from '../components/NewEntry';
import PlantCounter from '../components/PlantCounter';

const PlantView = ({route, navigation}) => {
  const {user, plants_collected, plant_details, plant_photo} = route.params;
  const common_name = plant_details.common_names[0];
  const scientific_name = plant_details.scientific_name;
  const taxonomy = plant_details.taxonomy.class;
  const image = plant_photo;
  let edible_parts = null;
  if (plant_details.edible_parts) {
    edible_parts = plant_details.edible_parts[0];
  }

  useEffect(() => {
    const UpdatePlants = async () => {
      const plant = {
        common_name: common_name,
        scientific_name: scientific_name,
        taxonomy: taxonomy,
        edible_parts: edible_parts,
        image: image,
      };
      const new_entry = {username: user, new_plant: plant};

      await axios.post('http://10.13.224.147:3000/user', new_entry);
    };
    UpdatePlants();
  });

  return (
    <View style={pv_styles.container}>
      <View style={pv_styles.top}>
        <PlantCounter plant_count={plants_collected.length + 1} />
      </View>
      <View style={pv_styles.middle}>
        <Text style={pv_styles.text}>NEW ENTRY</Text>
        <NewEntry
          common_name={common_name}
          scientific_name={scientific_name}
          taxonomy={taxonomy}
          edible_parts={edible_parts}
          image={image}
        />
      </View>
      <View style={pv_styles.bottom}>
        <Pressable
          style={pv_styles.return_btn}
          onPress={() => {
            navigation.navigate('Home', {
              user: user,
            });
          }}>
          <Image
            source={require('../assets/images/PB_ReturnArrow.png')}
            style={pv_styles.return_arrow}
          />
        </Pressable>
      </View>
    </View>
  );
};

const pv_styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontFamily: 'Cantora One',
    textAlign: 'center',
    marginTop: 30,
  },
  top: {
    flex: 1,
    backgroundColor: '#65882a',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  middle: {
    flex: 7,
    backgroundColor: '#dbe1ab',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#65882a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  return_btn: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  return_arrow: {
    width: 55,
    height: 55,
  },
});

export default PlantView;
