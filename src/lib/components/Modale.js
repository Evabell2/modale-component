import "./style/style"

function Modale(props) {
    const text = props.text || 'Employee Created !';
    if (props.display) {
      return (
        <div className="modale" >
          <div>
            <button onClick={props.setDisplayModale}>X</button>
            <p>{text}</p>
          </div>
        </div>
      )
    }
    return (<div></div>)
  }
  export default Modale;