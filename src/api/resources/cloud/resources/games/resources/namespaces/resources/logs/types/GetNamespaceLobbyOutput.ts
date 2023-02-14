/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetNamespaceLobbyOutput {
    lobby: Rivet.cloud.LogsLobbySummary;
    metrics?: Rivet.cloud.SvcMetrics;
    /** A list of URLs. */
    stdoutPresignedUrls: string[];
    /** A list of URLs. */
    stderrPresignedUrls: string[];
    /** A list of service performance summaries. */
    perfLists: Rivet.cloud.SvcPerf[];
}
