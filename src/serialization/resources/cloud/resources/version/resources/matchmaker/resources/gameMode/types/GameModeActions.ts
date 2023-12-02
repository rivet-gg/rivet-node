/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const GameModeActions: core.serialization.ObjectSchema<
    serializers.cloud.version.matchmaker.GameModeActions.Raw,
    Rivet.cloud.version.matchmaker.GameModeActions
> = core.serialization.object({
    find: core.serialization
        .lazyObject(
            async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.GameModeFindConfig
        )
        .optional(),
    join: core.serialization
        .lazyObject(
            async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.GameModeJoinConfig
        )
        .optional(),
    create: core.serialization
        .lazyObject(
            async () => (await import("../../../../../../../../..")).cloud.version.matchmaker.GameModeCreateConfig
        )
        .optional(),
});

export declare namespace GameModeActions {
    interface Raw {
        find?: serializers.cloud.version.matchmaker.GameModeFindConfig.Raw | null;
        join?: serializers.cloud.version.matchmaker.GameModeJoinConfig.Raw | null;
        create?: serializers.cloud.version.matchmaker.GameModeCreateConfig.Raw | null;
    }
}
