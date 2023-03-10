/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GroupBillingTransfer: core.serialization.ObjectSchema<
    serializers.cloud.GroupBillingTransfer.Raw,
    Rivet.cloud.GroupBillingTransfer
> = core.serialization.object({
    amount: core.serialization.number(),
    description: core.serialization.string().optional(),
    createdTs: core.serialization.property("created_ts", core.serialization.date()),
    status: core.serialization.lazy(async () => (await import("../../../../..")).cloud.GroupBillingStatus),
});

export declare namespace GroupBillingTransfer {
    interface Raw {
        amount: number;
        description?: string | null;
        created_ts: string;
        status: serializers.cloud.GroupBillingStatus.Raw;
    }
}
