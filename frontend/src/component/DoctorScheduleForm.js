import React, { useState } from 'react';
import { Col, Form, Input, Layout, Row, TimePicker, Button, Checkbox } from 'antd';
import styles from '../styles/ApplyDoctorForm.css';

const ApplyDoctor = () => {
    const [showSchedule, setShowSchedule] = useState(false);
    const [scheduleDetails, setScheduleDetails] = useState(null);
    const [selectedWeekdays, setSelectedWeekdays] = useState([]);

    const handleFinish = (values) => {
        console.log(values);
        const formattedValues = {
            ...values,
            startTime: values.startTime.format('HH:mm'),
            breakTime: values.breakTime.format('HH:mm'),
            endTime: values.endTime.format('HH:mm'),
            reviewTime: values.reviewTime.format('HH:mm'),
            weekdays: selectedWeekdays
        };
        setScheduleDetails(formattedValues);
        setShowSchedule(true);
    };

    const handleWeekdayChange = (checkedValues) => {
        setSelectedWeekdays(checkedValues);
    };

    return (
        <Layout>
            <h1 className='text-center'>Apply Doctor</h1>
            <Form layout='vertical' onFinish={handleFinish} className="m-3">
                <h3 className='text-light'>Doctor Information :</h3>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item name="doctorName" label="Doctor Name" required rules={[{ required: true }]}>
                            <Input type='text' placeholder='Enter Your Name' defaultValue="John Doe" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item name="specialization" label="Specialization" required rules={[{ required: true }]}>
                            <Input type='text' placeholder='Enter your Specialization' defaultValue="Cardiologist" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item name="startTime" label="Duty Start Time" required rules={[{ required: true }]}>
                            <TimePicker format="HH:mm" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item name="breakTime" label="Break Time" required rules={[{ required: true }]}>
                            <TimePicker format="HH:mm" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item name="endTime" label="Duty End Time" required rules={[{ required: true }]}>
                            <TimePicker format="HH:mm" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item name="reviewTime" label="Review Time for Patient" required rules={[{ required: true }]}>
                            <TimePicker format="HH:mm" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Weekday Selection" required>
                            <div className="weekday-selection">
                                <Checkbox.Group style={{ width: '100%' }} onChange={handleWeekdayChange}>
                                    <Row>
                                        <Col span={24}><Checkbox value="monday">Monday</Checkbox></Col>
                                        <Col span={24}><Checkbox value="tuesday">Tuesday</Checkbox></Col>
                                        <Col span={24}><Checkbox value="wednesday">Wednesday</Checkbox></Col>
                                        <Col span={24}><Checkbox value="thursday">Thursday</Checkbox></Col>
                                        <Col span={24}><Checkbox value="friday">Friday</Checkbox></Col>
                                        <Col span={24}><Checkbox value="saturday">Saturday</Checkbox></Col>
                                        <Col span={24}><Checkbox value="sunday">Sunday</Checkbox></Col>
                                    </Row>
                                </Checkbox.Group>
                            </div>
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" className='customer-button'>Create Schedule</Button>
                {showSchedule && (
                    <div className="schedule-details">
                        <h3 className='text-info'>Schedule Information :</h3>
                        <p>Start Time: {scheduleDetails && scheduleDetails.startTime}</p>
                        <p>Break Time: {scheduleDetails && scheduleDetails.breakTime}</p>
                        <p>End Time: {scheduleDetails && scheduleDetails.endTime}</p>
                        <p>Review Time: {scheduleDetails && scheduleDetails.reviewTime}</p>
                        <p>Weekdays: {scheduleDetails && scheduleDetails.weekdays.join(', ')}</p>
                    </div>
                )}
            </Form>
        </Layout>
    );
};

export default ApplyDoctor;
