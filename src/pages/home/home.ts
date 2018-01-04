import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO  } from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public finger:FingerprintAIO) {
  	//验证指纹是否可用
  	finger.isAvailable()
  	.then((result: any) => {
  		//指纹可用回调
  		alert(result + '指纹可用');
  	})
	  .catch((error: any) => {
	  	alert(error + '指纹不可用');
	  });
  };
  //click ==> 验证对话
  FingerClick(){
  	try{
  		this.finger.show({
	      clientId: "Fingerprint-Demo",
	      clientSecret: "password"
	    })
  		.then(
  			(result: any) => 
  			alert(result)
  			)
			.catch(
				(error: any) => 
				alert(error)
			);
  	}catch(e){
  		
  	}
  }
}
