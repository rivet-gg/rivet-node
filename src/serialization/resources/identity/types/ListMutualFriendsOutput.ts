/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../core";

export const ListMutualFriendsOutput: core.serialization.ObjectSchema<
    serializers.identity.ListMutualFriendsOutput.Raw,
    Rivet.identity.ListMutualFriendsOutput
> = core.serialization.object({
    identities: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).identity.Handle)
    ),
    anchor: core.serialization.string().optional(),
});

export declare namespace ListMutualFriendsOutput {
    interface Raw {
        identities: serializers.identity.Handle.Raw[];
        anchor?: string | null;
    }
}
