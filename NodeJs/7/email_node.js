const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
	  user: 'youremail@gmail.com',
	  pass: 'xxxx'
	}
  });

  var mailOptions = {
	from: 'youremail@gmail.com',
	to: 'destination1@hotmail.com, destination1@ngi.com.br',
	subject: 'Sending Email using Node.js',
	text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
	if (error) {
	  console.log(error);
	} else {
	  console.log('Email sent: ' + info.response);
	}
  });