/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A group join request.
 */
export interface JoinRequest {
    identity: Rivet.identity.Handle;
    /** RFC3339 timestamp. */
    ts: Date;
}
