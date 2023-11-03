import { MenuInterface } from 'interfaces/menu';
import { OrderInterface } from 'interfaces/order';
import { ReservationInterface } from 'interfaces/reservation';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  open_hours?: any;
  close_hours?: any;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  menu?: MenuInterface[];
  order?: OrderInterface[];
  reservation?: ReservationInterface[];
  table?: TableInterface[];

  _count?: {
    menu?: number;
    order?: number;
    reservation?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  name?: string;
  tenant_id?: string;
}
