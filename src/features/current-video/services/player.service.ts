import { chromeClient } from "@/services/chrome/chrome.client";

export class PlayerService {
  async getCurrentTime(): Promise<number> {
    const tab = await chromeClient.getActiveTab();

    if (!tab?.id) {
      return 0;
    }

    const currentTime = await chromeClient.sendMessage<number>(tab.id, {
      type: "GET_CURRENT_TIME",
    });
    return currentTime ?? 0;
  }

  async seekTo(seconds: number): Promise<boolean> {
    const tab = await chromeClient.getActiveTab();

    if (!tab?.id) {
      return false;
    }

    const result = await chromeClient.sendMessage<boolean>(tab.id, {
      type: "SEEK_TO_TIME",
      payload: seconds,
    });

    return result ?? false;
  }
}

export const playerService = new PlayerService();
