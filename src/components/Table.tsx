
const Table = () => {
    return (
        <>
            <style jsx>{`
                table {
                    font-family: arial, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                }
                
                td, th {
                    border: 1px solid #dddddd;
                    text-align: left;
                    padding: 8px;
                }
                
                tr:nth-child(even) {
                    // background-color: #dddddd;
                }
            `}</style>
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contract</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>Contract</td>
                        <td>Country</td>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>Contract</td>
                        <td>Country</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;