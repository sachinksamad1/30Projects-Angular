import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiSearch } from './emoji-search';

describe('EmojiSearch', () => {
  let component: EmojiSearch;
  let fixture: ComponentFixture<EmojiSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
