/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateInviteInput {
    /** How long until the group invite expires (in milliseconds). */
    ttl?: number;
    /** How many times the group invite can be used. */
    useCount?: number;
}
