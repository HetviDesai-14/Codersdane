import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import green from './images/pexels-alex-green-5699480.jpg';
import './in.css';

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingContainerRef = useRef(null);

    useEffect(() => {
        const initMeeting = async () => {
            const appID = 1764610079;
            const serverSecret = "6b497a952916e278ee966af3f4ac2620";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "codersdane");
            
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: meetingContainerRef.current,
                sharedLinks: [{
                    name: 'Copy Link',
                    url: `http://localhost:3000/id/${roomId}`,
                }],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
            });
        };

        initMeeting();
    }, [roomId]);

    return (
        <div>
            <div ref={meetingContainerRef} className='h'/>

            <div>
                <section>
                    <img src={green} alt="" className="m"></img>
                </section>
            </div>
        </div>
    );
};

export default RoomPage;
