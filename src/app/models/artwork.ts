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

export interface ArtworkCardModality {
	displayImage: string, //'preview', 'normal', 'large'
	showCaption: boolean,
	showDescription: boolean,
	clickForLarge: boolean,
	cardType: string // 'gallery', 'management'
}