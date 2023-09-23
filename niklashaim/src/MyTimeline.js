import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function MyTimeline() {
  return (
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(77, 172, 191)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(77, 172, 191)' }}
              date="2023 - Present"
              icon={<img src="./school.png" class="img-fluid w-75 d-block m-auto mt-1" alt="Responsive image"></img>}
              iconStyle={{background: 'rgb(77, 172, 191)' }}
            >
              <h3 className="vertical-timeline-element-title text-white">Computer Science Student</h3>
              <h4 className="vertical-timeline-element-subtitle text-white">Kuala Lumpur, Malaysia</h4>
              <p class="text-white">
                Exchange Student at Taylors University Malaysia for my 5th semester of Software Engineering
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(77, 172, 191)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(77, 172, 191)' }}
              date="2021 - Present"
              iconStyle={{ background: 'rgb(77, 172, 191)', color: 'rgb(77, 172, 191)' }}
              icon={<img src="./school.png" class="img-fluid w-75 d-block m-auto mt-1" alt="Responsive image"></img>}
            >
              <h3 className="vertical-timeline-element-title text-white">Software Engineering Bachelor Student</h3>
              <h4 className="vertical-timeline-element-subtitle text-white">Odense, Denmark</h4>
              <p class="text-white">
                Bachelor in Software Engineering at University of Southern Denmark
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: 'rgb(90, 172, 119)', color: '#fff' }}
              icon={<img src="./work.png" class="img-fluid w-75 d-block m-auto mt-1" alt="Responsive image"></img>}
            >
              <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">SDU, Denmark</h4>
              <p>
                Teaching Assistant in Object Orrientet Programming for 1. semester students. The course was thought in Java.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
              iconStyle={{ background: 'rgb(90, 172, 119)', color: '#fff' }}
              icon={<img src="./work.png" class="img-fluid w-75 d-block m-auto mt-1" alt="Responsive image"></img>}
            >
              <h3 className="vertical-timeline-element-title">Software Engineering Tutor</h3>
              <h4 className="vertical-timeline-element-subtitle">SDU, Denmark</h4>
              <p>
                Tutor for the new Software Engineering Students. Making sure they get to know the University and each other. 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2023"
              iconStyle={{ background: 'rgb(90, 172, 119)', color: '#fff' }}
              icon={<img src="./work.png" class="img-fluid w-75 d-block m-auto mt-1" alt="Responsive image"></img>}
            >
              <h3 className="vertical-timeline-element-title">IT-Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">Blue Ocean Robotics, Denmark</h4>
              <ul class="pt-3">
                <li>
                  Asset Management
                </li>
                <li>
                  Technical Support
                </li>
                <li>
                  Employee On and Offboarding
                </li>
                <li>
                  Label Printer Integration With ERP System
                </li>
              </ul>
        
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2021"
              iconStyle={{ background: 'rgb(77, 172, 191)', color: '#fff' }}
              icon={<img src="./school.png" class="img-fluid w-75 d-block m-auto mt-1" alt="Responsive image"></img>}
            >
              <h3 className="vertical-timeline-element-title">High School</h3>
              <h4 className="vertical-timeline-element-subtitle">ZBC Slagelse, Denmark</h4>
              <p>
                Higher Technical Examination Programme with Programming and Mathmatics as main subjects
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
  );
}
