/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface Handle {
    partyId: string;
    createTs: Date;
    activity: Rivet.party.Activity;
    external: Rivet.party.ExternalLinks;
}
