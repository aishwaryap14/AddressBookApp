
function makeServiceCall(methodType, url, async, data = null) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            console.log(methodType + " State changed called at:" + showTime() + " Ready state: " + xhr.readyState + " Status " + xhr.status);
            if (xhr.readyState >= 0 && xhr.status == 200) {
                if (xhr.status === 200 || xhr.status === 201) {
                    let responseString = JSON.stringify(xhr.responseText);
                    setTimeout(() => {
                        resolve(xhr.responseText);
                    }, 500);
                    // resolve(xhr.responseText);
                    console.log("responseText uitility: ",xhr.responseText);
                } else if (xhr.status >= 400) {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                    console.log("Handled 400 client error or 500 server error at:" + showTime());
                }
            }
        }
        xhr.onerror = function() {
            reject({
                status: xhr.status,
                statusText: xhttp.statusText
            });
        };

        xhr.open(methodType, url, async);
        if (data != null) {
        let userId = getUserId();
        let token = getToken();
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader('token', token);
        xhr.setRequestHeader('userId', userId);
        console.log("user id: " + userId + " Token: " + token);
        console.log("json data:", JSON.stringify(data));
        let responseData = JSON.stringify(data);
        xhr.send(responseData);
        } else {
        let userId = getUserId();
        let token = getToken();
        // let authorization = JSON.parse(respHeader);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader('token', token);
        xhr.setRequestHeader('userId', userId);
        console.log("user id: " + userId + "Token: " + token);
        xhr.send();}
        console.log(methodType + " Request sent to the server at: " + showTime());
    });
}

function showTime() {
    const date = new Date();
    return date.getHours() + "Hr " + date.getMinutes() + "Min " + date.getSeconds() + "Sec";
}

function getUserId() {
    console.log("from get localStorage: ",localStorage.getItem('userId'));
    return localStorage.getItem('userId');
}

function getToken() {
    console.log("from get localStorage: ",localStorage.getItem('token'));
    return localStorage.getItem('token');
}