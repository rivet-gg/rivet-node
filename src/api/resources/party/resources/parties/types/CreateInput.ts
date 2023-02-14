/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface CreateInput {
    /** How many members can join the party. If using this party with the matchmaker, this number should be less than or equal to your party player limit. Super large parties may not be able to fit insite a lobby and be unable to join the game. */
    partySize?: number;
    publicity?: Rivet.party.CreatePublicityConfig;
    invites?: Rivet.party.CreateInviteConfig[];
    /**
     * If the player is currently in the lobby, pass the token from
     * `rivet.matchmaker#MatchmakerLobbyJoinInfoPlayer$token`.
     * This will prevent issuing a new player token and automatically set the
     * party state to the player's current lobby.
     */
    matchmakerCurrentPlayerToken?: string;
}
