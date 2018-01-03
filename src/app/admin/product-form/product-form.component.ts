import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product = {};
  categories$;
  id;

  constructor(
    private categroyService: CategoryService, 
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
    this.categories$ = categroyService.getAll();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  ngOnInit() {
  }

  save(product) {
    if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm('Do you want to delete it')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }


}
