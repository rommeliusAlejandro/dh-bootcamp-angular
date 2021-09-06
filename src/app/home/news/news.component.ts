import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SystemNewsComponent} from "../system-news/system-news.component";
import {BaseNews} from "../base-news";
import {UserNewsComponent} from "../user-news/user-news.component";
import {OrganizationNewsComponent} from "../organization-news/organization-news.component";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('newsContainer', {read: ViewContainerRef})
  private container!: ViewContainerRef;

  private store: Map<string, Type<BaseNews>> = new Map<string, Type<BaseNews>>();

  private subscription: Subscription = new Subscription();

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly activatedRoute: ActivatedRoute
  ) {

    this.store.set('system', SystemNewsComponent);
    this.store.set('user', UserNewsComponent);
    this.store.set('organization', OrganizationNewsComponent);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    const componentName = this.activatedRoute.snapshot.paramMap.get('type');

    if(!componentName) {
      return;
    }

    const componentType = this.store.get(componentName);

    if(!componentType) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<BaseNews>(componentType);
    let reference = this.container.createComponent(componentFactory);

    reference.instance.userId = '123';

    reference.instance.eventEmitter.subscribe(
      next => alert(next)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
