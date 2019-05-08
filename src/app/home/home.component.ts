import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 

    let myUser: User = {
      nick:'Eduardo',
      age:28,
      email : 'aoe@aor-aoe',
      friend : true,
      uid : 1
    };

    let users: User[] =[
      myUser
    ]

    console.log(myUser);

    /*console.log('ok');*/
    /*let c: number = 1;
    let b: number = 2;

    let e: string ='1';
    let f: string ='2';
    console.log(c +b);
    console.log(e+f);

    let g: boolean =true;
    let h: object = {};

    console.log(g);
    console.log(h);

    let i = [c, b, e, f, g, h];

    console.log(i);
    
    let j: boolean []= [true,g];

    let k: object[]=[{},h];

    let l: any[] = [1,'e',{},[]];
    */


    
  }

  ngOnInit() {
  }

}
