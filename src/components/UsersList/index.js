import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUserListQuery} from "../../store/users/users.api";

import s from "./UsersManager.module.css";

const UsersList = () => {
    const [page, setPage] = useState(1);
    const {data: users, isLoading} = useUserListQuery(page);
    const navigate = useNavigate()

    const goRouteId = (id) => {
        navigate(id)
    }

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!users?.results) {
        return <div>No posts :(</div>;
    }

    return (
        <div>
            <table className={s.customers}>
                <thead>
                <tr>
                    <th>name</th>
                    <th>phone</th>
                    <th>email</th>
                    <th>picture</th>
                </tr>
                </thead>
                <tbody>
                {users.results.map(({login, email, name, phone, picture}) => (
                    <tr key={login.uuid} onClick={() => goRouteId(login.uuid)}>

                        <td>{name.first} {name.last}</td>
                        <td>{phone}</td>
                        <td>{email}</td>
                        <td><img src={picture.thumbnail} alt={name.first}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setPage(page - 1)}>
                Previous
            </button>
            <button
                onClick={() => setPage(page + 1)}
            >
                Next
            </button>
        </div>
    );
};


export default UsersList;
