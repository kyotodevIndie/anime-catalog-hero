import React from 'react'

import Link from 'next/link'

import { Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export default function DropdownLink({children}) {
    const menu = ( 
        <Menu>
            <Menu.Item>
                <Link href="/">
                    <a>
                        Top Rated Anime
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/date">
                    <a>
                        Filtered By Date
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/popular">
                    <a>
                        Most Popular Anime
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/trending">
                    <a>
                        Trending Tops Animes
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <Row>
            <Col xs={{ span: 18, offset: 4  }} lg={{ span: 4, offset: 6}}  className="dropdown">
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        {children}<DownOutlined />
                    </a>
                </Dropdown>
            </Col>
        </Row>
    )
}
