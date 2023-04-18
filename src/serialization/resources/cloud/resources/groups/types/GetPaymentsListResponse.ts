/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GetPaymentsListResponse: core.serialization.ObjectSchema<
    serializers.cloud.GetPaymentsListResponse.Raw,
    Rivet.cloud.GetPaymentsListResponse
> = core.serialization.object({
    payments: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).cloud.GroupBillingPayment)
    ),
    endPaymentId: core.serialization.property("end_payment_id", core.serialization.string().optional()),
});

export declare namespace GetPaymentsListResponse {
    interface Raw {
        payments: serializers.cloud.GroupBillingPayment.Raw[];
        end_payment_id?: string | null;
    }
}