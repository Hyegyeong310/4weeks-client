const data = {
  accountInfo: {
    title: '계정 정보',
    info: [
      {
        name: '아이디',
        place: '파트너센터에서 사용하실 아이디',
        helper: '아이디는 5~20자 영문, 숫자만 가능합니다.',
        eName: 'shopName',
        type: 'text'
      },
      {
        name: '비밀번호',
        place: '파트너센터에서 사용하실 비밀번호',
        helper: 'Type something',
        eName: 'shopAddress',
        type: 'password'
      },
      {
        name: '비밀번호',
        place: '위와 동일한 비밀번호를 넣어주세요',
        helper: 'Type something',
        eName: 'shopNumber',
        type: 'password'
      }
    ]
  },
  ownerInfo: {
    title: '담당자 정보',
    info: [
      {
        name: '원장님 성함',
        place: '원장님의 실명을 써주세요',
        helper: 'Type something',
        eName: 'userName',
        type: 'text'
      },
      {
        name: '원장님 휴대폰 번호',
        place: '원장님과 연락가능한 휴대폰 번호를 입력해주세요',
        helper: 'Type something',
        eName: 'userNumber',
        type: 'text'
      },
      {
        name: '이메일 주소',
        place: '아이디, 비밀번호 찾기에 사용될 이메일을 입력해 주세요',
        helper: 'Type something',
        eName: 'userNumber',
        type: 'email'
      }
    ]
  }
};
const agree = [
  '전체동의',
  '서비스 이용약관에 동의합니다. (필수)',
  '개인정보 수집 및 이용에 동의합니다. (필수)',
  '만 19세 이상입니다. (필수)',
  '젤라또 마케팅 정보 수신 동의 (선택)'
];
module.exports = { data, agree };
