export class Artwork {
	name: string;
	order: number;
	images: {
		preview: string;
		normal: string;
		large: string;
		};
	description: string;
	projects: string[];
}