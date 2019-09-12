import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import Hiring from './Hiring'
import NotHiring from './NotHiring'

class Library extends Component{
    static defaultProps = {
        books:[
            {title:'a', author:'x', pages:10}
        ]
    }
    state = { open : false, freeBookmark: true, hiring: true, data:[], loading:false }

    toogleOpenClosed = () =>{
        this.setState(prevState =>({
            open: !prevState.open
        }))
    }
    componentDidMount(){
       this.setState({
           loading:true
       })
       fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
       .then(data => data.json())
       .then(data => this.setState({data:data, loading:false}))
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    toogleHiring = () =>{
        this.setState(prevState =>({
            hiring: !prevState.hiring
        }))
    }

    render(){
        const { books } = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring/> : <NotHiring/>}
                { this.state.loading
                    ? "Loading ..."
                    : <div>
                        {this.state.data.map(product =>{
                            return (
                                <div key={product.id}>
                                    <h3>Library Product of the Week</h3>
                                    <h4>{product.name}</h4>                                    
                                    <img alt={product.name} src={product.image} height={100} />
                                </div>
                            )
                        })}
                    </div>

                }
                <h1>The Library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toogleOpenClosed}>Close Open Library</button>
                <br/>
                <br/>
                <button onClick={this.toogleHiring}>Hiring/Not Hiring</button>
                {books.map(
                    (book ,i) => 
                    <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}
                        />
                    
                )}
            </div>
        )
    }
   
}

Library.propTypes = {
    books: PropTypes.array
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    freeBookmark: PropTypes.bool

}
