import { Timestamp } from "firebase/firestore";

export interface Beer {
  id: string;
  name: string;
  brewery?: string;
  country?: string;
  style?: string;
  abv?: number;
  imageUrl?: string;
}

export interface UserBeer {
  id: string;
  userId: string;
  beerId: string;
  count: number;
  firstDrunkAt?: Timestamp;
  lastDrunkAt?: Timestamp;
}
