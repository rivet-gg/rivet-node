/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const MemberStateMatchmakerLobby: core.serialization.ObjectSchema<
    serializers.party.MemberStateMatchmakerLobby.Raw,
    Rivet.party.MemberStateMatchmakerLobby
> = core.serialization.object({
    playerId: core.serialization.property("player_id", core.serialization.string()),
});

export declare namespace MemberStateMatchmakerLobby {
    interface Raw {
        player_id: string;
    }
}
