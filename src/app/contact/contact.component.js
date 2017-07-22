"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.myForm = fb.group({
            username: ['', forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(24),],
            surname: ['', forms_1.Validators.required, forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(24),],
            message: ['', forms_1.Validators.required, forms_1.Validators.required,
                forms_1.Validators.minLength(15),
                forms_1.Validators.maxLength(1000),],
            email: ['', forms_1.Validators.email]
        });
        this.emailCtrl = this.myForm.get('email');
    }
    ContactComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ContactComponent);
exports.ContactComponent = ContactComponent;

//# sourceMappingURL=contact.component.js.map
