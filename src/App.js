import { Button, Form, InputGroup } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  function buttonClick () {
    const urlInput = document.getElementById('basic-url').value
    console.log('Input: ' + urlInput)

    const obj = {};

    const urlShortener = (urlInput = '') => {
      let urlOutput = 'short.ify/' + urlInput.replace(/[^a-z]/g, '').slice(-4);
      if (!obj[urlOutput]) {
        obj[urlOutput] = urlInput;
      };
      return urlOutput;
      }
      const urlRedirector = (urlOutput = '') => {
        return obj[urlOutput];
      };
      const short = urlShortener(urlInput);
      const original = urlRedirector(short);
      console.log(short);
      console.log(original);
    }



  return (
    <div className='App'>
      <Form data-bs-theme="dark">
        <Form.Label htmlFor="basic-url">Shorten your URLs by putting them in the input box below and clicking submit!</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        <Button variant='dark' onClick={buttonClick}>Shorten!</Button>
      </Form>
    </div>
  );
}

export default App;
