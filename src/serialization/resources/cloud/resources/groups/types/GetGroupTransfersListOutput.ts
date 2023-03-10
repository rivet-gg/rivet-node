/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GetGroupTransfersListOutput: core.serialization.ObjectSchema<
    serializers.cloud.GetGroupTransfersListOutput.Raw,
    Rivet.cloud.GetGroupTransfersListOutput
> = core.serialization.object({
    transfers: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).cloud.GroupBillingTransfer)
    ),
    endTransferId: core.serialization.property("end_transfer_id", core.serialization.string().optional()),
});

export declare namespace GetGroupTransfersListOutput {
    interface Raw {
        transfers: serializers.cloud.GroupBillingTransfer.Raw[];
        end_transfer_id?: string | null;
    }
}
