import { Component, OnInit } from '@angular/core';
import {
    
    IBike,
    SortOrder,
    TableInfoOptions,
  } from '@hems/interfaces';
  import { BikeService } from '../../services/bikes.service';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { MatDialog } from '@angular/material/dialog';
  import { DisplayDateService } from '../../services/display-date.service';
  import { HttpErrorResponse } from '@angular/common/http';
  import { TableInfoDialogComponent } from '../../components/tableInfoDialog/table-info-dialog.component';

@Component({
    selector: 'hems-bikes',
    templateUrl: './bikes.component.html',
    styleUrls: [
      '../../../assets/styles/table.scss',
      '../../../assets/styles/checkbox.scss',
    ],
  })

  export class BikesComponent implements OnInit {

    bikeColumns = [
        'numberOfBikes',
        'pickUpTime',
        'name',
        'room',
        'reservedBy',
        'bikeForm',
        'returned',
        'comments',
      ];


    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
   
  }