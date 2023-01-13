import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { ScrollView } from 'react-native-gesture-handler'
import { phoneNumberValidator } from '../helpers/phoneNumberValidator'
import signupCall from '../service/signupCall'

export default function RegisterScreen({ navigation }) {

  const [userData, setUserData] = useState({
    userId: {
      value: '', error: ''
    },
    firstName: {
      value: '', error: ''
    },
    lastName: {
      value: '', error: ''
    },
    phoneNumber: {
      value: '', error: ''
    },
    emailId: {
      value: '', error: ''
    },
    address1: {
      value: '', error: ''
    },
    address2: {
      value: '', error: ''
    },
    city: {
      value: '', error: ''
    },
    state: {
      value: '', error: ''
    },
    country: {
      value: '', error: ''
    },
  })

  const onSignUpPressed = () => {
    ToastAndroid.show("button pressed", 10)
    console.log("hey from sign up button")
    const nameError = nameValidator(userData.firstName.value)
    const emailError = emailValidator(userData.emailId.value)
    const phoneNumberError = phoneNumberValidator(userData.phoneNumber.value);
    if (emailError || phoneNumberError || nameError) {
      console.log("got some error " + emailError + " " + phoneNumberError + " " + nameError)
      setUserData({ ...userData, firstName: { value: '', error: nameError }, emailId: { value: '', error: emailError }, phoneNumber: { value: '', error: phoneNumberError } })
      return
    }
    else {
      signupCall(jsonify(userData), navigation)
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  const jsonify = (userData) => {
    return {
      "userId": userData.userId.value,
      "firstName": userData.firstName.value,
      "lastName": userData.lastName.value,
      "phoneNumber": userData.phoneNumber.value,
      "emailId": userData.emailId.value,
      "address1": userData.address1.value,
      "address2": userData.address2.value,
      "city": userData.city.value,
      "state": userData.state.value,
      "country": userData.country.value,
      "password": "somerandom"
    }
  }

  return (
    <ScrollView>
      <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="User Id"
          returnKeyType="next"
          value={userData.userId.value}
          onChangeText={(text) => setUserData({ ...userData, userId: { value: text, error: '' } })}
          error={!!userData.userId.error}
          errorText={userData.userId.error}
        />
        <TextInput
          label="First Name"
          returnKeyType="next"
          value={userData.firstName.value}
          onChangeText={(text) => setUserData({ ...userData, firstName: { value: text, error: '' } })}
          error={!!userData.firstName.error}
          errorText={userData.firstName.error}
        />
        <TextInput
          label="Last Name"
          returnKeyType="next"
          value={userData.lastName.value}
          onChangeText={(text) => setUserData({ ...userData, lastName: { value: text, error: '' } })}
          error={!!userData.lastName.error}
          errorText={userData.lastName.error}
        />
        <TextInput
          label="Phone Number"
          returnKeyType="done"
          value={userData.phoneNumber.value}
          onChangeText={(text) => setUserData({ ...userData, phoneNumber: { value: text, error: '' } })}
          error={!!userData.phoneNumber.error}
          errorText={userData.phoneNumber.error}
          keyboardType={'phone-pad'}
          secureTextEntry
        />
        <TextInput
          label="Email"
          returnKeyType="done"
          value={userData.emailId.value}
          onChangeText={(text) => setUserData({ ...userData, emailId: { value: text, error: '' } })}
          error={!!userData.emailId.error}
          errorText={userData.emailId.error}
        // secureTextEntry
        />
        <TextInput
          label="Address1"
          returnKeyType="done"
          value={userData.address1.value}
          onChangeText={(text) => setUserData({ ...userData, address1: { value: text, error: '' } })}
          error={!!userData.address1.error}
          errorText={userData.address1.error}
        //secureTextEntry
        />
        <TextInput
          label="Address2"
          returnKeyType="done"
          value={userData.address2.value}
          onChangeText={(text) => setUserData({ ...userData, address2: { value: text, error: '' } })}
          error={!!userData.address2.error}
          errorText={userData.address2.error}
        // secureTextEntry
        />
        <TextInput
          label="City"
          returnKeyType="done"
          value={userData.city.value}
          onChangeText={(text) => setUserData({ ...userData, city: { value: text, error: '' } })}
          error={!!userData.city.error}
          errorText={userData.city.error}
        // secureTextEntry
        />
        <TextInput
          label="State"
          returnKeyType="done"
          value={userData.state.value}
          onChangeText={(text) => setUserData({ ...userData, state: { value: text, error: '' } })}
          error={!!userData.state.error}
          errorText={userData.state.error}
        // secureTextEntry
        />
        <TextInput
          label="Country"
          returnKeyType="done"
          value={userData.country.value}
          onChangeText={(text) => setUserData({ ...userData, country: { value: text, error: '' } })}
          error={!!userData.country.error}
          errorText={userData.country.error}
        // secureTextEntry
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
