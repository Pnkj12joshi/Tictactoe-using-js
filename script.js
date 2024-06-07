let currentplayer = "0";
let array = Array(9).fill(null); // here i am given array of size 9 which contain null value.

const CheckWinner = () => {
  const result = document.createElement("div");
  result.style.fontSize = "30px";
  result.style.display = "flex";
  result.style.justifyContent = "center";
  result.style.alignItems = "center";

  if (
    (array[0] !== null && array[0] == array[1] && array[1] == array[2]) ||
    (array[0] !== null && array[0] == array[3] && array[3] == array[6]) ||
    (array[2] !== null && array[2] == array[5] && array[5] == array[6]) ||
    (array[6] !== null && array[6] == array[7] && array[7] == array[8]) ||
    (array[0] !== null && array[0] == array[4] && array[4] == array[8]) ||
    (array[2] !== null && array[2] == array[4] && array[4] == array[6]) ||
    (array[3] !== null && array[3] == array[4] && array[4] == array[5])
  ) {
    result.innerText = `${currentplayer} is winner `;
    document.body.appendChild(result);
    return;
  }
  if (!array.some((e) => e === null)) {
    // this line means if  no any index have null value then it will  print Draw
    result.innerText = "Draw";
    document.body.appendChild(result);
    return;
  }
};

const handleclick = (el) => {
  const id = Number(el.id);
  if (array[id] !== null) return; // here this line means if array[id] is not null they it will return and no other line of this function is executed :)
  array[id] = currentplayer;
  el.innerText = array[id];
  CheckWinner();
  currentplayer = currentplayer === "X" ? "0" : "X";
};

const Refreash = () => {
  // this function for reload
  location.reload();
};
