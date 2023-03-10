/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface PutBatchInput {
    /** A universally unique identifier. */
    namespaceId?: string;
    /** A list of entries to insert. */
    entries: Rivet.kv.PutEntry[];
}
