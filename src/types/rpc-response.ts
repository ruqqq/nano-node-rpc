export type AccountBalanceResponse = {
    balance: string;
    pending: string;
};
export type AccountBlockCountResponse = {
    block_count: number;
};
export type AccountGetResponse = {
    account: string;
};
export type AccountHistoryResponse = {
    account: string;
    history?: Array<{
        type: 'send' | 'receive';
        account: string;
        amount: string;
        local_timestamp: number;
        height: number;
        hash: string;
    }>;
    previous?: string;
    next?: string;
};
export type AccountInfoResponse = {
    frontier: string;
    open_block: string;
    representative_block: string;
    balance: string;
    modified_timestamp: number;
    block_count: number;
    confirmation_height: number;
    confirmation_height_frontier: string;
    account_version: number;
    representative?: string;
    weight?: string;
    pending?: string;
};
export type AccountKeyResponse = {
    key: string;
};
export type AccountRepresentativeResponse = {
    representative: string;
};
export type AccountWeightResponse = {
    weight: string;
};
export type AccountBalancesResponse = {
    balances: Array<{
        [address: string]: {
            balance: string;
            pending: string;
        };
    }>;
};
export type AccountsFrontiersResponse = {
    frontiers: Array<{
        [address: string]: string;
    }>;
};
/*
export type AccountsPendingResponse = {
    blocks: Array<{
        [address: string]: string[] ? {} ?
    }>
} */
export type ActiveDifficultyResponse = {
    multiplier: string;
    network_current: string;
    network_minimum: string;
    network_receive_current: string;
    network_receive_minimum: string;
    difficulty_trend: string[]
}
export type AvailableSupplyResponse = {
    available: string;
}
