// Base URL

const base_url = "https://api.rawg.io/api/";
// Gettimng the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0 ${day}`;
  } else {
    return day;
  }
};
// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentMonth}-${currentDay}-${currentYear}`;
const lastYear = `${currentMonth}-${currentDay}-${currentYear - 1}`;
const nextYear = `${currentMonth}-${currentDay}-${currentYear + 1}`;
console.log(currentDate);
//key things
const key = `${process.env.REACT_APP_GAME_KEY_API}`;
const key_url = `key=${key}`;
//popular games

const popular_games = `games?${key_url}dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());
