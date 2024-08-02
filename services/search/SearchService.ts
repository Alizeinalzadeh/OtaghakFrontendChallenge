import { GET_CITY_ROOMS } from '@/config/endpoints/apiEndpoints';
import { BaseAxiosService } from '../global/BaseAxiosService';
import { ISearchForm } from '@/interfaces/search/ISearch';

export class SearchService extends BaseAxiosService {
	readSearchByCity = (cityName: string, signal?: AbortSignal) => {
		// Because this is a test project and we don't have other filters, we user this static filter and just the city value is dynamic
		const data: ISearchForm = {
			checkIn: null,
			checkOut: null,
			attributes: [],
			rules: [],
			filter: `cityCode=${cityName}&includeAroundLocations=true&$top=24&$skip=0&$count=true`,
		};
		return this._post(GET_CITY_ROOMS, data, { signal });
	};
}
