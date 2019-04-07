import * as React from "react";

export interface GoogleMapParam {
	url: string
}
export function GoogleMap(params: GoogleMapParam) {
	return <iframe
		src={params.url}
		height="100%" width="100%" frameBorder="0" style={{border:0}} allowFullScreen/>
}
