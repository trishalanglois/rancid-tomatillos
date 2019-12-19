export const getUser = (email, password) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'  
    }
  }

  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', options)
  .then(res => {
    if(!res.ok) {
      throw Error('Something is not right, try again later')
    }
    return res.json()
  })
}