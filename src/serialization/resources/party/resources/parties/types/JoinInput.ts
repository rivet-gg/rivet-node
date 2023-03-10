/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const JoinInput: core.serialization.ObjectSchema<serializers.party.JoinInput.Raw, Rivet.party.JoinInput> =
    core.serialization.object({
        invite: core.serialization.lazyObject(async () => (await import("../../../../..")).party.JoinInvite),
        matchmakerAutoJoinLobby: core.serialization.property(
            "matchmaker_auto_join_lobby",
            core.serialization.boolean().optional()
        ),
        matchmakerCurrentPlayerToken: core.serialization.property(
            "matchmaker_current_player_token",
            core.serialization.string().optional()
        ),
    });

export declare namespace JoinInput {
    interface Raw {
        invite: serializers.party.JoinInvite.Raw;
        matchmaker_auto_join_lobby?: boolean | null;
        matchmaker_current_player_token?: string | null;
    }
}
