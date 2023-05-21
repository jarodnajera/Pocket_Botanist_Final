import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HealthReport = ({cause, common_name, description, treatment}) => {
  return (
    <View style={hr_styles.page}>
      <View style={hr_styles.report_container}>
        <Text style={hr_styles.common_name}>
          Common Name: {common_name ? common_name : 'N/A'}
        </Text>
        <Text style={hr_styles.desc}>Description: {description}</Text>
        <Text style={hr_styles.cause}>Cause: {cause ? cause : 'N/A'}</Text>
        <Text style={hr_styles.treatment}>
          Treatment: {treatment ? treatment : 'None :('}
        </Text>
      </View>
    </View>
  );
};

const hr_styles = StyleSheet.create({
  common_name: {
    textAlign: 'center',
    fontFamily: 'Cantora One',
    fontSize: 23,
    marginBottom: 15,
  },
  desc: {
    fontFamily: 'Cantora One',
    fontSize: 17,
    padding: 7,
  },
  cause: {
    fontFamily: 'Cantora One',
    fontSize: 17,
    padding: 7,
  },
  treatment: {
    fontFamily: 'Cantora One',
    fontSize: 17,
    padding: 7,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
    margin: 45,
    borderRadius: 15,
  },
  report_container: {
    margin: 25,
  },
});

export default HealthReport;
