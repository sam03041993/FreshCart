import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GategoriesComponent } from './gategories/gategories.component';

export const routes: Routes = [
    {
        path:'',redirectTo:"home",pathMatch:'full'
    },
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'cart',component:CartComponent,title:'Cart'},

    {path:'products',component:ProductsComponent,title:'Products'},

    {path:'categories',component:GategoriesComponent,title:'categories'},

    {path:'brands',component:BrandsComponent,title:'Brands'},

    {path:'login',component:LoginComponent,title:'Login'},
    {path:'register',component:RegisterComponent,title:'Register'},
{path:'**',component:NotfoundComponent}
]