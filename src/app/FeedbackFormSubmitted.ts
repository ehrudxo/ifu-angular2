import {bootstrap,Component,View} from 'angular2/angular2';
import { RouterLink } from 'angular2/router';

@Component({
  selector : 'start'
})
@View({
	directives: [RouterLink],
	template : `
		<header>
			<nav>
				<ul>
					<li>
						<a [router-link]="['/feedbackForm']">돌아가기</a>
					</li>	
				</ul>
			</nav>
		</header>
		<div>
			성공적으로 작성되었습니다.
			<br/>		
		</div>
	`
})
export default class DAppComponent{}
 
bootstrap(DAppComponent);
