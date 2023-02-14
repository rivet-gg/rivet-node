/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const GetDeviceLinkOutput: core.serialization.ObjectSchema<
    serializers.cloud.devices.GetDeviceLinkOutput.Raw,
    Rivet.cloud.devices.GetDeviceLinkOutput
> = core.serialization.object({
    cloudToken: core.serialization.property("cloud_token", core.serialization.string().optional()),
    watch: core.serialization.lazyObject(async () => (await import("../../../../../../..")).WatchResponse),
});

export declare namespace GetDeviceLinkOutput {
    interface Raw {
        cloud_token?: string | null;
        watch: serializers.WatchResponse.Raw;
    }
}
