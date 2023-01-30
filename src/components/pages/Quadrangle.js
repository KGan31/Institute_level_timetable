import React from "react";
//import { isHtmlElement } from "react-router-dom/dist/dom";
class DisplayTable extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.callAPI.bind(this);
    }

    callAPI(){
        fetch('http://localhost:8000/blogs').then((response)=>response.json()
        ).then((data)=>{console.log(data)
        this.setState({list:data})

    })
    }
    render(){
        const tb_data=this.state.list.map((blog)=>{
            return(
                <tr key={blog.id}>
                    <td>{blog.id}</td>
                    <td>{blog.author}</td>
                    <td>{blog.title}</td>
                    <td>{blog.body}</td>
                </tr>
            )
        })
        return(
            <div>
                <table>
                    <tbody>
                        {tb_data}
                    </tbody>

                </table>

            </div>
        )
    }
}

export default DisplayTable;