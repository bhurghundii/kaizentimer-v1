/** @type {import('next').NextConfig} */
const nextConfig = {//avoiding CORS error, more here: https://vercel.com/support/articles/how-to-enable-cors

    env: {
      s3AlarmMp3Url: 'https://kaizentimer-assets.s3.amazonaws.com/alarm.mp3'
    },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, Access-Control-Allow-Origin, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
    },}

module.exports = nextConfig
