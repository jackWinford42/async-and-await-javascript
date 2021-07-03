const validURL = "http://numbersapi.com/42?json";
const multUrl = "http://numbersapi.com/1,2,3?json";
const thirteenURL = "http://numbersapi.com/13?json";

async function threeNums() {
    try {
        const multPromise = await axios.get(multUrl);
        $('#part_two ul').append(`<li>${multPromise.data[1]}</li>`);
        $('#part_two ul').append(`<li>${multPromise.data[2]}</li>`);
        $('#part_two ul').append(`<li>${multPromise.data[3]}</li>`);
    } catch (e) {
        $('part_two').html(e);
    }
}

async function oneNum() {
    try {
        const data = await axios.get(validURL);
        $('#part_one').html(data.data.text);
    } catch (e) {
        $('#part_one').html(e);
    }
}

async function thirteenThreeTimes() {
    threeFacts = Promise.all([
        axios.get(thirteenURL),
        axios.get(thirteenURL),
        axios.get(thirteenURL)
    ]);
    try {
        factsArr = await threeFacts;
    } catch (e) {
        $('#part_three').append(e)
    }
    for (fact in factsArr) {
        $('#part_three').append(`<p>${factsArr[fact].data.text}</p>`);
    }
}

threeNums()
oneNum()
thirteenThreeTimes()