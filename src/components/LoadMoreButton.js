import React from 'react'
import { Button } from 'antd';

export default function LoadMoreButton({onClick}) {


    return (
        <div
            style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
            }}
        >
            <Button>Carregar Mais...</Button>
      </div>
    )
}
