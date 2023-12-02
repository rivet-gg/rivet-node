/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type BuildCompression =
    /**
     * None compression. */
    | "none"
    /**
     * LZ4 compression. Use the minimum compression level. */
    | "lz4";

export const BuildCompression = {
    None: "none",
    Lz4: "lz4",
} as const;
