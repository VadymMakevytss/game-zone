import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

const ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam('id')

  return (
    <View style={globalStyles.container}>
      <Card>
      <Text style={globalStyles.paragraph}>
        Name: {navigation.getParam('name')}
      </Text>
      <Text style={globalStyles.paragraph}>
        User name: {navigation.getParam('username')}
      </Text>
      <Text style={globalStyles.paragraph}>
        Website: {navigation.getParam('website')}
      </Text>
      {/* {Implement rating image thear} */}
      <View style={styles.rating}>
        <Text>GameZone Rating: </Text>
        {/* <Image source={require('../assets/rating-1.png')} /> */}
        <Image source={images.ratings[rating]} />
      </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
})

export default ReviewDetails;
