/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const GetInviteResponse: core.serialization.ObjectSchema<
    serializers.party.GetInviteResponse.Raw,
    Rivet.party.GetInviteResponse
> = core.serialization.object({
    party: core.serialization.lazyObject(async () => (await import("../../../../..")).party.Summary),
});

export declare namespace GetInviteResponse {
    interface Raw {
        party: serializers.party.Summary.Raw;
    }
}