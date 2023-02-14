/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Analytical information about a lobby.
 */
export interface AnalyticsLobbySummary {
    /** A universally unique identifier. */
    lobbyId: string;
    /** A universally unique identifier. */
    lobbyGroupId: string;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    lobbyGroupNameId: string;
    /** A universally unique identifier. */
    regionId: string;
    /** RFC3339 timestamp. */
    createTs: Date;
    /** Whether or not this lobby is ready. */
    isReady: boolean;
    /** Whether or not this lobby is idle. */
    isIdle: boolean;
    /** Whether or not this lobby is in a closed state. */
    isClosed: boolean;
    /** Whether or not this lobby is outdated. */
    isOutdated: boolean;
    /** Unsigned 32 bit integer. */
    maxPlayersNormal: number;
    /** Unsigned 32 bit integer. */
    maxPlayersDirect: number;
    /** Unsigned 32 bit integer. */
    maxPlayersParty: number;
    /** Unsigned 32 bit integer. */
    totalPlayerCount: number;
    /** Unsigned 32 bit integer. */
    registeredPlayerCount: number;
}