import React, {useCallback, useState} from 'react';
import './App.css';
import ky from 'ky';
import {toUserDetailsModel, UserDetailsModel} from "./model/UserDetailsModel";

function App() {


    const [userDetails, setUserDetails] = useState<UserDetailsModel | null>(null);

    const callApi = useCallback(async () => {
        await ky.get('https://randomuser.me/api/')
            .json<any>()
            .then<any>(response => response.results[0])
            .then<UserDetailsModel>(result => toUserDetailsModel(result))
            .then(model => setUserDetails(model));
    }, []);

    return (
            <div className="App">
                <div>Name: {userDetails?.name}</div>
                <div>Address: {userDetails?.address}</div>
                <button onClick={callApi}>Generate random data</button>
            </div>
    );
}

export default App;
