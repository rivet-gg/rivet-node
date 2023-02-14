/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetBansOutput {
    /** A list of banned group members. */
    bannedIdentities: Rivet.group.BannedIdentity[];
    /** The pagination anchor. */
    anchor?: string;
    watch: Rivet.WatchResponse;
}
