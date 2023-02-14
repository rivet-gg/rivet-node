/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const Invite: core.serialization.ObjectSchema<serializers.party.Invite.Raw, Rivet.party.Invite> =
    core.serialization.object({
        inviteId: core.serialization.property("invite_id", core.serialization.string()),
        createTs: core.serialization.property("create_ts", core.serialization.date()),
        token: core.serialization.string(),
        alias: core.serialization.lazyObject(async () => (await import("../../../../..")).party.InviteAlias).optional(),
        external: core.serialization.lazyObject(async () => (await import("../../../../..")).party.InviteExternalLinks),
    });

export declare namespace Invite {
    interface Raw {
        invite_id: string;
        create_ts: string;
        token: string;
        alias?: serializers.party.InviteAlias.Raw | null;
        external: serializers.party.InviteExternalLinks.Raw;
    }
}
