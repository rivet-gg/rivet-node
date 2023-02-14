/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A group's billing invoice.
 */
export interface GroupBillingInvoice {
    /** A URL to this invoice's CSV breakdown. */
    csvUrl: string;
    /** A URL to this invoice's PDF document. */
    pdfUrl: string;
    /** RFC3339 timestamp. */
    periodStartTs: Date;
    /** RFC3339 timestamp. */
    periodEndTs: Date;
}
