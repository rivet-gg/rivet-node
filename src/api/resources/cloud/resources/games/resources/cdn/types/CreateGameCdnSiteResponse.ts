/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface CreateGameCdnSiteResponse {
    siteId: string;
    uploadId: string;
    presignedRequests: Rivet.upload.PresignedRequest[];
}