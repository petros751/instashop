import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromIndex from "../landmarks/store/index";
import { map, auditTime, distinctUntilChanged } from 'rxjs/operators';
import * as _ from "lodash";

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.page.html'
})
export class LandmarksPage implements OnInit, OnDestroy {
  loading: boolean = false;
  public landmarks: any;
  subscription: Subscription = new Subscription;
  constructor(
    private store: Store<fromIndex.AppState>,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() {
    this.subscription = this.store
    .select("landmarks")
    .pipe(auditTime(500))
    .pipe(distinctUntilChanged())
    .pipe(map(landmarkState => landmarkState.landmarks))
    .subscribe(landmarks => {
      if (landmarks && !_.isEqual(this.landmarks, landmarks)) {
        this.landmarks = _.cloneDeep(landmarks);
        this.loading = false;
      }
    });
    this.fetchLandmarksItems();
    this.loading = true;
  }

  async fetchLandmarksItems() {
    this.dataStorageService.fetchLandmarksFlow();
  }

  trackFn(item: any) {
    return item.objectId;
  }

  ngOnDestroy() {
    // this.dataStorageService.clearCustomersFlow();
    // this.dataStorageService.clearCustomersSearchTerm();
    this.subscription.unsubscribe();
    this.landmarks = null;
  }

}
