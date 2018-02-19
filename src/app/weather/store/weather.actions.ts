import { Action } from '@ngrx/store';

import { Search, Temperature } from '../../models/models';

export const SEARCH_WEATHER = 'SEARCH_WEATHER';

export class SearchWeather implements Action{
  readonly type = SEARCH_WEATHER;
  payload: Search;
}

export type WeatherListActions = SearchWeather;
