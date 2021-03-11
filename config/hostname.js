const prod = process.env.NODE_ENV === 'production';

export default prod ? process.env.HOSTNAME : 'http://localhost:3000';
