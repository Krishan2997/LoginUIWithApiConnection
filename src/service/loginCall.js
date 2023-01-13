import { ToastAndroid } from 'react-native';

export function loginCall(email, password, navigation) {
    console.log("doing login...");
    console.log("user i got" + email + " " + password);
    console.log(JSON.stringify(getJson(email, password)));
    ToastAndroid.show("hello from login button", 1000);
    var response = callApi('login', 'POST', getJson(email, password));
    response.then((response) => {
        ToastAndroid.show("got responce from api", 10);
        ToastAndroid.show(response, 10);
        console.log(response);
        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        })
    }).catch((error) => {
        ToastAndroid.show("facedSomeerror!!");
        console.error(error);
    });
}

var baseurl = 'Host http will come here';

function callApi(path, method, jsonBody) {
    return fetch(baseurl + path, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonBody)
    }).then((response) => response.text());
}

function getJson(userId, password) {
    return {
        userId: userId,
        password: password
    }
}
