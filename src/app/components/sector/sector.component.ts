import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { SectorService } from '../../services/sector.service';
import { SectorDto } from '../../models/sector.model';

@Component({
  selector: 'app-sector',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {
  @Input() selectedIds: string[] = [];
  @Output() selectedIdsChange = new EventEmitter<string[]>();

  sectors: SectorDto[] = [];
  sectorGroups: { name: string; children: SectorDto[] }[] = [];

  constructor(private sectorService: SectorService) {}

  ngOnInit() {
    this.sectorService.getAllSectors().subscribe(data => {
      this.sectors = data;
      this.buildGroups();
    });
  }

  onSelectionChange(ids: string[]) {
    this.selectedIds = ids;
    this.selectedIdsChange.emit(ids);
  }

  private buildGroups() {
    const parents = this.sectors.filter(sector => !sector.parentId);
    this.sectorGroups = parents.map(parent => ({
      name: parent.name,
      children: this.sectors.filter(sector => sector.parentId === parent.id)
    }));
  }
}
