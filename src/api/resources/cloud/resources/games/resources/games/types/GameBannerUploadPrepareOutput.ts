/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GameBannerUploadPrepareOutput {
    /** A universally unique identifier. */
    uploadId: string;
    presignedRequest: Rivet.upload.PresignedRequest;
}