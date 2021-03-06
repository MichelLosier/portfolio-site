import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../models/artwork';

import { ArtworkCard } from '../artwork-card/artwork-card.component';
import { ArtworkCardModality, mgmtArtworkCardConfig } from '../artwork-card/artwork-card.config';

import { ArtworkService } from '../../services/artwork.service'
import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';

@Component({
    moduleId: module.id,
    selector: 'artwork-manager',
    templateUrl: './artwork-manager.component.html',
    styleUrls: ['./artwork-manager.component.css', '../forms/form.css']
})

export class ArtworkManager {
    list: Artwork[];
    selectedArtwork: Artwork;
    selectedIndex: number;
    deleteRequest: boolean = false;
    filter: string
    cardModality: ArtworkCardModality;

    constructor(
        private formService: ProjectArtworkFormService,
        private artworkService: ArtworkService
    ){

    }

    ngOnInit(): void {
        this.cardModality = mgmtArtworkCardConfig;
        this.initializeList();
    }

    initializeList(){
        this.artworkService.getArtworkAll()
            .subscribe(artworks => {
                this.list = artworks;
            });
    }

    artworkSelect(artwork, index){
        if (this.selectedArtwork === artwork) {
            this.selectedArtwork = undefined;
            this.selectedIndex = undefined;
            this.formService.announceSelectedArtwork(undefined);
        } else {
            this.selectedArtwork = artwork;
            this.selectedIndex = index;
            this.formService.announceSelectedArtwork(artwork);
        }
    }

    
}