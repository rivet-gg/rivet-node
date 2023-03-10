/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const ActivityMatchmakerFindingLobby: core.serialization.ObjectSchema<
    serializers.party.ActivityMatchmakerFindingLobby.Raw,
    Rivet.party.ActivityMatchmakerFindingLobby
> = core.serialization.object({
    game: core.serialization.lazyObject(async () => (await import("../../../../..")).game.Handle),
});

export declare namespace ActivityMatchmakerFindingLobby {
    interface Raw {
        game: serializers.game.Handle.Raw;
    }
}
