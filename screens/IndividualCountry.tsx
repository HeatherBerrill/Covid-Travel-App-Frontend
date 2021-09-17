import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefinedStringSchema } from 'yup/lib/string';
import geoLocations from './geoLocations/geoLocations.json';

const IndividualCountry = (country: { route: { params: string } }) => {
  const [region, setRegion] = useState({
    latitude: 47.4256,
    longitude: 2.6054,
    latitudeDelta: 10,
    longitudeDelta: 0.25
  });

  //   console.log(Object.keys(geoLocations));

  //   function getKeyByValue(object: any, value: string) {
  //     return Object.keys(object).find((key) => object[key] === value);
  //   }

  useEffect(() => {
    const mapArea = country.route.params;
    setRegion(geoLocations.estonia);
  }, [country]);

  //   console.log(geoLocations.Denmark);

  const params = country.route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={region}
          // user location will be available to see, if location services are enabled
        />
        <View style={styles.container}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    alignSelf: 'center',
    width: 370,
    height: 500,

    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 6
  },
  logo: {
    flex: 1,
    height: 20,
    padding: 20,
    margin: 10,
    borderRadius: 80,
    alignItems: 'stretch',
    backgroundColor: '#5f9ea0'
  },
  countryTitle: {
    height: 5,
    margin: 20,
    padding: 20,
    width: 70,
    backgroundColor: '#ff7f50',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heatMapContainer: {
    flex: 3,
    flexDirection: 'row',
    margin: 25,
    height: 20,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    padding: 50,
    backgroundColor: '#fff8dc',
    justifyContent: 'center'
  },
  heatMap: {
    flexDirection: 'row',
    margin: 10,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryInfoContainer: {
    backgroundColor: '#fff8dc',
    flex: 4,
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 25,
    height: 20,
    padding: 50
  },
  info: {
    margin: 2,
    alignSelf: 'center'
  },
  text: {}
});

export default IndividualCountry;
