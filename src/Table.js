import React from 'react' ;

const Table = () => {
    return(
        <div>
            <h1>Table component</h1>
            <p>A list of supported language codes can be found here for your reference:</p>
            <table>
                <tbody>
                <tr>
                    <th>Language Code</th>
                    <th>Language </th>
                 </tr>
                <tr>
                    <td>en_US</td>
                    <td>English (US)</td>
                </tr>
                <tr>
                    <td>hi</td>
                    <td>Hindi (India)</td>
                </tr>
                <tr>
                    <td>es</td>
                    <td>Spanish</td>
                </tr>
                <tr>
                    <td>es</td>
                    <td>French</td>
                </tr>
                <tr>
                    <td>ja</td>
                    <td>Japanese</td>
                </tr>
                <tr>
                    <td>ru</td>
                    <td>Russian</td>
                </tr>
                <tr>
                    <td>en_GB</td>
                    <td>English (UK)</td>
                </tr>
                <tr>
                    <td>de</td>
                    <td>German</td>
                </tr>
                <tr>
                    <td>it</td>
                    <td>Italian</td>
                </tr>
                <tr>
                    <td>ko</td>
                    <td>Korean</td>
                </tr>
                <tr>
                    <td>pt-BR</td>
                    <td>Brazilian Portugese</td>
                </tr>
                <tr>
                    <td>ar</td>
                    <td>Arabic</td>
                </tr>
                <tr>
                    <td>tr</td>
                    <td>Turkish</td>
                </tr>
                </tbody>
            </table> 
        </div>
    )
}

export default Table ;