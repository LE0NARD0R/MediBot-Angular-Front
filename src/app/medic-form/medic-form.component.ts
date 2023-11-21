import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Medic } from '../medic';

@Component({
  selector: 'app-medic-form',
  templateUrl: './medic-form.component.html',
  styleUrls: ['./medic-form.component.css'],
})
export class MedicFormComponent {
  medics: any[] = [];
  specialties = [
    'Odonotología',
    'Cardiología',
    'Dermatología',
    'Ginecología',
    'Ortopedia',
    'Neurología',
    'Pediatría',
    'Oftalmología',
    'Psiquiatría',
    'Odontología',
    'Endocrinología',
    'Ortopedia',
  ];

  model = new Medic('', this.specialties[0]);
  submitted = false;
  code: number = 0;

  getRandomArbitrary(min: number, max: number) {
    const randomCode = Math.random() * (max - min) + min;
    const code = Math.trunc(randomCode);
    return code;
  }

  getMedicData(data: any){
    this.submitted = true;
    this.code = this.getRandomArbitrary(10000, 99999);
    const medic = {
      name: data.name,
      code: this.code,
      specialty: data.specialty,
    };
    this.apiService.postMedic(medic).subscribe((result) => {
      console.warn(result)
    })
  }

  newMedic() {
    this.submitted = false;
    this.model = new Medic('', this.specialties[0]);
  }
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fillData();
  }

  fillData() {
    this.apiService.getMedicList().subscribe((data) => {
      this.medics = data;
    });
  }
}
