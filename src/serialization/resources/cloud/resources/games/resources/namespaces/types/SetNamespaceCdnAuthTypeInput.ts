/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const SetNamespaceCdnAuthTypeInput: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.SetNamespaceCdnAuthTypeInput.Raw,
    Rivet.cloud.games.namespaces.SetNamespaceCdnAuthTypeInput
> = core.serialization.object({
    authType: core.serialization.property(
        "auth_type",
        core.serialization.lazy(async () => (await import("../../../../../../..")).cloud.CdnAuthType)
    ),
});

export declare namespace SetNamespaceCdnAuthTypeInput {
    interface Raw {
        auth_type: serializers.cloud.CdnAuthType.Raw;
    }
}
