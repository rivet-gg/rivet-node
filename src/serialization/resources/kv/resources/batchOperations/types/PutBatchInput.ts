/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const PutBatchInput: core.serialization.ObjectSchema<serializers.kv.PutBatchInput.Raw, Rivet.kv.PutBatchInput> =
    core.serialization.object({
        namespaceId: core.serialization.property("namespace_id", core.serialization.string().optional()),
        entries: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).kv.PutEntry)
        ),
    });

export declare namespace PutBatchInput {
    interface Raw {
        namespace_id?: string | null;
        entries: serializers.kv.PutEntry.Raw[];
    }
}
