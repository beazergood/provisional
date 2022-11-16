import React from 'react'
import './button.css'

interface CourseCardProps {
  /**
   * Label for coursename
   */
  courseTitleLabel: string
  /**
   * Label for coursename
   */
  courseLocationLabel: string
}

/**
 * Primary UI component for user interaction
 */
export const CourseCard = ({
  courseTitleLabel,
  courseLocationLabel,
  ...props
}: CourseCardProps) => {
  return (
    <div className="" {...props}>
      <div className="text-container">
        <h3>{courseTitleLabel}</h3>
        <h5>{courseLocationLabel}</h5>
      </div>
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        />
      </div>
      <div className="buttons-container">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  )
}
