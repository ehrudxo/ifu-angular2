import {bootstrap,Component,View} from 'angular2/angular2';
import {Http, Response,Headers,HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector : 'start',
  viewProviders: [HTTP_PROVIDERS],
})
@View({
  template : `
  <div class="container">
    <div class="container">
      <div class="row">
        <div><h3>{{title}}</h3></div>
      </div>
      <div class="row">
        {{text}}
      </div>
      <div class="row">
        <form (submit)="returnFalse()">
          <textarea name="feedbackText"  class="form-control" rows="3">
          </textarea>
          <br/>
          <button class="btn btn-primary btn-lg btn-block" (click)="clickListener($event)">응답하기</button>
        </form>
      </div>
    </div>
  </div>
  `
})
export default class BAppComponent{ 
  public hero = 'Windstorm';
  title = '저와 함께한 pair 코딩은 어땠나요?';
  text = '지난 일주일 저와 함께 해 주신 팀원 여러분 일단 감사 드립니다.\n 그동안 저와 함께 했던 pairing 에 대해 허심탄회하게 적어주시면 제가 앞으로 발전하는데 좋은 밑거름이 되도록 노력하겠습니다.';
  http;
  constructor(http: Http) {
   this.http = http;
  }
  formSubmit( feedbackText ){
    let urlStr = "http://localhost:9999/feedback";
    let token = "RxTxY3cFqwe";
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(urlStr, JSON.stringify( {
        "text"  : feedbackText,
        "token" : token
      }),{headers:headers})
      .map((res: Response) => res.json())
      .subscribe(() => this.postResponse);
    console.log(feedbackText);
      // 
  }
  postResponse(){
    console.log("done");
  }
  clickListener( e ){
    e.preventDefault();
    var form = e.target.form;
    var feedbackText = form.querySelector('[name="feedbackText"]').value;
    this.formSubmit(feedbackText);
  }
  returnFalse(){
    return false;
  }
}
bootstrap(BAppComponent);
