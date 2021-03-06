import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'details', loadChildren: './tab1/details/details.module#DetailsPageModule' },
  { path: 'modal', loadChildren: './tab1/details/modal/modal.module#ModalPageModule' },
  { path: 'add-comment', loadChildren: './tab1/details/add-comment/add-comment.module#AddCommentPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
