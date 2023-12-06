import React from 'react'
import Card from './Card';

const FancyCards = () => {
  return (
      <div>
          <Card text='Total Visits'/>
          <Card text='Total Submission'/>
          <Card text='SubmissiON Rate'/>
          <Card text='Bounce Rate'/>
    </div>
  )
}

export default FancyCards