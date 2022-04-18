import React from 'react'

function ErrorDemo({ Name }) {
    if (Name === "Abhay") {
        throw new Error("Name does Not Exist")
    }
    return (
        <div>
            {Name}
        </div>
    )
}

export default ErrorDemo;