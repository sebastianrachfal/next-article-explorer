const hostname = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_HOSTNAME : 'http://localhost:3000/';
export default hostname;
