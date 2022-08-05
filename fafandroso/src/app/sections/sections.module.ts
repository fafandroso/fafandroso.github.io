import { NgModule } from "@angular/core";
import { ComponentsModule } from "../components/components.module";
import { TableroIngresosComponent } from "./tablero-ingresos/tablero-ingresos.component";

@NgModule({
    declarations: [
        TableroIngresosComponent
    ],
    imports: [
        ComponentsModule
    ],
    exports: [
        TableroIngresosComponent
    ]
})
export class SectionsModule {  }