export type ErrorResponse = {
    error: string;
};
export type Subtype = 'send' | 'receive' | 'change' | 'open';
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
        type: Subtype;
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
export type AccountsBalancesResponse = {
    balances: {
        [account: string]: {
            balance: string;
            pending: string;
        };
    };
};
export type AccountsFrontiersResponse = {
    frontiers: {
        [account: string]: string;
    };
};
// TODO: More graceful type here.
export type AccountsPendingResponse = {
    blocks: {
        [account: string]:
            | string[]
            | {
                  [block: string]:
                      | string
                      | {
                            amount: string;
                            source: string;
                        };
              };
    };
};
export type ActiveDifficultyResponse = {
    multiplier: number;
    network_current: string;
    network_minimum: string;
    network_receive_current: string;
    network_receive_minimum: string;
    difficulty_trend?: number[];
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
export type BlockConfirmResponse = {
    started: '1' | '0';
};
export type BlockCountResponse = {
    count: number;
    unchecked: number;
    cemented?: number;
};
// TODO: Add type for non json_block responses
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
export type BlocksInfoResponseContents = {
    type: string;
    account: string;
    previous: string;
    representative: string;
    balance: string;
    link: string;
    link_as_account: string;
    signature: string;
    work: string;
}
export type BlocksInfoResponse = {
    blocks: {
        [hash: string]: {
            block_account: string;
            amount: string;
            balance?: string;
            height: number;
            local_timestamp: number;
            confirmed: boolean;
            contents: string | BlocksInfoResponseContents
            subtype: Subtype;
            pending?: string;
            source_account?: string;
        };
    };
    blocks_not_found?: string[];
};
export type ChainResponse = {
    blocks: string[];
};
export type ConfirmationQuorumResponse = {
    quorum_delta: string;
    online_weight_quorum_percent: number;
    online_weight_minimum: string;
    online_stake_total: string;
    peers_stake_total: string;
    peers_stake_required: string;
    peers?: Array<{
        account: string;
        ip: string;
        weight: string;
    }>;
};
export type DelegatorsResponse = {
    delegators: {
        [account: string]: string;
    };
};
export type DelegatorsCountResponse = {
    count: number;
};
export type FrontiersCountResponse = {
    count: number;
};
export type FrontiersResponse = {
    frontiers: {
        [account: string]: string;
    };
};
export type PeersResponseDetails = {
    protocol_version: string;
    node_id: string;
    type: string;
};
export type PeersResponse<T extends PeersResponseDetails | undefined> = {
    peers: Array<{
        [ip: string]: T extends PeersResponseDetails ? PeersResponseDetails : '';
    }>;
};
export type RepresentativesResponse = {
    representatives: {
        [account: string]: string;
    };
};
export type RepresentativesOnlineResponse = {
    representatives: string[];
};
export type RepresentativesOnlineWeightResponse = {
    representatives: {
        [account: string]: {
            weight: string;
        };
    };
};
export type UnitConversionResponse = {
    amount: string;
};
export type ValidateAccountNumberResponse = {
    valid: '1' | '0';
};
export type VersionResponse = {
    rpc_version: string;
    store_version: string;
    protocol_version: string;
    node_vendor: string;
    store_vendor?: string; // Since V21.0
    network?: string; // Since v20.0
    network_identifier?: string; // Since v20.0
    build_info?: string; // Since v20.0.
};
export type UptimeResponse = {
    seconds: number;
};
