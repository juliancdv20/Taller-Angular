import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
}
  seasonAverage: number=0;
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  seasonAvg(series: Serie[]): number {
    let suma: number = 0;
    for (let serie of series) {
      suma += serie.seasons;
    }
    return suma / series.length;
  }

  avg(series: Serie[]) {
    this.series = series;
    this.seasonAverage = this.seasonAvg(series);
  }
  ngOnInit() {
    this.getSeries();
  }

}
