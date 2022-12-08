import { LandMarksState,  landmarksReducer } from './landmarks.reducer';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    landmarks: LandMarksState;
};


export const reducers: ActionReducerMap<AppState, any> = {
    landmarks: landmarksReducer
};