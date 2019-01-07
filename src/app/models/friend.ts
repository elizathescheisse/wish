import { Gift } from './gift';

export class Friend {
  id: number;
  name: string;
  birthday: string;
  wishlist: Gift[];

  constructor(name: string, birthday: string) {
    this.name = name;
    this.birthday = birthday;
    this.wishlist = [];
  }
}
