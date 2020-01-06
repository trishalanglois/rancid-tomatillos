import { fetchMovies, getUser, postRating } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchMovies', () => {
    let mockResponse = {
      "movies": [
        {
          id: 1, 
          title: "Movie Title", 
          poster_path: "someURL", 
          backdrop_path: "someURL",
          release_date: "2019-12-04", 
          overview: "Some overview", 
          average_rating: 6 
        }
      ]
    }

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      fetchMovies()

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    })

    it('should return an array of movies', () => {
      expect(fetchMovies()).resolves.toEqual(mockResponse)
    })
    
    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(fetchMovies()).rejects.toEqual(Error('Error fetching movies'))
    }) 

    it('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(fetchMovies()).rejects.toEqual(Error('fetch failed'))
    })
  })

  describe('getUser', () => {
    let mockResponse = {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
    let mockEmail
    let mockPassword
    let mockOptions
  
    beforeEach(() => {
      mockEmail = 'rick@turing.io'
      mockPassword = 'bbbbb'
      mockOptions = {
        "body": "{\"email\":\"rick@turing.io\",\"password\":\"bbbbb\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      getUser(mockEmail, mockPassword)

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/login', mockOptions)
    })

    it('should return a user object', () => {
      expect(getUser(mockEmail, mockPassword)).resolves.toEqual(mockResponse)
    })

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getUser(mockEmail, mockPassword)).rejects.toEqual(Error('Something is not right, try again later'))
    }) 

    it('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(getUser(mockEmail, mockPassword)).rejects.toEqual(Error('fetch failed'))
    })
  })

  describe('postRating', () => {
    let mockResponse 
    let mockRating
    let mockMovieId
    let mockUserId
    let mockOptions
  
    beforeEach(() => {
      mockResponse = {
        id: 210,
        user_id: 8,
        movie_id: 11,
        rating: 7,
        created_at: "2020-01-04T20:37:36.154Z",
        updated_at: "2020-01-04T20:37:36.154Z"
      }

      mockRating = {
        "rating": {
            "user_id": 8,
            "movie_id": 11,
            "rating": 7
        }
      }
      mockMovieId = 11
      mockUserId = 8
      mockOptions = {
        "body": "{\"rating\":{\"rating\":{\"user_id\":8,\"movie_id\":11,\"rating\":7}},\"movie_id\":11}", "headers": {
         "Content-Type": "application/json",
       },
       "method": "POST"
      }

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => {
            return Promise.resolve(mockResponse)
          }
        })
      })
    })

    it('should call fetch with the correct URL', () => {
      postRating(mockRating, mockMovieId, mockUserId)

      expect(window.fetch).toHaveBeenCalledWith('https://rancid-tomatillos.herokuapp.com/api/v1/users/8/ratings', mockOptions)
    })

    it('should return a rating object', () => {
      expect(postRating(mockRating, mockMovieId, mockUserId)).resolves.toEqual(mockResponse)
    })

    it('should throw an error if fetch fails', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(getUser(mockEmail, mockPassword)).rejects.toEqual(Error('Something is not right, try again later'))
    }) 

    it('should return an error if promise rejects', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('fetch failed'))
      })

      expect(getUser(mockEmail, mockPassword)).rejects.toEqual(Error('fetch failed'))
    })
  })
})