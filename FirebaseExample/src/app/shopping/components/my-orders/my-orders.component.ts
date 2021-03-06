import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders$;
  constructor(
    private authService: AuthService,
    private orderService: OrderService) {
    this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid)))
  }

  ngOnInit() {
  }

}
