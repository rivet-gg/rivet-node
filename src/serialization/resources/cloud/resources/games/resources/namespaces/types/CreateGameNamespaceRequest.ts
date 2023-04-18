/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const CreateGameNamespaceRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.namespaces.CreateGameNamespaceRequest.Raw,
    Rivet.cloud.games.namespaces.CreateGameNamespaceRequest
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string()),
    versionId: core.serialization.property("version_id", core.serialization.string()),
    nameId: core.serialization.property("name_id", core.serialization.string()),
});

export declare namespace CreateGameNamespaceRequest {
    interface Raw {
        display_name: string;
        version_id: string;
        name_id: string;
    }
}