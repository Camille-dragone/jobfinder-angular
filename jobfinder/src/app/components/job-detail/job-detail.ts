import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FAKE_JOBS } from '../../data/fake-jobs';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownModule],
  templateUrl: './job-detail.html',
  styleUrl: './job-detail.scss'
})
export class DetailJob {
  job: any;

  bestJobs = FAKE_JOBS

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.job = this.bestJobs.find(bestJob => bestJob.job.uuid === id);

    if (this.job?.job?.description) {
      this.job.job.description = this.formatDescription(this.job.job.description);
      console.log(this.job.job.description);
    }
  }

  private formatDescription(text: string): string {
    if (!text) return '';

    return text
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .replace(/•\s*/g, '- ')
      .replace(/^([^\n:]{2,80})\s*:\s*$/gm, '### $1')
      .replace(/^([^\n]{2,80})\s*:\s*\n/gm, '### $1\n\n')
      .replace(/^(Description offre|Nombre d'heures par semaine|Profil recherché|Avantages)\s*:/gm, '### $1')
      .replace(/\n(### )/g, '\n\n$1')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }
}