
import './button.sass';

const Button = ({children,className,onClick}) => {
    return (
        <button className={`btn ${className}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </button>
    )
}

export const OutlineButton = ({className,children,onClick}) => {
    return(
        <Button className={`btn-outline ${className}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </Button>
    )
}

export default Button;