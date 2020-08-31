import React from 'react'

export const JournalEntry = ({ entry }) => {
  
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-picture"
        style={
          {
            backgroundSize: 'cover',
            backgroundImage: 'url(https://i.pinimg.com/originals/72/5b/ad/725bad2f6a8c85f93c110bc792151bc0.jpg)'
          }
        }
      >
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          A New Day
        </p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>


      </div>

      <div className="journal__entry-date">
        <span>Monday</span>
        <h4>24</h4>

      </div>
      
    </div>
  )
}
