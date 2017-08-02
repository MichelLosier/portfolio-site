import { Artwork } from './artwork';

export interface Project {
	_id?: any;
	name: string;
	position?: number;
	dateAdded?: Date;
	description: string;
	featuredImage: Artwork;
	category: string;
	tags?: string[]
	gallery: string[];
}