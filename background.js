chrome.runtime.onInstalled.addListener(()=>{
    chroe.storage.sync.get(["geminiApiKey"],(result)=>{
        if(!result.geminiApiKey){
            chrome.tabs.create({url: "options.html"});
            
        }
    })
})