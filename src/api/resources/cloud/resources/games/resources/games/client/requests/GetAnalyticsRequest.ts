/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetAnalyticsRequest {
    queryStart: Date;
    queryEnd: Date;
    gameIds?: string | string[];
    namespaceIds?: string | string[];
    variants: Rivet.cloud.AnalyticsVariantQuery | Rivet.cloud.AnalyticsVariantQuery[];
}