import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  medics: any[] = [];

  constructor(private apiService: ApiService) {}

  fillData() {
    this.apiService.getMedicList().subscribe((data) => {
      this.medics = data;
    });
  }

  ngOnInit(): void {
    this.fillData();
  }

}
