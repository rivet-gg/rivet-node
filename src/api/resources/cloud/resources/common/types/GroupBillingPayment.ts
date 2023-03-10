/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A group's billing payment.
 */
export interface GroupBillingPayment {
    /** Payment amount (in hundreths USD, 100 = $1.00). */
    amount: number;
    /** A description of this payment. */
    description?: string;
    /** Whether or not this payment is from an invoice. */
    fromInvoice: boolean;
    /** RFC3339 timestamp. */
    createdTs: Date;
    status: Rivet.cloud.GroupBillingStatus;
}
