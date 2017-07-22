"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var slider_component_1 = require("./slider/slider.component");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var categories_component_1 = require("./categories/categories.component");
var standbikes_component_1 = require("./standbikes/standbikes.component");
var contact_component_1 = require("./contact/contact.component");
var footer_component_1 = require("./footer/footer.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            slider_component_1.SliderComponent,
            categories_component_1.CategoriesComponent,
            standbikes_component_1.StandbikesComponent,
            contact_component_1.ContactComponent,
            footer_component_1.FooterComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_bootstrap_1.AlertModule.forRoot(),
            ngx_bootstrap_2.CarouselModule.forRoot()
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
