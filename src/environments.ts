/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface RivetEnvironmentUrls {
    auth: string;
    chat: string;
    cloud: string;
    group: string;
    identity: string;
    job: string;
    kv: string;
    matchmaker: string;
    party: string;
    portal: string;
}

export const RivetEnvironment = {
    Production: {
        auth: "https://auth.api.rivet.gg/v1",
        chat: "https://chat.api.rivet.gg/v1",
        cloud: "https://cloud.api.rivet.gg/v1",
        group: "https://group.api.rivet.gg/v1",
        identity: "https://identity.api.rivet.gg/v1",
        job: "https://job.api.rivet.gg/v1",
        kv: "https://kv.api.rivet.gg/v1",
        matchmaker: "https://matchmaker.api.rivet.gg/v1",
        party: "https://party.api.rivet.gg/v1",
        portal: "https://portal.api.rivet.gg/v1",
    },
} as const;

export type RivetEnvironment = typeof RivetEnvironment.Production;
