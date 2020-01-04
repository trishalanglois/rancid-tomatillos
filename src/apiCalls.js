export const fetchMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching movies')
      }
      return res.json()
    })
}

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

export const postRating = (rating, movieId, userId) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      'rating': rating,
      'movie_id':movieId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`, options)
  .then(res => {
    if(!res.ok) {
      throw Error('Error posting rating')
    }
    return res.json()
  })
}

export const getUserRatings = (userId) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`)
    .then(res => {
      if(!res.ok) {
        throw Error('Error fetching users movies')
      }
      return res.json()
    })
}