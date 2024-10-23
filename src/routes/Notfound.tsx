import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert('페이지를 찾을 수 없습니다. 홈으로 이동합니다.');
    navigate('/');
  }, [navigate]);

  return null;
};

export default NotFound;
