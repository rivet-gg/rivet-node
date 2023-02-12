/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const JoinMatchmakerLobbyForPartyInput: core.serialization.ObjectSchema<
    serializers.party.activity.JoinMatchmakerLobbyForPartyInput.Raw,
    Rivet.party.activity.JoinMatchmakerLobbyForPartyInput
> = core.serialization.object({
    lobbyId: core.serialization.property("lobby_id", core.serialization.string()),
    captcha: core.serialization
        .lazyObject(async () => (await import("../../../../../../..")).captcha.Config)
        .optional(),
});

export declare namespace JoinMatchmakerLobbyForPartyInput {
    interface Raw {
        lobby_id: string;
        captcha?: serializers.captcha.Config.Raw | null;
    }
}
