/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const ListGameCdnSitesResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.ListGameCdnSitesResponse.Raw,
    Rivet.cloud.games.ListGameCdnSitesResponse
> = core.serialization.object({
    sites: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).cloud.CdnSiteSummary)
    ),
});

export declare namespace ListGameCdnSitesResponse {
    interface Raw {
        sites: serializers.cloud.CdnSiteSummary.Raw[];
    }
}
