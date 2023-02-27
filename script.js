const typeEle = document.getElementById("type");
const participantsEle = document.getElementById("participants");
const priceEle = document.getElementById("price");
const linkEle = document.getElementById("link");
const activityName = document.getElementById("activity");


function getAnActivity(){
    activityName.innerHTML = "";
    typeEle.innerHTML = "";
    participantsEle.innerHTML = "";
    priceEle.innerHTML = "";
    linkEle.innerHTML = "";

    fetch("https://www.boredapi.com/api/activity")
        .then(async (res) => {
            const data = await res.json();
            activityName.innerHTML = data['activity']
            typeEle.innerHTML = `<div id="type">
                                    <img src="https://cdn-icons-png.flaticon.com/512/7991/7991247.png" width="25px" height="27px"/>
                                    Type: ${data.type}
                                </div>`;
            participantsEle.innerHTML = `<div id="participants">
                                            <img src="https://cdn-icons-png.flaticon.com/512/8484/8484060.png" width="25px" height="27px"/>
                                            Participant: ${data.participants}
                                        </div>`; 
            priceEle.innerHTML =`<div id="price">
                                    <img src="https://img.icons8.com/fluency/256/cheap-2.png" width="25px" height="27px"/>
                                    Price: ${data.price}
                                </div>`; 
            linkEle.innerHTML = `<div id="link">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2985/2985013.png" width="25px" height="27px"/>
                                    Link: ${data.link}
                                </div>`;
            console.log('activity: ', res);
        }).catch((err) => {
            console.log(err);
        })
}

