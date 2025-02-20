import type { Plugin } from "@elizaos/core";
import { getLatestPostAction } from "./actions/getLatestPost";
import { instagramProvider } from "./providers/instagramProvider";

const instagramPlugin: Plugin = {
  name: "instagram",
  description: "Plugin for Instagram integration",
  actions: [getLatestPostAction],
  providers: [instagramProvider],
};

export default instagramPlugin;
