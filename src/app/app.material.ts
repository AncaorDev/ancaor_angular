import {MatButtonModule, MatCheckboxModule, MatDividerModule, MatProgressSpinnerModule, MatCardModule} from '@angular/material';
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

