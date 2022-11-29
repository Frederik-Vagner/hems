import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../services/luggage.service';
import { CreateLongTermDialogComponent } from './createLongTermDialog/create-long-term-dialog.component';

@Component({
  selector: 'hems-longterm',
  templateUrl: 'longterm.component.html',
  styleUrls: ['./longterm.component.scss'],
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
    'description',
    'tagNr',
    'dateNeeded',
    'bbInLr',
    'location',
    'bbOut',
    'dateOut',
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
          'Imma try again later',
          {
            duration: 10000,
          }
        );
      },
    });
  }

  editLongTermListEntry(luggage: ILuggage): void {
    console.log(luggage);
  }

  createLongTermEntry(): void {
    this.dialog.open(CreateLongTermDialogComponent, {
      width: '500px',
    })
  }
}
