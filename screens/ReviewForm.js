import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';

const ReviewForm = ({ addData }) => {
  return (
    <View style={globalStyles.container}>
      {/* Use Formik library to fillup form */}
      <Formik
        initialValues={{name: '', username: '', website: ''}}
        onSubmit={(values, actions) => {
          // Reset form to default
          actions.resetForm();
          // Add data to DB
          addData(values)
        }}
      >
        {(props) => (
          <View>

            <TextInput 
              style={globalStyles.input}
              placeholder='Review Title'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <TextInput 
              multiline
              style={globalStyles.input}
              placeholder='Review UserName'
              onChangeText={props.handleChange('username')}
              value={props.values.username}
            />
            <TextInput 
              style={globalStyles.input}
              placeholder='Review WebSite'
              onChangeText={props.handleChange('website')}
              value={props.values.website}
              keyboardType='numeric'
            />
            <Button 
              title='Submit' 
              color='maroon' 
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  )
}


export default ReviewForm;
