console.log("SOURCE JS LOADED");

(function(){

console.log("UptoLink Bypass running...");

const host = location.hostname;

function autoClick(){

    const interval = setInterval(() => {

        const btn = document.querySelector("button, a[href]");

        if(btn){
            btn.click();
            console.log("Clicked button");
            clearInterval(interval);
        }

    }, 1500);

}

if(host.includes("open82.net")){
    autoClick();
}

if(host.includes("scutt.uk.com")){
    autoClick();
}

})();
