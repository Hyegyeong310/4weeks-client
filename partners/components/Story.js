const person = [
  {
    backImg: '/static/img/img-person-1.jpg',
    title: '월 매출의 43.1%가\n젤라또 고객이었습니다',
    name: '신당, S네일',
    story:
      '샵 오픈한지 2달 정도 됬을 때, 젤라또와 홍보 하면서 하루 평균 1~2명이 젤라또 고객이였어 요. 젤라또 고객은 아트를 하는 고객이 많아서 평균보다 객단가도 5,000원 정도 높았어요. 젤라또 정말 감사합니다!'
  },
  {
    backImg: '/static/img/img-person-2.jpg',
    title: '네일리스트로써\n제 포트폴리오를 알릴 수\n있게 되었어요',
    name: '이태원, D네일',
    story:
      '한 달 간 젤라또와 제가 만든 ‘브로치네일’을 홍보했어요. 브로치네일을 손님들이 적극적 으로 찾고, 심지어 다른 지역에서도 저를 찾아 와서 식사시간도 없이 일했어요~ 또, 인스타 그램을 통해 다른 샵들도 만들고 있는 것을 알았을 때 정말 뿌듯했어요.'
  }
];

const Story = () => (
  <div id="story">
    <div className="div-space-2" />
    <div className="text-style-1">성공 스토리</div>
    <div className="text-style-2 div-style-2">
      젤라또 원장님들의 성공 스토리
    </div>
    <div>
      {person.map((el, i) => {
        return (
          <div key={i}>
            <div
              className="img-bg2"
              style={{ backgroundImage: `url(${el.backImg})` }}
            />
            <div className="text-style-6">
              {el.title.split('\n').map((line, i) => {
                return (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
            <div className="text-style-7">{el.name}</div>
            <div className="text-style-8">
              {el.story.split('\n').map((line, i) => {
                return (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
            {(() => {
              switch (i) {
                case person.length - 1:
                  return '';
                default:
                  return <hr className="story-divider" />;
              }
            })()}
          </div>
        );
      })}
      <div style={{ margin: '21px auto 80px' }} />
    </div>
    <style jsx>
      {`
        #story {
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default Story;
