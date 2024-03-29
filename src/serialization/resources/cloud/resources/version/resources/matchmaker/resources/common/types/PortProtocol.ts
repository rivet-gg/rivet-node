/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../..";
import { Rivet } from "@rivet-gg/api";
import * as core from "../../../../../../../../../../core";

export const PortProtocol: core.serialization.Schema<
    serializers.cloud.version.matchmaker.PortProtocol.Raw,
    Rivet.cloud.version.matchmaker.PortProtocol
> = core.serialization.enum_(["http", "https", "tcp", "tcp_tls", "udp"]);

export declare namespace PortProtocol {
    type Raw = "http" | "https" | "tcp" | "tcp_tls" | "udp";
}
