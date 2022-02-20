const upgradeData = treeData.upgrades;
const connectionData = treeData.connections;

// render Upgrades
const upgradeContainer = document.querySelector("#upgradeContainer");
const upgradeElement = document.querySelector("#upgrade").innerHTML;

for (item of upgradeData) {
  const clonedUpgrade = upgradeElement
    .replace("{upgradeName}", item.name)
    .replace("{upgradePrice}", item.price)
    .replace("0%", item.position.x)
    .replace("1%", item.position.y)
    .replace("0px", (item.letterSpacing ?? 0) + "px")
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
