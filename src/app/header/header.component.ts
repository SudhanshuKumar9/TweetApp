import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOptions = [{icon: "home", labelName: "Home"}, 
  {icon: "search", labelName: "Search"},
  {icon: "notifications_none", labelName: "Notifications"},
  {icon: "mail_outline", labelName: "Messages"},
  {icon: "bookmark_border", labelName: "Bookmarks"},
  {icon: "list_alt", labelName: "Lists"},
  {icon: "perm_identity", labelName: "Profiles"},
  {icon: "more_horiz", labelName: "More"}
]
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onSelect(value: string){
    this.commonService.selectedValue.emit(value);
  }

}
