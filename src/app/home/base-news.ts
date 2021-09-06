import {EventEmitter} from "@angular/core";

export interface BaseNews {
 userId: string;
 eventEmitter : EventEmitter<any>;
}
