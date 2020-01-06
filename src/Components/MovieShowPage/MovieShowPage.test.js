import React from 'react';
import { MovieShowPage, mapState }from './MovieShowPage';
import { shallow } from 'enzyme';
import { getCurrentMovie, currentUser, getRatings } from '../../actions/actions';

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
    ratings: [{
      "id": 210,
      "user_id": 8,
      "movie_id": 2,
      "rating": 7,
      "created_at": "2020-01-04T20:37:36.154Z",
      "updated_at": "2020-01-04T20:37:36.154Z"
    }]
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
  });