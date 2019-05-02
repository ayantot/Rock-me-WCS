import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rock-me'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
<<<<<<< HEAD
    expect(app.title).toEqual('rock-me');
=======
    expect(app.title).toEqual('Rock-me');

>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to rock-me!');
=======

    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Rock-me!');

>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
  });
});
