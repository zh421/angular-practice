import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuComponent } from './entities/formBuilderPractice/form-bu/form-bu.component'
import { CardDemoComponent } from './entities/cardPractice/card-demo/card-demo.component'


const routes: Routes = [

  {
    path: '',
    component: FormBuComponent
  },
  {
    path: 'card',
    component: CardDemoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
