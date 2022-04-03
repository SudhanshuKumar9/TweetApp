import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentSelected : string = 'Home';
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.selectedValue.subscribe(
      (value : string) =>{
        this.currentSelected = value;
      }
    );
  }

}
