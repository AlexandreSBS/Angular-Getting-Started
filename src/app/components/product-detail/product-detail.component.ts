import { IProduct } from './../products/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.productsService.getProductById(id).subscribe(
      product => this.product = product
    );
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
