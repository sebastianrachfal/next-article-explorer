const prod = process.env.NODE_ENV === 'production';

export default prod ? '' : 'http://localhost:3000/';
