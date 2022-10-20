import { combineReducers, configureStore } from '@reduxjs/toolkit'
import greetingReducer from '../features/greetingSlice';

const reducer = combineReducers({ greeting: greetingReducer });

export default configureStore({ reducer });