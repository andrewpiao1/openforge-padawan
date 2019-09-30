import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed-tab/feed-tab.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'users-tab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../users-tab/users-tab.module').then(m => m.UsersPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/feed-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/feed-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
