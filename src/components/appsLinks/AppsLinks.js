import React from 'react'
import { Icon } from '@iconify/react';
import './AppsLinks.css'
import {Link} from 'react-router-dom'

const AppsLinks = () => {
  return (
    <div className='app-links-div'>
        <div className="app-links-container">
            <div className="apps-links-stores">
                <a href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'>
                    <button className="app-links-button">
                        <img src="assets/chrome.svg" alt="Logo Chrome" />
                        <div className="app-link-button-text">
                            <p>available in the</p>
                            <p className="app-link-name-store">chrome web store</p>
                        </div>
                    </button>
                </a>
                <a href='https://apps.apple.com/app/ratepunk/id1607823726'>
                    <button className="app-links-button">
                        <img src="assets/apple.svg" alt="" />
                        <div className="app-link-button-text">
                            <p>available in the</p>
                            <p className="app-link-name-store">apple app store</p>
                        </div>
                    </button>  
                </a>
            </div>
            <div className="app-links-stars">
                <div className="app-start-icons">
                    <Icon icon="bi:star-fill" />
                    <Icon icon="bi:star-fill" />
                    <Icon icon="bi:star-fill" />
                    <Icon icon="bi:star-fill" />
                    <Icon icon="bi:star-fill" />
                </div>
                <p>Chrome Store reviews</p>
            </div>
        </div>
    </div>
  )
}

export default AppsLinks