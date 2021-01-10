import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  @Input() public orderDetail;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  passBack() {
    this.passEntry.emit(this.orderDetail);
    this.activeModal.close(this.orderDetail);
  }
}
