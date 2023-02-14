/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GetGroupInvoicesListOutput: core.serialization.ObjectSchema<
    serializers.cloud.GetGroupInvoicesListOutput.Raw,
    Rivet.cloud.GetGroupInvoicesListOutput
> = core.serialization.object({
    invoices: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).cloud.GroupBillingInvoice)
    ),
    anchor: core.serialization.string().optional(),
});

export declare namespace GetGroupInvoicesListOutput {
    interface Raw {
        invoices: serializers.cloud.GroupBillingInvoice.Raw[];
        anchor?: string | null;
    }
}
