export type AccountBalanceResponse = {
    balance: string;
    pending: string;
}
export type AccountBlockCountResponse = {
    block_count:  number;
}
export type AccountGetResponse = {
    account: string;
}
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
}