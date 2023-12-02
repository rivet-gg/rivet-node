/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const BuildKind: core.serialization.Schema<serializers.cloud.games.BuildKind.Raw, Rivet.cloud.games.BuildKind> =
    core.serialization.enum_(["docker_image", "oci_bundle"]);

export declare namespace BuildKind {
    type Raw = "docker_image" | "oci_bundle";
}
