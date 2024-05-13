
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginEmail, googleLogin } from '@/api/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter(); // Use useRouter for navigation in Next.js

    const googleLoginEvent = async () => {
        try {
            const user = await googleLogin();
            if (user) {
                router.push('/'); // Navigate to homepage
            }
        } catch (error) {
            console.error(error);
            setErrorMsg('로그인 중 오류가 발생했습니다.');
        }
    };

    const onLoginEvent = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        try {
            const user = await loginEmail(email, password);
            if (user) {
                router.push('/'); // Navigate to homepage
            } else {
                setErrorMsg('이메일이나 비밀번호가 일치하지 않습니다.');
            }
        } catch (error) {
            console.error(error);
            setErrorMsg('로그인 실패: 시스템 오류');
        }
    };

    return (
        <div className='container'>
            <h2>로그인</h2>
            <form onSubmit={onLoginEvent}>
                <input
                    type='email'
                    placeholder='이메일을 입력하세요'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='password'
                    placeholder='비밀번호를 입력하세요'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>로그인</button>
                <button type='button' onClick={googleLoginEvent}>구글아이디로 로그인</button>
            </form>
            {errorMsg && <span className='errorText'>{errorMsg}</span>}
            <Link href='/join'>회원가입</Link>
        </div>
    );
}

export default Login;
