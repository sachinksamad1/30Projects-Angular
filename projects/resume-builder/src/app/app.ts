import { Component, signal } from '@angular/core';
import { EditableResumeComponent } from "./components/editable-resume/editable-resume.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { DownloadComponent } from "./components/download/download.component";

@Component({
  selector: 'app-root',
  imports: [EditableResumeComponent, ResumeComponent, DownloadComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('resume-builder');
}
