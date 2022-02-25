import {SearchBarProps}  from 'material-ui-search-bar';
export type Location  = {
    lat: number;
    lon: number;
    name: string;
    state: string;
}

export interface SearchProps{
    onLocationChange: (location: Location) => void;
}

export interface GeoResponse{
    data: Location[];
}
