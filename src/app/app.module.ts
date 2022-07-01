import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './courses-list/course/course.component';
import { AuthenticationComponent } from './header/authentication/authentication.component';
import { AddCourseComponent } from './courses-list/add-course/add-course.component';
import { ControlsComponent } from './courses-list/course/controls/controls.component';
import {FormsModule} from "@angular/forms";
import { BorderDirective } from './courses-list/course/border.directive';
import { DurationPipe } from './courses-list/course/duration.pipe';
import { OrderByPipe } from './courses-list/pipes/order-by.pipe';
import { FilterPipe } from './courses-list/pipes/filter.pipe';
import {Routes, RouterModule} from "@angular/router";
import { DateInputComponent } from './courses-list/course/controls/date-input/date-input.component';
import { DurationInputComponent } from './courses-list/course/controls/duration-input/duration-input.component';

const routes: Routes = [
  {path: 'courses', component: CoursesListComponent},
  {path: 'login', component: AuthenticationComponent},
  {path: 'edit', component: ControlsComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'}
  // {path: '**', redirectTo: 'courses'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CourseComponent,
    AuthenticationComponent,
    AddCourseComponent,
    ControlsComponent,
    BorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    DateInputComponent,
    DurationInputComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)

    ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

