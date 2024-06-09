// // pages/api/detect-device.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import MobileDetect from 'mobile-detect';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const userAgent = req.headers['user-agent'] || '';
//   const md = new MobileDetect(userAgent);

//   const isMobile = !!md.mobile();
//   const isTablet = !!md.tablet();

//   res.status(200).json({ isMobile, isTablet });
// }
