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
export type AvailableSupplyResponse = {
    available: string;
};
export type BlockResponse = {
    block_account: string;
    amount: string;
    balance: string;
    height: number;
    local_timestamp: number;
    confirmed: boolean;
    contents: string;
    subtype: string;
};
export type BlockAccountResponse = {
    account: string;
};
export type BlockCountResponse = {
    count: number;
    unchecked: number;
    cemented?: number;
};
export type BlocksResponse = {
    blocks: {
        [hash: string]: {
            type: string;
            account: string;
            previous: string;
            representative: string;
            balance: string;
            link: string;
            link_as_account: string;
            signature: string;
            work: string;
        };
    };
};
export type ChainResponse = {
    blocks: string[];
};
export type DelegatorsResponse = {
    [address: string]: string;
};
export type DelegatorsCountResponse = {
    count: number;
};
export type FrontiersCountResponse = {
    count: number;
};
export type FrontiersResponse = {
    frontiers: {
        [address: string]: string;
    };
};
export type PeersResponse = {
    peers: Array<{
        [ip: string]:
            | ''
            | {
                  protocol_version: string;
                  node_id: string;
                  type: string;
              };
    }>;
};
export type RepresentativesResponse = {
    representatives: {
        [address: string]: string;
    };
};
export type RepresentativesOnlineResponse = {
    representatives: string[];
};
export type RepresentativesOnlineWeightResponse = {
    representatives: {
        [address: string]: {
            weight: string;
        };
    };
};
export type UnitConversionResponse = {
    amount: string;
};
