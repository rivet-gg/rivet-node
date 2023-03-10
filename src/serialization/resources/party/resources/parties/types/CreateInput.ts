/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CreateInput: core.serialization.ObjectSchema<serializers.party.CreateInput.Raw, Rivet.party.CreateInput> =
    core.serialization.object({
        partySize: core.serialization.property("party_size", core.serialization.number().optional()),
        publicity: core.serialization
            .lazyObject(async () => (await import("../../../../..")).party.CreatePublicityConfig)
            .optional(),
        invites: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../../../..")).party.CreateInviteConfig))
            .optional(),
        matchmakerCurrentPlayerToken: core.serialization.property(
            "matchmaker_current_player_token",
            core.serialization.string().optional()
        ),
    });

export declare namespace CreateInput {
    interface Raw {
        party_size?: number | null;
        publicity?: serializers.party.CreatePublicityConfig.Raw | null;
        invites?: serializers.party.CreateInviteConfig.Raw[] | null;
        matchmaker_current_player_token?: string | null;
    }
}
