import { Component } from '@angular/core';

//PrimeNG
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items!: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'Product Management',
            routerLink: 'product-management'
        }]
    }
}
