import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Modal,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import { getUsers } from '../api/usersApi';
import ReviewForm from './ReviewForm';
import Card from '../shared/Card';

// If creating navigation, automatically get nav props -> navigation
const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { name } = reviews;

  // Fetching data from API
  useEffect(() => {
    getInfo();
  }, [name]);

  const getInfo = async () => {
    const users = await getUsers()
    setReviews(users)
  }

  // Add data to DB from Form

  const addData = (user) => {
    setReviews((prevState) => {
      user.id = '5'
      return [
        ...prevState,
        user
      ]
    })
    setModalOpen(false)
  }

  /* Sending data to another page */
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        {/* Using to dismiss keyboard if click on screen */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addData={addData} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons 
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList 
        data={reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <View style={globalStyles.elementContainer}>
              <Card>
              <Text style={globalStyles.text}>{item.name}</Text>
              </Card>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0
  }
})

export default Home;
