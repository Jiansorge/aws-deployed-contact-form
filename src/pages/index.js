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
const errorStyles = {
  color: 'red',
}
const messageStyles = {
  margin: '20px 0',
}
const buttonStyles = {
  width: '2rem',
  alignSelf: 'center',
  padding: '3px 45px',
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
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
            autoFocus
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
