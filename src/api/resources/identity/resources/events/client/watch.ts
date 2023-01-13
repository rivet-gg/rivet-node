/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { RivetApi } from "@fern-api/rivet";
import * as core from "../../../../../../core";

export type Response = core.APIResponse<RivetApi.identity.WatchEventsOutput, RivetApi.identity.events.watch.Error>;
export type Error = RivetApi.identity.events.watch.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: RivetApi.identity.events.watch.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): RivetApi.identity.events.watch.Error._Unknown => {
    return {
      statusCode: undefined,
      content: fetcherError,
      _visit: function <_Result>(
        this: RivetApi.identity.events.watch.Error._Unknown,
        visitor: RivetApi.identity.events.watch.Error._Visitor<_Result>
      ) {
        return RivetApi.identity.events.watch.Error._visit(this, visitor);
      },
    };
  },

  _visit: <_Result>(
    value: RivetApi.identity.events.watch.Error,
    visitor: RivetApi.identity.events.watch.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;