/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../core";

export const PrepareCustomAvatarUploadResponse: core.serialization.ObjectSchema<
    serializers.cloud.games.PrepareCustomAvatarUploadResponse.Raw,
    Rivet.cloud.games.PrepareCustomAvatarUploadResponse
> = core.serialization.object({
    uploadId: core.serialization.property("upload_id", core.serialization.string()),
    presignedRequest: core.serialization.property(
        "presigned_request",
        core.serialization.lazyObject(async () => (await import("../../../../../../..")).upload.PresignedRequest)
    ),
});

export declare namespace PrepareCustomAvatarUploadResponse {
    interface Raw {
        upload_id: string;
        presigned_request: serializers.upload.PresignedRequest.Raw;
    }
}
