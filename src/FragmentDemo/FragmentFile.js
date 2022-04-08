import React from 'react';
import Column from './Column';

function FragmentFile(props) {
    return (
        // React frogment
       <>
         <table>
            <tbody>
                <tr>
                    <Column/>
                </tr>
            </tbody>
        </table>
       </>
    );
}

export default FragmentFile;