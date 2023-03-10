/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const InspectOutput: core.serialization.ObjectSchema<
    serializers.cloud.InspectOutput.Raw,
    Rivet.cloud.InspectOutput
> = core.serialization.object({
    agent: core.serialization.lazyObject(async () => (await import("../../../../..")).cloud.AuthAgent),
});

export declare namespace InspectOutput {
    interface Raw {
        agent: serializers.cloud.AuthAgent.Raw;
    }
}
