import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  constructor(
    private appareilService: AppareilService,
    // ActivatedRoute : contient toutes les informations de la route active !
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.name = this.appareilService.getAppareilById(+id).name; // +id cast le id en tant que chiffre
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
