/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface ListFollowersResponse {
    identities: Rivet.identity.Handle[];
    anchor?: string;
    watch: Rivet.WatchResponse;
}
