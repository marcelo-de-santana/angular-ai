import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-simples',
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './chat-simples.html',
  styleUrl: './chat-simples.css',
})
export class ChatSimples {
  userInput = '';

  messages = signal([{ text: 'Olá como eu posso te ajudar hoje?', isBot: true }]);

  sendMessage() {
    this.trimUserMessage;
    if (this.userInput !== '') {
      this.updateMessages(this.userInput);
      this.userInput = '';
      this.simulateResponse();
    }
  }

  private trimUserMessage() {
    this.userInput = this.userInput.trim();
  }

  private updateMessages(text: string, isBot = false) {
    this.messages.update((msgs) => [...msgs, { text, isBot }]);
  }

  private simulateResponse() {
    setTimeout(() => {
      const response = 'Está é uma resposta simulada pelo chat.';
      this.updateMessages(response, true);
    }, 2000);
  }
}
