/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A logs summary for a lobby.
 */
export interface LogsLobbySummary {
    /** A universally unique identifier. */
    lobbyId: string;
    /** A universally unique identifier. */
    namespaceId: string;
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    lobbyGroupNameId: string;
    /** A universally unique identifier. */
    regionId: string;
    /** RFC3339 timestamp. */
    createTs: Date;
    /** RFC3339 timestamp. */
    startTs?: Date;
    /** RFC3339 timestamp. */
    readyTs?: Date;
    status: Rivet.cloud.LogsLobbyStatus;
}