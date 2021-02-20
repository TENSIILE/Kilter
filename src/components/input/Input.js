import './Input.scss'

export const Input = ({ placeholder }) => (
    <input type="text" className='input-kilter' placeholder={placeholder}/>
)

Input.Textarea = ({ placeholder }) => (
    <textarea className='input-kilter textarea' placeholder={placeholder}></textarea>
)