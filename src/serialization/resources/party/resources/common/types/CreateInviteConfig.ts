/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CreateInviteConfig: core.serialization.ObjectSchema<
    serializers.party.CreateInviteConfig.Raw,
    Rivet.party.CreateInviteConfig
> = core.serialization.object({
    alias: core.serialization.string().optional(),
});

export declare namespace CreateInviteConfig {
    interface Raw {
        alias?: string | null;
    }
}
