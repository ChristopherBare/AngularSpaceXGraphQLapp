import { PastLaunchesListGQL } from './../services/spacexGraphql.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private readonly pastLauncesService: PastLaunchesListGQL) { }

  pastLaunches$ = this.pastLauncesService.fetch({ limit: 30}).pipe(map((res) => res.data.launchesPast));
  ngOnInit() {
  }

}
