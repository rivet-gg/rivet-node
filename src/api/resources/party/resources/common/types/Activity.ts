/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A union representing the activity of a given party.
 */
export interface Activity {
    /** A party activity denoting that the party is idle. */
    idle?: Rivet.EmptyObject;
    matchmakerFindingLobby?: Rivet.party.ActivityMatchmakerFindingLobby;
    matchmakerLobby?: Rivet.party.ActivityMatchmakerLobby;
}
