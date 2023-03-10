/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A value denoting the status of a billing transfer.
 */
export type GroupBillingStatus = "succeeded" | "processing" | "refunded";

export const GroupBillingStatus = {
    Succeeded: "succeeded",
    Processing: "processing",
    Refunded: "refunded",
} as const;
