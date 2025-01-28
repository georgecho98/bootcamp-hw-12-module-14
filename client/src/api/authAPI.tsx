import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch(
      '/api/works',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',

        },
        body: JSON.stringify(userInfo)
      }
    )
    const data = response.json();
    if(!response.ok) {
      throw new Error ('invalid API response, check networtk tab!');
    }
    return data;
  } catch (err) {
  console.log('Error from work Creation',err);
  return Promise.reject('Could not create new work');

  }
};



export { login };
