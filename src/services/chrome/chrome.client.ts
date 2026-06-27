export class ChromeClient {
  async getActiveTab() {
    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });

      return tab;
    } catch (error) {
      console.error("Failed to get active tab:", error);
      return null;
    }
  }

  async sendMessage<TResponse>(
    tabId: number,
    message: unknown,
  ): Promise<TResponse | null> {
    try {
      return await chrome.tabs.sendMessage(tabId, message);
    } catch (error) {
      console.warn("Content script is not available:", error);

      return null;
    }
  }
}

export const chromeClient = new ChromeClient();
