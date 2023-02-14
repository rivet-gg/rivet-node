/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const CreateGameOutput: core.serialization.ObjectSchema<
    serializers.cloud.games.CreateGameOutput.Raw,
    Rivet.cloud.games.CreateGameOutput
> = core.serialization.object({
    gameId: core.serialization.property("game_id", core.serialization.string()),
});

export declare namespace CreateGameOutput {
    interface Raw {
        game_id: string;
    }
}
