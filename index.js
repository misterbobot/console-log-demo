const MB = 1_000_000;
let messagesCount = 0;
const messagesCounter = document.getElementById("msg-count");

const updateMessaggeInfo = () => {
    messagesCounter.innerText = messagesCount.toString();
}

const addMessage = () => {
    messagesCount++;
    console.log({ messagesCount, heavyObj: 'X'.repeat(2000 * MB) });
    updateMessaggeInfo();
    setTimeout(() => {
        addMessage()
    }, 1000); 
}
addMessage();