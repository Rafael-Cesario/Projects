import 'dotenv/config';
import { connect } from 'mongoose';

const URI = `${process.env.DBURL}-${process.env.NODE_ENV?.trim()}`;

const MongoDB = () => {
  connect(URI, () => {
    console.log(`\nDB Connected on ${process.env.NODE_ENV?.trim()} enviroment`);
  });
};

MongoDB();
