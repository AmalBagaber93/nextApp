'use server';
import { redirect } from 'next/navigation'
import ky from 'ky';




export async function authenticateProtected(_currentState, email, password) {
  try {
    const response = await ky.post('https://api.v2hackathon.bugsbytes.com/api/v1/auth/login', {json: {email, password}}).json();
console.log(response)
        Cookies.set('authToken', response.token, { expires: 7 }); 

        console.log(response)
        redirect('/track');

        return response.token
  } catch (error) {
    console.error(error);
    if (error.message.includes('CredentialsSignin')) {
      return console.log('Invalid credentials.')
    }
    return console.log('Something went wrong.')
  }
}



export async function authenticatePublic(_currentState, email, password) {
  try {
    const response = await ky.post('https://api.v2hackathon.bugsbytes.com/api/v1/admin/auth').json();

        redirect('/login');


  } catch (error) {
    console.error(error);
    if (error.message.includes('CredentialsSignin')) {
      return 'Invalid credentials.';
    }
    return 'Something went wrong.';
  }
}
