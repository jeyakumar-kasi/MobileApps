import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Menu} from 'antd';
import { AppstoreOutlined, UserOutlined, UserAddOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import firebase from 'firebase/compat/app';
import {useDispatch, useSelector} from 'react-redux';


const {subMenu} = Menu;

const Header = () => {
    const [current, setCurrent] = useState('home'); // default menu item
    // Get the user logged info. from the state
    let {user} = useSelector((state) => ({...state})); // Pass function as argument for "useSelector" method. Use "..." to destruct the object/array.


    let dispatch = useDispatch();
    let navigate = useNavigate();

    const handleClick = (e) => {
        console.log(e.key);
        setCurrent(e.key);
    }

    const handleLogout = (e) => {
        // Signout from firebase
        firebase.auth().signOut();

        // Clear the payload user state.
        dispatch({
            type: 'LOGOUT',
            payload: null
        });

        // Redirect to Login Page
        navigate('/login');
        return false;
    }

    // Menu items
    const items = [
        {
            label: (
                <Link to="/">Home</Link>
            ),
            key: 'home',
            icon: <AppstoreOutlined />,
        },
        /*{
            label: 'Settings',
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                },
                {
                    label: 'Logout',
                    key: '',
                    icon: <UserOutlined />
                },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                {
                    label: 'Option 3',
                    key: 'setting:3',
                },
                {
                    label: 'Option 4',  
                    key: 'setting:4',
                },
                ],
            },
            ],
        },*/
    ];

    if(user) {
        items.push(
        {
            label: user.email ? user.email.split('@')[0].toUpperCase() : '',
            icon: <UserOutlined />,
            key: 'profile',
            style: {marginLeft: 'auto'},
            children: [
                {
                    label: 'Settings',
                    key: 'settings',
                    icon: <SettingOutlined />
                },
                {
                    label: 'Logout',
                    icon: <LogoutOutlined />,
                    onClick: handleLogout
                }
            ]
        }); // push
    } else {

        items.push({
            label: (
                <Link to="/register">Register</Link>
            ),
                key: 'register',
                icon: <UserAddOutlined />,
                style: { marginLeft: 'auto' }
            },
            {
                label: (
                    <Link to="/login">Login</Link>
                ),
                key: 'login',
                icon: <UserOutlined />
            }
        ); // push
    }



    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
}

export default Header;