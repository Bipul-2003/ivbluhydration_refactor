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
    const [activeTab, setActiveTab] = useState('pending'); // State for active tab
    const { state, dispatch } = useStore();

    useEffect(() => {
        // Fetch pending appointments and appointment history from the API
        const fetchData = async () => {
            dispatch({ type: 'PENDING_APPOINTMENTS_BY_NURSE_REQUEST' });
            try {
                const pendingData = await getPendingAppointmentsByNurse(2);
                const historyData = await getAllAppointmentsByNurse(3);

                setPendingAppointments(pendingData);
                setPendingFilteredAppointments(pendingData);
                setAppointmentHistory(historyData);
                setFilteredAppointmentHistory(historyData);

                dispatch({ type: 'PENDING_APPOINTMENTS_BY_NURSE_SUCCESS', payload: pendingData });
            } catch (error) {
                console.log(error);
                dispatch({ type: 'PENDING_APPOINTMENTS_BY_NURSE_FAILURE', payload: error.message });
            }
        };

        fetchData();
    }, [dispatch]);

    const handlePendingFilterChange = (e) => {
        const filterDate = e.target.value;
        setPendingFilterDate(filterDate);
        const filteredPendingAppointments = pendingAppointments.filter(appointment =>
            !filterDate || appointment.date === filterDate
        );
        setPendingFilteredAppointments(filteredPendingAppointments);
    };

    const getAllPendingAppointments = () => {
        setPendingFilteredAppointments(pendingAppointments);
    };

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
        const updatedPendingAppointments = pendingFilteredAppointments.filter(
            appointment => appointment.appointmentId !== appointmentId
        );
        const approvedAppointment = pendingFilteredAppointments.find(
            appointment => appointment.appointmentId === appointmentId
        );
        const updatedAppointmentHistory = [...appointmentHistory, approvedAppointment];

        setPendingFilteredAppointments(updatedPendingAppointments);
        setAppointmentHistory(updatedAppointmentHistory);
        setFilteredAppointmentHistory(updatedAppointmentHistory);
    };

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tabButton} ${activeTab === 'pending' ? styles.active : ''}`}
                    onClick={() => setActiveTab('pending')}
                >
                    Pending Appointments
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === 'history' ? styles.active : ''}`}
                    onClick={() => setActiveTab('history')}
                >
                    Appointment History
                </button>
            </div>

            {activeTab === 'pending' && (
                <div className={styles.section}>
                    <h2>Pending Appointments</h2>
                    <div className={`grid grid-cols-12 gap-2 ${styles.selectDateAllbox}`}>
                        <div className="col-span-1" style={{ alignSelf: 'baseline' }}>
                            <button className="btn btn-primary" onClick={getAllPendingAppointments}>All</button>
                        </div>&nbsp;&nbsp;
                        <div className="col-span-3">
                            <input type="date" value={pendingFilterDate} onChange={handlePendingFilterChange} />
                        </div>
                    </div>
                    <ul>
                        {pendingFilteredAppointments.map(appointment => (
                            <li key={appointment.appointmentId}>
                                <label>{appointment.date} &nbsp; {appointment.slot.time}&nbsp;
                                    {appointment.slot.maridian}&nbsp;&nbsp;
                                    <b>{appointment.name}</b></label>
                                <br></br>
                                <label>
                                    {appointment.service} - {appointment.location ? appointment.location : "Location Not Found"}
                                </label>
                                <button onClick={() => handleApprove(appointment.appointmentId)}>Approve</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {activeTab === 'history' && (
                <div className={styles.section}>
                    <h2>Appointment History</h2>
                    <div className={`grid grid-cols-12 gap-2 ${styles.selectDateAllbox}`}>
                        <div className="col-span-1">
                            <button className="btn btn-primary" onClick={getAllHistoryAppointments}>All</button>
                        </div>
                        <div className="col-span-3">
                            <input type="date" value={historyFilterDate} onChange={handleHistoryFilterChange} />
                        </div>
                    </div>
                    <ul>
                        {filteredAppointmentHistory.map(appointment => (
                            <li key={appointment.appointmentId}>
                                <label>{appointment.date} &nbsp; {appointment.slot.time}&nbsp;
                                    {appointment.slot.maridian}&nbsp;&nbsp;
                                    <b>{appointment.name}</b></label>
                                <br></br>
                                <label>
                                    {appointment.service} - {appointment.location ? appointment.location : "Location Not Found"}
                                </label>
                                <button onClick={() => handleApprove(appointment.appointmentId)}>Approve</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NurseDashboardPage;