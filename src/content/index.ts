console.log("YouTube Knowledge Manager loaded.");

function getVideoInfo() {
  const url = new URL(window.location.href);

  if (url.pathname !== "/watch") {
    return null;
  }

  const video = document.querySelector("video");

  const title =
    document.querySelector("h1.ytd-watch-metadata")?.textContent?.trim() ?? "";

  const channelName =
    document.querySelector("#owner #channel-name a")?.textContent?.trim() ?? "";

  const videoId = url.searchParams.get("v") ?? "";

  return {
    id: videoId,
    title,
    url: window.location.href,

    channelName,

    duration: video?.duration ?? 0,

    currentTime: video?.currentTime ?? 0,

    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  };
}

function logVideoInfo() {
  const video = getVideoInfo();

  if (!video) {
    return;
  }

  console.clear();
  console.log("📹 Current Video");
  console.table(video);
}

logVideoInfo();

const observer = new MutationObserver(() => {
  logVideoInfo();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
  if (message.type === "GET_CURRENT_VIDEO") {
    sendResponse(getVideoInfo());
  }

  return true; // Keep the message channel open for asynchronous response
});
