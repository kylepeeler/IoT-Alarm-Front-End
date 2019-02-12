export function toUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getHourObj(hour){
  let ampmHour = hour;
  let evening = false;
  if (isNaN(hour)) {
    ampmHour = null;
    evening = null;
  } else if (hour >= 12) {
    ampmHour = String(ampmHour - 12);
    evening = true;
  } else if (hour === 0){
    hour = 12;
    ampmHour = "12";
    evening = false;
  } else {
    ampmHour = String(ampmHour);
    evening = false;
  }
  return {
    hour,
    ampmHour,
    evening
  }
}

export function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(color) {
  return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}