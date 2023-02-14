/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ValidateGameVersionInput: core.serialization.ObjectSchema<
    serializers.cloud.games.ValidateGameVersionInput.Raw,
    Rivet.cloud.games.ValidateGameVersionInput
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string()),
    config: core.serialization.lazyObject(async () => (await import("../../../../../../..")).cloud.version.Config),
});

export declare namespace ValidateGameVersionInput {
    interface Raw {
        display_name: string;
        config: serializers.cloud.version.Config.Raw;
    }
}
