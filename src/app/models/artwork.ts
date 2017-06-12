export interface Artwork {
	_id?: any;
	projects: string[];
	dateAdded: Date;
	location: string;
	preview: string;
	normal: string;
	large: string;
	caption: string;
	description: string;
	altText: string;
}