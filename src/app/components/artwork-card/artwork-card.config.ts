export interface ArtworkCardModality {
	displayImage: string, //'preview', 'normal', 'large'
	showCaption: boolean,
	showDescription: boolean,
	clickForLarge: boolean,
	cardType: string // 'gallery', 'management'
}

export const defaultArtworkCardConfig : ArtworkCardModality = {
	displayImage: 'normal',
	showCaption: true,
	showDescription: true,
	clickForLarge: true,
	cardType: 'gallery'
}

export const mgmtArtworkCardConfig : ArtworkCardModality = {
	displayImage: 'preview',
	showCaption: true,
	showDescription: true,
	clickForLarge: false,
	cardType: 'management'
}

export const comicsArtworkCardConfig : ArtworkCardModality = {
	displayImage: 'large',
	showCaption: true,
	showDescription: false,
	clickForLarge: false,
	cardType: 'gallery'
}