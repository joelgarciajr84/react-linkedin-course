import React from 'react'
import {render} from 'react-dom'
import Library from './Components/Library'
import FavoriteColorForm from './Components/FavoriteColorForm'

const bookList = [
    {title:'a', author:'x', pages:10},
    {title:'b', author:'y', pages:20},
    {title:'c', author:'z', pages:30}
]

render(
    <div>
   <FavoriteColorForm/ >
    <Library books={bookList}/>
    </div>,
    document.getElementById('root')
)