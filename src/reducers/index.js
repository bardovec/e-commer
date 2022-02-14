import { combineReducers } from 'redux';

import posts from './posts';
import colors from './colors';
import facets from './facets';

export const reducers = combineReducers({ posts, colors, facets });
