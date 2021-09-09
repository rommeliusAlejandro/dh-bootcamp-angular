import {InjectionToken} from "@angular/core";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  ssn: string;
}

export const API_TOKEN = new InjectionToken<string>('This is an API Token');
export const AUTH_API = new InjectionToken<string>('This is an auth api');
