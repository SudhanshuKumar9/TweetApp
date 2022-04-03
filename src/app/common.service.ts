import { EventEmitter } from "@angular/core";

export class CommonService{
    selectedValue = new EventEmitter<string>();
}