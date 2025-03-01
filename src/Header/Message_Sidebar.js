
import React, { useState, useEffect } from 'react';
 
import io from 'socket.io-client';
import NotificationBell from './Message_Component';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../baseurl';

const MessageSidebar = ({onSendMessage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [userId,setuserId]=useState('0') 
  const socketRef = React.useRef(null);
  const navigate = useNavigate()
  const [userCache, setUserCache] = useState({});

  
  
  useEffect(()=>{
        const Sender_Idd= localStorage.getItem('userData')
          const sender_user_id= JSON.parse(Sender_Idd)


          

          setuserId(sender_user_id.id)

    })

  useEffect(() => {
    fetchprofile();
    // Set up Socket.IO connection
    // socketRef.current = io('http://localhost:5000', {
    //   query: { userId },
    //   transports: ['websocket'],
    //   withCredentials: true,
    // });

    socketRef.current = io('https://ratemystationbackend-production-82d5.up.railway.app', {
      query: { userId },
      transports: ['websocket'],
      withCredentials: true,
    });

    


// ts

// Listen for new messages
// socketRef.current.on('new_notification', (message) => {
//     // Update notifications with the new message data

//     console.log(message,"Best is yet to come")
//     const notification = {
//       userId: message.userId, // Use a unique ID for each notification
//       text: message.text,
//       isRead: false,
      
//     };  

    
//     setNotifications((prevNotifications) => [notification, ...prevNotifications]);
//     setUnreadCount((prevCount) => prevCount + 1);
//   });


socketRef.current.on('new_notification', async (message) => {
  console.log(message, "Best is yet to come");
  const notification = {
    id: message.id,
    Sender_Id: message.userId,
    text: message.text,
    isRead: false,
    senderName: await notifys(message.userId) // Fetch and set the sender name
  };

  setNotifications((prevNotifications) => [notification, ...prevNotifications]);
  setUnreadCount((prevCount) => prevCount + 1);
});

// ts



    // Listen for initial notifications
    socketRef.current.on('initialNotifications', (initialNotifications) => {
      setNotifications(initialNotifications);
      const unreadCount = initialNotifications.filter((n) => !n.isRead).length;
      setUnreadCount(unreadCount);
    });

    // Listen for new notifications
    socketRef.current.on('notification', (data) => {
      setNotifications((prevNotifications) => [data, ...prevNotifications]);
      setUnreadCount((prevCount) => prevCount + 1);
    });

    // Listen for notification read status update
    socketRef.current.on('notificationsRead', (notificationIds) => {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notificationIds.includes(notification.id)
            ? { ...notification, isRead: true }
            : notification
        )
      );
      setUnreadCount((prevCount) => prevCount - notificationIds.length);
    });

    socketRef.current.on('error', (error) => {
      console.error('Socket error:', error);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [userId,unreadCount]);



  
  // const notifys = (id) => {


  //   console.log('eeeeeeeeeeeeeeeee' , id)

    


  //   return id

  // }


  const notifys = async (id) => {

    console.log('id',id)
    // if (userCache[id]) {
    //   return userCache[id]; // Return the cached username if available
    // }

    try {
      // Assume you have an API endpoint to get user details by ID
      // const response = await fetch(`/api/users/${id}`);
      const response = await axios.get(`${baseurl}/getuserdata/${id}`);
      const user = response.data;

      // Cache the username
      setUserCache((prevCache) => ({ ...prevCache, [id]: user.name }));

      return user.name;
    } catch (error) {
      console.error('Error fetching user:', error);
      return 'Unknown User';
    }
  };


  

  const fetchprofile = async () => {

    

    console.log('Fetching profilesssss' , notifications)

    // try {
    //   const response = await axios.get(`${baseurl}/getuserdata/${Reciever_Id}`);
     

    //   setProfile(response.data)

    
     

    
    // } catch (error) {
    //   console.error("Error fetching user data:", error);
    // }


  }



  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => {
      if (!prevIsOpen) {
        return true;
      }

      // Mark all notifications as read
      const notificationIds = notifications.filter((n) => !n.isRead).map((n) => n.id);
      if (notificationIds.length > 0) {
        socketRef.current.emit('markRead', notificationIds, (response) => {
          console.log('Server response:', response);
        });
      }
      
      // Reset unread count to 0
      setUnreadCount(0);
      return false;
    });
  };

  const Go_to_Chat=(e)=>{
    console.log('e',e)

    const senderId = e; // Replace with actual sender ID
    onSendMessage(senderId);

    // localStorage.setItem('Reciever_Id',e)
    // navigate('/ts')
    
  }



  return (
    <div className="notifications">
      <h2>
      
      </h2>
    
    
        <div >
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id} className={notification.isRead ? 'read' : 'unread'} onClick={()=>Go_to_Chat(notification.Sender_Id)}>
                {/* { notifys(notification.Sender_Id) +" "+ notification.text} */}

                { notification.Sender_Id} {notification.text}
              </li>
            ))}
          </ul>
        </div>
      
    </div>
  );
};

export default MessageSidebar;
















