import React from 'react';
import './styles/hub.css'

const hub = () => {
    return <div className="width hub-main">
        <div className="m-title h-title">
            Hub of Every Technological Solution
        </div>
        <div className='h-details'>
            <div className='h-left'>
                <div className='top top-left'>
                    <img alt='mobile' src={require('../images/mobile.svg')} className='h-logo'/>
                    <span className='h-content'>Mobile Development</span>
                </div>
                <div className='bottom'>
                    <img alt='mobile' src={require('../images/seo.svg')} className='h-logo'/>
                    <span className='h-content'>
                        Seo<p className='sub'>(Search Engine Optimization)</p>
                    </span>
                </div>
            </div>
            <div className='hub'>
                <img alt='hub' className="h-image" src={require('../images/hub.svg')}/>
            </div>
            <div className='h-right'>
                <div className='top'>
                    <img alt='mobile' src={require('../images/paint.svg')} className='h-logo'/>
                    <span className='h-content'>Graphics Design</span>
                </div>
                <div className='bottom'>
                    <img alt='mobile' src={require('../images/web.svg')} className='h-logo'/>
                    <span className='h-content'>Web Development</span>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(hub)