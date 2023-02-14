/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Output from a created invite.
 */
export interface CreatedInvite {
    /** An alias used to join a given party. This alias must be unique for all invites for your game. Pass this alias to `rivet.api.party.common#CreatedInvite$alias` to consume the invite. */
    alias?: string;
    /**
     * A JSON Web Token.
     * Slightly modified to include a description prefix and use Protobufs of
     * JSON.
     */
    token: string;
}
