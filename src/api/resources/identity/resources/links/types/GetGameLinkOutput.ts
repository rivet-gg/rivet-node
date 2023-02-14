/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

export interface GetGameLinkOutput {
    status: Rivet.identity.GameLinkStatus;
    game: Rivet.game.Handle;
    currentIdentity: Rivet.identity.Handle;
    newIdentity: Rivet.identity.GetGameLinkNewIdentity;
    watch: Rivet.WatchResponse;
}
