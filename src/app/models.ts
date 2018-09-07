export interface CmcPayload {
    data: Coin[];
    metatdata: CmcMetatdata
}

export class CmcMetatdata {
    timestamp: number;
    num_cryptocurrencies: number;
    error: string;
}

export class Coin {
    id: string;
    name: string;
    symbol: string;
    slug: string;
    rank: number;
    quotes: Quotes;

    // map from Quote.Currency
    price: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;

    img: string;
    chart: string;
}

export class Quotes {
    USD: Currency;
}

export class Currency {
    price: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
}