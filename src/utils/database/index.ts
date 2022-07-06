import { connect } from 'mongoose';

const URL = `${process.env.DBURL}-${process.env.NODE_ENV}`;

const MongoDB = async () => {
  connect(URL, () => {
    console.log('DB Connected');
  });
};

MongoDB();
