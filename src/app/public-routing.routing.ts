import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { AboutMeComponent } from "./views/about-me/about-me.component";
import { GuidesViewComponent } from "./views/guides-view/guides-view.component";
const publicRoutes: Routes = [
    { path: "", title: "Inicio", component: HomeComponent },
    { path: "about-me", title: "Acerca de Nosotros", component: AboutMeComponent },
    { path: "guides", title: "Guías", component: GuidesViewComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(publicRoutes)],
    exports: [RouterModule]
})

export class PublicRoutingModule { }