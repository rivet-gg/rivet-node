/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const GetSummariesOutput: core.serialization.ObjectSchema<
    serializers.identity.GetSummariesOutput.Raw,
    Rivet.identity.GetSummariesOutput
> = core.serialization.object({
    identities: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).identity.Summary)
    ),
});

export declare namespace GetSummariesOutput {
    interface Raw {
        identities: serializers.identity.Summary.Raw[];
    }
}
