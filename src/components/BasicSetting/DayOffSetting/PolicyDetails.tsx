export default function PolicyDetails({ categoryId, policyDetails }) {
  switch (categoryId) {
    case 'accountingStandard':
      return (
        <>
          {'reset' in policyDetails && <p>초기화: {policyDetails.reset ? '아니오' : '예'}</p>}
          {'lessThanOneYearService' in policyDetails && (
            <p>근속연수1년미만: {policyDetails.lessThanOneYearService ? '예' : '아니오'}</p>
          )}
          {'decimalProcessing' in policyDetails && (
            <p>소수점처리: {policyDetails.decimalProcessing}</p>
          )}
        </>
      );
    case 'hireDate':
      return 'reset' in policyDetails ? (
        <p>초기화: {policyDetails.reset ? '예' : '아니오'}</p>
      ) : null;
    case 'conditionalGrant':
      return (
        <>
          {'monthCount' in policyDetails && <p>개월수: {policyDetails.monthCount}</p>}
          {'count' in policyDetails && <p>개수: {policyDetails.count}</p>}
          {'monthlyBasis' in policyDetails && (
            <p>월기준: {policyDetails.monthlyBasis ? '예' : '아니오'}</p>
          )}
        </>
      );
    default:
      return null;
  }
}
