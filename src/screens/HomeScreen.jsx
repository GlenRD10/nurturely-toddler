import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Header from '../components/home/Header';
import CarouselSlider from '../components/home/CarouselSlider';
import ProgressCard from '../components/home/ProgressCard';
import GraphCard from '../components/home/GraphCard';
import Footer from '../components/home/Footer';

export default HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <CarouselSlider />
      <ProgressCard />
      <GraphCard />
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
