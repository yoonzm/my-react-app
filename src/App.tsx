import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CommonSelector} from "./common-selector";
import {api, User} from "./api";
import {DefaultOptionType} from "rc-select/lib/Select";

function App() {
    const [options, setOptions] = React.useState<DefaultOptionType[]>([]);
    const [keyword, setKeyword] = React.useState('');
    const [selected, setSelected] = React.useState<DefaultOptionType>();

    React.useEffect(() => {
        api.getUsers(keyword).then((users) => {
            setOptions(users.map((user: User) => ({
                value: user.name,
                label: user.name,
            })));
        });
    }, [keyword]);

    console.log('keyword', keyword);
    console.log('options', options);

    return (
        <div className="App">
            <CommonSelector
                style={{
                    width: '300px',
                }}
                showSearch
                placeholder='Search'
                value={selected}
                onSearch={(keyword) => setKeyword(keyword)}
                onChange={(v) => setSelected(v)}
                options={options}
            />
        </div>
    );
}

export default App;
