import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ 
	selector: '[galleryImage]' 
})

export class GalleryImage implements OnInit{
	baseUrl = "../assets/images/";
	@Input() path: string;
	@Input() fileName: string;
    
    constructor(private el: ElementRef) {
    	
    }
    ngOnInit(){
    	this.createUrl(this.path, this.fileName);
    }

    private createUrl (path: string, fileName: string): void{
    	this.el.nativeElement.src = `${this.baseUrl}${path}${fileName}`;
    }
}