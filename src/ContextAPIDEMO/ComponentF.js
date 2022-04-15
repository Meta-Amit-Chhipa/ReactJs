import React from 'react'
import { UserConsumer } from './UseContext'

export class ComponentF extends React.Component {
    render() {
        return (
            <UserConsumer>
                {
                    (UserName) => {
                        return (
                            <div>
                                Hello {UserName}
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}