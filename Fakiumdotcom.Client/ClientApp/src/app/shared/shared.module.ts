import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

import { ArticleMetaComponent} from './article-helpers';
import { FollowButtonComponent, FavoriteButtonComponent } from './buttons';

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
        ShowAuthedDirective,
        FollowButtonComponent,
        FavoriteButtonComponent,
        ArticleMetaComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ShowAuthedDirective,
        ListErrorsComponent,
        FollowButtonComponent,
        FavoriteButtonComponent,
        ArticleMetaComponent
    ]
})
export class SharedModule { }
