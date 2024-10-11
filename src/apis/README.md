# API 함수 모음

axiosInstance 및 axiosInstance를 직접 이용하는 api 함수들을 모아주세요

ex: `axiosInstance.ts`, `auth.api.ts`, `main-movie.api.ts`

api의 파일명 컨벤션은 해당 파일에서 함수들이 사용하는 pathname을 그대로 사용하려고 합니다.

예컨대, `src/apis/main-movie.api.ts` 라는 파일이 있다면 그 안의 함수들은 이렇습니다.

```typescript
export const fetchGetMainPollingMovie = async () => {
  const res = await axiosInstance.get<IPollingMovies>('/main-movie/poll?poll=true');

  return res.data;
};

export const fetchGetMainPolledMovie = async () => {
  const res = await axiosInstance.get<IPolledMovieResponse>('/main-movie/poll?poll=false');

  return res.data;
};

export const fetchPostPollMovie = async (movieId: number, pollResult: 'up' | 'down') => {
  // console.log('Sending request to server:', { movieId, pollResult });
  const res = await axiosInstance.put(`/poll/${movieId}`, { pollResult });

  // console.log('Server response:', res.data);
  return res.data;
};
```

모두 `/main-movie` path가 포함되어 있는거죠
