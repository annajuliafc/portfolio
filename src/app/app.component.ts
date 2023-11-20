import { ThemeService } from './theme.service';
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveAndResize', [
      state('start', style({
        fontSize: '120px',
      })),
      state('end', style({
        fontSize: '36px',
        top: '17px',
        left: '96px',
        position: 'absolute',
        width: 'auto',
        border: 'none',
        overflow: 'visible',
        textShadow: '-1px 0px 0px rgba(34, 207, 227, 1), 1px 0px 0px rgba(234, 26, 227, 1)'
      })),
      transition('start => end', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  animationState = 'start';

  title = 'portfolio';

  name: string = '< AnnaJulia />';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'end';
    }, 3000);
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
