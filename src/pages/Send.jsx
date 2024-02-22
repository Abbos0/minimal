import assets_1 from "../assets/student.3.webp"
import React, { useState, useEffect } from 'react';
import styles from "../styles/send.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyComponent = () => {
  const [text, setText] = useState(' ');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [call, setCall] = useState('');
  const [messagetext, setMessagetext] = useState('');
  const [checkbox, setCheckbox] = useState(false);

//   useEffect(() => {
//     const textLoad = () => {
//       setTimeout(() => {
//         setText('Trust');
//       }, 0);
//       setTimeout(() => {
//         setText('Consultancy');
//       }, 4000);
//       setTimeout(() => {
//         setText('& Trading');
//       }, 8000);
//       setTimeout(() => {
//         setText('Boss');
//       }, 12000);
//     };

//     textLoad();
//     const interval = setInterval(textLoad, 16000);

//     return () => clearInterval(interval);
//   }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email, call, messagetext);
    const text = `%0A 👦 Username: ${username}  %0A 📩Email:  ${email} %0A 📞 Phone: ${call} %0A  📝 Message: ${messagetext}  %0A ✅ Calculate: ${checkbox} `;
    const chatId = -1002128588085;
    const token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('Telegram API response:', data);
        setUsername('');
        setEmail('');
        setCall('');
        setMessagetext('');
        setCheckbox(false);
        toast.success("kutib turing")
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };
  return (
    <div className={styles.form} id='send'>
      <ToastContainer style={{ width: "500px", height:"50px" }} />
      <p className="sec-text">{text}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id={styles.username}
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name" />
        <input
          type="email"
          id={styles.email}
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" />
        <input
          type="tel"
          id={styles.call}
          value={call}
          required
          onChange={(e) => setCall(e.target.value)}
          placeholder="Phone" />
        <textarea
          className={styles.textarea}
          id={styles.messagetext}
          value={messagetext}
          required
          onChange={(e) => setMessagetext(e.target.value)}
          placeholder="Message" ></textarea>
        <br />
        <button type="submit">Send Message</button>
        <div className={styles.login}>
            <img src={assets_1} alt="logo" />
            <p>Minimal Template made in Webflow. All rights reserved. by Abbos !!!</p>
        </div>
      </form>
    </div>
  );
};
export default MyComponent;

// const Username = document.querySelector("#username")
// const Email = document.querySelector("#email")
// const Call = document.querySelector("#call")
// const Calculate = document.querySelector("#calculate")
// const Messagetext = document.querySelector("#messagetext")
// const Checkbox = document.querySelector("#checkbox")
// const Form = document.querySelector("#form")
// const Text = document.querySelector(".sec-text");
// const textLoad = () => {
//     setTimeout(() =>{
//         Text.textContent = "Trust";
//     }  , 0)
//     setTimeout(() =>{
//         Text.textContent = "Consultancy";
//     }  , 4000)
//     setTimeout(() =>{
//         Text.textContent = "& Trading";
//     }  , 8000)
//     setTimeout(() =>{
//         Text.textContent = " Boss ";
//     }  , 12000)
// }
//     textLoad();
//     setInterval(textLoad, 16000);

// const GetValue = (event) =>{
//     event.preventDefault()
//     console.log(Username.value, Email.value, Call.value, Calculate.value, Messagetext.value);
// }
// const SendMessage = (e) =>{
//     e.preventDefault(){
//     text = `%0A 👦 Username: ${Username.value}  %0A 📩Email:  ${Email.value} %0A 📞 Phone: ${Call.value} %0A 📝 Calculate: ${Calculate.value} %0A 📝 Message: ${Messagetext.value}  %0A ✅ Calculate: ${Checkbox.value} `
//     chat_id = -1002128588085 ,token = `6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM`,url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`
//     let api = new   XMLHttpRequest();
//     api.open("GET", url, true);
//     api.send();Username.value = "" ,Email.value = "",Call.value = "",Calculate.value = "",Messagetext.value = "",Checkbox.value = ""
// }
// }  
// Form.addEventListener("submit" , SendMessage )