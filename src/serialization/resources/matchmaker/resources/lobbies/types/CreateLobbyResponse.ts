/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CreateLobbyResponse: core.serialization.ObjectSchema<
    serializers.matchmaker.CreateLobbyResponse.Raw,
    Rivet.matchmaker.CreateLobbyResponse
> = core.serialization.object({
    lobby: core.serialization.lazyObject(async () => (await import("../../../../..")).matchmaker.JoinLobby),
    ports: core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../../../..")).matchmaker.JoinPort)
    ),
    player: core.serialization.lazyObject(async () => (await import("../../../../..")).matchmaker.JoinPlayer),
});

export declare namespace CreateLobbyResponse {
    interface Raw {
        lobby: serializers.matchmaker.JoinLobby.Raw;
        ports: Record<string, serializers.matchmaker.JoinPort.Raw>;
        player: serializers.matchmaker.JoinPlayer.Raw;
    }
}
