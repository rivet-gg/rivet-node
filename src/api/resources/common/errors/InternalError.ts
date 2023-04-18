/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { Rivet } from "@rivet-gg/api";

export class InternalError extends errors.RivetError {
    constructor(body: Rivet.ErrorBody) {
        super({
            message: "InternalError",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalError.prototype);
    }
}