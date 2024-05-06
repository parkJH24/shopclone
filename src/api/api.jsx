import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL
};
console.log(firebaseConfig)
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

export { auth, database, signInWithPopup, signOut, onAuthStateChanged };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// // const database = getDatabase(app);

// // export default async (req, res) => {
// //     // 여기서 서버 사이드 로직을 구현
// //     res.status(200).json({ message: '서버 사이드 처리 예시!' });
// // };



// //구글 자동로그인 방지
// provider.setCustomParameters({
//     prompt: 'select_account'
// })
// //구글 로그인 function
// export async function googleLogin() {
//     try {
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
//         console.log(user)
//         return user;
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function googleLogOut() {
//     try {
//         await signOut(auth);// 기존의 정보들을 초기화하는 hook
//     } catch (error) {
//         console.error(error)
//     }
// }

// //로그인시 새로고침해도 로그인을 계속 유지
// export function onUserState(callback) {
//     onAuthStateChanged(auth, async (user) => {
//         if (user) {
//             try {
//                 // callback(user)
//                 const updateUser = await adminUser(user)
//                 callback(updateUser)
//             } catch (error) {
//                 console.error(error);
//             }
//         } else {
//             callback(null)
//         }
//     })
//     //onAuthStateChanged = 사용자 인증 상태에 변화를 체크하는 hook(로그인,로그아웃)
// }

