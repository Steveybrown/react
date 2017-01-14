/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'Libraries',
      description: 'link to open source libs',
    },
    {
      name: 'apps',
      description: 'Links to new apps',
    },
    {
      name: 'news',
      description: 'Links to tech news',
    },
  ],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
