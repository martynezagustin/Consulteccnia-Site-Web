import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyConsulLibComponent } from "./components/my-consul-lib/my-consul-lib.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { HomeComponent } from "./views/home/home.component";
import { AboutMeComponent } from "./views/about-me/about-me.component";

const routes: Routes = [
    { path: "my-consul-lib", title: "Prueba Consul+", component: MyConsulLibComponent },
    { path: "", title: "Inicio", component: HomeComponent },
    { path: "courses", title: "Cursos", component: CoursesComponent },
    {path: "about-me", title: "Acerca de Nosotros", component: AboutMeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }