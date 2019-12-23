import { getUser } from './apiCalls';

describe('apiCalls', () => {
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