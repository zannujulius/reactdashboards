import React from 'react' 
import {IoNotificationsOutline} from 'react-icons/io5'
import {RiErrorWarningLine} from 'react-icons/ri'
import {BsEnvelope} from 'react-icons/bs'
import { color } from '../../constant/color'

const RemindersCard = () => {
    const text = [
      {
        icon: <RiErrorWarningLine />,
        subject: "Eng - Vocabulary test",
        date: "24 Sep 2019, Friday",
        color: color.primary
      },
      {
        icon: <BsEnvelope />,
        subject: "Eng - Send grammar homework",
        date: "29 Sep 2019, Wednesday",
      },
      {
        icon: <BsEnvelope />,
        subject: "Spanish - Send essay",
        date: "05 Oct 2019, Monday",
      },
      {
        icon: <BsEnvelope />,
        subject: "Spanish - Reading",
        date: "05 Oct 2019, Monday",
      },
    ];
  return (
    <div>
      <div className="reminders-text  d-flex align-items-center justify-content-between">
        <div className="reminderstext1">Reminders</div>
        <div
          className="reminders-icon fs-5 "
          style={{
            position: "relative",
          }}
        >
          <IoNotificationsOutline />
          {/* <div className="chat-icon text-white d-flex align-items-center justify-content-center">
            4
          </div> */}
        </div>
      </div>
      {text.map((item) => (
        <div>
          <div className="mt-3  reminders-main d-flex align-items-center ">
            <div
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{
                background: "#e5e9fa5d",
                width: 45,
                height: 45,
                color: "{item.color}",
              }}
            >
              {item.icon}
            </div>
            <div className="reminders-main-text mx-2 ">
              <div className="reminders-main-text-1 text-start">
                {item.subject}
              </div>
              <div className="reminders-main-text-2 text-start">
                {item.date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RemindersCard