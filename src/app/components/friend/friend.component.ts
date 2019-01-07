import { Component, OnInit, Input } from '@angular/core';
import { Friend } from '../../models/friend';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  // the current friend passed in
  @Input() friend: Friend;

  constructor() { }

  ngOnInit() {
  }

}
