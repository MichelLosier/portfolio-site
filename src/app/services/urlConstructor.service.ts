import { Injectable } from '@angular/core';

@Injectable()

export class UrlConstructorService {
    baseImageUrl = "../assets/images/";

    constructor(){}

    createImageUrl (path, fileName) {    
		return `${this.baseImageUrl}${path}${fileName}`;
	}

}