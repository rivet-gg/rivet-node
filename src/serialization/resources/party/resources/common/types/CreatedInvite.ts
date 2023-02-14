/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CreatedInvite: core.serialization.ObjectSchema<
    serializers.party.CreatedInvite.Raw,
    Rivet.party.CreatedInvite
> = core.serialization.object({
    alias: core.serialization.string().optional(),
    token: core.serialization.string(),
});

export declare namespace CreatedInvite {
    interface Raw {
        alias?: string | null;
        token: string;
    }
}