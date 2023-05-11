import axios from 'axios';
import { useSelector, useStore } from 'react-redux';
import { storeUserToken } from '../store/userSlice';

export const getUserData = async (userToken:number) => {
  let response
  try {
    await axios.post(
      'http://localhost:3001/api/v1/user/profile', {}, {headers: {Authorization: `Bearer ${userToken}`}}
    )
    .then((res) => {
      response = res.data.body
      console.log(response)
    })
  } catch (error) {
    console.log(error)
    return
  }
}