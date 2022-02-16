const upgradeData = [
  {
    name: "근본",
    price: "0MsP",
    description: "트리의 근원지입니다.",
    position: { x: "50%", y: "5%" },
    bought: true,
    color: {
      hueRotate: "305deg",
      saturate: "40%",
      brightness: "200%",
    },
  },
  {
    name: "자동화 I",
    price: "1MsP",
    description: "1시간마다, 숫자가 1 증가합니다.(베개가 잘 때 제외)",
    position: { x: "20%", y: "15%" },
    bought: true,
    color: {
      hueRotate: "-20deg",
      saturate: "30%",
      brightness: "250%",
    },
  },
  {
    name: "페일세이프 I",
    price: "1MsP",
    description: "숫자 잘못 세기의 패널티가 2로 줄어듭니다.",
    position: { x: "40%", y: "15%" },
    bought: true,
    color: {
      hueRotate: "230deg",
      saturate: "80%",
      brightness: "150%",
    },
  },
  {
    name: "고정",
    price: "1MsP",
    description: "로그 채널에서의 원하는 메시지를 고정할 수 있습니다.",
    position: { x: "60%", y: "15%" },
    bought: true,
    color: {
      hueRotate: "60deg",
      saturate: "100%",
      brightness: "100%",
    },
  },
  {
    name: "행운 I",
    price: "1MsP",
    description: "숫자를 셀 때마다, 5% 확률로 숫자가 추가로 2 증가합니다.",
    position: { x: "10%", y: "25%" },
    bought: true,
    color: {
      hueRotate: "40deg",
      saturate: "100%",
      brightness: "150%",
    },
  },
  {
    name: "자동화 II",
    price: "1MsP",
    description: "매일 아침 11시(등교시 오전 6시)마다, 숫자가 8 증가합니다.",
    position: { x: "20%", y: "25%" },
    bought: true,
    color: {
      hueRotate: "-20deg",
      saturate: "30%",
      brightness: "250%",
    },
  },
  {
    name: "페일세이프 II",
    price: "1MsP",
    description: "숫자를 잘못 셌을 때, 40% 확률로 패널티가 주어지지 않습니다.",
    position: { x: "40%", y: "25%" },
    bought: false,
    color: {
      hueRotate: "230deg",
      saturate: "80%",
      brightness: "150%",
    },
  },
  {
    name: "아이템화",
    price: "1MsP >=700 -200",
    description:
      "수정을 정산할 때, 수정 크기에 비례하는 확률로 계산기를 얻습니다.",
    position: { x: "50%", y: "25%" },
    bought: true,
    color: {
      hueRotate: "60deg",
      saturate: "50%",
      brightness: "200%",
    },
  },
  {
    name: "업그레이드 I",
    price: "1MsP >=500",
    description: "구매에 일정 시간을 요구하는 업그레이드를 추가합니다.",
    position: { x: "60%", y: "25%" },
    bought: true,
    color: {
      hueRotate: "230deg",
      saturate: "50%",
      brightness: "150%",
    },
  },
  {
    name: "행운 II",
    price: "1MsP -40",
    description:
      "수정의 크기가 커질 때, 10% 확률로 그 때 한정으로 증가량이 3배가 됩니다.",
    position: { x: "10%", y: "55%" },
    bought: false,
    color: {
      hueRotate: "40deg",
      saturate: "100%",
      brightness: "150%",
    },
  },
  {
    name: "결정화",
    price: "1MsP >=200",
    description: "수정 포인트를 해금합니다.",
    position: { x: "30%", y: "45%" },
    bought: true,
    color: {
      hueRotate: "180deg",
      saturate: "20%",
      brightness: "250%",
    },
  },
  {
    name: "저비용",
    price: "1MsP >=200",
    description: "숫자를 차감하는 업그레이드는 10% 덜 차감하게 됩니다.",
    position: { x: "30%", y: "25%" },
    bought: false,
    color: {
      hueRotate: "270deg",
      saturate: "70%",
      brightness: "150%",
    },
  },
  {
    name: "석영 I",
    price: "1Msp >=400",
    description: "수정 포인트로 환산되는 양이 20% 증가합니다.",
    position: { x: "20%", y: "55%" },
    bought: true,
    color: {
      hueRotate: "270deg",
      saturate: "10%",
      brightness: "250%",
    },
  },
  {
    name: "방해석",
    price: "-150",
    description: "수정 포인트의 Cottoned 소프트캡이 1500cm³ 미뤄집니다.",
    position: { x: "30%", y: "55%" },
    bought: true,
    color: {
      hueRotate: "270deg",
      saturate: "0%",
      brightness: "300%",
    },
  },
  {
    name: "석영 II",
    price: "1Msp >=1200",
    description: "수정 포인트로 환산되는 양이 40% 증가합니다.",
    position: { x: "20%", y: "65%" },
    bought: false,
    color: {
      hueRotate: "270deg",
      saturate: "10%",
      brightness: "250%",
    },
  },
  {
    name: "< Point >",
    price: "1MsP >=800 -50 2h",
    description: `게임 상태를 "티어 1"으로 변경합니다.`,
    position: { x: "40%", y: "5%" },
    bought: true,
    color: {
      hueRotate: "170deg",
      saturate: "100%",
      brightness: "80%",
    },
  },
  {
    name: "석고",
    price: "-100 48h",
    description: "수정 포인트의 Cottoned 소프트캡이 30% 약화됩니다.",
    position: { x: "40%", y: "55%" },
    bought: false,
    color: {
      hueRotate: "220deg",
      saturate: "10%",
      brightness: "250%",
    },
  },
  {
    name: "업그레이드 II",
    price: "1MsP >=1000 10m",
    description: "구매에 수정 크기를 요구하는 업그레이드를 추가합니다.",
    position: { x: "60%", y: "35%" },
    bought: true,
    color: {
      hueRotate: "230deg",
      saturate: "50%",
      brightness: "150%",
    },
  },
  {
    name: "알림",
    price: "T1 1MsP",
    description: "로그에 새로운 메시지가 추가되면 멘션이 가는 역할을 만듭니다.",
    position: { x: "80%", y: "15%" },
    bought: false,
    color: {
      hueRotate: "290deg",
      saturate: "100%",
      brightness: "200%",
    },
  },
  {
    name: "석영 계산기",
    price: "T1 1MsP",
    description: "계산기의 품질은 정산한 수정의 크기에 비례하게 됩니다.",
    position: { x: "60%", y: "55%" },
    bought: false,
    color: {
      hueRotate: "100deg",
      saturate: "20%",
      brightness: "200%",
    },
  },
  {
    name: "활석",
    price: "T1 1MsP >=2000",
    description:
      "수정 크기의 하드캡을 없앱니다. 다만, 3000cm³부터 크기 소프트캡들이 적용되기 시작합니다.",
    position: { x: "50%", y: "55%" },
    bought: true,
    color: {
      hueRotate: "130deg",
      saturate: "20%",
      brightness: "250%",
    },
  },
  {
    name: "수동적 실수",
    price: "T1 1MsP 1m",
    description:
      "어떠한 이유로 관리자가 숫자를 셀 경우, 10% 확률로 숫자를 잘못 셉니다. 이 경우, 잘못 센 대가로 숫자가 5 추가로 증가합니다.",
    position: { x: "20%", y: "45%" },
    bought: false,
    color: {
      hueRotate: "120deg",
      saturate: "100%",
      brightness: "120%",
    },
  },
  {
    name: "공작석",
    price: "1MsP",
    description: "수정 포인트의 fibered가 50% 약화됩니다.",
    position: { x: "30%", y: "65%" },
    bought: false,
    color: {
      hueRotate: "50deg",
      saturate: "100%",
      brightness: "80%",
    },
  },
  {
    name: "계산기 제작",
    price: "계산기(품질 40+) 1개",
    description: "숫자를 셀 때 1% 확률로 계산기를 생성합니다.",
    position: { x: "50%", y: "35%" },
    bought: true,
    color: {
      hueRotate: "100deg",
      saturate: "10%",
      brightness: "300%",
    },
  },
  {
    name: "업그레이드 III",
    price: "1MsP -400 30m<br>수정 5000cm³이상",
    description: "구매에 다수의 동의를 요구하는 업그레이드를 추가합니다.",
    position: { x: "60%", y: "45%" },
    bought: false,
    color: {
      hueRotate: "230deg",
      saturate: "50%",
      brightness: "150%",
    },
  },
  {
    name: "자동화 III",
    price: "1MsP 수정 -3200cm³",
    description:
      "자동화 I, 자동화 II의 효과를 대체합니다. 오전/오후 6시, 12시마다 숫자가 10 증가합니다.",
    position: { x: "20%", y: "35%" },
    bought: false,
    color: {
      hueRotate: "-20deg",
      saturate: "30%",
      brightness: "250%",
    },
  },
  {
    name: "황철석",
    price: "1MsP 수정 -2500cm³",
    description:
      "숫자에 비례해서, 수정 포인트 환산량이 증가합니다. (2.15 오후 2시 기준 1.4배)",
    position: { x: "10%", y: "65%" },
    bought: false,
    color: {
      hueRotate: "-40deg",
      saturate: "50%",
      brightness: "250%",
    },
  },
  {
    name: "계산기 파괴",
    price: "계산기 4개<br>수정 8000cm³ 이상",
    description:
      "사용하지 않은 계산기는 파괴할 수 있게 됩니다. 파괴한 계산기의 품질만큼의 숫자를 더합니다.",
    position: { x: "50%", y: "45%" },
    bought: false,
    color: {
      hueRotate: "240deg",
      saturate: "50%",
      brightness: "300%",
    },
  },
  {
    name: "휘석",
    price: "수정 -150cm³ 3h",
    description: "수정이 더 빨리 자랍니다. (+3 -> +3.5)",
    position: { x: "70%", y: "55%" },
    bought: true,
    color: {
      hueRotate: "0deg",
      saturate: "20%",
      brightness: "100%",
    },
  },
  {
    name: "흑운모",
    price: "1MsP",
    description: "수정 포인트의 Fibered 소프트캡이 800cm³ 미뤄집니다.",
    position: { x: "70%", y: "65%" },
    bought: false,
    color: {
      hueRotate: "0deg",
      saturate: "10%",
      brightness: "30%",
    },
  },
  {
    name: "형석",
    price: "1MsP 수정 6000cm³ 이상",
    description: "수정 크기의 Fibered 소프트캡이 2000cm³ 미뤄집니다.",
    position: { x: "50%", y: "65%" },
    bought: false,
    color: {
      hueRotate: "150deg",
      saturate: "100%",
      brightness: "250%",
    },
  },
];
const connectionData = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
  [1, 5],
  [2, 6],
  [4, 9],
  [5, 10, true],
  [6, 10, true],
  [10, 7],
  [2, 7],
  [2, 8],
  [2, 11],
  [1, 11],
  [10, 9],
  [10, 12],
  [10, 13],
  [12, 14],
  [1, 15, false, "#bbb"],
  [2, 15, false, "#bbb"],
  [3, 15, false, "#bbb"],
  [10, 16],
  [8, 17],
  [0, 18],
  [0, 18],
  [7, 19, true],
  [10, 19, true],
  [10, 20],
  [2, 21],
  [4, 21],
  [13, 22],
  [7, 23],
  [17, 24],
  [5, 25],
  [12, 26],
  [23, 27],
  [10, 28],
  [28, 29],
  [20, 30],
];

// render Upgrades
const upgradeContainer = document.querySelector("#upgradeContainer");
const upgradeElement = document.querySelector("#upgrade").innerHTML;

for (item of upgradeData) {
  const clonedUpgrade = upgradeElement
    .replace("{upgradeName}", item.name)
    .replace("{upgradePrice}", item.price)
    .replace("0%", item.position.x)
    .replace("1%", item.position.y)
    .replace(
      "filters",
      item.bought
        ? `hue-rotate(${item.color.hueRotate}) ` +
            `saturate(${item.color.saturate}) ` +
            `brightness(${item.color.brightness})`
        : ""
    )
    .replace("bought", item.bought ? "bought" : "");
  upgradeContainer.innerHTML += clonedUpgrade;
}

// render Descriptions
const descriptionContainer = document.querySelector("#descriptionContainer");
const descriptionElement = document.querySelector("#description").innerHTML;

for (item of upgradeData) {
  const clonedDescription = descriptionElement
    .replace("{id}", upgradeData.indexOf(item))
    .replace("{upgradeDescription}", item.description)
    .replace("0%", item.position.x)
    .replace("1%", item.position.y)
    .replace(
      "filters",
      item.bought
        ? `hue-rotate(${item.color.hueRotate}) ` +
            `saturate(${item.color.saturate}) ` +
            `brightness(${item.color.brightness})`
        : ""
    )
    .replace("bought", item.bought ? "bought" : "");
  descriptionContainer.innerHTML += clonedDescription;
}

Array.from(document.querySelectorAll(".upgrade")).forEach((v, i) =>
  v.addEventListener("click", () => {
    const description = document.querySelector(`[data-id='${i}']`);
    description.classList.contains("shown")
      ? description.classList.remove("shown")
      : description.classList.add("shown");
  })
);

// render lines
setInterval(draw, 100);

function draw() {
  const canvas = document.getElementById("connectionCanvas");
  var ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  ctx.lineWidth = 5;
  for (item of connectionData) {
    const pos = item.map((v, i) => {
      if (i >= 2) return;
      let percentPos = upgradeData[v].position;
      return {
        x: percentToWidthPx(percentPos.x),
        y: percentToHeightPx(percentPos.y),
      };
    });

    ctx.beginPath();
    ctx.moveTo(pos[0].x, pos[0].y);
    ctx.lineTo(pos[1].x, pos[1].y);
    ctx.setLineDash(item[2] ? [10, 10] : []);
    ctx.strokeStyle =
      upgradeData[item[0]].bought && upgradeData[item[1]].bought
        ? item[3] ?? "#888"
        : "#444";
    ctx.stroke();

    const middle = {
      x: (pos[0].x + pos[1].x) / 2,
      y: (pos[0].y + pos[1].y) / 2,
    };
    const arrowLength = 13;
    // arrow
    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.lineTo(
      middle.x +
        arrowLength *
          Math.cos(
            (3 / 4) * Math.PI +
              Math.atan2(pos[1].y - pos[0].y, pos[1].x - pos[0].x)
          ),
      middle.y +
        arrowLength *
          Math.sin(
            (3 / 4) * Math.PI +
              Math.atan2(pos[1].y - pos[0].y, pos[1].x - pos[0].x)
          )
    );
    ctx.setLineDash([]);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(middle.x, middle.y);
    ctx.lineTo(
      middle.x +
        arrowLength *
          Math.cos(
            (5 / 4) * Math.PI +
              Math.atan2(pos[1].y - pos[0].y, pos[1].x - pos[0].x)
          ),
      middle.y +
        arrowLength *
          Math.sin(
            (5 / 4) * Math.PI +
              Math.atan2(pos[1].y - pos[0].y, pos[1].x - pos[0].x)
          )
    );
    ctx.stroke();
  }
}

function percentToHeightPx(p) {
  return Math.floor((window.innerHeight * +p.substring(0, p.length - 1)) / 100);
}
function percentToWidthPx(p) {
  return Math.floor((window.innerWidth * +p.substring(0, p.length - 1)) / 100);
}

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const menuBtnOpened = false;
menuBtn.addEventListener("click", () =>
  menu.classList.contains("opened")
    ? menu.classList.remove("opened")
    : menu.classList.add("opened")
);

const menuButtons = document.querySelectorAll(".menu-button");
const tabCloseBtns = document.querySelectorAll(".tab-close-btn");
Array.from(menuButtons).forEach((v) => {
  const tabBg = document.querySelector(
    `.tab-bg[data-tabid='${v.dataset.tabid}']`
  );
  if (!tabBg) return;
  v.addEventListener("click", () =>
    tabBg.classList.contains("shown")
      ? tabBg.classList.remove("shown")
      : tabBg.classList.add("shown")
  );
});

Array.from(tabCloseBtns).forEach((v) =>
  v.addEventListener("click", () =>
    document
      .querySelector(`.tab-bg[data-tabid='${v.dataset.tabid}']`)
      .classList.remove("shown")
  )
);

const calcTimeInput = document.querySelector("#calcTimeInput");
const calcSizeInput = document.querySelector("#calcSizeInput");
const calcPointInput = document.querySelector("#calcPointInput");
const calcNumberOutput = document.querySelector("#calcOutput");
let calcTime = 1;
let calcSize = 1;
let calcPoint = 1;
let calcNumber = 1;
let lastUsedCalc = 0;

const calcUpgrades = new Array(
  document.querySelector("#calcUpgrades").children.length - 1
).fill(false);
const calcUpgradeButtons = document.querySelectorAll(".calc-upgrade");
Array.from(calcUpgradeButtons).forEach((v, i) =>
  v.addEventListener("click", () => {
    calcUpgrades[i] = !calcUpgrades[i];
    v.classList.contains("activated")
      ? v.classList.remove("activated")
      : v.classList.add("activated");
    switch (lastUsedCalc) {
      case 0:
        timeInputHandler(calcTime);
        break;
      case 1:
        sizeInputHandler(calcSize);
        break;
      case 2:
        pointInputHandler(calcPoint);
        break;
    }
    setFormula();
  })
);

const calcCottened = {
  from() {
    return calcUpgrades[2] ? 4500 : 3000;
  },
  apply(v) {
    return v >= calcCottened.from()
      ? (v - calcCottened.from()) ** (calcUpgrades[3] ? 0.79 : 0.7) +
          calcCottened.from()
      : v;
  },
  invApply(v) {
    return v >= calcCottened.from()
      ? (v - calcCottened.from()) ** (calcUpgrades[3] ? 1 / 0.79 : 1 / 0.7) +
          calcCottened.from()
      : v;
  },
};
const calcFibered = {
  from() {
    return calcUpgrades[6] ? 1000 : 200;
  },
  apply(v) {
    return v >= calcFibered.from()
      ? (calcUpgrades[4]
          ? ((v - calcFibered.from()) * 9) / 10
          : ((v - calcFibered.from()) * 4) / 5) + calcFibered.from()
      : v;
  },
  invApply(v) {
    return v >= calcFibered.from()
      ? (calcUpgrades[4]
          ? ((v - calcFibered.from()) * 10) / 9
          : ((v - calcFibered.from()) * 5) / 4) + calcFibered.from()
      : v;
  },
};

const timeInputHandler = (v) => {
  lastUsedCalc = 0;
  calcTime = +v;
  calcSize = ((calcUpgrades[5] ? 3.5 : 3) * (calcTime - 1) * calcTime) / 2 + 1;
  calcPoint = Math.floor(
    calcCottened.apply(
      calcFibered.apply(
        (((calcUpgrades[0] ? 120 : 100) * (calcUpgrades[1] ? 140 : 100)) /
          10000) *
          calcSize
      )
    )
  );
  calcNumber = Math.floor(calcPoint / 100);
  setFormula();
};
const sizeInputHandler = (v) => {
  lastUsedCalc = 1;
  calcSize = +v;
  calcTime =
    (calcUpgrades[5]
      ? Math.sqrt(7 * (16 * calcSize - 9)) / 14
      : Math.sqrt(3 * (8 * calcSize - 5)) / 6) +
    1 / 2;
  calcPoint = Math.floor(
    calcCottened.apply(
      calcFibered.apply(
        (((calcUpgrades[0] ? 120 : 100) * (calcUpgrades[1] ? 140 : 100)) /
          10000) *
          calcSize
      )
    )
  );
  calcNumber = Math.floor(calcPoint / 100);
  setFormula();
};
const pointInputHandler = (v) => {
  lastUsedCalc = 2;
  calcPoint = +v;
  calcSize =
    (10000 / ((calcUpgrades[0] ? 120 : 100) * (calcUpgrades[1] ? 140 : 100))) *
    calcFibered.invApply(calcCottened.invApply(calcPoint));
  calcTime = Math.sqrt(3 * (8 * calcSize - 5)) / 6 + 1 / 2;
  calcNumber = Math.floor(calcPoint / 100);
  setFormula();
};

calcTimeInput.addEventListener("input", (e) =>
  timeInputHandler(e.target.value)
);
calcSizeInput.addEventListener("input", (e) =>
  sizeInputHandler(e.target.value)
);
calcPointInput.addEventListener("input", (e) => {
  pointInputHandler(e.target.value);
});

function setFormula() {
  document.querySelector("#calcFormulaText").innerHTML = `
  수정 포인트+${
    calcUpgrades[0] ? (calcUpgrades[1] ? 68 : 20) : calcUpgrades[1] ? 40 : 0
  }%<br>Fibered ${calcFibered.from()} 
  ${calcSize >= 200 ? "적용" : "미적용"}
  *${calcUpgrades[4] ? 90 : 80}%<br>
  Cottened ${calcCottened.from()} 
  ${calcSize >= calcCottened.from() ? "적용" : "미적용"} 
  ^${calcUpgrades[3] ? 0.79 : 0.7}`;

  calcTimeInput.value = (Math.floor(calcTime * 10) / 10).toLocaleString(
    "fullwide",
    { useGrouping: false }
  );
  calcSizeInput.value = (Math.floor(calcSize * 10) / 10).toLocaleString(
    "fullwide",
    { useGrouping: false }
  );
  calcPointInput.value = (Math.floor(calcPoint * 10) / 10).toLocaleString(
    "fullwide",
    { useGrouping: false }
  );
  calcTimeInput.style.width = calcTimeInput.value.length + "ch";
  calcSizeInput.style.width = calcSizeInput.value.length + "ch";
  calcPointInput.style.width = calcPointInput.value.length + "ch";
  calcNumberOutput.innerHTML = calcNumber;
}

document.querySelector("#upgradeList").innerHTML = upgradeData
  .filter((v) => v.bought)
  .map((v) => v.description)
  .join("<br>");
