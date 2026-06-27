console.log("YouTube Knowledge Manager loaded.");

function getVideoInfo() {
  const url = new URL(window.location.href);

  if (url.pathname !== "/watch") return null;

  const title =
    document.querySelector("h1.ytd-watch-metadata")?.textContent?.trim() ?? "";

  const videoId = url.searchParams.get("v");

  return {
    videoId,
    title,
    url: window.location.href,
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
