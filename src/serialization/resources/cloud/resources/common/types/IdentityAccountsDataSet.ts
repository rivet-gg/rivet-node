/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const IdentityAccountsDataSet: core.serialization.ObjectSchema<
    serializers.cloud.IdentityAccountsDataSet.Raw,
    Rivet.cloud.IdentityAccountsDataSet
> = core.serialization.object({
    ts: core.serialization.list(core.serialization.number()),
    totalAccountCount: core.serialization.property(
        "total_account_count",
        core.serialization.list(core.serialization.number())
    ),
    registeredAccountCount: core.serialization.property(
        "registered_account_count",
        core.serialization.list(core.serialization.number())
    ),
});

export declare namespace IdentityAccountsDataSet {
    interface Raw {
        ts: number[];
        total_account_count: number[];
        registered_account_count: number[];
    }
}