import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../services/luggage.service';
import { CreateLongTermDialogComponent } from './createLongTermDialog/create-long-term-dialog.component';
import { UpdateLongTermDialogComponent } from './updateLongTermDialog/update-long-term-dialog.component';

@Component({
  selector: 'hems-longterm',
  templateUrl: 'longterm.component.html',
  styleUrls: ['../../../assets/table.scss'],
})
export class LongtermComponent implements OnInit {
  luggage: ILuggage[] = [];
  currentLuggages?: ILuggage[];
  listNames?: string[];
  chosenListName = '';
  isLoading = false;

  displayedColumns = [
    'dateIn',
    'room',
    'name',
    'nrOfBags',
    'tagNr',
    'dateNeeded',
    'bbLr',
    'location',
    'bbOut',
    'dateOut',
    'description',
  ];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.fetchLuggage();
  }

  formatDate(date: Date): string {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleString(undefined, {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    });
  }

  fetchLuggage(): void {
    this.isLoading = true;
    this.luggageService.getLongTerm(new Date()).subscribe({
      next: (luggage) => {
        this.luggage = luggage;
        console.log(luggage);
      },
      error: (error) => {
        this.isLoading = false;
        console.error(error);
        this.snackBar.open(
          'Luggages have failed to load',
          'Okay',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  editLongTermListEntry(luggage: ILuggage): void {
    this.dialog.open(UpdateLongTermDialogComponent, {
      width: '500px',
      data: luggage
    })
  }

  createLongTermEntry(): void {
    this.dialog.open(CreateLongTermDialogComponent, {
      width: '500px',
    })
  }
}
