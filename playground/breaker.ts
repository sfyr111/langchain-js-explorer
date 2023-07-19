import { scrapeLinkedinProfile } from '../thirdParties/linkedin'

scrapeLinkedinProfile("https://www.linkedin.com/in/harrison-chase-961287118")
.then(data => console.log(data))
.catch(err => console.log(err.message))
