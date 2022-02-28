type weatherIcon = {
    description: string,
    icon: string
}

type weatherDetails = {
        dt: Date,
        temp: number,
        humidity: number,
        uvi: number,
        wind_speed: number,
        wind_deg: number,
        weather: [weatherIcon];
}

type dailyWeatherDetail = {
    dt: number,
    temp: {
        min: number,
        max: number
    },
    uvi: number,
    weather: [weatherIcon];
}

export interface WeatherResponse{
    current: weatherDetails;
    daily: dailyWeatherDetail[];
}

export interface WeatherDetailProps {
    humidity: number;
    uvi: number;
    windSpeed: number;
    windDeg: number;
}

export interface LocationdetailProps{
    dt: Date;
    temp: number;
    name: string;
    weather: weatherIcon;
}


export interface DailyWeatherDetailProps {
    daily: dailyWeatherDetail[];
}