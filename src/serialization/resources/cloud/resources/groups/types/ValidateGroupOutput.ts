/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const ValidateGroupOutput: core.serialization.ObjectSchema<
    serializers.cloud.ValidateGroupOutput.Raw,
    Rivet.cloud.ValidateGroupOutput
> = core.serialization.object({
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).ValidationError)
    ),
});

export declare namespace ValidateGroupOutput {
    interface Raw {
        errors: serializers.ValidationError.Raw[];
    }
}
