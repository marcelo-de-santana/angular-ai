import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSimples } from './chat-simples';

describe('ChatSimples', () => {
  let component: ChatSimples;
  let fixture: ComponentFixture<ChatSimples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSimples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSimples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
