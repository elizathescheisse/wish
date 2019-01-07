import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Friend } from '../../models/friend';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  friend: Friend;

  constructor(private route: ActivatedRoute, private friendService: FriendService) { }

  ngOnInit() {
    this.getFriend();
  }

  // retrieve the selected friend from mock database via service
  getFriend(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.friendService.getFriend(id)
      .subscribe(friend => this.friend = friend);
  }

  // TODO: set up wishlist view to display gift ideas for each friend

}
