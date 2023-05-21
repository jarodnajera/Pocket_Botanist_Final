import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import PlantCounter from '../components/PlantCounter';
import HealthReport from '../components/HealthReport';

const HealthView = ({route, navigation}) => {
  const {user, plants_collected, plant_details} = route.params;

  let cause = null;
  if (plant_details.cause) {
    cause = plant_details.cause;
  }
  let common_name = null;
  if (plant_details.common_names) {
    common_name = plant_details.common_names[0];
  }
  const description = plant_details.description;
  let treatment = null;
  if (plant_details.treatment.prevention) {
    treatment = plant_details.treatment.prevention[0];
  }
  console.log(description);
  console.log(treatment);

  return (
    <View style={hv_styles.container}>
      <View style={hv_styles.top}>
        <PlantCounter plant_count={plants_collected.length} />
      </View>
      <View style={hv_styles.middle}>
        <Text style={hv_styles.text}>PLANT CLINIC</Text>
        <HealthReport
          cause={cause}
          common_name={common_name}
          description={description}
          treatment={treatment}
        />
      </View>
      <View style={hv_styles.bottom}>
        <Pressable
          style={hv_styles.return_btn}
          onPress={() => {
            navigation.navigate('Home', {
              user: user,
            });
          }}>
          <Image
            source={require('../assets/images/PB_ReturnArrow.png')}
            style={hv_styles.return_arrow}
          />
        </Pressable>
      </View>
    </View>
  );
};

const hv_styles = StyleSheet.create({
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

export default HealthView;
