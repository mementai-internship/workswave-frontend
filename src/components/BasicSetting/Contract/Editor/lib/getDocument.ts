import { Editor } from '@tiptap/react';

export const MOCK_DOCUMENT = {
  certificate:
    '<p style="text-align: center">재 직 증 명 서</p><p>1. 인적사항</p><table style="min-width: 541px"><colgroup><col style="width: 139px"><col><col style="width: 142px"><col style="width: 235px"></colgroup><tbody><tr><th colspan="1" rowspan="1" colwidth="139"><p style="text-align: center">성명 (한글)</p></th><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1" colwidth="142"><p style="text-align: center"><span style="font-size: 16px">주민등록번호</span></p></th><th colspan="1" rowspan="1" colwidth="235"><p></p></th></tr><tr><td colspan="1" rowspan="1" colwidth="139"><p style="text-align: center"><strong>주소</strong></p></td><td colspan="3" rowspan="1" colwidth="0,142,235"><p></p></td></tr></tbody></table><p>2. 재직사항 및 제출용도</p><table style="min-width: 282px"><colgroup><col style="width: 118px"><col><col style="width: 114px"><col></colgroup><tbody><tr><th colspan="1" rowspan="1" colwidth="118"><p style="text-align: center">근무부서</p></th><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1" colwidth="114"><p style="text-align: center">직위</p></th><th colspan="1" rowspan="1"><p></p></th></tr><tr><td colspan="1" rowspan="1" colwidth="118"><p style="text-align: center"><strong>재직기간</strong></p></td><td colspan="3" rowspan="1" colwidth="0,114,0"><p>20  년 0월 0일 부터 20 년 0월 0일 현재까지</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="118"><p style="text-align: center"><strong>제출용도</strong></p></td><td colspan="3" rowspan="1" colwidth="0,114,0"><p></p></td></tr></tbody></table>',
  contract:
    '<h3 style="text-align: center">근로 계약서</h3><p><span style="font-size: 16px">지점명 와 근로자성명 은 아래와 같이 근로계약을 쳬결하고 상호 성실히 이행할 것을 약정한다.</span></p><p><span style="font-size: 16px"><strong>제 1조 [근로계약기간]</strong></span></p><p><span style="font-size: 16px">1. "근로자"의 근로계약기간은 계약시작일 부터 계약종료일 로 한다.</span></p><p><span style="font-size: 16px">2. 종사업무는 근로자업무 및 그와 관련된 업무로 한다.</span></p><p><span style="font-size: 16px">3. 제1항 및 제2항에도 불구하고, "사용자"는 업무상 필요가 있는 경우, "근로자"의 근무장소 및 업무내용을 변경 할 수 있으며, 이 경우 "근로자"는 특별한 사정이 없는 한 이에 따라야 한다.</span></p>',
  document:
    '<h1 style="text-align: center"><span style="font-size: 30px">사유서</span></h1><p><span style="font-size: 14px"><strong>- 소 속 : </strong></span></p><p><span style="font-size: 14px"><strong>- 직 위 :</strong></span></p><p><span style="font-size: 14px"><strong>- 사 번 :</strong></span></p><p><span style="font-size: 14px"><strong>- 사 유 :</strong></span></p>',
};

interface IgetDocument {
  document: { [key: string]: string };
  name: string;
}

// 문서 명에 따라 내부 html string을 도출해주는 함수
export const getDocument = (document: IgetDocument['document'], name: IgetDocument['name']) => {
  return document[name] || console.error('해당하는 문서를 찾을 수 없습니다.');
};

export const setDocumentToEditor = (document: string, editor: Editor) => {
  const contentStr = getDocument(MOCK_DOCUMENT, document);
  if (!contentStr) return console.error('문서 호출 실패');
  editor.commands.setContent(contentStr);
};
