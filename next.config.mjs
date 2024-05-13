/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'firebasestorage.googleapis.com',
                port : '',
                pathname : '/v0/b/test-42761.appspot.com/o/**',
            }
        ]
    },

    // async redirects() {
    //     return [
    //         {
    //             source: '/product/detail/:id/page',  // 이 예시는 임시로 작성된 것입니다.
    //             destination: '/product/detail/:id', // 실제 필요에 맞게 조정해야 합니다.
    //             permanent: true,
    //         }
    //     ]
    // }
};



export default nextConfig;
