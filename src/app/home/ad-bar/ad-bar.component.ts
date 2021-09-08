import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ad-bar',
  templateUrl: './ad-bar.component.html',
  styleUrls: ['./ad-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdBarComponent implements OnInit {

  @Input()
  adTopic!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onRendering() {
    return new Date();
  }

}
