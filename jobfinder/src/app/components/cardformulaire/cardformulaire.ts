import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cardformulaire',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cardformulaire.html',
  styleUrl: './cardformulaire.scss'
})
export class Cardformulaire {
  private formBuilder=inject(FormBuilder);
  private httpClient= inject(HttpClient);

  protected formGroup = this.formBuilder.group({
    jobTitle : this.formBuilder.control('', {validators : [Validators.required], nonNullable : true}),
    jobLocation : this.formBuilder.control('', {validators : [Validators.required], nonNullable : true}),
    applicantDescription : this.formBuilder.control('', {validators : [Validators.required], nonNullable : true}),
  })

  cvFile: File | undefined;

  constructor(private router: Router) {}


  isValidForm() {
    return this.formGroup.valid && !!this.cvFile ; 
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.cvFile = input.files[0];
    } else {
      this.cvFile = undefined;
    }
  }

  validateAndSearch() { 
    if(!this.cvFile)
      return ;
    // corps de la requête: multipart/form-data
    const formData = new FormData();
    formData.append('cv', this.cvFile, this.cvFile.name);
    formData.append('job_title', this.formGroup.controls.jobTitle.value);
    formData.append('job_location', this.formGroup.controls.jobLocation.value);
    formData.append('applicant_description', this.formGroup.controls.applicantDescription.value);

    this.httpClient.post(
      "/api-python/jobfinder/find_jobs",
      formData,
    ).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/jobs'], {
      state: { data }
      });    
    })
  }
}