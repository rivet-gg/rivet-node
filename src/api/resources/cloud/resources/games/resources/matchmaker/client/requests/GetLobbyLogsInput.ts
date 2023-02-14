/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetLobbyLogsInput {
    stream: Rivet.cloud.games.LogStream;
    /**
     * A query parameter denoting the requests watch index.
     */
    watchIndex?: string;
}
