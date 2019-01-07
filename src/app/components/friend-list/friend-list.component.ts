import { Component, OnInit } from '@angular/core';
import { Friend } from '../../models/friend';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: Friend[];

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.getFriends();
  }

  // retrieve the list of all friends from mock database via service
  getFriends(): void {
    this.friendService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

}
