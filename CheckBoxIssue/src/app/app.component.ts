import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  person: Person;
  title = 'CheckBoxIssue';
  
  ngOnInit(){
    this.person = {Name: '', Employed: false} as Person
  }
}
