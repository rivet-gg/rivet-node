/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SearchInput {
    /**
     * The query to match group display names against.
     */
    query: string;
    anchor?: string;
    /**
     * Unsigned 32 bit integer.
     */
    limit?: number;
}