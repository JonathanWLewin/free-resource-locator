import { Component } from '@angular/core';

//Amplify
import { APIService } from '../API.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {

  productInputText: string = '';

  constructor(
    private apiService: APIService
  ) { }

  UploadProduct() {
    this.apiService.CreateProduct({
      name: this.productInputText
    })
  }
}