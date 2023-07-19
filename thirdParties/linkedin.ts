import axios from 'axios';
import { config } from 'dotenv';

config();

interface IData {
  [key: string]: any;
}

export async function scrapeLinkedinProfile(linkedinProfileUrl: string): Promise<IData> {
  const apiEndpoint: string = 'https://nubela.co/proxycurl/api/v2/linkedin';
  const headers = {
    'Authorization': `Bearer ${process.env.PROXY_CURL_API_KEY}`
  };

  const response = await axios.get(apiEndpoint, {
    params: { url: linkedinProfileUrl },
    headers: headers
  });

  let data: IData = response.data;

  data = Object.entries(data)
               .filter(([key, value]) =>
                 (Array.isArray(value) ? value.length !== 0 : value !== '' && value !== null)
                 && key !== 'people_also_viewed'
                 && key !== 'certifications'
               )
               .reduce((obj, [key, value]) => Object.assign(obj, { [key]: value }), {});

  if (data.groups) {
    for (let groupDict of data.groups) {
      delete groupDict.profile_pic_url;
    }
  }

  return data;
}
