import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, retry, map } from "rxjs/operators";
import * as LandMarksActions from '../landmarks/store/landmarks.actions'
import { Store } from "@ngrx/store";
import * as _ from "lodash";

import * as fromIndex from "../landmarks/store/index";
import { Landmark } from "../landmarks/landmarks.model";

export class LandMarksResponse {
    landmarks: Array<any> = [];
}

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private store: Store<fromIndex.AppState>,
  ) { }

  fetchLandmarksFlow() {
    let array: any = [];
    return this.http
      .get<LandMarksResponse>(
        "https://frontend-2376.instashop.ae/api/landmarks",
        {}
      )
      .pipe(retry(1))
      .pipe(
        map((res) => {
            _.forEach(res, (value) => {
                if (_.isObject(value)) {
                    array.push(value);
                  }
                });
                return array;
              }),
        tap((landmarks) => {
            this.store.dispatch(new LandMarksActions.SetLandmarks(landmarks));
        })
      )
      .subscribe();
  }

}


// fetchAdmins() {
//     return this.http
//       .post<AdminResponse>(
//         "https://paneldelivery.deliverymanager.gr/prod/paneldelivery_fetch_users",
//         {}
//       )
//       .pipe(retry(1))
//       .pipe(
//         map((res) => {
//           return res.users.map((user) => {
//             return {
//               ...user,
//             };
//           });
//         }),
//         tap((users) => {
//           this.store.dispatch(new AdminsActions.SetAdmins(users));
//         })
//       )
//       .subscribe();
//   }