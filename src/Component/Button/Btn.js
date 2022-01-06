import "./Btn.css"

const RegisterBtn = ({ name, className }) => {
    return (
        <div>
            < button className={className} >{name}</button>
        </div>
    )
}

export default RegisterBtn;