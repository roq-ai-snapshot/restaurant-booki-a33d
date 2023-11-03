import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  date: any;
  total_price?: number;
  customer_id: string;
  wait_staff_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user_order_customer_idTouser?: UserInterface;
  user_order_wait_staff_idTouser?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  wait_staff_id?: string;
  restaurant_id?: string;
}
