import { Component, ElementRef, signal, ViewChild } from '@angular/core';
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
  @ViewChild('chatHistory')
  private chatHistory!: ElementRef;

  userInput = '';
  isLoading = false;

  messages = signal([{ text: 'Olá como eu posso te ajudar hoje?', isBot: true }]);

  sendMessage() {
    this.trimUserMessage;
    if (this.userInput !== '' && !this.isLoading) {
      this.updateMessages(this.userInput);
      this.isLoading = true;
      this.userInput = '';
      this.simulateResponse();
    }
  }

  private updateMessages(text: string, isBot = false) {
    this.messages.update((msgs) => [...msgs, { text, isBot }]);
    this.scrollToBottom();
  }

  private trimUserMessage() {
    this.userInput = this.userInput.trim();
  }

  private simulateResponse() {
    setTimeout(() => {
      const response = 'Está é uma resposta simulada pelo chat.';
      this.updateMessages(response, true);
      this.isLoading = false;
    }, 2000);
  }

  private scrollToBottom() {
    try {
      this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
    } catch (error) {}
  }
}
