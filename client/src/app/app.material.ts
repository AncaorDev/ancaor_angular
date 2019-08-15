import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  	imports : [MatButtonModule,
               MatCheckboxModule,
			   MatToolbarModule,
			   MatIconModule,
			   MatDividerModule,
			   MatProgressSpinnerModule,
			   MatCardModule],

	exports : [MatButtonModule,
				MatCheckboxModule,
				MatToolbarModule,
				MatIconModule,
				MatDividerModule,
				MatProgressSpinnerModule,
				MatCardModule],
})
export class MaterialModule { }

