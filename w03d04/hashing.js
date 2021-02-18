const bcrypt = require('bcryptjs');

const plaintext = '1234';

// bcrypt.genSalt(10, (err, salt) => {
  // console.log(salt);
  bcrypt.hash(plaintext, 10, (err, hash) => {
    console.log(hash);
  });
// });

const hash = '$2a$10$.ozPVgbWRoky61mytaEV1eIdBw8VC0Ivls6b2JSMYEXfp4yLFj/tu';

bcrypt.compare('1234', hash, (err, res) => {
  // console.log(res);
});

bcrypt.compare('1234', hash)
  .then((res) => {
    // console.log('promise result', res);
  });




  //
