import { User } from "./Users" 
import { Company } from "./Company"

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
			zoom: 1,
			center: {
				lat: 46.4775,
				lng: 30.7326,
			},
		});
    }

	addMarker(mappable: User | Company): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});
	}
}