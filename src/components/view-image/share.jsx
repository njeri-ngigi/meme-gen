import React from 'react';
import { MdShare, MdMood, MdMoodBad, MdInfo } from 'react-icons/md';

const share = () => (
  <div className="share">
    <MdShare className="icon" title="Share this Bad Boy!"/>
    <MdMood className="icon" title="Does this make you happy?"/>
    <MdMoodBad className="icon" title="This infuriates me!!!"/>
    <MdInfo className="icon" title="Tell me more ..."/>
  </div>
)

share.displayName = "share"

export default share;