chrome.runtime.onInstalled.addListener(() => {
  console.log('Ad Blocker Installed!');

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "ad",
          "resourceTypes": ["script", "image"]
        }
      },
      {
        "id": 2,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
          "urlFilter": "banner",
          "resourceTypes": ["script", "image"]
        }
      }
    ],
    removeRuleIds: [1, 2]
  });
});
