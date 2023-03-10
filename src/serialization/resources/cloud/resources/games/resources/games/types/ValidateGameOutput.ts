/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ValidateGameOutput: core.serialization.ObjectSchema<
    serializers.cloud.games.ValidateGameOutput.Raw,
    Rivet.cloud.games.ValidateGameOutput
> = core.serialization.object({
    errors: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).ValidationError)
    ),
});

export declare namespace ValidateGameOutput {
    interface Raw {
        errors: serializers.ValidationError.Raw[];
    }
}
