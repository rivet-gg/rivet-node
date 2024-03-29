/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const Config: core.serialization.ObjectSchema<
    serializers.cloud.version.cdn.Config.Raw,
    Rivet.cloud.version.cdn.Config
> = core.serialization.object({
    buildCommand: core.serialization.property("build_command", core.serialization.string().optional()),
    buildOutput: core.serialization.property("build_output", core.serialization.string().optional()),
    siteId: core.serialization.property("site_id", core.serialization.string().optional()),
    routes: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../../../../../..")).cloud.version.cdn.Route))
        .optional(),
});

export declare namespace Config {
    interface Raw {
        build_command?: string | null;
        build_output?: string | null;
        site_id?: string | null;
        routes?: serializers.cloud.version.cdn.Route.Raw[] | null;
    }
}
