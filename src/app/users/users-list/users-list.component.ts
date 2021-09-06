import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../integration/services/users.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersData: any[] = []
  userId: string | null = null;
  user: any = null;

  constructor(
    private readonly usersService: UsersService,
    private readonly activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    this.user = {
      firstName: this.activatedRoute.snapshot.paramMap.get('firstName'),
      lastName: this.activatedRoute.snapshot.paramMap.get('lastName')
    }

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
