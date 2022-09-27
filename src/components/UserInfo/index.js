import React from "react";
import {useParams} from "react-router-dom";
import {useUserInfoQuery} from "../../store/users/users.api";

import s from "./UserInfo.module.css";

const UserInfo = () => {
    const {uuid} = useParams()
    const {data: user, isLoading} = useUserInfoQuery(uuid);

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!user?.results) {
        return <div>No posts :(</div>;
    }

    return (
        <>
            {user?.results.map(({login, name, phone, picture}) => (
                <div key={login.uuid} className={s.card}>
                    <img src={picture.large} alt={name.first}/>
                    <h1 className={s.title}>{name.first}</h1>
                    <p>{phone}</p>
                </div>
            ))}
        </>
    )
}

export default UserInfo;
