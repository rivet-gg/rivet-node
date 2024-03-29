/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const GetResponse: core.serialization.ObjectSchema<serializers.kv.GetResponse.Raw, Rivet.kv.GetResponse> =
    core.serialization.object({
        value: core.serialization.lazy(async () => (await import("../../..")).kv.Value),
        deleted: core.serialization.boolean().optional(),
        watch: core.serialization.lazyObject(async () => (await import("../../..")).WatchResponse),
    });

export declare namespace GetResponse {
    interface Raw {
        value?: serializers.kv.Value.Raw;
        deleted?: boolean | null;
        watch: serializers.WatchResponse.Raw;
    }
}
