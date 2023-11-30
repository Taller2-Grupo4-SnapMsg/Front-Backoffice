import React from 'react';
import ButtonWithCalendar from './ButtonWithCalendar';

const TopBarCalendars = ({ timestampBegin, timestampEnd, setTimestampBegin, setTimestampEnd }) => {
  return (
    <div style={{ display: 'flex', width: '100%', marginTop: '20px', padding: 0, justifyContent: 'space-between' }}>
      <ButtonWithCalendar
        buttonText={"Select Begin"}
        originalDate={timestampBegin}
        changeOriginalDate={setTimestampBegin}
      />
      <ButtonWithCalendar
        buttonText={"Select End"}
        originalDate={timestampEnd}
        changeOriginalDate={setTimestampEnd}
      />
    </div>
  );
};

export default TopBarCalendars;
