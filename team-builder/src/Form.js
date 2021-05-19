import React, { lazy } from 'react'

export default function Teammembers(props) {
    const { values, update, submit } = props
    function onChange(event) {
        const { name, value } = event.target

    }
    function onSubmit(event) {
        event.preventDefault()
    }
    return (
        <form onSubmit={onSubmit}>
            <label>
                Name
            <input>
                    type='text'
                    name='username'
              onChange={onChange}
              value={values.Name}
                </input>
            </label>
            <label>
                Email
            <input
                    type='text'
                    name='username'
                    onChange={onChange}
                    value={values.Email} />
            </label>
            <label>
                Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value='boss'>boss</option>
                    <option value='omicoder'>omicoder</option>
                    <option value='coder'>coder</option>
                </select>
            </label>
        </form>
    )


}