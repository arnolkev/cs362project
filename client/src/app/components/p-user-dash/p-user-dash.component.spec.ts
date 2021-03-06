 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { PUserDashComponent } from './p-user-dash.component';
 import {MatExpansionModule, MatDividerModule} from "@angular/material";

 describe('PUserDashComponent', () => {
   let component: PUserDashComponent;
   let fixture: ComponentFixture<PUserDashComponent>;
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [
           PUserDashComponent
       ],
       imports: [
         MatExpansionModule,
         MatDividerModule,
       ]
     })
     .compileComponents();
   }));

   beforeEach(() => {
     fixture = TestBed.createComponent(PUserDashComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
