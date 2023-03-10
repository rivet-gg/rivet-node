/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Rivet } from "@rivet-gg/api";

/**
 * A docker port.
 */
export interface GameModeRuntimeDockerPort {
    /** The port number to connect to. */
    port?: number;
    portRange?: Rivet.cloud.version.matchmaker.PortRange;
    protocol?: Rivet.cloud.version.matchmaker.ProxyProtocol;
    /** Client-side configuration */
    devPort?: number;
    /** Client-side configuration */
    devProtocol?: Rivet.cloud.version.matchmaker.ProxyProtocol;
}
