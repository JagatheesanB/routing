import { Product } from './product';
import { User } from './user';

export interface Cart {
  count: number;
  user: User;
  cart: Product[];
}
