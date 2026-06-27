import { chromeClient } from "@/services/chrome/chrome.client";
import type { CurrentVideo } from "../types/currentVideo.types";

export class CurrentVideoService {
  async getCurrentVideo(): Promise<CurrentVideo | null> {
    const tab = await chromeClient.getActiveTab();

    if (!tab?.id) {
      return null;
    }

    const video = await chromeClient.sendMessage<CurrentVideo | null>(tab.id, {
      type: "GET_CURRENT_VIDEO",
    });

    return video;
  }
}

export const currentVideoService = new CurrentVideoService();
