import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-out',
  templateUrl: './sign-in-out.component.html',
  styleUrls: ['./sign-in-out.component.scss']
})
export class SignInOutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    const translation = document.querySelector('.container');
    if(translation?.classList.contains('right-panel-active') == true){
      translation?.classList.remove('right-panel-active')
    }else{
      translation?.classList.add('right-panel-active')
    }
  }

}
