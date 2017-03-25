export class Project {
	_id: string;
	name: string;
	position: number;
	dateAdded: Date;
	description: string;
	featuredImage: string;
	category: string;
	tags?: string[];
	gallery: string[];
}