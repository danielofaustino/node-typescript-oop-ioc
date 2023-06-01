import app from './app';
import { SERVER_PORT } from './config';

app.listen(SERVER_PORT, () => {
  console.log(`Server Running at port: ${SERVER_PORT} 🚀`);
});

