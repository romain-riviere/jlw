
import { Component } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CounterComponent, GalleryComponent]
})
export class AppComponent {

}