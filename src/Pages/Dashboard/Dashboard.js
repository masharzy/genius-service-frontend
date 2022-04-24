import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container text-center'>
            <h1 className='my-3'>Dashboard</h1>
            <Link className='btn btn-primary' to='/dashboard/add-service'>Add Service</Link>
        </div>
    );
};

export default Dashboard;