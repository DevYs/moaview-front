class ContentsListRequest {
    request(param, callback) {
        fetch("https://devys.kro.kr:8082/contents/list", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(param), // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(response => JSON.stringify(response))
        .then(json => callback(json, param))
        .catch(error => console.error('Error:', error))
        ; 

    } 
}

export default ContentsListRequest;