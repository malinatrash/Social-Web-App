import React, {FC} from 'react';
import classes from './navbar.module.css'
import {Avatar, Button, Tooltip} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {IUser} from "../../model/IUser";

interface NavbarProps {
    user: IUser
}

const Navbar: FC<NavbarProps> = ({user}) => {
    return (
        <div className={classes.navbar}>
            <Tooltip title="Нажмите, чтобы перейти в свой профиль" placement="right" className="avatar-wrapper">
                <Avatar className={classes.avatar} size={100}
                        src={user.image}
                        icon={<UserOutlined/>}
                />
                <span className={classes.username} >{user.username}</span>
            </Tooltip>
            <Button size='large' className={classes.toListButton}>К списку</Button>
        </div>
    );
};

export default Navbar;
