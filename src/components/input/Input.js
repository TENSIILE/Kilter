import './Input.scss'

export const Input = ({ placeholder, name, value, onChange }) => (
  <input
    type='text'
    className='input-kilter'
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
)

Input.Textarea = ({ placeholder, name, value, onChange }) => (
  <textarea
    className='input-kilter textarea'
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
  />
)
