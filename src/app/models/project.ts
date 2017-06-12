export interface Project {
	_id?: any;
	name: string;
	position?: number;
	dateAdded?: Date;
	description: string;
	featuredImage: string;
	category: string;
	tags?: string[]
	gallery: string[];
}