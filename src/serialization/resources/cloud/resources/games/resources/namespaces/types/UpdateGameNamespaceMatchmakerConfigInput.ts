/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const UpdateGameNamespaceMatchmakerConfigInput: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.UpdateGameNamespaceMatchmakerConfigInput.Raw,
    Rivet.cloud.games.namespaces.UpdateGameNamespaceMatchmakerConfigInput
> = core.serialization.object({
    lobbyCountMax: core.serialization.property("lobby_count_max", core.serialization.number()),
    maxPlayers: core.serialization.property("max_players", core.serialization.number()),
});

export declare namespace UpdateGameNamespaceMatchmakerConfigInput {
    interface Raw {
        lobby_count_max: number;
        max_players: number;
    }
}
