
import './input.sass';

const Input = ({type,value,placeholder,onChange}) => {

  return (
        <input type={type} value={value} placeholder={placeholder} 
        onChange={onChange ? (e) => onChange(e) : null} className="input"/>
  )
}

export default Input