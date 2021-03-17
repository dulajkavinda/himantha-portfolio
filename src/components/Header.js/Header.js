import React from 'react'
import Image from './Image';
import Text from './Text'
import Button from './Button'

export default function Header() {
    return (
        <div>
        <div class="container">
        <div class="row" style={{marginTop: "2rem"}}>
            <div class="col-3">
            <Image/>
            </div>
            <div class="col-7">
            <Text/>
            </div>
            <div class="col-2">
            <Button/>
            </div>
        </div>
        </div>
        </div>
    )
}
