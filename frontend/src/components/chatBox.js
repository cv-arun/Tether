import React, { useEffect, useRef, useState } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import EmojiPicker from 'emoji-picker-react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector,useDispatch } from 'react-redux';
import Moment from 'react-moment';
import getChat from '../api.js/getChat';
import {openChatBoxReducer} from '../redux/getChatSlice'

function ChatBox() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [chatList, setChatList] = useState([])
    const chatinput = useRef();
    const dispatch=useDispatch()
    const user = useSelector((state) => state.userReducer.user)
    const friendId = useSelector((state) => state.getChat.friendId)

    useEffect(() => {
        getChat(friendId).then(data => {
            console.log(data, "dataaaaaaaaaaa")
        })

    }, [friendId])

    const imojiClicked = ({ emoji }) => {
        let ref = chatinput.current;
        let start = text.substring(0, ref.selectionStart)
        let end = text.substring(ref.selectionEnd)
        setText(start + emoji + end)
        setShow(false)
    }

    const sendChat = () => {
        let chat = {
            text: text,
            time: new Date(),
            author: user.userId
        }
        setChatList([chat, ...chatList])
        setText('')
    }

    return (
        <>
            <div className='w-full md:h-[85vh] h-[80vh] bg-white opacity-80 rounded-tr-2xl rounded-br-2xl flex flex-col'>
                <div className='w-full h-[80px] flex'>
                    <div className='flex flex-col justify-center ' onClick={()=>dispatch(openChatBoxReducer(false))}><ArrowBackIcon/></div>
                    <div className='md:ml-5 ml-2 my-auto'>
                        <img className=' max-h-[75px] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSQpuRwKcQD_-_2yf6EGsw56SsFVa4jdKaQ&usqp=CAU' alt='profile' />
                    </div>
                    <div className='w-full mx-4 flex flex-col'>
                        <span className='text-2xl mt-4'>Name</span>
                        <span className='text-lg'>online</span>
                    </div>


                </div>
                {show && <div className='fixed z-50 xl:-translate-x-[120%]'>
                    <EmojiPicker onEmojiClick={imojiClicked} />
                </div>}
                <div className='w-full flex-grow shadow-inner bg-slate-300 flex flex-col-reverse'>
                    {chatList.map((curr) => <div className='p-3 flex justify-start'>
                        <div className=' w-min min-w-[200px] min-h-[50px] flex flex-col bg-white rounded-b-xl rounded-tr-xl'>
                            <span className='text-xl'>{curr.text}</span>
                            <span className='h-2 text-right text-sm mb-2 mr-2'><Moment date={curr.time} format="hh:mm" trim /></span>
                        </div>
                    </div>)}
                </div>
                <div className='w-full h-[60px] flex align-middle'>
                    <span className='flex align-middle p-2 hover:scale-75' onClick={() => setShow(true)}>
                        <AddReactionIcon sx={{ marginY: 'auto', color: 'blue' }} />
                    </span>
                    <input className='w-full ml-10  focus-visible:outline-none'
                        placeholder='Search...' value={text}
                        ref={chatinput} onChange={(e) => setText(e.target.value)}
                        onKeyPress={(event) => {
                            event.key === "Enter" && sendChat();
                        }} />
                    <span className='flex align-middle' onClick={sendChat}><SendOutlinedIcon sx={{ marginY: 'auto' }} /></span>

                </div>

            </div>
        </>
    )
}

export default ChatBox