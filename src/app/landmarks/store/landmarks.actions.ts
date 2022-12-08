import { Action } from '@ngrx/store'
import { Landmark } from '../landmarks.model';

export const SET_LANDMARKS = 'SET_LANDMARKS';
export const FETCH_LANDMARKS = 'FETCH_LANDMARKS';


export class FetchLandMarks implements Action {
    readonly type = FETCH_LANDMARKS;
  }
export class SetLandmarks implements Action {
    readonly type = SET_LANDMARKS;
    
    constructor(
      public payload: Landmark[]
    ) { console.log('action', payload); }
  }

  export type LandMarksActions =
  | SetLandmarks
  | FetchLandMarks;