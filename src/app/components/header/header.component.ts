import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild("mobCheck") divView: ElementRef | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.divView!.nativeElement.checked = false
  }
}
