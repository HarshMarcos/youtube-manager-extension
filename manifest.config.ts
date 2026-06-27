import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,

  name: "YouTube Knowledge Manager",
  short_name: "YKM",
  version: "0.0.1",

  description: "Take timestamped notes while watching YouTube.",

  permissions: ["storage", "tabs", "activeTab", "scripting", "sidePanel"],

  host_permissions: ["https://*.youtube.com/*"],

  action: {
    default_popup: "popup.html",
    default_title: "YouTube Knowledge Manager",
  },

  side_panel: {
    default_path: "sidepanel.html",
  },

  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },

  content_scripts: [
    {
      matches: ["https://*.youtube.com/*"],
      js: ["src/content/index.ts"],
    },
  ],

  // icons: {
  //   "16": "icons/icon16.png",
  //   "32": "icons/icon32.png",
  //   "48": "icons/icon48.png",
  //   "128": "icons/icon128.png",
  // },
});
