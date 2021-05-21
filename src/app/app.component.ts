import { Component, OnInit } from '@angular/core';
import { HadiService } from './hadi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  _hadi: any = "";
  _hadi1: any = "";

  constructor(private _hadiService: HadiService) { }

  ngOnInit() {
    this._hadiService.getData().subscribe((data) => {
      this._hadi = data.body;
      console.log(this._hadi);
      this._hadi1 = data.headers;
      console.log(this._hadi1);
    }, (error) => {
      console.log(error);
    })
  }

}
