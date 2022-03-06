const treeData = {
  upgrades: [
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
      description: "매일 오후 3시마다, 숫자가 4 증가합니다.",
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
      description: "자동화 I에 의해 오르는 수는 30% 확률로 2배가 됩니다.",
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
      description: "매일 오후 3시마다, 숫자가 8 증가합니다.",
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
      description:
        "숫자를 잘못 셌을 때, 40% 확률로 패널티가 주어지지 않습니다.",
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
      bought: true,
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
      name: "저비용 I",
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
      position: { x: "30%", y: "55%" },
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
      position: { x: "40%", y: "65%" },
      bought: true,
      color: {
        hueRotate: "270deg",
        saturate: "0%",
        brightness: "300%",
      },
    },
    {
      name: "석영 II",
      price: "1MsP >=1200",
      description: "수정 포인트로 환산되는 양이 40% 증가합니다.",
      position: { x: "30%", y: "65%" },
      bought: true,
      color: {
        hueRotate: "270deg",
        saturate: "10%",
        brightness: "250%",
      },
    },
    {
      name: "< Point >",
      price: "1MsP >=800 -50 2h",
      description: '게임 상태를 "티어 1"으로 변경합니다.',
      position: { x: "60%", y: "5%" },
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
      bought: true,
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
      position: { x: "70%", y: "25%" },
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
      description:
        "로그에 새로운 메시지가 추가되면 멘션이 가는 역할을 만듭니다.",
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
      bought: true,
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
      position: { x: "30%", y: "35%" },
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
      position: { x: "40%", y: "75%" },
      bought: true,
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
      price: "1MsP -400 30m<br>수정 >=5000cm³",
      description: "구매에 다수의 동의를 요구하는 업그레이드를 추가합니다.",
      position: { x: "80%", y: "25%" },
      bought: true,
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
      bought: true,
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
      position: { x: "20%", y: "75%" },
      bought: false,
      color: {
        hueRotate: "-40deg",
        saturate: "50%",
        brightness: "250%",
      },
    },
    {
      name: "계산기 파괴",
      price: "계산기 4개<br>수정 >=8000cm³",
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
      price: "1MsP 수정 >=6000cm³",
      description: "수정 크기의 Fibered 소프트캡이 2000cm³ 미뤄집니다.",
      position: { x: "50%", y: "65%" },
      bought: false,
      color: {
        hueRotate: "150deg",
        saturate: "100%",
        brightness: "250%",
      },
    },
    {
      name: "정년",
      price: "1MsP",
      description: "계산기 옵션을 1개 추가합니다.",
      position: { x: "10%", y: "5%" },
      bought: true,
      color: {
        hueRotate: "-80deg",
        saturate: "100%",
        brightness: "100%",
      },
    },
    {
      name: "베개합금 계산기",
      price: "-22 계산기 2개 22m",
      description:
        "계산기의 지속 시간은 적어도 30분보다 길게 되며, 계산기의 품질 최댓값이 25 증가합니다.",
      position: { x: "60%", y: "35%" },
      bought: true,
      letterSpacing: -3,
      color: {
        hueRotate: "-30deg",
        saturate: "100%",
        brightness: "200%",
      },
    },
    {
      name: "베개산기",
      price: "-200 계산기 1개<br>수정 >=12222cm³",
      description:
        "베개와 관련된 계산기 옵션 4개를 해금합니다. 모두 직접적인 수 증가와 관련되어 있습니다.",
      position: { x: "60%", y: "45%" },
      bought: true,
      color: {hueRotate: "-30deg",
        saturate: "100%",
        brightness: "200%",
      },
    },
    {
      name: "업그레이드 IV",
      price: "1MsP -800 3h<br>5인 이상 동의",
      description: "구매에 특별한 트리거를 요구하는 업그레이드를 추가합니다.",
      position: { x: "90%", y: "25%" },
      bought: false,
      color: {
        hueRotate: "230deg",
        saturate: "50%",
        brightness: "150%",
      },
    },
    {
      name: "< Line >",
      price: "설명 참조",
      description:
        "게임 상태를 \'티어 2\'으로 변경합니다.<br>해금법 : 1MsP->7인 이상 동의->2시간 소요->숫자 -1200->30분 소요->숫자 >=5000->계산기 2개 소모->수정 -15000cm³->10분 소요",
      position: { x: "70%", y: "5%" },
      bought: true,
      color: {
        hueRotate: "170deg",
        saturate: "100%",
        brightness: "80%",
      },
    },
    {
      name: "계산기 폭파",
      price: "계산기 5개",
      description:
        "사용 중인 계산기를 파괴할 수 있게 됩니다. 이 방식으로 파괴된 계산기의 효과는 적용되지 않습니다.",
      position: { x: "40%", y: "45%" },
      bought: false,
      color: {
        hueRotate: "230deg",
        saturate: "150%",
        brightness: "80%",
      },
    },
    {
      name: "낮은 마일스톤",
      price: "-200 1s",
      description:
        "마일스톤 요구량이 30% 감소됩니다.",
      position: { x: "20%", y: "65%" },
      bought: true,
      color: {
        hueRotate: "0deg",
        saturate: "150%",
        brightness: "80%",
      },
    },
    {
      name: "보석 계산기",
      price: "\'베개\' 계산기 1개<br>수정 >=15000cm³",
      description:
        "보석과 관련된 계산기 옵션 5종류를 추가합니다.",
      position: { x: "10%", y: "65%" },
      bought: true,
      color: {
        hueRotate: "0deg",
        saturate: "150%",
        brightness: "80%",
      },
    },
    {
      name: "계산적 행운",
      price: "1MsP",
      description:
        "계산기가 고장날 때, 아주 낮은 확률로 절반의 품질을 가진 계산기를 얻습니다.",
      position: { x: "60%", y: "65%" },
      bought: false,
      color: {
        hueRotate: "0deg",
        saturate: "150%",
        brightness: "80%",
      },
    },
    {
      name: "청금석",
      price: "1MsP",
      description:
        "수정 포인트의 Fibered가 정지됩니다.",
      position: { x: "50%", y: "75%" },
      bought: false,
      color: {
        hueRotate: "140deg",
        saturate: "80%",
        brightness: "60%",
      },
    },
    {
      name: "자동화 IV",
      price: "설명 참조",
      description:
        "자동화 III의 효과를 대체합니다. 매일 정오마다 숫자가 80 증가합니다.<br>해금법 : 1MsP->9인 이상 동의->9시간 소요",
      position: { x: "20%", y: "45%" },
      bought: true,
      color: {
        hueRotate: "-20deg",
        saturate: "30%",
        brightness: "250%",
      },
    },
    {
      name: "자동화 V",
      price: "설명 참조",
      description:
        "자동화 IV의 효과를 대체합니다. 매일 정오마다 숫자가 200 증가합니다.<br>해금법 : 1MsP->숫자 -1500->숫자 >=15000",
      position: { x: "20%", y: "55%" },
      bought: false,
      color: {
        hueRotate: "-20deg",
        saturate: "30%",
        brightness: "250%",
      },
    },
    {
      name: "빈 버튼",
      price: "1MsP 10h",
      description:
        "앞으로 얻는 계산기는 버튼 슬롯이 추가됩니다.",
      position: { x: "80%", y: "35%" },
      bought: true,
      color: {
        hueRotate: "0deg",
        saturate: "150%",
        brightness: "80%",
      }
    },
    {
      name: "석영 III",
      price: "1MsP >=3000",
      description:
        "석영 I, 석영 II의 효과를 대체합니다. 수정 포인트로 환산되는 양이 100% 증가합니다.",
      position: { x: "30%", y: "75%" },
      bought: false,
      color: {
        hueRotate: "270deg",
        saturate: "70%",
        brightness: "150%",
      },
    },
    {
      name: "베뮤니티 업그레이드",
      price: "T2 설명 참조",
      description:
        "베뮤니티와 관련된 업그레이드를 추가합니다.<br>해금법 : 4시간 동안 채팅 쿨타임 1시간->8시간 동안 수정 성장률 -99%",
      position: { x: "90%", y: "35%" },
      bought: true,
      letterSpacing: -7,
      color: {
        hueRotate: "230deg",
        saturate: "50%",
        brightness: "150%",
      },
    },
    {
      name: "스토리지 I",
      price: "T2 설명 참조",
      description:
        "계산기를 1개 더 보관할 수 있게 됩니다.<br>해금법 : 30% 확률로 숫자 -25(10회 반복)->숫자 >=5000->1분 소요",
      position: { x: "70%", y: "35%" },
      bought: true,
      color: {
        hueRotate: "330deg",
        saturate: "100%",
        brightness: "60%",
      },
    },
    {
      name: "토파즈 I",
      price: "T2 -100 10m",
      description:
        "수정 크기의 Cottoned 소프트캡이 33% 약화됩니다.",
      position: { x: "80%", y: "55%" },
      bought: true,
      color: {
        hueRotate: "330deg",
        saturate: "100%",
        brightness: "100%",
      },
    },
    {
      name: "스토리지 II",
      price: "-200 1s",
      description:
        "계산기를 1개 더 보관할 수 있게 됩니다.<br>해금법 : 5% 확률로 숫자 -250(10회 반복)->숫자 >=6000->1분 소요",
      position: { x: "70%", y: "45%" },
      bought: false,
      color: {
        hueRotate: "330deg",
        saturate: "100%",
        brightness: "60%",
      },
    },
    {
      name: "개인 채널",
      price: "\'베개\' 계산기 1개 -100",
      description:
        "모든 유저는 각각 하나만의 개인 채널을 만들 수 있게 됩니다.",
      position: { x: "80%", y: "45%" },
      bought: false,
      color: {
        hueRotate: "290deg",
        saturate: "100%",
        brightness: "200%",
      },
    },
    {
      name: "개인 색상",
      price: "\'베개\' 계산기 1개 -300",
      description:
        "훈장이 3개 이상인 유저는 자신만의 역할 색깔을 정할 수 있게 됩니다.",
      position: { x: "90%", y: "45%" },
      bought: false,
      color: {
        hueRotate: "190deg",
        saturate: "80%",
        brightness: "100%",
      },
    },
    {
      name: "토파즈 II",
      price: "-200 20m",
      description:
        "수정 크기의 Cottoned 소프트캡이 33% 약화됩니다.",
      position: { x: "80%", y: "65%" },
      bought: false,
      color: {
        hueRotate: "330deg",
        saturate: "100%",
        brightness: "100%",
      },
    },
  ],
  connections: [
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
    [7, 32],
    [32, 33],
    [24, 34],
    [24, 35, false, "#bbb"],
    [33, 35, false, "#bbb"],
    [23, 36],
    [9, 37],
    [9, 38],
    [16, 38, true],
    [20, 38],
    [33, 38],
    [7, 39],
    [9, 39],
    [13, 40],
    [29, 40, true],
    [25, 41],
    [41, 42],
    [7, 43],
    [14, 44],
    [24, 45],
    [7, 46],
    [10, 47],
    [46, 48],
    [45, 49],
    [45, 50],
    [47, 51],
  ],
};
