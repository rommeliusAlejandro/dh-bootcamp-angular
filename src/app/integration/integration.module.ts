import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersService} from "./services/users.service";
import {RolesService} from "./services/roles.service";
import {API_TOKEN, AUTH_API} from "./models/user";
import {PermissionsService} from "./services/permissions.service";
import {MockedPermissionsService} from "./services/mocked-permissions.service";


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: UsersService, useClass: UsersService},
    {provide: 'ROLES_SERVICE', useClass: RolesService},
    {provide: 'AUTH_TOKEN', useValue: 'bnBtLWFydGlmYWN0czpQYXNzd29yZDEh'},
    {provide: 'API_PATH', useValue: 'http://localhost:4040/api'},
    {provide: API_TOKEN, useValue: 'd45282d0-0bc6-4e50-9623-92754636fa36'},
    {provide: AUTH_API, useValue: 'http://localhost:4040/api/auth'},
    {
      provide: 'HELLO_WORLD', useValue: (name: string) => {
        alert(`Hola ${name}`)
      }
    },
    {provide: 'TESTING', useValue: true},
    {
      provide: PermissionsService,
      useFactory: (TESTING: any, UsersService: any) => TESTING ? new MockedPermissionsService() : new PermissionsService(UsersService),
      deps: ['TESTING', UsersService]
    }
  ]
})
export class IntegrationModule {
}
