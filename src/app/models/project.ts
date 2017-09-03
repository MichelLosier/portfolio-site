import { Artwork } from './artwork';

export interface Project {
	_id?: any;
	name: string;
	position?: number;
	dateAdded?: Date;
	description: string;
	featuredImage: any;
	category: string;
	tags?: string[]
	gallery: any[];
}