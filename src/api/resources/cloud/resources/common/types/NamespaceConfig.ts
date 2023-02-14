/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * Cloud configuration for a given namespace.
 */
export interface NamespaceConfig {
    cdn: Rivet.cloud.CdnNamespaceConfig;
    matchmaker: Rivet.cloud.MatchmakerNamespaceConfig;
    kv: Rivet.cloud.KvNamespaceConfig;
    identity: Rivet.cloud.IdentityNamespaceConfig;
}