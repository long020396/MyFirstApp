import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: ':id', component: RecipeDetailComponent },
        ]
    }
    ,
    { path: 'shopping-list', component: ShoppingEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}