import React from 'react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link'

export default function DropdownLink({children}) {
    const menu = ( 
        <Menu>
        <Menu.Item>
        <Link href="/">
            <a>
                Popularidade
            </a>
        </Link>
        </Menu.Item>
        <Menu.Item>
        <Link href="/classificacaomedia">
            <a>
                Classificação Média
            </a>
        </Link>
        </Menu.Item>
        <Menu.Item>
        <Link href="/data">
            <a>
                Data
            </a>
        </Link>
        </Menu.Item>
    </Menu>);
    return (
        <div>

        <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {children}<DownOutlined />
            </a>
        </Dropdown>
        </div>
    )
}
