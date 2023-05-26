import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../service/snackbar.service';
import{NgxUiLoaderService}from 'ngx-ui-loader'
import { Router } from '@angular/router';
declare const sendMail:any
@Component({
  selector: 'app-startproject',
  templateUrl: './startproject.component.html',
  styleUrls: ['./startproject.component.css']
})
export class StartprojectComponent implements OnInit {

  constructor( ) { }
responsemessage:any
  ngOnInit(): void {
  }
  onclick(){

    sendMail()


  }}
  

   

  

