
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
<!--  <ul>
    <li *ngFor="let person of people">

      <!-- HERE: add a element with click event binding -->
<!--      <a href="#" (click)="selectPerson(person)">
        {{person.name}}
      </a>
    </li>
  </ul> --> 

  <!-- HERE: we add the template for the person details -->
<!--  <section *ngIf="selectedPerson">
    <h2>You selected:  {{selectedPerson.name}}</h2>
    <h3>Description</h3>
    <p>
       {{selectedPerson.name}} weights  {{selectedPerson.weight}} and is  {{selectedPerson.height}} tall.
    </p>
  </section> -->

  <!-- <app-person-details [person]="selectedPerson"></app-person-details> -->

  <ul>
  <li *ngFor="let person of people">
    <a [routerLink]="['/persons', person.id]">
    {{person.name}}
    </a>
  </li>
</ul>

  

  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent{
  people: Person[] = [];
  selectedPerson: Person;

  // people: Person[] = [
  //   {name: 'Luke Skywalker', height: 177, weight: 70},
  //   {name: 'Darth Vader', height: 200, weight: 100},
  //   {name: 'Han Solo', height: 185, weight: 85},
  // ];

// this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private peopleService: PeopleService) {
  }
  ngOnInit(){
    this.people = this.peopleService.getAll();    
  }

  // HERE is the new method
  selectPerson(person){
    this.selectedPerson = person;
  }

}