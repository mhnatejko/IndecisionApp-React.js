//import moment from 'moment'; //to nie bo bedzie mocked wersja cos tam.. ? wiece na 12:121
const moment = require.requireActual('moment'); //pozwal an aimport oryginalnego modlu  a nie mocked-ine


export default (timestamp = 0) => {
    return moment(timestamp)
}