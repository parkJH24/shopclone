"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { joinEmail } from '@/api/api';

function Join() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [psError, setPsError] = useState(''); // Password error
    const [nameError, setNameError] = useState(''); // Name error
    const [emailError, setEmailError] = useState(''); // Email error
    const router = useRouter();

    const validatorName = (userName) => {
        if (!userName) {
            setNameError('이름을 입력해주세요');
            return false;
        }
        if (userName.length <= 2 || userName.length > 10) {
            setNameError('이름은 2글자 이상 10글자 이하로 해주세요');
            return false;
        }
        if (!/^[A-Za-z가-힣\s'-]+$/.test(userName)) {
            setNameError('유효하지 않은 문자가 포함되어 있습니다.');
            return false;
        }
        return true;
    };

    const onSignUpEvent = async (e) => {
        e.preventDefault();
        setPsError('');
        setNameError('');
        setEmailError('');

        if (!validatorName(userName)) {
            return;
        }

        if (userPassword.length < 6) {
            setPsError('비밀번호는 6글자 이상이어야 합니다');
            return;
        }

        try {
            const result = await joinEmail(userEmail, userPassword, userName);
            if (result.error) {
                if (result.error === 'auth/email-already-in-use') {
                    setEmailError('이메일은 현재 사용중입니다.');
                }
                return;
            } else {
                router.push('/login'); // Use Next.js router to navigate
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='container'>
            <h2>회원가입</h2>
            <form onSubmit={onSignUpEvent}>
                <div>
                    <input
                        type='text'
                        placeholder='이름을 입력하세요'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    {nameError && <span className='errorText'>{nameError}</span>}
                </div>
                <div>
                    <input
                        type='email'
                        placeholder='이메일을 입력하세요'
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {emailError && <span className='errorText'>{emailError}</span>}
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='비밀번호를 입력하세요'
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    {psError && <span className='errorText'>{psError}</span>}
                </div>
                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
}

export default Join;
