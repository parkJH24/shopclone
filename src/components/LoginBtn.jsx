// components/LoginButton.js
import { useState } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from '../api/api';

export default function LoginButton() {
    const [user, setUser] = useState(null);

    // 사용자 로그인 상태 변경 시 실행될 함수
    const handleAuthStateChanged = async (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    };

    // 컴포넌트가 마운트될 때 사용자 로그인 상태 변경을 감지하기 위한 이벤트 핸들러 등록
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(handleAuthStateChanged);

        // 컴포넌트가 언마운트될 때 등록한 이벤트 핸들러 해제
        return () => {
            unsubscribe();
        };
    }, []);

    // 로그인 버튼 클릭 시 실행될 함수
    const handleLogin = async () => {
        try {
            await signInWithPopup();
        } catch (error) {
            console.error(error);
        }
    };

    // 로그아웃 버튼 클릭 시 실행될 함수
    const handleLogout = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {user ? (
                <button onClick={handleLogout}>로그아웃</button>
            ) : (
                <button onClick={handleLogin}>로그인</button>
            )}
        </div>
    );
}
