import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.html',
  styleUrl: './jobs.scss'
})
export class Jobs {
  bestJobs = history.state.data;

  constructor(private router: Router) {}

  messageVisible = false;
  toastMessage = "";

  toggleSauvegarde(job: any) {
    job.save = !job.save;

    if (job.save) {
      this.toastMessage = "Offre sauvegardée";
    } else {
      this.toastMessage = "Offre retirée des sauvegardes";
    }

    this.messageVisible = true;

    setTimeout(() => {
      this.messageVisible = false;
    }, 2000);
  }

  showDetails(job: any) {
    this.router.navigate(['/jobs', job.job.uuid]);
  }

}