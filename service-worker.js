let text = "";
let vttAdded = false;
let m3u8Added = false;

chrome.webRequest.onCompleted.addListener(function(details) {
    if(details.url.includes('playlist.m3u8')) {
        // console.debug(details.url);
        if(!m3u8Added) {
            text = text + details.url + " ";
            m3u8Added = true;
        }
    }
    var extension = details.url.split('.').pop();
    if(extension === 'vtt') {
        // console.debug(details.url);
        if(!vttAdded) {
            text = text + details.url + " ";
            vttAdded = true;
        }
    }
    if(vttAdded && m3u8Added) {
        console.log("copied to clipboard");
        sendMessage(text);
    }
}, {
    urls: ["https://fau.tv/*", "https://stream.fau.tv/*", "https://vp-cdn-balance.rrze.uni-erlangen.de/*"]
});

const sendMessage = (message) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 
            {
                message: "copyText",
                textToCopy: message
            }, function(response) {})
    })
}