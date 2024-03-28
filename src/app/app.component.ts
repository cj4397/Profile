import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { NgbDropdownModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContentComponent,NgbDropdownModule, NgbScrollSpyModule,NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'my-profile';

}
