import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from "../../integration/services/users.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {RolesService} from "../../integration/services/roles.service";
import {API_TOKEN, AUTH_API} from "../../integration/models/user";
import {PermissionsService} from "../../integration/services/permissions.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [{provide: UsersService, useClass: UsersService}]
})
export class UsersListComponent implements OnInit {

  usersData: any[] = []
  userId: string | null = null;
  user: any = null;
  roles: string[] = [];
  authTokenValue!: string;
  apiTokenValue!: string
  permissions!: any;

  constructor(
    private readonly usersService: UsersService,
    private readonly activatedRoute: ActivatedRoute,
    @Inject('ROLES_SERVICE') private readonly rolesService: RolesService,
    @Inject('AUTH_TOKEN') private readonly authToken: string,
    @Inject('HELLO_WORLD') private readonly helloFunction: any,
    @Inject(API_TOKEN) private readonly apiToken: string,
    @Inject('API_PATH') private readonly  apiPath: string,
    @Inject(AUTH_API) private readonly  authApi: string,
    private readonly permissionsService: PermissionsService
  ) {
    this.authTokenValue = this.authToken;
    this.apiTokenValue = this.apiToken;


  }

  ngOnInit(): void {

    this.permissionsService.getPermissionsUser().subscribe(
      next => this.permissions = next
    );

    console.log(`${this.apiPath} --- ${this.authApi}`);

    //this.helloFunction('Rommel');

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

    this.roles = this.rolesService.getRoles();

  }

}
