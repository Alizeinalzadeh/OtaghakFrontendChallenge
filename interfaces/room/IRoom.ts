export interface IRoomItem {
	id: number;
	roomId: number;
	roomName: string;
	seoTitle: string;
	roomTypeName: string;
	roomTypeEnName: null;
	roomTypeId: number;
	area: number;
	floor: string;
	floorName: null;
	hostName: null;
	hostPhoneNumber: null;
	boxCodes: any[];
	tagCodes: string[];
	stateEnName: null;
	stateFaName: string;
	stateCode: string;
	cityEnName: null;
	cityFaName: string;
	cityCode: string;
	rate: number;
	personCapacity: number;
	extraPersonCapacity: number;
	bedRoom: number;
	bedCount: number;
	hasDiscount: boolean;
	basePrice: number;
	averagePrice: number;
	afterDiscount: number;
	afterDiscountAverage: number;
	totalPrice: number;
	extraPersonCount: number;
	totalNights: number;
	totalDiscountValue: number;
	longitude: number;
	latitude: number;
	address: null;
	roomMainMediaTitle: null;
	isInstantBook: boolean;
	isPrimeRoom: boolean;
	isNew: boolean;
	commentsCount: number;
	includeAroundLocations: null;
	sourceType: string;
	ruleIds: string[];
	improvementPriorityScore: number;
	minPricePriorityScore: number;
	maxPricePriorityScore: number;
	decreaseScoreForBlockReason: number;
	decreaseScoreForNotInstantReason: number;
	afterInstantScore: number;
	ctoPoint: number;
	isActive: boolean;
	beforeInstantScore: number;
	minNights: number;
	maxNights: number;
	currencyId: number;
	roomFeatureIcons: string[];
	roomDiscounts: IRoomDiscount[];
	roomMedia: IRoomMedia;
	roomMediaTitles: IRoomMediaTitles;
}

interface IRoomMediaTitles {
	mainImageTitle: string;
	galleryImagesTitles: string[];
	ownerTypeImagesTitles: string[];
}

interface IRoomMedia {
	id: number;
	mainImageId: number;
	galleryImagesId: number[];
}

interface IRoomDiscount {
	id: number;
	discountAmount: number;
	discountValue: number;
	discountType: null;
	discountTitle: null;
	discountCompanyId: null;
	effectiveFromDate: string;
	effectiveToDate: string;
}
