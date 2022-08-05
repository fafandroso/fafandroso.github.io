import { Component, Input } from "@angular/core";

@Component({
    selector: 'section-title-component',
    templateUrl: 'section-title.component.html',
    styleUrls: ['section-title.component.scss']
})
export class SectionTitleComponent {

    @Input() title: string = '';

}
