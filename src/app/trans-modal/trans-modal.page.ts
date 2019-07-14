  
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-trans-modal',
  templateUrl: './trans-modal.page.html',
  styleUrls: ['./trans-modal.page.scss'],
})
export class TransModalPage implements OnInit {

 
  qrData = "0"; //Para integrar al createdCode
  createdCode = "0"; //Crea el QR

  //Variables JSON QR
  jsonQRot = "0001";
  jsonQRalias = "Alias";
  jsonQRcl = "012180004585820842";
  jsonQRtype = "CL";
  jsonQRrefn = "0";
  jsonQRrefa = "MAURICIO";
  jsonQRamount = "0";
  jsonQRbank = "00012";
  jsonQRcountry = "MX";
  jsonQRcurrency = "MXN";
  //Fin de Variable JSON QR


  //JSON QR
  obj = {
    "ot": this.jsonQRot,
    "dOp":[
      {"alias": this.jsonQRalias},
      {"cl": this.jsonQRcl},
      {"type": this.jsonQRtype},
      {"refn": this.jsonQRrefn},
      {"refa": this.jsonQRrefa},
      {"amount": this.qrData},
      {"bank": this.jsonQRbank},
      {"country": this.jsonQRcountry},
      {"currency": this.jsonQRcurrency}
    ]
  };
  qrDataJson = JSON.stringify(this.obj);
  //Fin de JSON QR

  items: Array<any>;

  qrURL = this.qrDataJson;
  User = "000001/";

  qrCode = this.qrURL.concat(this.User)

  constructor(private modalCrtl: ModalController,
              public loadingCtrl: LoadingController,
              private router: Router,
              private route: ActivatedRoute,
              public alertController: AlertController,
              public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }


  salir() {
    this.modalCrtl.dismiss();
  }


  createCode() {
    this.createdCode = this.qrData;
  }


  async presentLoading(loading) {
    return await loading.present();
  }









//Back
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Listo para Escanear NFC',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'arrow-dropright-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}







  //Control de Págo
  oneButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode)//Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "1"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "1"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    twoButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "2"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "2"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    threeButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "3"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "3"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    fourButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "4"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "4"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    fiveButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "5"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "5"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    sixButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "6"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "6"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    sevenButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "7"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "7"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    eightButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "8"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "8"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    nineButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "9"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "9"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    zeroButton(){
    if (this.qrData.length > 4){
      this.createdCode = this.qrData.slice(0,5);
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }
    else{
      if (this.qrData == "0"){
        this.qrData = "0"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
      else{
        this.qrData = this.qrData + "0"
        this.createdCode = this.qrData;
        this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
      }
    }
    }
  
    cleanButton(){
      this.qrData = "0"
      this.createdCode = this.qrData;
      this.qrCode = this.qrURL.concat(this.createdCode) //Crea un QR Completo
    }


}
