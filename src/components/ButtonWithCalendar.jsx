import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GREY } from '../constants';

const ButtonWithCalendar = ({ buttonText, originalDate, changeOriginalDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(originalDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleApply = () => {
    changeOriginalDate(selectedDate);
    setDialogOpen(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#947EB0",
          '&:hover': {
            backgroundColor: "#6B5A8E",
          },
          width: '17vw',
          fontSize: 16,
          marginLeft: '0.8vw',
        }}
        onClick={() => setDialogOpen(true)}
      >
        {buttonText}
      </Button>
       <TextField
        type="text"
        value={selectedDate.toDateString()}
        readOnly
        sx={{
          marginLeft: '1vw',
          width: '12vw',
          backgroundColor: GREY,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: 18,
          textAlign: 'center',
        }}
      />
      
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Calendar
          onChange={handleDateChange}
          value={new Date(selectedDate)}
        />
        <Button variant="contained" onClick={handleApply} sx={{ marginTop: '16px' }}>
          Apply
        </Button>
      </Dialog>
    </div>
  );
};

export default ButtonWithCalendar;
