
  // Retrieve the canvas element
  //var ctx = document.getElementById("myChart").getContext("2d"); /data/646e4d3ca3b6680007f3ca6c?to-date=2023-05-26T14:33:21.000z
  // 2023-05-26T14:33:21.000Z
  // Fetch the data from the URL
  fetch("https://api.opensensemap.org/boxes/646e4d3ca3b6680007f3ca6a/data/646e4d3ca3b6680007f3ca72?to-date=2023-05-26T14:33:21.000z")
  //2023-05-26T14:33:21.000Z")
  .then(response => response.json())
  .then(data => {
    // Extract relevant information from the JSON response
    console.log(data)
  
      const sensorBoxData = data.map(entry => ({

        //lastM: entry.lastMeasurement,
          temprature: entry.value,
          measuredtime: entry.createdAt,
       
      }));
    
    // Prepare data for plotting  
    //const id = sensorBoxData.map(entry => entry._id);
    const tempr = sensorBoxData.map(entry => entry.temprature);
    const timem = sensorBoxData.map(entry =>  new Date(entry.measuredtime).toLocaleTimeString()
    );
    console.log("shit time",timem)
    var mytime= new Date("2023-05-26T14:33:21.000Z");
    

    var d=mytime.getHours()
    console.log("my time",d)
     console.log(tempr)
    const canvas = document.getElementsByClassName('canvas');
    const ctx = canvas[0].getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timem
        ,
        datasets: [{
          label: 'Air Pressure',
          data: tempr,
          backgroundColor: 'rgba(0, 123, 255, 0.8)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
                display: true, // Hide X-axis labels
              },
          y: {
             beginAtZero: false
          }
        }
      }
    });
    
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Fetch the data from the URL
  fetch("https://api.opensensemap.org/boxes/646e4d3ca3b6680007f3ca6a/data/646e4d3ca3b6680007f3ca6c?to-date=2023-05-26T14:33:21.000z")
  //2023-05-26T14:33:21.000Z")
  .then(response => response.json())
  .then(data => {
    // Extract relevant information from the JSON response
    console.log(data)
    const sensorBoxData = data.map(entry => ({
       temprature: entry.value,
       measuredtime: entry.createdAt,
      
     }));

    // Prepare data for plotting   
    //const id = sensorBoxData.map(entry => entry._id);
    const tempr = sensorBoxData.map(entry => entry.temprature);
    const timem = sensorBoxData.map(entry =>new Date(entry.measuredtime).toLocaleTimeString());
     console.log(tempr)
     console.log(timem)
    // Plot the data initailly worked with getElementByID but didnt work
    const canvas1 = document.getElementsByClassName('canvas1');
    const ctx = canvas1[0].getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: timem
        ,
        datasets: [{
          label: 'Soil Moisture',
          data: tempr,
          backgroundColor: 'rgba(139, 69, 19, 0.8)'
         // backgroundColor: ['red', 'green', 'blue', 'yellow'], // Specify colors here
          //borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
                display: true, // Hide X-axis labels
              },
          y: {
             beginAtZero: false,
          }
        }
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
// Fetch the data from the URL
  fetch("https://api.opensensemap.org/boxes/646e4d3ca3b6680007f3ca6a/data/646e4d3ca3b6680007f3ca71?to-date=2023-05-26T14:33:21.000z")
  //2023-05-26T14:33:21.000Z")
  .then(response => response.json())
  .then(data => {
    // Extract relevant information from the JSON response
    console.log(data)
    
    const sensorBoxData = data.map(entry => ({
       temprature: entry.value,
       measuredtime: entry.createdAt,
       
     }));

    // Prepare data for plotting
    //const id = sensorBoxData.map(entry => entry._id);
    const tempr = sensorBoxData.map(entry => entry.temprature);
    const timem = sensorBoxData.map(entry => new Date(entry.measuredtime).toLocaleTimeString())
    //const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    //console.log(id)
     console.log(tempr)
     console.log(timem)
    // Plot the data initailly worked with getElementByID but didnt work
    const canvas2 = document.getElementsByClassName('canvas2');
    const ctx = canvas2[0].getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timem
        ,
        datasets: [{
          label: 'Temperature',
          data: tempr,
          backgroundColor: 'rgba(255, 0, 0, 0.8)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
                display: true, // Hide X-axis labels
              },
          y: {
             beginAtZero: false,
          }
        }
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Fetch the data from the URL
  fetch("https://api.opensensemap.org/boxes/646e4d3ca3b6680007f3ca6a/data/646e4d3ca3b6680007f3ca70?to-date=2023-05-26T14:33:21.000z")
  //2023-05-26T14:33:21.000Z")
  .then(response => response.json())
  .then(data => {
    // Extract relevant information from the JSON response
    console.log(data)
    const sensorBoxData = data.map(entry => ({
       temprature: entry.value,
       measuredtime: entry.createdAt,
       
     }));

    // Prepare data for plotting
    const tempr = sensorBoxData.map(entry => entry.temprature);
    const timem = sensorBoxData.map(entry => new Date(entry.measuredtime).toLocaleTimeString());
     console.log(tempr)
     console.log(timem)
    // Plot the data initailly worked with getElementByID but didnt work
    const canvas3 = document.getElementsByClassName('canvas3');
    const ctx = canvas3[0].getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: timem
        ,
        datasets: [{
          label: 'illuminance',
          data: tempr,
          //backgroundColor: 'rgba(148, 0, 211, 0.8)'
          backgroundColor: ['red', 'green', 'blue'], // Specify colors here
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
                display: true, // Hide X-axis labels
              },
          y: {
             beginAtZero: false,
          }
        }
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
