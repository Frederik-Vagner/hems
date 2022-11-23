import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILuggage } from '@hems/interfaces';
import { LuggageService } from '../../services/luggage.service';

@Component({
  selector: 'hems-longterm',
  templateUrl: 'longterm.component.html',
  styleUrls: ['./longterm.component.scss'],
})
export class LongtermComponent implements OnInit {
  luggage?: ILuggage[];
  currentLuggages?: ILuggage[];
  listNames?: string[];
  chosenListName = '';
  isLoading = false;

  displayedColumns = ['actions'];

  constructor(
    private readonly luggageService: LuggageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchLuggage();
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
}
