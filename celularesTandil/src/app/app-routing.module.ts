import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesTandilAboutComponent } from './celulares-tandil-about/celulares-tandil-about.component';
import { CelularesTandilCelularesComponent } from './celulares-tandil-celulares/celulares-tandil-celulares.component';

const routes: Routes = [

{path: '',
  redirectTo : 'celulares',
  pathMatch : 'full',

},

{path: 'celulares' ,
  component : CelularesTandilCelularesComponent

},
{path: 'about' ,
  component : CelularesTandilAboutComponent

},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
