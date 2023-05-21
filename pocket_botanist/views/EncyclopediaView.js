import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import PlantCounter from '../components/PlantCounter';
import Encyclopedia from '../components/Encyclopedia';

const EncyclopediaView = ({route, navigation}) => {
  const username = route.params.user;
  const plants_collected = route.params.plants_collected;
  return (
    <View style={encv_styles.container}>
      <View style={encv_styles.top}>
        <PlantCounter plant_count={plants_collected.length} />
      </View>
      <View style={encv_styles.middle}>
        <Text style={encv_styles.text}>ENCYCLOPEDIA</Text>
        <Encyclopedia plants={plants_collected} />
      </View>
      <View style={encv_styles.bottom}>
        <Pressable
          style={encv_styles.return_btn}
          onPress={() => {
            navigation.navigate('Home', {
              user: username,
            });
          }}>
          <Image
            source={require('../assets/images/PB_ReturnArrow.png')}
            style={encv_styles.return_arrow}
          />
        </Pressable>
      </View>
    </View>
  );
};

const encv_styles = StyleSheet.create({
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

export default EncyclopediaView;
