// render chat templates to the DOM
// clear list of chats when we switch rooms

class ChatUI {
    constructor(list){
        this.list = list;
    }
    clear() {
        this.list.innerHTML = "";
    }
    render(data) {
        // const when = dateFns.distanceInWordsToNow(
        //     data.created_at.toDate(),
        //     { addSuffix:true }
        // )
        const when = data.created_at.toDate();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute:"numeric" };

        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when.toLocaleDateString("en-US", options)}</div>
            </li>
        `;

        this.list.innerHTML += html;
    }
}