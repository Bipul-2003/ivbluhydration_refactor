// src/NurseDashboard.js
import React, { useState, useEffect } from 'react';
import styles from '../css/NurseDashboard.module.css';
import { getAllAppointmentsByNurse, getPendingAppointmentsByNurse } from '@/services/nurse-dashboard.service';
import { useStore } from '../store/store.reducer';

const NurseDashboardPage = () => {
    const [pendingAppointments, setPendingAppointments] = useState([]);
    const [pendingFilteredAppointments, setPendingFilteredAppointments] = useState([]);
    const [appointmentHistory, setAppointmentHistory] = useState([]);
    const [filteredAppointmentHistory, setFilteredAppointmentHistory] = useState([]);
    const [pendingFilterDate, setPendingFilterDate] = useState('');
    const [historyFilterDate, setHistoryFilterDate] = useState('');
    const { state, dispatch } = useStore();

    // let filteredPendingAppointments = pendingFilteredAppointments.filter(appointment =>
    //     !pendingFilterDate || appointment.date === pendingFilterDate
    // );
    useEffect(() => {
        // Fetch pending appointments and appointment history from the API
        // For now, we'll use mocked data
        const fetchData = async () => {
            dispatch({ type: 'PENDING_APPOINTMENTS_BY_NURSE_REQUEST' });
            // let pendingData = null;
            try {
                const pendingData = await getPendingAppointmentsByNurse(2);
                const historyData = await getAllAppointmentsByNurse(3);

                setPendingAppointments(pendingData);
                setPendingFilteredAppointments(pendingData);
                setAppointmentHistory(historyData);
                setFilteredAppointmentHistory(historyData);

                dispatch({ type: 'PENDING_APPOINTMENTS_BY_NURSE_SUCCESS', payload: user });

            } catch (error) {
                console.log(error)
                dispatch({ type: 'PENDING_APPOINTMENTS_BY_NURSE_FAILURE', payload: error.message });
            }
            //   const pendingData = await fetchPendingAppointments();

            // setAppointmentHistory(historyData);
        };

        fetchData();
    }, [dispatch]);

    const fetchPendingAppointments = async () => {
        // Mock data for pending appointments
        return [
            { id: 1, date: '2024-06-10', patient: 'John Doe', reason: 'Checkup' },
            { id: 2, date: '2024-06-11', patient: 'Jane Smith', reason: 'Follow-up' },
        ];
    };

    const fetchAppointmentHistory = async () => {
        // Mock data for appointment history
        return [
            { id: 1, date: '2024-06-01', patient: 'Alice Johnson', reason: 'Consultation' },
            { id: 2, date: '2024-06-03', patient: 'Bob Brown', reason: 'Checkup' },
        ];
    };

    const handlePendingFilterChange = (e) => {
        const filterDate = e.target.value;
        setPendingFilterDate(filterDate);
        let filteredPendingAppointments = pendingAppointments.filter(appointment =>
            !filterDate || appointment.date === filterDate
        );
        setPendingFilteredAppointments(filteredPendingAppointments)
        console.log(pendingFilteredAppointments)
        console.log(pendingAppointments)
    };
    const getAllPendingAppointments = (e) => {
        setPendingFilteredAppointments(pendingAppointments)
        console.log(pendingFilteredAppointments)
    }

    const handleHistoryFilterChange = (e) => {
        const filterDate = e.target.value;
        setHistoryFilterDate(filterDate);

        const filteredHistoryAppointments = appointmentHistory.filter(appointment =>
            !filterDate || appointment.date === filterDate
        );
        setFilteredAppointmentHistory(filteredHistoryAppointments);
    };

    const getAllHistoryAppointments = () => {
        setFilteredAppointmentHistory(appointmentHistory);
    };

    const handleApprove = async (appointmentId) => {
        // Approve the appointment and update the state
        // Here you would typically make an API call to update the appointment status
        // For now, we will just simulate the approval process

        // Filter out the approved appointment from pendingAppointments
        const updatedPendingAppointments = pendingFilteredAppointments.filter(
            appointment => appointment.id !== appointmentId
        );

        // Find the approved appointment
        const approvedAppointment = pendingFilteredAppointments.find(
            appointment => appointment.id === appointmentId
        );

        // Add the approved appointment to appointmentHistory
        const updatedAppointmentHistory = [...appointmentHistory, approvedAppointment];

        // Update the state
        setPendingFilteredAppointments(updatedPendingAppointments);
        setAppointmentHistory(updatedAppointmentHistory);
        setFilteredAppointmentHistory(updatedAppointmentHistory);
    };



    // const filteredAppointmentHistory = appointmentHistory.filter(appointment =>
    //     !historyFilterDate || appointment.date === historyFilterDate
    // );

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.section}>
                <h2>Pending Appointments</h2>
                <div class="grid grid-cols-12 gap-2"
                    className={styles.selectDateAllbox}>
                    <div class="col-span-1">
                        <button className='btn btn-primary' onClick={getAllPendingAppointments}>All</button>
                    </div>&nbsp;&nbsp;
                    <div className="col-span-3">
                        <input type="date" value={pendingFilterDate} onChange={handlePendingFilterChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3"></div>
                    <ul>
                        {pendingFilteredAppointments.map(appointment => (
                            <li key={appointment.appointmentId}>
                                {appointment.date} - {appointment.name} - {appointment.service}
                                <button onClick={() => handleApprove(appointment.appointmentId)}>Approve</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.section}>
                <h2>Appointment History</h2>
                <div className={`grid grid-cols-12 gap-2 ${styles.selectDateAllbox}`}>
                    <div className="col-span-1">
                        <button className='btn btn-primary' onClick={getAllHistoryAppointments}>All</button>
                    </div>
                    <div className="col-span-3">
                        <input type="date" value={historyFilterDate} onChange={handleHistoryFilterChange} />
                    </div>
                </div>
                <ul>
                    {filteredAppointmentHistory.map(appointment => (
                        <li key={appointment.appointmentId}>
                            {appointment.date} - {appointment.name} - {appointment.service}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NurseDashboardPage;
