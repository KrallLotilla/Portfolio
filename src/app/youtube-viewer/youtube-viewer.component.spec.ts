import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeViewerComponent } from './youtube-viewer.component';

describe('YoutubeViewerComponent', () => {
  let component: YoutubeViewerComponent;
  let fixture: ComponentFixture<YoutubeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
