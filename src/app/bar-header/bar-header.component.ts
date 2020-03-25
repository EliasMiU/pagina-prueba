import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bar-header',
    templateUrl: './bar-header.component.html',
    styleUrls: ['./bar-header.component.css']
})

export class BarHeaderComponent implements OnInit{
    titulo = 'Registro Ventas';


    constructor(){
        
    }

    ngOnInit(){

    }

}