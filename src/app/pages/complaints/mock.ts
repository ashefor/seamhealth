export type ColumnData = {
  time: string;
  date: string;
  phone_number: string;
  complaint_type: string;
  rating: string;
  nps: string;
  status: 'Pending' | 'Resolved' | 'Open';
}

export const columns = [
  {
    colName: 'Time',
    fieldName: 'time'
  },
  {
    colName: 'Date',
    fieldName: 'date'
  },
  {
    colName: 'Phone Number',
    fieldName: 'phone_number'
  },
  {
    colName: 'Complaint Type',
    fieldName: 'complaint_type'
  },
  {
    colName: 'Rating',
    fieldName: 'rating'
  },
  {
    colName: 'NPS',
    fieldName: 'nps'
  },
  {
    colName: 'Status',
    fieldName: 'status'
  }
];

export const data: ColumnData[] = [
  {
    "time": "09:00 AM",
    "date": "2023-07-04",
    "phone_number": "+1(123)456-7890",
    "complaint_type": "Delivery",
    "rating": "3.5",
    "nps": "7",
    "status": "Pending"
  },
  {
    "time": "02:30 PM",
    "date": "2023-06-22",
    "phone_number": "+447891234567",
    "complaint_type": "Product Quality",
    "rating": "2",
    "nps": "4",
    "status": "Resolved"
  },
  {
    "time": "10:15 AM",
    "date": "2023-07-01",
    "phone_number": "+61298765432",
    "complaint_type": "Billing",
    "rating": "4.5",
    "nps": "8",
    "status": "Open"
  },
  {
    "time": "04:30 PM",
    "date": "2023-06-15",
    "phone_number": "+1(987)654-3210",
    "complaint_type": "Technical Issue",
    "rating": "5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "08:45 AM",
    "date": "2023-06-30",
    "phone_number": "+33123456789",
    "complaint_type": "Returns",
    "rating": "1",
    "nps": "2",
    "status": "Open"
  },
  {
    "time": "12:30 PM",
    "date": "2023-06-25",
    "phone_number": "+491234567890",
    "complaint_type": "Customer Service",
    "rating": "4",
    "nps": "8",
    "status": "Pending"
  },
  {
    "time": "11:00 AM",
    "date": "2023-06-18",
    "phone_number": "+1(234)567-8901",
    "complaint_type": "Shipping Delay",
    "rating": "3.5",
    "nps": "7",
    "status": "Resolved"
  },
  {
    "time": "03:15 PM",
    "date": "2023-06-29",
    "phone_number": "+442012345678",
    "complaint_type": "Product Defect",
    "rating": "2.5",
    "nps": "5",
    "status": "Pending"
  },
  {
    "time": "10:30 AM",
    "date": "2023-06-20",
    "phone_number": "+61876543210",
    "complaint_type": "Billing",
    "rating": "4",
    "nps": "8",
    "status": "Open"
  },
  {
    "time": "05:30 PM",
    "date": "2023-06-26",
    "phone_number": "+1(987)654-3210",
    "complaint_type": "Technical Issue",
    "rating": "5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "09:45 AM",
    "date": "2023-06-23",
    "phone_number": "+33123456789",
    "complaint_type": "Returns",
    "rating": "1.5",
    "nps": "3",
    "status": "Pending"
  },
  {
    "time": "01:30 PM",
    "date": "2023-06-28",
    "phone_number": "+491234567890",
    "complaint_type": "Customer Service",
    "rating": "4.5",
    "nps": "9",
    "status": "Open"
  },
  {
    "time": "11:45 AM",
    "date": "2023-06-19",
    "phone_number": "+1(234)567-8901",
    "complaint_type": "Shipping Delay",
    "rating": "3",
    "nps": "6",
    "status": "Resolved"
  },
  {
    "time": "04:00 PM",
    "date": "2023-06-27",
    "phone_number": "+442012345678",
    "complaint_type": "Product Defect",
    "rating": "2",
    "nps": "4",
    "status": "Open"
  },
  {
    "time": "10:15 AM",
    "date": "2023-06-21",
    "phone_number": "+61876543210",
    "complaint_type": "Billing",
    "rating": "3.5",
    "nps": "7",
    "status": "Pending"
  },
  {
    "time": "09:15 AM",
    "date": "2023-07-05",
    "phone_number": "+1(987)654-3210",
    "complaint_type": "Technical Issue",
    "rating": "4.5",
    "nps": "8",
    "status": "Open"
  },
  {
    "time": "03:30 PM",
    "date": "2023-07-02",
    "phone_number": "+442012345678",
    "complaint_type": "Product Defect",
    "rating": "3",
    "nps": "6",
    "status": "Pending"
  },
  {
    "time": "10:45 AM",
    "date": "2023-06-24",
    "phone_number": "+61876543210",
    "complaint_type": "Billing",
    "rating": "2.5",
    "nps": "5",
    "status": "Resolved"
  },
  {
    "time": "02:00 PM",
    "date": "2023-07-03",
    "phone_number": "+1(123)456-7890",
    "complaint_type": "Delivery",
    "rating": "3",
    "nps": "6",
    "status": "Open"
  },
  {
    "time": "08:30 AM",
    "date": "2023-06-29",
    "phone_number": "+447891234567",
    "complaint_type": "Product Quality",
    "rating": "4.5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "11:45 AM",
    "date": "2023-06-26",
    "phone_number": "+61298765432",
    "complaint_type": "Billing",
    "rating": "2",
    "nps": "4",
    "status": "Open"
  },
  {
    "time": "04:30 PM",
    "date": "2023-06-18",
    "phone_number": "+1(987)654-3210",
    "complaint_type": "Technical Issue",
    "rating": "5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "08:45 AM",
    "date": "2023-06-30",
    "phone_number": "+33123456789",
    "complaint_type": "Returns",
    "rating": "1",
    "nps": "2",
    "status": "Open"
  },
  {
    "time": "12:15 PM",
    "date": "2023-06-23",
    "phone_number": "+491234567890",
    "complaint_type": "Customer Service",
    "rating": "4",
    "nps": "8",
    "status": "Pending"
  },
  {
    "time": "11:30 AM",
    "date": "2023-06-19",
    "phone_number": "+1(234)567-8901",
    "complaint_type": "Shipping Delay",
    "rating": "3.5",
    "nps": "7",
    "status": "Resolved"
  },
  {
    "time": "03:00 PM",
    "date": "2023-06-28",
    "phone_number": "+442012345678",
    "complaint_type": "Product Defect",
    "rating": "2.5",
    "nps": "5",
    "status": "Open"
  },
  {
    "time": "09:30 AM",
    "date": "2023-06-20",
    "phone_number": "+61876543210",
    "complaint_type": "Billing",
    "rating": "4",
    "nps": "8",
    "status": "Pending"
  },
  {
    "time": "05:00 PM",
    "date": "2023-06-27",
    "phone_number": "+1(987)654-3210",
    "complaint_type": "Technical Issue",
    "rating": "5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "09:45 AM",
    "date": "2023-06-21",
    "phone_number": "+33123456789",
    "complaint_type": "Returns",
    "rating": "1.5",
    "nps": "3",
    "status": "Open"
  },
  {
    "time": "01:30 PM",
    "date": "2023-06-26",
    "phone_number": "+491234567890",
    "complaint_type": "Customer Service",
    "rating": "4.5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "10:00 AM",
    "date": "2023-06-19",
    "phone_number": "+1(234)567-8901",
    "complaint_type": "Shipping Delay",
    "rating": "3",
    "nps": "6",
    "status": "Open"
  },
  {
    "time": "04:15 PM",
    "date": "2023-06-27",
    "phone_number": "+442012345678",
    "complaint_type": "Product Defect",
    "rating": "2",
    "nps": "4",
    "status": "Pending"
  },
  {
    "time": "10:30 AM",
    "date": "2023-06-20",
    "phone_number": "+61876543210",
    "complaint_type": "Billing",
    "rating": "3.5",
    "nps": "7",
    "status": "Resolved"
  },
  {
    "time": "05:30 PM",
    "date": "2023-06-25",
    "phone_number": "+1(987)654-3210",
    "complaint_type": "Technical Issue",
    "rating": "5",
    "nps": "9",
    "status": "Resolved"
  },
  {
    "time": "09:45 AM",
    "date": "2023-06-22",
    "phone_number": "+33123456789",
    "complaint_type": "Returns",
    "rating": "1.5",
    "nps": "3",
    "status": "Pending"
  },
  {
    "time": "02:30 PM",
    "date": "2023-06-28",
    "phone_number": "+491234567890",
    "complaint_type": "Customer Service",
    "rating": "4.5",
    "nps": "9",
    "status": "Open"
  },
  {
    "time": "12:00 PM",
    "date": "2023-06-19",
    "phone_number": "+1(234)567-8901",
    "complaint_type": "Shipping Delay",
    "rating": "3",
    "nps": "6",
    "status": "Resolved"
  },
  {
    "time": "04:30 PM",
    "date": "2023-06-27",
    "phone_number": "+442012345678",
    "complaint_type": "Product Defect",
    "rating": "2",
    "nps": "4",
    "status": "Open"
  },
  {
    "time": "11:00 AM",
    "date": "2023-06-21",
    "phone_number": "+61876543210",
    "complaint_type": "Billing",
    "rating": "3.5",
    "nps": "7",
    "status": "Pending"
  }

]
