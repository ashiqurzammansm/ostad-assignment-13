export default function handler(req, res) {
    const data = {
      message: 'Welcome to our API!',
      version: '1.0'
    };
  
    res.json(data);
  }
  