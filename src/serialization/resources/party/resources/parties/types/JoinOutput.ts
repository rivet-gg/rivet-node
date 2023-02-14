/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../core";

export const JoinOutput: core.serialization.ObjectSchema<serializers.party.JoinOutput.Raw, Rivet.party.JoinOutput> =
    core.serialization.object({
        partyId: core.serialization.property("party_id", core.serialization.string()),
    });

export declare namespace JoinOutput {
    interface Raw {
        party_id: string;
    }
}
