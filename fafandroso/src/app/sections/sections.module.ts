import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { ComponentsModule } from "../components/components.module";
import { HomeComponent } from "./home/home.component";
import { TableroIngresosComponent } from "./tablero-ingresos/tablero-ingresos.component";

@NgModule({
    declarations: [
        TableroIngresosComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        TableroIngresosComponent,
        HomeComponent
    ]
})
export class SectionsModule {  }