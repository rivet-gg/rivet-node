/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GetProfileOutput: core.serialization.ObjectSchema<
    serializers.party.GetProfileOutput.Raw,
    Rivet.party.GetProfileOutput
> = core.serialization.object({
    party: core.serialization.lazyObject(async () => (await import("../../../../..")).party.Profile),
    watch: core.serialization.lazyObject(async () => (await import("../../../../..")).WatchResponse),
});

export declare namespace GetProfileOutput {
    interface Raw {
        party: serializers.party.Profile.Raw;
        watch: serializers.WatchResponse.Raw;
    }
}