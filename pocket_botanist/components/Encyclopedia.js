import {React, useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

const Encyclopedia = ({plants}) => {
  const [currPlant, setCurrPlant] = useState(0);
  return (
    <View style={enc_styles.page}>
      <Pressable
        style={enc_styles.left_btn}
        onPress={() => {
          if (currPlant > 0) {
            setCurrPlant(currPlant - 1);
            console.log(currPlant);
          }
        }}>
        <Image
          source={require('../assets/images/PB_LeftArrow.png')}
          style={enc_styles.arrow_img}
        />
      </Pressable>
      <Pressable
        style={enc_styles.right_btn}
        onPress={() => {
          if (currPlant < plants.length - 1) {
            setCurrPlant(currPlant + 1);
            console.log(currPlant);
          }
        }}>
        <Image
          source={require('../assets/images/PB_RightArrow.png')}
          style={enc_styles.arrow_img}
        />
      </Pressable>
      <View style={enc_styles.page_top}>
        <View style={enc_styles.img_box}>
          <Image
            source={{uri: plants[currPlant].image}}
            style={enc_styles.plant_image}
          />
        </View>
        <View style={enc_styles.plant_names}>
          <Text style={enc_styles.text}>
            Common Name: {plants[currPlant].common_name}
          </Text>
          <Text style={enc_styles.text}>
            Scientific Name: {plants[currPlant].scientific_name}
          </Text>
        </View>
      </View>
      <View style={enc_styles.page_bottom}>
        <View style={enc_styles.plant_info}>
          <Text style={enc_styles.bottom_text}>
            Taxonomy: {plants[currPlant].taxonomy}
          </Text>
          <Text style={enc_styles.bottom_text}>
            Edible Parts:{' '}
            {plants[currPlant].edible_parts
              ? plants[currPlant].edible_parts
              : 'None'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const enc_styles = StyleSheet.create({
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
  left_btn: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#006633',
    width: 55,
    height: 55,
    top: '40%',
    left: '-8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right_btn: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#006633',
    width: 55,
    height: 55,
    top: '40%',
    right: '-8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow_img: {
    width: 50,
    height: 50,
  },
});

export default Encyclopedia;
