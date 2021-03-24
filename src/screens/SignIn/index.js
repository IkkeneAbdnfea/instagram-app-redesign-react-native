import React from 'react';
import {
  TextInput,
  Title,
  Button,
  Text,
  HelperText,
  useTheme,
} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/authContext';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const theme = useTheme();

  const emailHasErrors = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) === false;
  };
  const passwordHasErrors = () => {
    return password.length < 8;
  };
  const {signIn} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Instagram</Title>
      <TextInput
        style={styles.input}
        mode="flat"
        label="Email"
        autoCorrect={false}
        error={emailHasErrors() && showError}
        borderColor={'transparent'}
        underlineColorAndroid="transparent"
        keyboardType="email-address"
        value={email}
        onChangeText={value => {
          setShowError(true);
          setEmail(value);
        }}
      />
      <HelperText
        type="error"
        visible={emailHasErrors() && showError}
        padding="none">
        Email address is invalid!
      </HelperText>

      <TextInput
        style={styles.input}
        mode="flat"
        borderColor={'transparent'}
        autoCorrect={false}
        error={passwordHasErrors() && showError}
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={value => setPassword(value)}
      />
      <HelperText
        type="error"
        visible={passwordHasErrors() && showError}
        padding="none">
        Password is required!
      </HelperText>

      <Button
        style={styles.login}
        mode="contained"
        onPress={() => {
          setShowError(true);
          if (!passwordHasErrors() && !emailHasErrors()) signIn();
        }}>
        Login
      </Button>

      <Text style={styles.or}>______________ OR ______________</Text>
      <Button
        uppercase={false}
        icon="facebook"
        mode="text"
        theme={{colors: {primary: '#385185'}}}
        onPress={() => {
          setShowError(true);
          if (!passwordHasErrors() && !emailHasErrors()) signIn();
        }}>
        Login with facebook
      </Button>

      <TouchableOpacity style={styles.center}>
        <Text style={{fontSize: 14, color: '#385185'}}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.center, styles.signUp]}
        onPress={() => navigation.push('SignUp')}>
        <Text style={{fontSize: 14}}>
          <Text>Don't have an account? </Text>
          <Text style={{color: theme.colors.primary}}> Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  input: {
    marginVertical: 0,
  },

  login: {
    marginTop: 10,
  },

  title: {
    textAlign: 'center',
    marginVertical: 50,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  or: {
    marginTop: 20,
    textAlign: 'center',
    marginVertical: 10,
  },

  signUp: {
    marginVertical: 25,
  },
});
