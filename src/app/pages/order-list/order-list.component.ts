import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { from, Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isDtInitialized:boolean = false
  orderList:any= [];
  orderDetail:any=[];
  myDate = new Date();
  closeResult: string;
  constructor(private http: HttpClient,
    private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      "lengthChange": false
    }
    this.orderListing();
   
  }
  orderListing()
  {
    this.orderList = [
      { "id":"0","orderNumber": "122","customerName":"Rama","itemName":"Mushroom Riot","itemCount":"5","price":"120","deliveryAddress":"Pajifond Margao Goa","status":"1"},
      { "id":"1","orderNumber": "124","customerName":"Rajesh","itemName":"Fresh Veggi Special","itemCount":"2","price":"200","deliveryAddress":"Panjim Goa","status":"1"},
      { "id":"2","orderNumber": "125","customerName":"Mohan Vyas","itemName":"Cheese Burst","itemCount":"3","price":"300","deliveryAddress":"Verna","status":"1"},
      { "id":"3","orderNumber": "126","customerName":"Geeta Naik","itemName":"Greek Salad Pizza","itemCount":"1","price":"50","deliveryAddress":"Opp New english high school,Margao","status":"1"},
      { "id":"4","orderNumber": "127","customerName":"Babita R","itemName":"Fresh Veggi Special","itemCount":"1","price":"50","deliveryAddress":"Fatora","status":"2"},
      {  "id":"5","orderNumber": "128","customerName":"Chelsi Dias","itemName":"Mushroom Pizza","itemCount":"5","price":"260","deliveryAddress":"Status Plaza Goa","status":"1"},
      { "id":"6","orderNumber": "129","customerName":"Varun","itemName":"Mushroom Pizza","itemCount":"5","price":"260","deliveryAddress":"Ramnagar salcette Goa","status":"1"},
      { "id":"7","orderNumber": "130","customerName":"Peter","itemName":"Mushroom Riot","itemCount":"5","price":"120","deliveryAddress":"Murida Goa","status":"2"},
      {  "id":"8","orderNumber": "131","customerName":"Damu","itemName":"Fresh Veggi Pizza","itemCount":"10","price":"100","deliveryAddress":"Vidyanagar vasco","status":"1"},
      {  "id":"9","orderNumber": "132","customerName":"Yogita G","itemName":"New York-Style Pizza","itemCount":"1","price":"300","deliveryAddress":"Ramnagari First Floor Block A","status":"1"},
      { "id":"10", "orderNumber": "133","customerName":"Harshita T","itemName":"New York-Style Pizza","itemCount":"5","price":"300","deliveryAddress":"Block C Mita Appartments","status":"3"},
      {  "id":"11","orderNumber": "134","customerName":"Sharana R","itemName":"Paneer Tikka Pizza","itemCount":"10","price":"100","deliveryAddress":"D9-Status Academy","status":"3"},
      {  "id":"12","orderNumber": "135","customerName":"Ashish R","itemName":"Chizza","itemCount":"4","price":"50","deliveryAddress":"Nuvem Goa","status":"1"},
      {  "id":"13","orderNumber": "136","customerName":"Samruddhi","itemName":"Pasta Pizza","itemCount":"5","price":"50","deliveryAddress":"Floor 1 New residency","status":"1"},
      {  "id":"14","orderNumber": "137","customerName":"Nilesh Rajan","itemName":"Mushroom Pizza","itemCount":"3","price":"260","deliveryAddress":"R1-Fatorda Goa","status":"1"},
    ];
    console.log(this.isDtInitialized)
    if (this.isDtInitialized) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.isDtInitialized = true
      this.dtTrigger.next();
    }
    
  }
  changeStatus(id,status){
    var t = confirm("Do you really want to change the status ?");
    if(t==true)
    {
      if(status==1)
      {
        this.orderList[id].status="2";
      }
      else if(status==2)
      {
        this.orderList[id].status="3";
      }
      else if(status==3)
      {
        this.orderList[id].status="1";
      }
      this.orderList = [...this.orderList];
    }
  
  }
  viewDetails(content,id){
    this.loadOrderData(id);
    const modalRef = this.modalService.open(OrderDetailComponent);
    modalRef.componentInstance.orderDetail = this.orderDetail;
  }
  loadOrderData(id)
  {
    this.orderDetail = this.orderList[id];
  }
    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
 
}
