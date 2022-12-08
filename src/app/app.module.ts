import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

// import * as fromApp from "./store/app.reducer";
import { LandmarksPage } from "./landmarks/landmarks.page"
import { LandmarksItemComponent } from './landmarks/landmarks-item/landmarks-item.component';
// import { landmarksReducer } from './landmarks/store/landmarks.reducer';
// import { reducers, metaReducers } from './store';
import { reducers } from '../app/landmarks/store/index'


// import { LOGOUT } from "./auth/store/auth.actions";

// export function logout(reducer:any) {
//   return function (state:any, action:any) {
//     return reducer(action.type === LOGOUT ? undefined : state, action);
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    LandmarksPage,
    LandmarksItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
