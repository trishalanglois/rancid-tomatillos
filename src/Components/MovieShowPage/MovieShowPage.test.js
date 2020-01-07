import React from 'react';
import { MovieShowPage, mapState, mapDispatch } from './MovieShowPage';
import { shallow } from 'enzyme';
import { getCurrentMovie, currentUser, getRatings, getMovies } from '../../actions/actions';
import { postRating } from '../../apiCalls';

jest.mock('../../apiCalls')

describe('MovieShowPage', () => {
  describe('MovieShowPage component', () => {
    let wrapper
    let mockProps 
      beforeEach(() => {
        mockProps = {
          currentMovie: {
            id: 1,
            title: "Jumanji: The Next Level",
            poster_path: "url.com",
            backdrop_path: "url.com",
            release_date: "2019-12-04",
            overview: "description",
            average_rating: 6
        },
          currentUser: {
            id: 1,
            name: 'Rick'
          },
          ratings: [
            {
              id: 210,
              user_id: 8,
              movie_id: 2,
              rating: 7,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            },
            {
              id: 212,
              user_id: 8,
              movie_id: 1,
              rating: 3,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            }
          ]
        }
        wrapper = shallow(<MovieShowPage 
          currentMovie={mockProps.currentMovie}
          currentUser={mockProps.currentUser}
          ratings={mockProps.ratings}
        />)
      });
    
      it('Should match the snapshot', () => {
        expect(wrapper.debug()).toMatchSnapshot()
      });

      it('should match the snapshot with no rating match', () => {
        mockProps = {
          currentMovie: {
            id: 1,
            title: "Jumanji: The Next Level",
            poster_path: "url.com",
            backdrop_path: "url.com",
            release_date: "2019-12-04",
            overview: "description",
            average_rating: 6
        },
          currentUser: {
            id: 1,
            name: 'Rick'
          },
          ratings: [
            {
              id: 210,
              user_id: 8,
              movie_id: 2,
              rating: 7,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            },
            {
              id: 212,
              user_id: 8,
              movie_id: 3,
              rating: 3,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            }
          ]
        }

        wrapper = shallow(
        <MovieShowPage 
          currentMovie={mockProps.currentMovie}
          currentUser={mockProps.currentUser}
          ratings={mockProps.ratings}
        />
        )

        expect(wrapper.debug()).toMatchSnapshot()
      })

      describe('handleChange', () => {
        it('should update state when handleChange is invoked', () => {
          const mockDefaultState = {rating: null}
          const mockEvent = {target: {name: 'rating', value: '1' }}
    
          expect(wrapper.state()).toEqual(mockDefaultState)
          wrapper.instance().handleChange(mockEvent)
          expect(wrapper.state('rating')).toEqual(1)
        })

        it('should call handleChange upon change to input', () => {
          mockProps = {
            currentMovie: {
              id: 1,
              title: "Jumanji: The Next Level",
              poster_path: "url.com",
              backdrop_path: "url.com",
              release_date: "2019-12-04",
              overview: "description",
              average_rating: 6
          },
            currentUser: {
              id: 1,
              name: 'Rick'
            },
            ratings: [
              {
                id: 210,
                user_id: 8,
                movie_id: 2,
                rating: 7,
                created_at: "2020-01-04T20:37:36.154Z",
                updated_at: "2020-01-04T20:37:36.154Z"
              },
              {
                id: 212,
                user_id: 8,
                movie_id: 3,
                rating: 3,
                created_at: "2020-01-04T20:37:36.154Z",
                updated_at: "2020-01-04T20:37:36.154Z"
              }
            ]
          }

          wrapper = shallow(
            <MovieShowPage 
              currentMovie={mockProps.currentMovie}
              currentUser={mockProps.currentUser}
              ratings={mockProps.ratings} 
            />
          )

          wrapper.instance().handleChange = jest.fn()
          wrapper.instance().forceUpdate()
          const mockEvent = {target: {name: 'rating', value: '2'}}
          
          wrapper.find('.rating-selector').simulate('change', mockEvent)
          expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
        })
      })

      describe('submitRating', () => {
        it('should call postRatings with the right parameters', () => {
          const mockState = {rating: 1}
          wrapper.instance().setState(mockState)
          postRating.mockImplementation(() => {
            return Promise.resolve()
        })
          wrapper.instance().submitRating(wrapper.state.rating, mockProps.currentMovie.id, mockProps.currentUser.id)

          expect(postRating).toHaveBeenCalledWith(wrapper.state.rating, mockProps.currentMovie.id, mockProps.currentUser.id)
        })

        it('should be called on button click', () => {
          mockProps = {
            currentMovie: {
              id: 1,
              title: "Jumanji: The Next Level",
              poster_path: "url.com",
              backdrop_path: "url.com",
              release_date: "2019-12-04",
              overview: "description",
              average_rating: 6
          },
            currentUser: {
              id: 1,
              name: 'Rick'
            },
            ratings: [
              {
                id: 210,
                user_id: 8,
                movie_id: 2,
                rating: 7,
                created_at: "2020-01-04T20:37:36.154Z",
                updated_at: "2020-01-04T20:37:36.154Z"
              },
              {
                id: 212,
                user_id: 8,
                movie_id: 3,
                rating: 3,
                created_at: "2020-01-04T20:37:36.154Z",
                updated_at: "2020-01-04T20:37:36.154Z"
              }
            ]
          }

          wrapper = shallow(
            <MovieShowPage 
              currentMovie={mockProps.currentMovie}
              currentUser={mockProps.currentUser}
              ratings={mockProps.ratings} 
            />
          )
          wrapper.instance().submitRating = jest.fn()
          wrapper.setState({rating: 1})
          wrapper.find('.rate-movie-button').simulate('click')
          wrapper.instance().forceUpdate();
          
          expect(wrapper.instance().submitRating).toHaveBeenCalledWith(1, mockProps.currentMovie.id, mockProps.currentUser.id)
        })
      })

      describe('findMatchingRating', () => {
        it('should return true if it finds match in the array', () => {
          expect(wrapper.instance().findMatchingRating(mockProps.ratings, mockProps.currentMovie.id)).toEqual(true)
        })
      })
    })

    describe('mapState', () => {
      it('should return the current movie from global store', () => {
        const mockState = {
          currentMovie: {
            id: 1,
            title: "Jumanji: The Next Level",
            poster_path: "url.com",
            backdrop_path: "url.com",
            release_date: "2019-12-04",
            overview: "description",
            average_rating: 6
          },
          currentUser: {
            id: 8,
            name: 'Rick'
          },
          ratings: [
            {
              id: 210,
              user_id: 8,
              movie_id: 2,
              rating: 7,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            },
            {
              id: 212,
              user_id: 8,
              movie_id: 3,
              rating: 3,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            }
          ],
          extra: 1
        }
        const expected = {
          currentMovie: {
            id: 1,
            title: "Jumanji: The Next Level",
            poster_path: "url.com",
            backdrop_path: "url.com",
            release_date: "2019-12-04",
            overview: "description",
            average_rating: 6
          },
          currentUser: {
            id: 8,
            name: 'Rick'
          },
          ratings: [
            {
              id: 210,
              user_id: 8,
              movie_id: 2,
              rating: 7,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            },
            {
              id: 212,
              user_id: 8,
              movie_id: 3,
              rating: 3,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            }
          ]
        }

        const mappedProps = mapState(mockState)

        expect(mappedProps).toEqual(expected)
      })
    })

    describe('mapDispatch', () => {
      it('should call dispatch with getRatings action when getRatings is called from props', () => {
         const mockRatings =  [
            {
              id: 210,
              user_id: 8,
              movie_id: 2,
              rating: 7,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            },
            {
              id: 212,
              user_id: 8,
              movie_id: 1,
              rating: 3,
              created_at: "2020-01-04T20:37:36.154Z",
              updated_at: "2020-01-04T20:37:36.154Z"
            }
          ]
  
        const mockDispatch = jest.fn()
        const mockGetRatingsAction = getRatings(mockRatings)
        const mappedProps = mapDispatch(mockDispatch)

        mappedProps.getRatings(mockRatings)

        expect(mockDispatch).toHaveBeenCalledWith(mockGetRatingsAction)
      })

      it('should call dispatch with getMovies action when getMovies is called from props', () => {
        const mockMovies = [
          {
            id:2,
            title:"Ad Astra",
            poster_path:"https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
            backdrop_path:"https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
            release_date:"2019-09-17",
            overview:"The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
            average_rating:6.857142857142857
            },
            {
              id:1,
              title:"Jumanji: The Next Level",
              poster_path:"https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
              backdrop_path:"https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
              release_date:"2019-12-04",
              overview:"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
              average_rating:7.142857142857143
           }
         ]

        const mockDispatch = jest.fn()
        const mockGetMoviesAction = getMovies(mockMovies)
        const mappedProps = mapDispatch(mockDispatch)

        mappedProps.getMovies(mockMovies)

        expect(mockDispatch).toHaveBeenCalledWith(mockGetMoviesAction)
      })
    })
  });