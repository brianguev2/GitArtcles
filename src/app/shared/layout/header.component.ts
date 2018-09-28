import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  constructor(
    private userService: UserService
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
  }
}
