chrome.runtime.onInstalled.addListener(() => {
  console.log("YouTube Knowledge Manager installed.");
});

chrome.sidePanel
  .setPanelBehavior({
    openPanelOnActionClick: true,
  })
  .catch(console.error);
