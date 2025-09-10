import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Student Tracker App';

  studentInfo = {
    name: 'Tyrael Yanni Martinez',
    age: 20, 
    course: "Mobile App Development"
  };

  skills = [
    'HTML',
    'CSS',
    'Learning Javascript',
    'Learning Angular', 'NewSkill'
  ];

  addSkill(){
    console.log("Skills array: ", this.skills);
    const newSkill = prompt('Enter a new skill you want to learn');
    if(newSkill) {
      this.skills.push(newSkill);
      console.log('Updated skills:', this.skills);
      
    }
  }
}
