import * as React from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const colors ={
  primary: 'rgb(49, 66, 167)'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: colors.primary,
}
const formStyles= {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
const paragraphStyles = {
  marginBottom: 48,
}
const messageStyles = {
  margin: '20px 0',
}
const buttonStyles = {
  width: '2rem',
  alignSelf: 'center',
  padding: '3px 45px',
}

const IndexPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({});

  const validateInputs = () => {
    setIsError(false)
    setErrorMessage({})
    if (name.length <1) {
      setIsError(true)
      setErrorMessage({name:"Please enter a name."})
    }
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (!emailRegex.test(email)){
      setIsError(true)
      setErrorMessage(prevState=>({...prevState, email:"Please enter a valid email."}))
    }
    if (message.length < 2) {
      setIsError(true)
      setErrorMessage(prevState=>({...prevState, message:"Please enter a message."}))
    }
    if (isError){
      return false
    }
    else {
      return true
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs()
  }
  console.log('errorMessage', errorMessage)
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        UI Recruitment Test
        <br />
        <span style={headingAccentStyles}>MK Decision</span>
      </h1>
      <p style={paragraphStyles}>
        Feel free to drop us a message. We'd love to hear from you! 
      </p>
      <form className='' 
        style={formStyles} 
        onSubmit={(e) => handleSubmit(e)}
        noValidate autoComplete="off">
        <TextField
            id="name"
            name='name-text-field'
            label="Name"
            placeholder="Enter name..."
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            error={!!errorMessage.name}
            helperText={
              errorMessage.name && errorMessage.name
            }
          />
          <TextField
            id="email"
            label="Email"
            placeholder="Enter email..."
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type='email'
            required
            error={!!errorMessage.email}
            helperText={
              errorMessage.email && errorMessage.email
            }
          />
          <TextField
            id="message"
            name="message-text-field"
            label="Message"
            placeholder="Leave us a message!"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={message}
            style={messageStyles}
            onChange={e=>setMessage(e.target.value)}
            required
            error={!!errorMessage.message}
            helperText={
              errorMessage.message && errorMessage.message
            }
          />
          <Button
            variant="contained"
            type='submit'
            color='primary'

            style={buttonStyles}
          >
            Submit
          </Button> 
       </form>
    </main>
  )
}

export default IndexPage
