import *  as WeatherListActions  from './weather.actions';

import { Search, Temperature } from '../../models/models';

const initalState = {
  weatherSearchResult: [
    new Search()
  ]
  };

export function WeatherReducer( state = initalState,
              action: WeatherListActions.WeatherListActions )
              {
                switch (action.type){
                  case WeatherListActions.SEARCH_WEATHER:
                  return{
                      ...state,
                      weatherSearchResult:[...state.weatherSearchResult, action.payload]
                  }
                  default:
                  return state;
                }
              }
