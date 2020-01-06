import React from 'react';
import { MovieShowPage, mapState }from './MovieShowPage';
import { shallow } from 'enzyme';
import { getCurrentMovie, currentUser, getRatings } from '../../actions/actions';
import { postRating } from '../../apiCalls';

jest.mock('../../apiCalls')

describe('MovieShowPage', () => {
  let wrapper
  let mockProps = {
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
    beforeEach(() => {
      wrapper = shallow(<MovieShowPage 
        currentMovie={mockProps.currentMovie}
        currentUser={mockProps.currentUser}
        ratings={mockProps.ratings}
      />)
    });
  
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

    describe('handleChange', () => {
      it('should update state when handleChange is invoked', () => {
        const mockDefaultState = {rating: null}
        const mockEvent = {target: {name: 'rating', value: '1' }}
  
        expect(wrapper.state()).toEqual(mockDefaultState)
        wrapper.instance().handleChange(mockEvent)
        expect(wrapper.state('rating')).toEqual(1)
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
    })

    describe('findMatchingRating', () => {
      it('should return true if it finds match in the array', () => {
        expect(wrapper.instance().findMatchingRating(mockProps.ratings, mockProps.currentMovie.id)).toEqual(true)
      })
    })
  });