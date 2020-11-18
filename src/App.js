import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';


const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end library based on JavaScript created by Facebook.'
    },
    {
        title: 'Why use React?',
        content: 'React is very easy to use and very effective!'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating Components.'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        color: 'blue'
    }
]


function App() {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    label = "select a color"
                    options = {options}
                    selected = {selected}
                    onSelectedChange = {setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default App;
