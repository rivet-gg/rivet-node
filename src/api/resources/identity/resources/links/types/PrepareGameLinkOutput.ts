/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface PrepareGameLinkOutput {
    /** Pass this to `GetGameLink` to get the linking status. Valid for 15 minutes. */
    identityLinkToken: string;
    identityLinkUrl: string;
    expireTs: Rivet.Timestamp;
}
