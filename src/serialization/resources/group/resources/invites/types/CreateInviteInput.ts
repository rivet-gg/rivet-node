/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const CreateInviteInput: core.serialization.ObjectSchema<
    serializers.group.CreateInviteInput.Raw,
    Rivet.group.CreateInviteInput
> = core.serialization.object({
    ttl: core.serialization.number().optional(),
    useCount: core.serialization.property("use_count", core.serialization.number().optional()),
});

export declare namespace CreateInviteInput {
    interface Raw {
        ttl?: number | null;
        use_count?: number | null;
    }
}
