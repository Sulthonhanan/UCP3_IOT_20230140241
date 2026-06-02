import Chart from 'chart.js/auto';

// Tempelkan JSON Anda di sini
const result = {
  year: "2023",
  datasensorreport: [
    {
      institute: "University of Muhammadiyah Yogyakarta",
      faculty: "Engineering",
      major: "Information Technology",
      sensordata: [
       {
            "sensor_id": "1",
            "timestamp": "2023-05-1T10:15:00Z",
            "temperature": 25.6,
            "humidity": 60.2,
            "pressure": 1013.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-1T10:15:02Z",
            "temperature": 26.6,
            "humidity": 61.2,
            "pressure": 1014.7,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-2T10:15:04Z",
            "temperature": 27.6,
            "humidity": 62.2,
            "pressure": 1015.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-2T11:15:06Z",
            "temperature": 28.6,
            "humidity": 63.2,
            "pressure": 1016.3,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-3T10:15:08Z",
            "temperature": 29.6,
            "humidity": 64.2,
            "pressure": 1017.4,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-3T10:15:10Z",
            "temperature": 30.6,
            "humidity": 65.2,
            "pressure": 1011.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-4T10:15:12Z",
            "temperature": 25.8,
            "humidity": 60.5,
            "pressure": 1012.4,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-4T10:15:14Z",
            "temperature": 26.9,
            "humidity": 61.6,
            "pressure": 1017.5,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-5T10:15:16Z",
            "temperature": 27.8,
            "humidity": 61.8,
            "pressure": 1018.3,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-5T10:15:18Z",
            "temperature": 29.6,
            "humidity": 62.9,
            "pressure": 1013.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-6T10:15:20Z",
            "temperature": 25.3,
            "humidity": 60.9,
            "pressure": 1013.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-6T10:15:22Z",
            "temperature": 29.8,
            "humidity": 61.9,
            "pressure": 1011.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-7T10:15:24Z",
            "temperature": 29.8,
            "humidity": 68.9,
            "pressure": 1011.7,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-7T10:15:26Z",
            "temperature": 26.8,
            "humidity": 63.9,
            "pressure": 1011.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-8T10:15:28Z",
            "temperature": 24.8,
            "humidity": 62.5,
            "pressure": 1013.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-8T10:15:30Z",
            "temperature": 26.8,
            "humidity": 68.5,
            "pressure": 1014.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-9T10:15:32Z",
            "temperature": 29.8,
            "humidity": 69.5,
            "pressure": 1021.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-9T10:15:34Z",
            "temperature": 26.9,
            "humidity": 64.5,
            "pressure": 1113.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-10T10:15:36Z",
            "temperature": 26.9,
            "humidity": 63.5,
            "pressure": 1018.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-10T10:15:38Z",
            "temperature": 28.9,
            "humidity": 60.5,
            "pressure": 1015.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-11T10:15:40Z",
            "temperature": 28.3,
            "humidity": 61.5,
            "pressure": 1018.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-11T10:15:42Z",
            "temperature": 30.3,
            "humidity": 67.5,
            "pressure": 1020.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-12T10:15:44Z",
            "temperature": 35.3,
            "humidity": 69.5,
            "pressure": 1027.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-12T10:15:46Z",
            "temperature": 36.6,
            "humidity": 64.7,
            "pressure": 1022.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-13T10:15:48Z",
            "temperature": 36.6,
            "humidity": 64.7,
            "pressure": 1022.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-13T10:15:50Z",
            "temperature": 35.6,
            "humidity": 62.7,
            "pressure": 1032.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-14T10:15:52Z",
            "temperature": 37.6,
            "humidity": 64.7,
            "pressure": 1042.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-14T10:15:54Z",
            "temperature": 30.6,
            "humidity": 60.7,
            "pressure": 1052.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          },
          {
            "sensor_id": "1",
            "timestamp": "2023-05-15T10:15:56Z",
            "temperature": 29.6,
            "humidity": 64.7,
            "pressure": 1042.2,
            "location": {
              "latitude": 37.7749,
              "longitude": -120.4194
            },
            "status": "active"
          },
          {
            "sensor_id": "2",
            "timestamp": "2023-05-15T10:15:58Z",
            "temperature": 28.6,
            "humidity": 62.7,
            "pressure": 1035.2,
            "location": {
              "latitude": 20.6650,
              "longitude": -200.5321
            },
            "status": "active"
          }
      ]
    }
  ]
};

// Ambil data sensor
const sensorData = result.datasensorreport[0].sensordata;

// Pisahkan berdasarkan sensor_id
const sensor1 = sensorData.filter(item => item.sensor_id === "1");
const sensor2 = sensorData.filter(item => item.sensor_id === "2");

// Label tanggal
const labels = sensor1.map(item => {
  return item.timestamp.split("T")[0];
});

// Temperature
const temperature1 = sensor1.map(item => item.temperature);
const temperature2 = sensor2.map(item => item.temperature);

// Humidity
const humidity1 = sensor1.map(item => item.humidity);
const humidity2 = sensor2.map(item => item.humidity);

// Pressure
const pressure1 = sensor1.map(item => item.pressure);
const pressure2 = sensor2.map(item => item.pressure);

// ======================
// TEMPERATURE CHART
// ======================
new Chart(
  document.getElementById('temperatureChart'),
  {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Sensor 1',
          data: temperature1,
          borderColor: 'red',
          backgroundColor: 'red',
          tension: 0.3
        },
        {
          label: 'Sensor 2',
          data: temperature2,
          borderColor: 'blue',
          backgroundColor: 'blue',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Temperature Comparison'
        }
      }
    }
  }
);

// ======================
// HUMIDITY CHART
// ======================
new Chart(
  document.getElementById('humidityChart'),
  {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Sensor 1',
          data: humidity1,
          borderColor: 'green',
          backgroundColor: 'green',
          tension: 0.3
        },
        {
          label: 'Sensor 2',
          data: humidity2,
          borderColor: 'orange',
          backgroundColor: 'orange',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Humidity Comparison'
        }
      }
    }
  }
);

// ======================
// PRESSURE CHART
// ======================
new Chart(
  document.getElementById('pressureChart'),
  {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Sensor 1',
          data: pressure1,
          borderColor: 'purple',
          backgroundColor: 'purple',
          tension: 0.3
        },
        {
          label: 'Sensor 2',
          data: pressure2,
          borderColor: 'brown',
          backgroundColor: 'brown',
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Pressure Comparison'
        }
      }
    }
  }
);