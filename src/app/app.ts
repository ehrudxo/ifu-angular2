import { Component, View } from 'angular2/angular2';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

import FeedbackForm from './feedbackForm';
// import FeedbackFormSubmitted from './FeedbackFormSubmitted';


@Component({
	selector: 'start'
})

@View({
	directives: [RouterLink, RouterOutlet],
	template: `
		<header>
			<nav>
				<ul>
					<li>
						<a [router-link]="['/feedbackForm']">FeedbackForm</a>
					</li>	
				</ul>
			</nav>
		</header>
		
		<main>
			<h1>{{title}}</h1>
			<router-outlet></router-outlet>
		</main>
	`
})

@RouteConfig([
  { path: '/',                  redirectTo: '/feedbackForm' },
  { path: '/feedbackForm',            as: 'feedbackForm',     component: FeedbackForm }
//   ,
//   { path: '/feedbackFormSubmitted',            as: 'feedbackFormSubmitted',     component: FeedbackFormSubmitted }
])

export class App {
	title: string;
	constructor() {
		this.title = 'App title';
	}
}