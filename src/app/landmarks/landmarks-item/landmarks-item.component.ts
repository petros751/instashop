import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromIndex from "../../landmarks/store/index";
import { map, auditTime, distinctUntilChanged } from "rxjs/operators";
import * as _ from "lodash";

@Component({
  selector: "app-landmarks-item",
  templateUrl: "./landmarks-item.component.html",
})
export class LandmarksItemComponent implements OnInit, OnDestroy {
  @Input() objectId: any;
  // modal: HTMLModalElement;
  public landmark: any;
  subscription: Subscription = new Subscription;

  constructor(private store: Store<fromIndex.AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select("landmarks")
      .pipe(auditTime(500))
      .pipe(distinctUntilChanged())
      .pipe(map(landmarksState => landmarksState.landmarks))
      .subscribe(landmarks => {
        if (landmarks && !_.isEmpty(landmarks)) {
          this.landmark = _.cloneDeep(_.find(landmarks, ["objectId", this.objectId]));
        }
      });
  }

  async showLandmark() {
    return await this.showLandmarkModal();
  }

  private async showLandmarkModal() {
    // this.modal = await this.modalController.create({
    //   component: AddAdminModalComponent,
    //   cssClass: 'add-user-modal-page',
    //   backdropDismiss: false,
    //   componentProps: {
    //     currentUser: _.cloneDeep(this.currentUser.user)
    //   }
    // });
    // return await this.modal.present();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
