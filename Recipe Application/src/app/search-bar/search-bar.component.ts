import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Input() query: string = ''; // Define the input property
  @Output() queryChange = new EventEmitter<string>(); // Emit changes to the parent

  onSearch(): void {
    this.queryChange.emit(this.query);
  }
}
