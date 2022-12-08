import { Landmark } from "../landmarks.model";
import * as LandmarksActions from './landmarks.actions';

export interface LandMarksState {
    landmarks: Landmark[];
  }

const initialState: LandMarksState = {
    landmarks: []
};

export function landmarksReducer(
    state: LandMarksState = initialState, 
    action: LandmarksActions.LandMarksActions
    ): LandMarksState{
    switch (action.type) {
        case LandmarksActions.SET_LANDMARKS:
            console.log(action.type);
            if (action) {
                console.log(action.payload);
            }
            return {
                ...state,
                landmarks: action.payload
              };
        default:
            return state;
    }
}