import { Routes } from '@angular/router';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';


export const routes: Routes = [
    { path: '', redirectTo: 'chat', pathMatch: 'full' }, 
    { path: 'chat', component: ChatBotComponent },
];
