import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardformulaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cardformulaire.html',
  styleUrl: './cardformulaire.scss'
})
export class Cardformulaire {
  nom: string = '';
  prenom: string = '';
  description: string = '';
  cvFile: File | null = null;

  constructor(private router: Router) {}

  get formulaireValide(): boolean {
    return (
      this.nom.trim() !== '' &&
      this.prenom.trim() !== '' &&
      this.description.trim() !== '' &&
      this.cvFile !== null
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.cvFile = input.files[0];
    } else {
      this.cvFile = null;
    }
  }

  validerEtChercher(): void {
    if (!this.formulaireValide) {
      return;
    }

    this.router.navigate(['/emplois']);
  }
}