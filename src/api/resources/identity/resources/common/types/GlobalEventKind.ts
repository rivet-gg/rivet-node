/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GlobalEventKind {
    chatMessage?: Rivet.identity.GlobalEventChatMessage;
    chatRead?: Rivet.identity.GlobalEventChatRead;
    partyUpdate?: Rivet.identity.GlobalEventPartyUpdate;
    identityUpdate?: Rivet.identity.GlobalEventIdentityUpdate;
    matchmakerLobbyJoin?: Rivet.identity.GlobalEventMatchmakerLobbyJoin;
    chatThreadRemove?: Rivet.identity.GlobalEventChatThreadRemove;
}
