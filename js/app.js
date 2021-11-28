const locationArray = [{
        lat: "28.37N",
        long: "77.13E"
    },
    {
        lat: "77.13E",
        long: "77.02W"
    },
    {
        lat: "45.27N",
        long: "75.42W"
    },
    {
        lat: "45.27N",
        long: "75.42W"
    },
    {
        lat: "06.09N",
        long: "01.20E"
    },
    {
        lat: "08.31S",
        long: "179.13E"
    },
    {
        lat: "21.10S",
        long: "174.00W"
    },
    {
        lat: "36.50N",
        long: "10.11E"
    },
    {
        lat: "39.57N",
        long: "32.54E"
    },
    {
        lat: "38.00N",
        long: "57.50E"
    },
    {
        lat: "08.31S",
        long: "179.13E"
    },

]
const bike_location_data = []
theftLoc = {
    lat: "73.6017W",
    long: "45.4445N"
}
const theftLocUrl = `https://google.com/maps?q=${theftLoc.lat},${theftLoc.long}`

const bike_location = () => {
    const id = Math.floor(Math.random() * 10);
    const latitude = locationArray[id].lat
    const longitude = locationArray[id].long
    const url = `https://google.com/maps?q=${latitude},${longitude}`

    window.open(url)
}

document.querySelector('#bike_loc_1').addEventListener('click', bike_location)
    //document.querySelector('#bike_loc_2').addEventListener('click', bike_location)
document.querySelector('#bike_loc_3').addEventListener('click', bike_location)


// Theft
const time_theft = 3 //in Seconds

const theft_bike = setTimeout(() => {
    document.querySelector('#bike_loc_2').classList.remove("orange");
    document.querySelector('#bike_loc_2').classList.add("red");

    //alert(theftLocUrl)
    Swal.fire({
            icon: 'error',
            title: 'Theft Alert for Bike - 2',
            showDenyButton: true,
            denyButtonText: `Current location`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isDenied) {
                window.open(theftLocUrl)
            }
        })
        //console.log("initiated")
}, time_theft * 1000);



//DATA Save
let data = document.querySelector('#track_frequency').value || 60

const saveData = setInterval(() => {

    //Get Live Location
    const id = Math.floor(Math.random() * 10);
    const latitude = locationArray[id].lat
    const longitude = locationArray[id].long
    const url = `https://google.com/maps?q=${latitude},${longitude}`

    //Creating the Data Object
    const data_object = {
        timeStamp: Date.now(),
        location: url
    }

    // bike_location_data.push(data_object)
    // console.log(bike_location_data)


}, (data * 1000))