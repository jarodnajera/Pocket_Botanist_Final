import {React, useState, useEffect} from 'react';
import {StyleSheet, View, Pressable, Image} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import PlantCounter from '../components/PlantCounter';

const HomeView = ({route, navigation}) => {
  const username = route.params.user;
  const [loading, setLoading] = useState(false);
  const [plantArr, setPlantArr] = useState([]);

  useEffect(() => {
    const FetchUser = async () => {
      const response = await fetch('http://10.13.224.147:3000/user');
      const data = await response.text();
      const user_data = JSON.parse(data);
      setPlantArr(user_data[username].plants);
    };

    FetchUser();
  });

  const HandleHealthImage = () => {
    const options = {
      includeBase64: true,
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Pic canceled');
      } else {
        console.log('Pic was sent!');
        setLoading(true);
        SendHealthPic(response.assets[0].base64);
      }
    });
  };

  const SendHealthPic = async picture => {
    console.log('Before sending to api');
    const data = {
      api_key: 'j9OMJpiSuhIFJd7PZeVqPaUe4NbRdEGl2PABNX7kXZkEb6iq7c',
      images: [picture],
      modifiers: ['crops_fast', 'similar_images'],
      language: 'en',
      disease_details: ['cause', 'common_names', 'description', 'treatment'],
    };

    try {
      const response = await fetch(
        'https://api.plant.id/v2/health_assessment',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      const plant_info = await response.json();
      const plant_dt = plant_info.health_assessment.diseases[0].disease_details;
      console.log(plant_dt);
      navigation.navigate('Health View', {
        user: username,
        plants_collected: plantArr,
        plant_details: plant_dt,
      });
    } finally {
      setLoading(false);
    }
  };

  const HandleImageCapture = () => {
    const options = {
      includeBase64: true,
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Pic canceled');
      } else {
        console.log('Pic was sent!');
        setLoading(true);
        SendPlantPic(response.assets[0].base64);
      }
    });
  };

  const SendPlantPic = async picture => {
    console.log('Before sending to api');
    const data = {
      api_key: 'j9OMJpiSuhIFJd7PZeVqPaUe4NbRdEGl2PABNX7kXZkEb6iq7c',
      images: [picture],
      modifiers: ['crops_fast', 'similar_images'],
      plant_language: 'en',
      plant_details: [
        'common_names',
        'url',
        'taxonomy',
        'synonyms',
        'edible_parts',
      ],
    };

    try {
      const response = await fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const plant_info = await response.json();
      const plant_ph = plant_info.images[0].url;
      const plant_dt = plant_info.suggestions[0].plant_details;
      navigation.navigate('Plant View', {
        user: username,
        plants_collected: plantArr,
        plant_details: plant_dt,
        plant_photo: plant_ph,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={home_styles.container}>
      <View style={home_styles.top}>
        <PlantCounter plant_count={plantArr.length} />
      </View>
      <View style={home_styles.middle}>
        {loading && (
          <Image
            source={require('../assets/images/PB_Loader.png')}
            style={home_styles.loading}
          />
        )}
        {!loading && (
          <>
            <Image
              source={require('../assets/images/PB_LogoH.png')}
              style={home_styles.home_logo}
            />
            <Image
              source={require('../assets/images/PB_Norm.png')}
              style={home_styles.norm}
            />
          </>
        )}
      </View>
      <View style={home_styles.bottom}>
        <Pressable
          style={home_styles.book_btn}
          onPress={() => {
            navigation.navigate('Encyclopedia', {
              user: username,
              plants_collected: plantArr,
            });
          }}>
          <Image
            source={require('../assets/images/PB_Book.png')}
            style={home_styles.book}
          />
        </Pressable>
        <Pressable style={home_styles.book_btn} onPress={HandleImageCapture}>
          <Image
            source={require('../assets/images/PB_Camera.png')}
            style={home_styles.book}
          />
        </Pressable>
        <Pressable style={home_styles.book_btn} onPress={HandleHealthImage}>
          <Image
            source={require('../assets/images/PB_Health.png')}
            style={home_styles.book}
          />
        </Pressable>
      </View>
    </View>
  );
};

const home_styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 5,
    fontFamily: 'Cantora One',
  },
  home_logo: {
    width: 250,
    height: 250,
  },
  norm: {
    width: 230,
    height: 230,
    marginLeft: 25,
  },
  top: {
    flex: 1,
    backgroundColor: '#65882a',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  middle: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dbe1ab',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#65882a',
  },
  book_btn: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  book: {
    width: 55,
    height: 55,
  },
  loading: {
    width: 300,
    height: 300,
  },
});

export default HomeView;
