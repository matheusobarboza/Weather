import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const myList = [
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 25,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 23,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 26,
    "min": 18,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 28,
    "min": 17,
    "description": "Ensolarado com muitas nuvens",
    "condition": "cloudly_day"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 28,
    "min": 17,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "23/03",
    "weekday": "Ter",
    "max": 28,
    "min": 17,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "24/03",
    "weekday": "Qua",
    "max": 25,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "25/03",
    "weekday": "Qui",
    "max": 25,
    "min": 19,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "26/03",
    "weekday": "Sex",
    "max": 27,
    "min": 18,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  },
  {
    "date": "27/03",
    "weekday": "Sáb",
    "max": 28,
    "min": 18,
    "description": "Parcialmente nublado",
    "condition": "cloudly_day"
  }
]

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />

      <Header />

      <Conditions />

      <FlatList
        style={styles.list}
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        data={myList}
        keyExtractor={(item) => item.date}
        renderItem={ ({ item }) => <Forecast data={item} /> }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: '#e8f0ff'
  },
  list: {
    marginTop: 10,
    marginLeft: 10
  }
});

export default Home;