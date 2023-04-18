/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const CreateGameCdnSiteRequest: core.serialization.ObjectSchema<
    serializers.cloud.games.CreateGameCdnSiteRequest.Raw,
    Rivet.cloud.games.CreateGameCdnSiteRequest
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string()),
    files: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).upload.PrepareFile)
    ),
});

export declare namespace CreateGameCdnSiteRequest {
    interface Raw {
        display_name: string;
        files: serializers.upload.PrepareFile.Raw[];
    }
}