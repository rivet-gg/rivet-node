/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A matchmaker lobby.
 */
export interface JoinLobby {
    lobbyId: string;
    region: Rivet.matchmaker.JoinRegion;
    /** **Deprecated** */
    ports: Record<string, Rivet.matchmaker.JoinPort | undefined>;
    /** **Deprecated** */
    player: Rivet.matchmaker.JoinPlayer;
}