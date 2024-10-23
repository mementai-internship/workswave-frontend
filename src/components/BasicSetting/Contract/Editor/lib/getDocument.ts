export const MOCK_DOCUMENT = {
  certificate: '증명서',
  contract:
    '<h3 style="text-align: center">근로 계약서</h3><p><span style="font-size: 16px">지점명 와 근로자성명 은 아래와 같이 근로계약을 쳬결하고 상호 성실히 이행할 것을 약정한다.</span></p><p><span style="font-size: 16px"><strong>제 1조 [근로계약기간]</strong></span></p><p><span style="font-size: 16px">1. "근로자"의 근로계약기간은 계약시작일 부터 계약종료일 로 한다.</span></p><p><span style="font-size: 16px">2. 종사업무는 근로자업무 및 그와 관련된 업무로 한다.</span></p><p><span style="font-size: 16px">3. 제1항 및 제2항에도 불구하고, "사용자"는 업무상 필요가 있는 경우, "근로자"의 근무장소 및 업무내용을 변경 할 수 있으며, 이 경우 "근로자"는 특별한 사정이 없는 한 이에 따라야 한다.</span></p>',
  document: '도큐먼트',
};

interface IgetDocument {
  document: { [key: string]: string };
  name: string;
}

// 문서 명에 따라 내부 html string을 도출해주는 함수
export const getDocument = (document: IgetDocument['document'], name: IgetDocument['name']) => {
  return document[name] || console.error('해당하는 문서를 찾을 수 없습니다.');
};

// getDocument(MOCK_DOCUMENT, 'certificat');
