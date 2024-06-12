import './Join.css';
import React, { useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import inter from './images/pexels-olly-3760067.jpg';
import { Link } from 'react-router-dom';
import pre from './images/business.png';

const Join = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(() => {
        navigate(`/in/${value}`);
    }, [navigate, value]);

    return (
        <div>
            <div>
                <section className="love">
                    <img src={inter} alt=""/>
                    <div className="text-overlay">
                        <div className="left-text">
                            <h1 className='jo'>Join Us</h1>
                            <p>
                                Let's connect and collaborate. Welcome to our state-of-the-art Online Interview Platform, where we transform the interview experience
                                for both employers and candidates. Our platform offers seamless scheduling, allowing users to effortlessly coordinate and book interview
                                slots that suit their availability. With HD video and audio quality, interviews feel as natural and engaging as in-person meetings.
                                We provide robust security features to ensure that all interactions are confidential and secure.
                            </p>
                            <button>
                                <Link to="/reg">Let's We Know You and Schedule Meeting</Link>
                            </button>
                            <p>If you already registered, enter your code that was sent to your email!!</p>
                            <div className="join-section">
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    type="text"
                                    placeholder="Enter room code"
                                    className='input-field' />
                                <button onClick={handleJoinRoom} className="join-button">Join</button>
                            </div>
                        </div>
                        <div className="right-image">
                            <img src={pre} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Join;
