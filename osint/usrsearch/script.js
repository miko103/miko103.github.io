const button = document.getElementById("submit")

const linkList = [
    "https://www.youtube.com/@",
    "https://www.instagram.com/",
    "https://www.snapchat.com/add/",
    "https://www.reddit.com/user/",
    "https://www.pinterest.co.uk/",
    "https://twitter.com/",
    "https://www.twitch.tv/",
];

function main(){
    let username = document.getElementById("usernamefield").value;
    console.log(username);
    let i = 1;
    while (i < linkList.length){
        linkList[i].replace("test",username);
        //let result_section = document.getElementById("results")
        let b = document.createElement('button');
        b.setAttribute("onclick", openTab(linkList[i].concat(username)));
        b.setAttribute("text", "button")
        document.body.appendChild(b);
        i++;
    }
}

function openTab(linklistItem) {
    window.open(linklistItem, "_blank");
    }