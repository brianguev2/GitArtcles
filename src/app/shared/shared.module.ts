import { ShowAuthedDirective } from './show-authed.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors.component';
import { FollowButtonComponent, FavoriteButtonComponent } from './buttons';
import { ArticleMetaComponent, ArticlePreviewComponent, ArticleListComponent } from './article-helpers';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ListErrorsComponent,
    FollowButtonComponent,
    ShowAuthedDirective,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    ArticlePreviewComponent,
    ArticleListComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ListErrorsComponent,
    FollowButtonComponent,
    ShowAuthedDirective,
    ArticleMetaComponent,
    FavoriteButtonComponent,
    ArticlePreviewComponent,
    ArticleListComponent,
  ]
})
export class SharedModule {}
