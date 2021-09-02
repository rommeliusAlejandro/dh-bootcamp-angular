import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../integration/services/users.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersData: any[] = []


  constructor(
    private readonly usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      users => {
        users.map(user => {
          this.usersData.push({
            id: user.id,
            value: `${user.firstName} ${user.lastName} - ${user.ssn}`
          })
        })
      }
    ).unsubscribe();
  }

}
