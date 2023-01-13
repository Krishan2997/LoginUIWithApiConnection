import { ToastAndroid } from 'react-native';

export function logoutCall(navigation) {
    ToastAndroid.show("trying to logout...", 10);
    var response = logout("logout", "POST");
    if (response != null) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
        })
    }
}

var baseurl = 'Host http will come here';

function logout(path, method) {
    return fetch(baseurl + path, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }).then((response) => response.text());
}