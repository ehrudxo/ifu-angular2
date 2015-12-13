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
var http_1 = require('angular2/http');
var BAppComponent = (function () {
    function BAppComponent(http) {
        this.hero = 'Windstorm';
        this.title = '저와 함께한 pair 코딩은 어땠나요?';
        this.text = '지난 일주일 저와 함께 해 주신 팀원 여러분 일단 감사 드립니다.\n 그동안 저와 함께 했던 pairing 에 대해 허심탄회하게 적어주시면 제가 앞으로 발전하는데 좋은 밑거름이 되도록 노력하겠습니다.';
        this.http = http;
    }
    BAppComponent.prototype.formSubmit = function (feedbackText) {
        var _this = this;
        var urlStr = "http://localhost:9999/feedback";
        var token = "RxTxY3cFqwe";
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(urlStr, JSON.stringify({
            "text": feedbackText,
            "token": token
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function () { return _this.postResponse; });
        console.log(feedbackText);
        // 
    };
    BAppComponent.prototype.postResponse = function () {
        console.log("done");
    };
    BAppComponent.prototype.clickListener = function (e) {
        e.preventDefault();
        var form = e.target.form;
        var feedbackText = form.querySelector('[name="feedbackText"]').value;
        this.formSubmit(feedbackText);
    };
    BAppComponent.prototype.returnFalse = function () {
        return false;
    };
    BAppComponent = __decorate([
        angular2_1.Component({
            selector: 'start',
            viewProviders: [http_1.HTTP_PROVIDERS],
        }),
        angular2_1.View({
            template: "\n  <div class=\"container\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div><h3>{{title}}</h3></div>\n      </div>\n      <div class=\"row\">\n        {{text}}\n      </div>\n      <div class=\"row\">\n        <form (submit)=\"returnFalse()\">\n          <textarea name=\"feedbackText\"  class=\"form-control\" rows=\"3\">\n          </textarea>\n          <br/>\n          <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"clickListener($event)\">\uC751\uB2F5\uD558\uAE30</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BAppComponent);
    return BAppComponent;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BAppComponent;
angular2_1.bootstrap(BAppComponent);
//# sourceMappingURL=feedbackForm.js.map