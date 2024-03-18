import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { ButtonSelectFileComponent } from './button-select-file/button-select-file.component';
import { HomeComponent } from './home/home.component';
import { VorlagenComponent } from './vorlagen/vorlagen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path :'splitter', component: ButtonSelectFileComponent},
  {path :'vorlagen', component: VorlagenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
