import { Component } from '@angular/core';
import { Cardformulaire } from '../../components/cardformulaire/cardformulaire';
import { Carddescription } from '../../components/carddescription/carddescription';

@Component({
  selector: 'app-homepage',
  imports: [Cardformulaire, Carddescription],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
