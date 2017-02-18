import { Artwork } from './artwork';

export class Project {
	_id: number;
	name: string;
	position: number;
	dateAdded: string;
	description: string;
	location: string;
	featuredImage: string;
	category: string[];
	tags: string[];
	gallery: Artwork[];
}