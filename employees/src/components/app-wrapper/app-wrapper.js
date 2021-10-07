import React from "react"
import { useSelector } from "react-redux"


export const AppWrapper = ({children}) => {
    const persons = useSelector((state) => state.persons.persons)

    return (
        <div>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { persons })
            )}
        </div>
    )
}