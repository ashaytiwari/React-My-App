import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
                <th> </th>
            </tr>
        </thead>
    )
}
const TableBody = props => {
    const rows = props.charactersData.map((row,index) => {
        return (
            <tr key={index}>
               <td>{row.name}</td>
               <td>{row.age}</td>
               <td>{row.job}</td>
               <td>
                   <button onClick={() => props.removeCharacters(index)} className='delete'>Delete</button>
               </td>
            </tr>
            )
    })
return <tbody>{rows}</tbody>
}
class Table extends React.Component {
    render() {
        const{ charactersData, removeCharacters} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacters={removeCharacters}/>
            </table>
        )
    }
}
export default Table
