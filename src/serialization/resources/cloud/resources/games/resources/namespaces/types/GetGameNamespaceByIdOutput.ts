/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const GetGameNamespaceByIdOutput: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.GetGameNamespaceByIdOutput.Raw,
    Rivet.cloud.games.namespaces.GetGameNamespaceByIdOutput
> = core.serialization.object({
    namespace: core.serialization.lazyObject(async () => (await import("../../../../../../..")).cloud.NamespaceFull),
});

export declare namespace GetGameNamespaceByIdOutput {
    interface Raw {
        namespace: serializers.cloud.NamespaceFull.Raw;
    }
}
