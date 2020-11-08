import * as React from 'react'
import './toggle.scss'

const Toggle = ({ title, id }) => {
  const [toggled, setToggled] = React.useState(false)

  return (
    <section className="wrapper" title="title">
      <input id={id} name="name" checked={toggled} className="toggle" type="checkbox"
             onClick={() => setToggled(!toggled)} />
      <label htmlFor={id} className="toggler" />
      <span className="title" onClick={() => setToggled(!toggled)}>{title}</span>
    </section>
  )
}

export default Toggle