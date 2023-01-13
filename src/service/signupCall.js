import { ToastAndroid } from 'react-native';

export default function signupCall(json, navigation) {
    console.log(JSON.stringify(json))
    var response = callApi("signup", "POST", json);
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
