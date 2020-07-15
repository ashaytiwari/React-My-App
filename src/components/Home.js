import React, { Component } from 'react'


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
}
const TableBody = props => {
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)} className="delete-btn">Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

function Home(props) {
    const {characterData, removeCharacter} = props
    return (
        <div className="row home">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
                </table>
            </div>
            <div className="col-md-3"></div>
        </div>
    )
}

export default Home


