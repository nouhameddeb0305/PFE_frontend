import { Component, OnInit } from '@angular/core';
import {ModalOrdretravailComponent} from './modal-ordretravail/modal-ordretravail.component';
import {NbWindowService} from '@nebular/theme';

@Component({
  selector: 'ngx-ordretravail',
  templateUrl: './ordretravail.component.html',
  styleUrls: ['./ordretravail.component.scss'],
})
export class OrdretravailComponent implements OnInit {

  constructor(private windowService: NbWindowService) { }

  ngOnInit() {
  }
  settings = {

    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      edit: false,
      position: 'right',
      custom: [
        {
          name: 'showAction',
          title: '<i class="nb-sunny" title="Afficher"></i>',
        },
        {
          name: 'editAction',
          title: '<i class="nb-edit" title="Edit"></i>',
        },
      ],
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      demandeintervention: {
        title: 'N° Demande intervention',
        type: 'number',
      },
      module: {
        title: 'Module',
        type: 'string',
      },

      typemaintenance: {
        title: 'Type maintenance',
        type: 'string',
      },
      criticite: {
        title: 'Criticité',
        type: 'string',
      },
    },
  };

  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idRC');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalOrdretravailComponent,
      {title: 'Ajouter un ordre de travail'});
  }

}
