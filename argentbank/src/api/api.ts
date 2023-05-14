import axios from "axios";

const requestModel = async (method:string, endpoint:string, data = {}, headers= {}) => {
  return await axios({
    method: `${method}`,
    url: `http://localhost:3001/api/v1/user/${endpoint}`,
    data: data,
    headers: headers
  })
}

export const checkCredentials = async (email:string, password:string) => {
  const data = {
    email: email,
    password: password,
  }
  return await requestModel('post','login',data)
}

export const getUserData = async (userToken: number) => {
	const headers = { Authorization: `Bearer ${userToken}` }
  return (await requestModel('post','profile',{}, headers)).data.body
};

export const updateUserProfile = async (userToken: number, firstName: string, lastName: string) => {
  const headers = { Authorization: `Bearer ${userToken}` }
  return await requestModel('put','profile',{firstName: firstName, lastName: lastName}, headers)
};
