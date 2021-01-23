import React from 'react'
import { Drawer } from 'antd'

export default function catalog () {
  const [visible, setvisible] = React.useState(false)

  function showDrawer () {
    setvisible(true)
  };

  function onClose () {
    setvisible(false)
  };

  return (
        <>
    <a onClick={this.showDrawer} key={`a-${item.id}`}>
        link Drawer
    </a>

            <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
            User Profile
          </p>
        </Drawer>
        </>
  )
}
