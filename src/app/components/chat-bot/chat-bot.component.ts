import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from 'src/app/services/chat.service';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})

export class ChatBotComponent {
  question = '';
  messages: { from: 'user' | 'bot', text: string }[] = [];

  constructor(private chatService: ChatService) {}

  loading = false;

  //fdfd

  sendQuestion() {
    if (this.question.trim()) {
      this.messages.push({ from: 'user', text: this.question });
      const q = this.question;
      this.question = '';
      this.loading = true; // 
  
      this.chatService.askQuestion(q).subscribe(response => {
        this.loading = false;
        this.messages.push({ from: 'bot', text: response });
      }, err => {
        this.loading = false;
        this.messages.push({ from: 'bot', text: "Erreur serveur ❌" });
      });
    }
  }
  
  
}