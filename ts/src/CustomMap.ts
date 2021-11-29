export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
	

    constructor(id: string) {
        this.googleMap = new google.maps.Map(document.getElementById(id), {
			zoom: 3,
			center: {
				lat: 46.4775,
				lng: 30.7326,
			},
		});
    }

	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		marker.addListener("click", () => {
			const infoWindow = new google.maps.InfoWindow({
				content: mappable.markerContent()
			})
			infoWindow.open(this.googleMap, marker);
		})
	}
}