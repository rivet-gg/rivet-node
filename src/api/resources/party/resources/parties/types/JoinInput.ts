/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface JoinInput {
    invite: Rivet.party.JoinInvite;
    /** Whether or not to automatically join the game lobby if a party is currently in game. */
    matchmakerAutoJoinLobby?: boolean;
    /**
     * If the player is currently in the lobby, pass the token from
     * `rivet.matchmaker#MatchmakerLobbyJoinInfoPlayer$token`.
     * This will prevent issuing a new player token.
     */
    matchmakerCurrentPlayerToken?: string;
}
