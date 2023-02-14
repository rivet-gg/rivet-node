/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const NamespaceFull: core.serialization.ObjectSchema<
    serializers.cloud.NamespaceFull.Raw,
    Rivet.cloud.NamespaceFull
> = core.serialization.object({
    namespaceId: core.serialization.property("namespace_id", core.serialization.string()),
    createTs: core.serialization.property("create_ts", core.serialization.date()),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    versionId: core.serialization.property("version_id", core.serialization.string()),
    nameId: core.serialization.property("name_id", core.serialization.string()),
    config: core.serialization.lazyObject(async () => (await import("../../../../..")).cloud.NamespaceConfig),
});

export declare namespace NamespaceFull {
    interface Raw {
        namespace_id: string;
        create_ts: string;
        display_name: string;
        version_id: string;
        name_id: string;
        config: serializers.cloud.NamespaceConfig.Raw;
    }
}
