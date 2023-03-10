/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const AddNamespaceDomainInput: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.AddNamespaceDomainInput.Raw,
    Rivet.cloud.games.namespaces.AddNamespaceDomainInput
> = core.serialization.object({
    domain: core.serialization.string(),
});

export declare namespace AddNamespaceDomainInput {
    interface Raw {
        domain: string;
    }
}
