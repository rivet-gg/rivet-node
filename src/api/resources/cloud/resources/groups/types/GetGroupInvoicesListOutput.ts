/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetGroupInvoicesListOutput {
    /** A list of a group's billing invoices. */
    invoices: Rivet.cloud.GroupBillingInvoice[];
    /** The pagination anchor. */
    anchor?: string;
}
