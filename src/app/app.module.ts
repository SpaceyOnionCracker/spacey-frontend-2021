import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CommentComponent } from './components/comment/comment.component';
import { OrderComponent } from './components/order/order.component';
import { LoginComponent } from './components/login/login.component';
import { AdminEmployeeComponent } from './components/admin-manage/admin-employee.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './store/service/AuthInterceptor';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product/product-details.component';
import { FilterComponent } from './components/products/filter/filter.component';
import { CategoryComponent } from './components/products/category/category.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    FooterComponent,
    CheckoutComponent,
    ConfirmComponent,
    OrdersComponent,
    DeliveryComponent,
    CommentComponent,
    OrderComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoryComponent,
    FilterComponent,
    PaginationComponent,
    AdminEmployeeComponent,
    AdminAddComponent,
    AdminEditComponent,
    AdminEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
