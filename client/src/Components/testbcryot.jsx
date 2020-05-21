import React, {useState} from 'react'
import bcrypt from 'bcryptjs'



export default () => {
    let [pass, changePass] = useState('')

    return(
        <div>
            <h2>{pass}</h2>
        </div>
    )
}