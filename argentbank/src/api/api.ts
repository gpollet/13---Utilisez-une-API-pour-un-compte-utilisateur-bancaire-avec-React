import axios from "axios";

export const checkCredentials = async (email:string, password:string) => {
  let response
  await axios({
    method: "post",
    url: "http://localhost:3001/api/v1/user/login",
    data: {
      email: email,
      password: password,
    },
  }).then((res) => {
    response = res
  })
  return response
}

export const getUserData = async (userToken: number) => {
	let response;
	try {
		await axios
			.post(
				"http://localhost:3001/api/v1/user/profile",
				{},
				{ headers: { Authorization: `Bearer ${userToken}` } }
			)
			.then((res) => {
				response = res.data.body;
			});
	} catch (error) {
		console.log(error);
    return;
	}
  return response
};

export const updateUserProfile = async (userToken: number, firstName: string, lastName: string) => {
  let response
	try {
		await axios
			.put(
				"http://localhost:3001/api/v1/user/profile",
				{
          firstName: firstName, lastName: lastName
        },
				{ headers: { Authorization: `Bearer ${userToken}` } }
			)
			.then((res) => {
				console.log(res)
        response = res
			});
	} catch (error) {
		console.log(error);
    return;
	}
  return response
};
