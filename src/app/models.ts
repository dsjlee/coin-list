export interface ListingsPayload {
    data: Coin[];
    status: Status
}

export interface MetricsPayload {
    data: GlobalMetrics;
    status: Status
}

export class Status {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
}

export class Coin {
    id: string;
    name: string;
    symbol: string;
    slug: string;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    date_added: string;
    num_market_pairs: number;
    cmc_rank: number;
    last_updated: string;
    quote: Quote;

    // map from Quote.Currency
    price: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;

    img: string;
    chart: string;
}

export class Quote {
    USD: Convert;
}

export class Convert {
    price: number;
    volume_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    market_cap: number;
    last_updated: string;
}

export class GlobalMetrics {
    active_cryptocurrencies: number;
    active_market_pairs: number;
    active_exchanges: number;
    eth_dominance: number;
    btc_dominance: number;
    quote: MetricsQuote;
    last_updated: string;
}

export class MetricsQuote {
    USD: MetricsConvert;
}

export class MetricsConvert {
    total_market_cap: number;
    total_volume_24h: number;
    last_updated: string;
}