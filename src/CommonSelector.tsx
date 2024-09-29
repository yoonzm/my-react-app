import {Select} from "antd";
import * as React from "react";
import {SelectProps} from "antd/es/select";
import {debounce} from 'lodash' // TODO 按需处理

type Props = SelectProps & {

}

// TODO 数据为空
// TODO 数据量大
// TODO?

export function CommonSelector(props: Props) {
    // 防抖处理
    const onSearch = debounce((v) => {
        console.log('onSearch', v)
        props.onSearch?.(v);
    }, 500, {
        maxWait: 1000,
        leading: false
    })

    console.log('props', props)

    return (
        <Select onSearch={onSearch} {...props}/>
    )
}
