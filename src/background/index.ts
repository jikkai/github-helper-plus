chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading') {
    if (/github\.com/.test(tab.url)) {
      chrome.tabs.executeScript(tabId, { file : './app/app.js' })
    }
  }
})
