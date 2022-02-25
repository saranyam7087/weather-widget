type weatherDetails = {
        dt: Date,
        temp: number,
        humidity: number,
        uvi: number,
        wind_speed: number,
        wind_deg: number,
        weather: [
            {
                description: string,
                icon: string
            }
        ]
}

export interface WeatherResponse{
    current: weatherDetails;
    daily: weatherDetails;
}