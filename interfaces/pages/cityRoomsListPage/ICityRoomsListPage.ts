import { IRoomItem } from '@/interfaces/room/IRoom';

export interface ICityRoomsListPage {
	data: {
		['@odata.context']: string;
		count: number;
		id: number;
		minPrice: number;
		rooms: IRoomItem[];
	};
}
