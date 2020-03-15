import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;

  // * Display date after 2 secondes
  // lastUpdate = new Promise((resolve, reject) => {
  //   const date = new Date();
  //   setTimeout(
  //     () => {
  //       resolve(date);
  //     }, 2000
  //   );
  // });

  constructor(
    private appareilService: AppareilService
  ) {}

  ngOnInit(): void {}

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
