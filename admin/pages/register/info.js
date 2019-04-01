const data = {
  shopInfo: {
    title: '네일샵 정보',
    info: [
      { name: '상호명', place: '', eName: 'shopName' },
      {
        name: '샵 주소',
        place: '지번 주소로 정확하게 입력해 주세요',
        eName: 'addrUserInput'
      },
      {
        name: '샵 전화번호',
        place: '손님들에게 안내될 예약용 전화번호',
        eName: 'shopTel'
      }
    ]
  },
  ownerInfo: {
    title: '원장님 정보',
    info: [
      { name: '원장님 성함', place: '', eName: 'ownerName' },
      {
        name: '원장님 휴대폰 번호',
        place: '샵 추가 결과를 받을 원장님 휴대폰번호',
        eName: 'ownerMobileTel'
      }
    ]
  }
};
const text1 = [
  `1. 수집항목 및 이용목적 - 수집항목(필수): 원장님 성함, 원장님 연락처 - 이용목적: (주)젤라또랩이 운영하는 Gelato 모바일 어플리케이션에 네일샵을 소개하고 정보를 제공 `,
  `2. 보유 및 이용 기간 수집한 정보는 개인정보수집, 이용에 관한 동의일로부터 "서비스" 이용 해지 또는 정보수집 이용동의 철회시까지 상기 이용목적을 위해 보유,이용됩니다.`,
  `3.동의를 거부할 권리 및 동의를 거부할 경우의 불이익 위 개인정보의 수집항목 중 필수사항에 대한 동의가 없는 경우 "서비스"이용이 불가능할 수 있음을 알려드립니다.`
];
const text2 = [
  '상기 본인은 “Gelato” 이용을 위한 정보 또는 사진을 제공함에 관하여 완전한 권리를 보유하고 있고 사진이 제3자의 초상권 기타 어떠한 권리도 침해하지 아니함을 보증하며 이를 “Gelato”에 게재함에 동의합니다.'
];
const agree = [
  '개인정보 수집 및 이용을 위한 동의 (필수)',
  '광고성 정보 수신 (선택)'
];
module.exports = { data, text1, text2, agree };
