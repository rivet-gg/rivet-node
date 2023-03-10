/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetOutput {
    /** Whether or not the entry has been deleted. Only set when watching this endpoint. */
    deleted?: boolean;
    watch: Rivet.WatchResponse;
}
