const BASE_URL = "http://3.17.14.213:3000";

function patchData(url, data = {}) {
    //console.log(JSON.stringify(data));
    console.log('patching', data);
    return fetch(BASE_URL + '/' + url, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

function updateStateFromAPI(thisRef){
    fetch(BASE_URL + '/' + thisRef.props.apiKey, {
        cache: "no-cache",
    })
        .then(response => response.json())
        .then(data => {
            console.log('got', data[0]);
            thisRef.setState({ ...data[0] })
        });
}

export {
    BASE_URL,
    patchData,
    updateStateFromAPI
}