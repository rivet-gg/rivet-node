/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetGroupBillingOutput {
    billing: Rivet.cloud.GroupBillingSummary;
    bankSource: Rivet.cloud.GroupBankSource;
    /** A list of region summaries. */
    availableRegions: Rivet.cloud.RegionSummary[];
}
