import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Mybag from './mybag';
import { Button, Modal } from 'antd';

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useNavigate } from 'react-router-dom'

const Model = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [disable, setdisabled] = useState(false)

    const Navigate = useNavigate();
    function testfun() {
        Navigate('/webbag')
    }
    const showModal = () => {
        setdisabled(true)
        setIsModalVisible(true);
    };

    const handleOk = () => {
        testfun()
        setdisabled(false)
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setdisabled(false)
        setIsModalVisible(false);
    };

    return (
        <>
            {
                disable ?
                    <Modal title="Cart Items" okText='View Bag' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <Mybag />
                    </Modal> :

                    <Button type="secondary" sx={{ backgeoundColor: 'rgb(240, 240, 240)' }} onClick={showModal}>
                        <LocalGroceryStoreOutlinedIcon />
                    </Button>
            }

        </>
    );
};

export default Model;