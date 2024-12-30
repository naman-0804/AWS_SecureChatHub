import { Auth } from 'aws-amplify';

// Sign Up
export async function signUp(username, password, email) {
  try {
    const response = await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    console.log('Sign-up success', response);
  } catch (error) {
    console.error('Sign-up error', error);
  }
}

// Sign In
export async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    console.log('Sign-in success', user);
  } catch (error) {
    console.error('Sign-in error', error);
  }
}