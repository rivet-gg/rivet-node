/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Client as ActivityClient } from "../resources/activity/client/Client";
import { Client as PartiesClient } from "../resources/parties/client/Client";

export declare namespace Client {
    interface Options {
        environment?: environments.RivetEnvironment | environments.RivetEnvironmentUrls;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    #activity: ActivityClient | undefined;

    public get activity(): ActivityClient {
        return (this.#activity ??= new ActivityClient(this.options));
    }

    #parties: PartiesClient | undefined;

    public get parties(): PartiesClient {
        return (this.#parties ??= new PartiesClient(this.options));
    }
}
