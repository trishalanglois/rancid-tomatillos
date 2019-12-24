import { fetchMovies, getUser } from './apiCalls';

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
    let mockURL
    let mockOptions
  
    beforeEach(() => {
      mockURL = "https://rancid-tomatillos.herokuapp.com/api/v1/login"
      mockOptions = {
        "body": "{\"email\":\"alan@turing.io\",\"password\":\"asdf123\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"
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

    it('should be passed the correct arguments', () => {
      getUser('alan@turing.io', 'asdf123')

      expect(window.fetch).toHaveBeenCalledWith(mockURL, mockOptions)
    })

    it('should return a user object', () => {
      expect(getUser(mockURL)).resolves.toEqual(mockResponse)
    })
  })
})