/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateGameInput {
    /** A human readable short identifier used to references resources. Different than a `rivet.common#Uuid` because this is intended to be human readable. Different than `rivet.common#DisplayName` because this should not include special characters and be short. */
    nameId: string;
    /** Represent a resource's readable display name. */
    displayName: string;
    /** A universally unique identifier. */
    developerGroupId: string;
}
