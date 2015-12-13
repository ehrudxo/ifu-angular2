var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var DAppComponent = (function () {
    function DAppComponent() {
    }
    DAppComponent = __decorate([
        angular2_1.Component({
            selector: 'start'
        }),
        angular2_1.View({
            directives: [router_1.RouterLink],
            template: "\n\t\t<header>\n\t\t\t<nav>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [router-link]=\"['/feedbackForm']\">\uB3CC\uC544\uAC00\uAE30</a>\n\t\t\t\t\t</li>\t\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t\t<div>\n\t\t\t\uC131\uACF5\uC801\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.\n\t\t\t<br/>\t\t\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], DAppComponent);
    return DAppComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DAppComponent;
angular2_1.bootstrap(DAppComponent);
//# sourceMappingURL=FeedbackFormSubmitted.js.map